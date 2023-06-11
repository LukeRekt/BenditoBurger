import styles from './BurgerCards.module.css'
import imagemBurger from '../../assets/burgao.jpg'
import { FaCartPlus } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/context';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export default function BurgerCards(props){
  const { cart, setCart } = useContext(CartContext)
  const [quantidade, setQuantidade] = useState(1)

//ANTIGO ADD PRODUCT

// function addProduct(productId, imagemSanduiche, nomeSanduiche, preco, quantidade) {
//   let carrinho = [];
//   setCart(cart + 1);
//   if (sessionStorage.getItem('carrinho')) {
//     carrinho = JSON.parse(sessionStorage.getItem('carrinho'));

//     // Verificar se o produto já existe no carrinho
//     const produtoExistente = carrinho.find(item => item.productId === productId);
//     if (produtoExistente) {
//       // Produto já existe, incrementar a quantidade
//       produtoExistente.quantidade += 1;
//     } else {
//       // Produto não existe, adicionar um novo item
//       carrinho.push({'productId': productId, 'imagem': imagemSanduiche, 'nome': nomeSanduiche, 'preco': preco, 'quantidade': quantidade});
//     }
//   } else {
//     // Carrinho vazio, adicionar o primeiro item
//     carrinho.push({'productId': productId, 'imagem': imagemSanduiche, 'nome': nomeSanduiche, 'preco': preco, 'quantidade': quantidade});
//   }

//   // Atualizar o carrinho no sessionStorage
//   sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
// }

// function removeProduct(productId){


//   let storageProducts = JSON.parse(localStorage.getItem('products'));
//   let products = storageProducts.filter(product => product.productId !== productId );
//   localStorage.setItem('products', JSON.stringify(products));
// }


//NOVO ADD PRODUCT

function addProduct(productId, imagemSanduiche, nomeSanduiche, preco, quantidade, ingredientesRemover) {
  let carrinho = [];
  setCart(cart + 1);
  if (sessionStorage.getItem('carrinho')) {
    carrinho = JSON.parse(sessionStorage.getItem('carrinho'));

    // Verificar se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.productId === productId);
    if (produtoExistente) {
      if (ingredientesRemover.length > 0) {
        // Produto já existe, mas há ingredientes a serem removidos, criar um novo objeto
        carrinho.push({
          'productId': productId,
          'imagem': imagemSanduiche,
          'nome': nomeSanduiche,
          'preco': preco,
          'quantidade': 1,
          'ingredientesRemover': ingredientesRemover
        });
      } else {
        // Produto já existe, incrementar a quantidade
        produtoExistente.quantidade += 1;
      }
    } else {
      // Produto não existe, adicionar um novo item
      carrinho.push({
        'productId': productId,
        'imagem': imagemSanduiche,
        'nome': nomeSanduiche,
        'preco': preco,
        'quantidade': quantidade,
        'ingredientesRemover': ingredientesRemover
      });
    }
  } else {
    // Carrinho vazio, adicionar o primeiro item
    carrinho.push({
      'productId': productId,
      'imagem': imagemSanduiche,
      'nome': nomeSanduiche,
      'preco': preco,
      'quantidade': quantidade,
      'ingredientesRemover': ingredientesRemover
    });
  }

  // Atualizar o carrinho no sessionStorage
  sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}



let removeBurgerCount = () => {
  if(quantidade == 1){
    return;
  }
  setQuantidade(quantidade -1)
}

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
          <p className={styles.textoSaibaMais}>
            <Link to="/lanche"> Saiba-mais >></Link>
            </p>
          <div className={styles.seletorQuantidade}>
                <AiFillMinusCircle onClick={removeBurgerCount}/>
                <p>{quantidade}</p>
                <AiFillPlusCircle onClick={() => setQuantidade(quantidade +1)}/>
            </div>
            <button onClick={() => addProduct(props.idProduto, props.imagemBurger, props.nomeBurger, props.preco, quantidade, "")}>Adicionar ao carrinho</button>
            
          </div>
        {/* <FaCartPlus /> */}
        </div>
      </div>
      </div>
    </div>)
}