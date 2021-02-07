import './App.scss';

import HomePageBanner from "./components/HomePageBanner"
import PortfolioObject from "./components/PortfolioObject"
import MyFooter from "./components/MyFooter"
import MyHeader from "./components/MyHeader"

function App() {
  return (
    <div className="App">
      <MyHeader />
      <PortfolioObject />
      <MyFooter />
    </div>
  );
}

export default App;
