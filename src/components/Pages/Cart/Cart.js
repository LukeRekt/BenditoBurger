import { FaShoppingCart } from 'react-icons/fa';
import styles from "./Cart.module.css"
import { CartContext } from '../../../context/context';
import { useContext } from 'react';
import CarrinhoItems from '../../CarrinhoItems/CarrinhoItems';
export default function Cart(){
    const { cart } = useContext(CartContext);
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho'));
    return (
        <div className={styles.container}>
            {!cart || cart < 1 ? (<div className={styles.carrinhoVazio}>
            <h1>Carrinho vazio 😭</h1>
            <FaShoppingCart/>
            </div>) : (
                <div className={styles.carrinhoItems}>
                    {carrinho.map((item) => {
                        return (<CarrinhoItems idProduto={item.productId} imagem={item.imagem} nome={item.nome} preco={item.preco}/>)
                    })}
                </div>
            ) }
            
            {!cart || cart < 1 ? (<></>) : (<div className={styles.botaoComprar}>
                
                <div className={styles.totalContainer}>
                    <p className={styles.textoValor}>ValorTotal:</p>
                    <p className={styles.textoValorNumero}>R$ 99,50</p>
                </div>
                <p className={styles.botao}>PEDIR</p>
                </div>)}
        </div>
    )
}