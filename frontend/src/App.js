import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';


function App() {
  const [ cartItems , setcardItems] = useState([]);

  return (
    <div className="App">
      <Router>

        <div>
          <ToastContainer theme='dark' position='top-center'/>
          <Header cartItems={cartItems} />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/search' element={ <Home />} />
            <Route path='/products/:id' element={ <ProductDetails cartItems={cartItems} setcardItems={setcardItems}/>} />
            <Route path='/cart' element={ <Cart cartItems={cartItems} setcardItems={setcardItems} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
