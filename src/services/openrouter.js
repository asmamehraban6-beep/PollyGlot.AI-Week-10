export async function translateText(text, language) {
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, language }),
  });

 
  const textData = await response.text();

  if (!textData) {
    throw new Error("Error:  (Response body is empty)");
  }


  let data;
  try {
    data = JSON.parse(textData);
  } catch (err) {
    console.error("Server Response:", textData);
    throw new Error("Error parsing server response as JSON: " + err.message);
  }

  if (!response.ok) {
    throw new Error(data.error || "Error connecting to translation service");
  }

  return data.translation;
}