import styles from './BurgerCards.module.css'
import imagemBurger from '../../assets/burgao.jpg'
import { FaCartPlus } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/context';
export default function BurgerCards(){
  const { cart, setCart } = useContext(CartContext)
  let addToCarrinho = () =>{
    
    sessionStorage.setItem('carrinho', '22 é bolsonaro')
}

function addProduct(productId, imagemSanduiche, nomeSanduiche, preco){
  let carrinho = [];
  setCart(cart + 1);
  if(sessionStorage.getItem('carrinho')){
    carrinho = JSON.parse(sessionStorage.getItem('carrinho'));
  }
  carrinho.push({'productId' : productId, 'imagem': imagemSanduiche, 'nome': nomeSanduiche, 'preco': preco});
  sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// function removeProduct(productId){


//   let storageProducts = JSON.parse(localStorage.getItem('products'));
//   let products = storageProducts.filter(product => product.productId !== productId );
//   localStorage.setItem('products', JSON.stringify(products));
// }

    return (
    <div className={styles.container}>
      <div className={styles.Card}>
      <img src={imagemBurger}/>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterLeft}>
        <p>X-Podrao</p>
        <p className={styles.textoSaibaMais}>Saiba-mais >></p>
        </div>
        <div className={styles.cardFooterRight}>
        <FaCartPlus onClick={() => addProduct(1, imagemBurger, "X-Podrao", "14,90")}/>
        </div>
      </div>
      </div>
    </div>)
}