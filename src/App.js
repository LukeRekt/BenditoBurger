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
import { PedidoContext } from './components/PainelComponents/PedidoContext/PedidoContext';
import Checkout from './components/Pages/Checkout/Checkout';

function App() {
  const [cart, setCart] = useState(0)
  const [pedidosSelected, setPedidosSelected] = useState()
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
      <Route path='/lanche' element={<About/>}/>
      <Route path='/carrinho' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>


      {/* ROTAS DE ADMIN ONLY */}
      <Route path='/login' element={<PainelLogin/>}/>
      <Route path='/painel' element={<About/>}/>
      
      
      
    </Routes>
    <PedidoContext.Provider value={{pedidosSelected, setPedidosSelected}}>
  <Routes>
  <Route path='/painel/pedidos' element={<Painel/>}/>
  </Routes>
  </PedidoContext.Provider>
  </Router>


  
  
     </CartContext.Provider>
    </div>
  );
}

export default App;
