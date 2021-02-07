import logo from './logo.svg';
import './App.css';

import HomePageBanner from "./components/HomePageBanner"
import PortfolioObject from "./components/PortfolioObject"
import MyFooter from "./components/MyFooter"
import MyHeader from "./components/MyHeader"

function App() {
  return (
    <div className="App">
      <HomePageBanner />
      <PortfolioObject />
      <MyFooter />
    </div>
  );
}

export default App;
