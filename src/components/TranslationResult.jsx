

function TranslationResult({ originalText, translation, onStartOver }) {
  return (
    <section className="result-container">
      <h2>Original text</h2>
      <div className="original-card">
        {originalText}
      </div>

      <h2 className="translation-title">
        Your translation
      </h2>
      <div className="translation-card">
        {translation}
      </div>

      <button onClick={onStartOver}>
        Start Over
      </button>
    </section>
  );
}

export default TranslationResult;