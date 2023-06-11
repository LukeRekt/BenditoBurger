import logo from './logo.svg';
import './App.css';

import Home from './components/Pages/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/context';
import { useEffect, useState } from 'react';
import Cart from './components/Pages/Cart/Cart';
import About from './components/Pages/About/About';
import Painel from './components/Pages/Painel/Painel';
import PainelLogin from './components/Pages/PainelLogin/PainelLogin';
function App() {
  const [cart, setCart] = useState(0)
  useEffect(() =>{
    if(sessionStorage.getItem('carrinho')){
      setCart(Math.round(sessionStorage.getItem('carrinho').length / 17))
    }
  }, [])
  return (
    <div className='app'>
 <CartContext.Provider value={{cart, setCart}}>

  <Router>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/carrinho' element={<Cart/>}/>
      <Route path='/lanche' element={<About/>}/>


      {/* ROTAS DE ADMIN ONLY */}
      <Route path='/login' element={<PainelLogin/>}/>
      <Route path='/painel' element={<About/>}/>
      <Route path='/painel/pedidos' element={<Painel/>}/>
    </Routes>
  </Router>
     
     
     </CartContext.Provider>
    </div>
  );
}

export default App;
