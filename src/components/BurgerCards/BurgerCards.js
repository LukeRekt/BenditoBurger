import styles from './BurgerCards.module.css'
import imagemBurger from '../../assets/burgao.jpg'
import { FaCartPlus } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/context';
export default function BurgerCards(props){
  const { cart, setCart } = useContext(CartContext)

// function addProduct(productId, imagemSanduiche, nomeSanduiche, preco, quantidade){
//   let carrinho = [];
//   setCart(cart + 1);
//   if(sessionStorage.getItem('carrinho')){
//     carrinho = JSON.parse(sessionStorage.getItem('carrinho'));
//   }
//   carrinho.push({'productId' : productId, 'imagem': imagemSanduiche, 'nome': nomeSanduiche, 'preco': preco, 'quantidade': quantidade});
//   sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
// }
function addProduct(productId, imagemSanduiche, nomeSanduiche, preco, quantidade) {
  let carrinho = [];
  setCart(cart + 1);
  if (sessionStorage.getItem('carrinho')) {
    carrinho = JSON.parse(sessionStorage.getItem('carrinho'));

    // Verificar se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.productId === productId);
    if (produtoExistente) {
      // Produto já existe, incrementar a quantidade
      produtoExistente.quantidade += 1;
    } else {
      // Produto não existe, adicionar um novo item
      carrinho.push({'productId': productId, 'imagem': imagemSanduiche, 'nome': nomeSanduiche, 'preco': preco, 'quantidade': quantidade});
    }
  } else {
    // Carrinho vazio, adicionar o primeiro item
    carrinho.push({'productId': productId, 'imagem': imagemSanduiche, 'nome': nomeSanduiche, 'preco': preco, 'quantidade': quantidade});
  }

  // Atualizar o carrinho no sessionStorage
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
      <img src={props.imagemBurger}/>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooterLeft}>
        <p>{props.nomeBurger}</p>
       
        <p>R$ 19,90</p>
        </div>
        <div className={styles.cardFooterRight}>
          <div className={styles.addToCart}>
          <p className={styles.textoSaibaMais}>Saiba-mais >></p>
            <button onClick={() => addProduct(props.idProduto, props.imagemBurger, props.nomeBurger, props.preco, 1)}>Adicionar ao carrinho</button>
            
          </div>
        {/* <FaCartPlus /> */}
        </div>
      </div>
      </div>
    </div>)
}