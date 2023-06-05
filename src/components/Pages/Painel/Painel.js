import Pedidos from '../../PainelComponents/Pedidos/Pedidos'
import styles from './Painel.module.css'

export default function Painel(){
    return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <Pedidos/>
            <Pedidos/>
            <Pedidos/>
            <Pedidos/>
            <Pedidos/>
            <Pedidos/>
            <Pedidos/>
            <Pedidos/>
            <Pedidos/>
        </div>
        <div className={styles.rightSide}></div>
    </div>)
}