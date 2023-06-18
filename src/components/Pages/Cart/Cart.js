import { FaShoppingCart } from 'react-icons/fa';
import styles from "./Cart.module.css"
import { CartContext } from '../../../context/context';
import { useContext } from 'react';
import CarrinhoItems from '../../CarrinhoItems/CarrinhoItems';
import { Link } from 'react-router-dom';
export default function Cart(){
    const { cart } = useContext(CartContext);
    let carrinho = JSON.parse(sessionStorage.getItem('carrinho'));
    return (
        <div className={styles.container}>
        <div className={styles.containerCarrinho}>
            {!cart || cart < 1 ? (<div className={styles.carrinhoVazio}>
            <h1>Carrinho vazio 😭</h1>
            <FaShoppingCart/>
            </div>) : (
                <div className={styles.carrinhoItems}>
                    {carrinho.map((item) => {
                        return (<CarrinhoItems idProduto={item.productId} imagem={item.imagem} nome={item.nome} preco={item.preco} quantidade={item.quantidade}/>)
                    })}
                </div>
            ) }
            
         
        </div>
        {!cart || cart < 1 ? (<></>) : (<div className={styles.botaoComprar}>
                
                <div className={styles.totalContainer}>
                <div className={styles.textosTaxaEntrega}>
                    <p className={styles.textoValorEntrega}>Taxa de Entrega:</p>
                    <p className={styles.textoValorEntregaNumero}>R$ 19,50</p>
                    </div>
                    <div className={styles.textosTotal}>
                    <p className={styles.textoValor}>ValorTotal:</p>
                    <p className={styles.textoValorNumero}>R$ 99,50</p>
                    </div>

                </div><Link className={styles.linkContainer} to="/checkout">
                <p className={styles.botao}>
                    PEDIR</p></Link>
                </div>)}
        </div>
    )
}