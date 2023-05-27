import styles from "./CarrinhoItems.module.css"
export default function CarrinhoItems(props){
    return(
        <div className={styles.container}>
            <img src={props.imagem}/>
            <div className={styles.cartText}>
                <p className={styles.nomeSanduiche}>{props.nome}</p>
                
                <p>R$ {props.preco}</p>
            </div>
        </div>
    )
}