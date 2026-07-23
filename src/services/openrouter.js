export async function translateText(text, language) {
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      language,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error(errorData);
    throw new Error(errorData);
  }

  const data = await response.json();

  return data.translation;
}