import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import About from './pages/About';
import ShopList from './pages/ShopList';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Catalog />
      <About />
      <ShopList />
      
      <Footer />
    </div>
  );
}

export default App;


