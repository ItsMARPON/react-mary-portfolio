import pic from './assets/images/profile.png';
import PortfolioContainer from "./pages/PortfolioContainer";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={pic} className="App-pic" alt="profile-pic" />
      </header>
      <Navbar />
      <PortfolioContainer />
      <Card>
      <ProjectList />
      </Card>
      <Footer />
    </div>
  );
}

export default App;
