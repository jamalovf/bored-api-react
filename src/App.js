import './App.css';
import Content from './layout/Content';
import Footer from './layout/Footer';
import NavBar from './layout/NavBar';
import ButtonClicker from './myComponents/ButtonClicker';
import DataFetching from './myComponents/DataFetching';

import backgroundImage from './pattern.png'

function App() {
  return (
    <div className="App" style={{background: `url(${backgroundImage})`}}>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
