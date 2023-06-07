import styles from "./PedidoContent.module.css"

export default function PedidoContent(props) {
    return (
    <div className={styles.container}>
        <div className={styles.leftPedido}>
            <label>{props.ordem}-</label>
        <input type="checkbox"/>
        </div>
        <div className={styles.rightPedido}>
            <span>
                4x X-carniça
            </span>
            <span className={styles.remover}>
                Remover: Alface, Cebola, Carne
            </span>
        </div>
    </div>)
}