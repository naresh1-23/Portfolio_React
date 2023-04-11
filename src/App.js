import Aboutpage from "./components/About";
import Detailme from "./components/Detailme";
import Footer from "./components/Footer";
import PortfolioNavbar from "./components/PortfolioNavbar";

function App() {
  return (
    <div className="App">
      <PortfolioNavbar />
      <Aboutpage />
      <Detailme />
      <Footer />
    </div>
  );
}

export default App;
