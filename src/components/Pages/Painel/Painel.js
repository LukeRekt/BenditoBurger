import { useEffect, useState } from 'react'
import DetalhesPedido from '../../PainelComponents/DetalhesPedido/DetalhesPedido'
import Pedidos from '../../PainelComponents/Pedidos/Pedidos'
import styles from './Painel.module.css'
import axios from 'axios'


export default function Painel(){
const [pedidos, setPedidos] = useState();    
    useEffect(() => {
        axios.get(`http://localhost:3232/pedidos`)
            .then(res => {
                setPedidos(res.data.pedidos)
            })
    }, [])

    return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            {pedidos.map((item, index) => {
                return <Pedidos numero={index + 1} nome={item.nome} telefone={item.telefone} total="19,90" status={item.estado}/>
            })}
            

        </div>
        <div className={styles.rightSide}>
            <DetalhesPedido/>
        </div>
    </div>)
}