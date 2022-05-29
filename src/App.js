import Navbar from './component/navbar'
import Category from './component/listCategory';
import Home from './component/home';
import Footer from './component/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
