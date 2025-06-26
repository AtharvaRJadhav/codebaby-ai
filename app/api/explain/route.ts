export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  const prompt = `
You are a friendly AI assistant who explains code to a 5-year-old.
Your explanations should be:
- Playful and fun
- Use analogies, emojis, and simple words
- Avoid technical jargon
- Break down complex ideas into simple steps

Now, here is the code I want you to explain:
${code}

Please explain what this code does, like I'm 5 years old.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use gpt-3.5-turbo as requested
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    const explanation = completion.choices?.[0]?.message?.content || "Sorry, I couldn't explain that!";
    return NextResponse.json({ explanation });
  } catch (error) {
    console.error("OpenAI error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ explanation: "OpenAI Error: " + error.message }, { status: 500 });
    }
    return NextResponse.json({ explanation: "Unknown OpenAI error." }, { status: 500 });
  }
} 