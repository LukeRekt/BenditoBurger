import styles from "./CarrinhoItems.module.css"
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
export default function CarrinhoItems(props){
    return(
        <div className={styles.container}>
            <div className={styles.burgerContent}>
            <img src={props.imagem}/>
            <div className={styles.cartText}>
                <p className={styles.nomeSanduiche}>{props.nome}</p>
                
                <p>R$ {props.preco}</p>
                <p>{props.quantidade}x</p>
            </div>
                 </div>

            <div className={styles.seletorQuantidade}>
                <AiFillPlusCircle/>
                <p>{props.quantidade}</p>
                <AiFillMinusCircle/>
            </div>
        </div>
    )
}