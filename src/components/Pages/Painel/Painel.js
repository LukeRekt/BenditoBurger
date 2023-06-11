import { useEffect, useState } from 'react'
import DetalhesPedido from '../../PainelComponents/DetalhesPedido/DetalhesPedido'
import Pedidos from '../../PainelComponents/Pedidos/Pedidos'
import styles from './Painel.module.css'
import axios from 'axios'
import Popup from '../../Popup/Popup'


export default function Painel(){
const [pedidos, setPedidos] = useState();    
const [loading, setLoading] = useState(true);    
    useEffect(() => {
        axios.get(`http://localhost:3232/pedidos`)
            .then(res => {
                setPedidos(res.data.pedidos)
                setLoading(false)
            })
    }, [])

    if(loading)
    return <Popup/>

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