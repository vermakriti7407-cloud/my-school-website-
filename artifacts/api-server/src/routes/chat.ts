import { Router } from "express";

const router: Router = Router();

const SCHOOL_SYSTEM_PROMPT = `You are the official AI assistant for Anglo Sanskrit Senior Secondary School, Pundri, Kaithal, Haryana.

SCHOOL INFORMATION:
- School Name: Anglo Sanskrit Senior Secondary School, Pundri
- Established: 1916 (109+ years of excellence)
- Location: Pundri, Kaithal, Haryana - 136026
- Type: Co-educational (Hindi & English medium)
- Classes: Class 1 to Class 12
- Board: Board of School Education Haryana (BSEH)
- Streams at Senior Level: Science, Commerce, Arts
- Admissions: Open for Session 2026-27, Classes 1-12, apply before May 31st, merit-based process
- Faculty: Highly qualified, experienced teachers providing personalized attention and mentorship
- Facilities: Modern science labs, library, computer labs, sports ground, smart classrooms
- Gallery: Annual Sports Day, cultural festivals, science exhibitions, board exam achievements
- Contact: Visit office in Pundri or reach by phone/email for any queries

STRICT RULES:
1. ONLY answer questions about this school and its website.
2. Do NOT answer general knowledge, coding, science, history, politics, entertainment, sports (outside school), math, or any topic unrelated to this school.
3. If asked anything unrelated, reply ONLY with: "I can only answer questions related to this school website and its information."
4. Keep responses short, professional, and helpful.
5. Use only the school information provided above.`;

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

router.post("/chat", async (req, res) => {
  const ip = (req.ip ?? "unknown").replace(/^::ffff:/, "");
  const now = Date.now();

  const rateData = rateLimitMap.get(ip);
  if (rateData && now < rateData.resetTime) {
    if (rateData.count >= RATE_LIMIT) {
      res.status(429).json({ error: "Too many requests. Please wait a minute." });
      return;
    }
    rateData.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
  }

  const apiKey = process.env["GROQ_API_KEY"];
  if (!apiKey) {
    req.log.error("GROQ_API_KEY not configured");
    res.status(500).json({ error: "AI service not configured." });
    return;
  }

  const body = req.body as { messages?: Array<{ role: string; content: string }> };
  if (!body.messages || !Array.isArray(body.messages)) {
    res.status(400).json({ error: "Invalid request format." });
    return;
  }

  const messages = body.messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-10);

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: SCHOOL_SYSTEM_PROMPT }, ...messages],
        max_tokens: 300,
        temperature: 0.3,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      req.log.error({ status: groqRes.status, body: errText }, "Groq API error");
      res.status(502).json({ error: "AI service error. Please try again." });
      return;
    }

    const data = (await groqRes.json()) as {
      choices: Array<{ message: { content: string } }>;
    };

    const reply = data.choices[0]?.message?.content?.trim() ?? "Sorry, I could not generate a response.";
    res.json({ reply });
  } catch (err) {
    req.log.error({ err }, "Chat route error");
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
