import styles from "./Pedidos.module.css"

export default function Pedidos (props){
    return (
        <div className={styles.container}>
            <div className={styles.leftPedido}>
                <span>Pedido: #{props.numero}</span>
                <span>{props.nome}</span>
                <span>{props.telefone}</span>
            </div>
            <div className={styles.rightPedido}>
                <div className={styles.pedidosText}>
                <span>Total</span>
                <span>R$ {props.total}</span>
                </div>
                <div className={styles.pedidosButton}>
                <p>{props.status}</p>
                </div>
            </div>
        </div>
    )
}