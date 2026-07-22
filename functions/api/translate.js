export async function onRequestPost(context) {
  const { request, env } = context;

  const { text, language } = await request.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: `You are a translation assistant. Translate text into ${language}.`,
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.5,
      max_tokens: 100,
    }),
  });

  const data = await response.json();

  return Response.json(data);
}