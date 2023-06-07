import DetalhesPedido from '../../PainelComponents/DetalhesPedido/DetalhesPedido'
import Pedidos from '../../PainelComponents/Pedidos/Pedidos'
import styles from './Painel.module.css'

export default function Painel(){
    return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <Pedidos numero="1" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
            <Pedidos numero="2" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
            <Pedidos numero="3" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
            <Pedidos numero="4" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
            <Pedidos numero="5" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
            <Pedidos numero="6" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
            <Pedidos numero="7" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
            <Pedidos numero="8" nome="Lucas Lemes" telefone="62984822842" total="19,90" status="Preparando"/>
        </div>
        <div className={styles.rightSide}>
            <DetalhesPedido/>
        </div>
    </div>)
}