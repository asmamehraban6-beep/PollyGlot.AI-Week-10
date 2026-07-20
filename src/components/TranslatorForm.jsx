
import frFlag from '../assets/fr.png';
import esFlag from '../assets/es.png';
import jpFlag from '../assets/jp.png';

function TranslatorForm({
  text,
  setText,
  language,
  setLanguage,
  onTranslate,
  loading
}) {
  return (
    <section className="translator-form">

      <h2>Text to translate 👇</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you?"
      />

      <h3>Select language 👇</h3>

      <div className="languages">

        <label>
          <input
            type="radio"
            name="language"
            value="French"
            checked={language === "French"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          French
          <img src={frFlag} alt="French Flag" className="flag-icon" />
        </label>

        <label>
          <input
            type="radio"
            name="language"
            value="Spanish"
            checked={language === "Spanish"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          Spanish
          <img src={esFlag} alt="Spanish Flag" className="flag-icon" />
        </label>

        <label>
          <input
            type="radio"
            name="language"
            value="Japanese"
            checked={language === "Japanese"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          Japanese
          <img src={jpFlag} alt="Japanese Flag" className="flag-icon" />
        </label>

      </div>

      <button 
        onClick={onTranslate} 
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            Translating...
          </>
        ) : (
          "Translate"
        )}
      </button>

    </section>
  );
}

export default TranslatorForm;