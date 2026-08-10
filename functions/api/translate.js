export async function onRequestPost({ request, env }) {
  try {
    const { text, language } = await request.json();

    const apiKey = env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "API Key is missing in Cloudflare environment variables." },
        { status: 500 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`, 
        "Content-Type": "application/json",
        "HTTP-Referer": "https://pollyglot-app.pages.dev", 
        "X-Title": "PollyGlot App"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo", 
        messages: [
          { role: "system", content: "You are a precise translator. Output ONLY the translation without commentary or quotes." },
          { role: "user", content: `Translate to ${language}: ${text}` }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.error?.message || "OpenRouter error" },
        { status: response.status }
      );
    }

    return Response.json({
      translation: data.choices?.[0]?.message?.content?.trim() || ""
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}