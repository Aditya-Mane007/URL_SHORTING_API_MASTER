import AdvancedStats from "./components/AdvancedStats";
import BoostBanner from "./components/BoostBanner";
import Footer from "./components/FooterComponent";
import Home from "./components/Home";
import InputLink from "./components/InputLink";

function App() {
  return (
    <div className="App">
      <Home />
      <InputLink />
      <AdvancedStats />
      <BoostBanner />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
