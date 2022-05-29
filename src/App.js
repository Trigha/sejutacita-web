import Navbar from './component/navbar'
import Category from './component/listCategory';
import Home from './component/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <Home />
    </div>
  );
}

export default App;
