import styles from "./Pedidos.module.css"

export default function Pedidos (){
    return (
        <div className={styles.container}>
            <div className={styles.leftPedido}>
                <span>Pedido: #13</span>
                <span>Lucas Lemes</span>
                <span>62984822842</span>
            </div>
            <div className={styles.rightPedido}>
                <div className={styles.pedidosText}>
                <span>Total</span>
                <span>R$ 19,90</span>
                </div>
                <div className={styles.pedidosButton}>
                <p>Preparando</p>
                </div>
            </div>
        </div>
    )
}