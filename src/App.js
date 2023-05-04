import PortfolioContainer from "./pages/PortfolioContainer";
// import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Card from "./components/Card";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
