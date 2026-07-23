export async function onRequestPost({ request, env }) {
  const { text, language } = await request.json();

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "user",
            content: `Translate this text to ${language}: ${text}`,
          },
        ],
      }),
    }
  );

  const data = await response.json();
  console.log(data);

  return Response.json({
    translation: data.choices?.[0]?.message?.content || "No translation received",
  });
}