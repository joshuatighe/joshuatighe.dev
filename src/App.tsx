import Background from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
      </main>
      <Footer />
    </>
  );
}

export default App;
