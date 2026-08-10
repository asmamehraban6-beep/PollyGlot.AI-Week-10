import { useState } from "react";
import Header from "./components/Header";
import TranslatorForm from "./components/TranslatorForm";
import TranslationResult from "./components/TranslationResult";
import { translateText } from "./services/openrouter";
import "./App.css";

function App() {
  const [translated, setTranslated] = useState(false);
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("French");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleTranslate() {
    if (!text.trim()) {
      alert("Please enter some text to translate.");
      return;
    }

    try {
      setLoading(true);
      const result = await translateText(text, language);
      setTranslation(result);
      setTranslated(true);
    } catch (error) {
      console.error(error);
      alert(error.message || "Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleStartOver() {
    setTranslated(false);
    setText("");
    setTranslation("");
  }

  return (
    <div className="app-container">
      <Header />

      {translated ? (
        <TranslationResult
          originalText={text}
          translation={translation}
          onStartOver={handleStartOver}
        />
      ) : (
        <TranslatorForm
          text={text}
          setText={setText}
          language={language}
          setLanguage={setLanguage}
          onTranslate={handleTranslate}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;