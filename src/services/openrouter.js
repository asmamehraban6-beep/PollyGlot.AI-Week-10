const API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function translateText(text, language) {
    console.log("API KEY:", import.meta.env.VITE_OPENROUTER_API_KEY);
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
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

  if (!response.ok) {
  const errorData = await response.text();
  console.log(errorData);
  throw new Error(errorData);
}

  const data = await response.json();

  return data.choices[0].message.content;
}