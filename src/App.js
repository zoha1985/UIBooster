import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';
import SearchItm from './Component/SearchItm/SearchItm';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchItm />
      <Body />
      
    </div>
  );
}

export default App;
