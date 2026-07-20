import Header from "../components/Header";
import Translator from "../components/Translator";
import TranslationResult from "../components/TranslationResult";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Translator />
        <TranslationResult />
      </main>

      <Footer />
    </>
  );
}

export default Home;