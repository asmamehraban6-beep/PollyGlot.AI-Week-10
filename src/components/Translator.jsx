import LanguageSelector from "./LanguageSelector";

function Translator() {
  return (
    <div className="translator-card">
      <h3>Text to translate 👇</h3>

      <textarea
        placeholder="Enter text here..."
      />

      <LanguageSelector />

      <button>
        Translate
      </button>

      <div className="translation-result">
        <h3>Original text 👇</h3>
        <p></p>

        <h3>Your translation 👇</h3>
        <p></p>

        <button>
          Start Over
        </button>
      </div>
    </div>
  );
}

export default Translator;