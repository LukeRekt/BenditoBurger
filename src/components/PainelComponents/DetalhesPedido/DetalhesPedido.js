import { useContext } from "react"
import PedidoContent from "../PedidoContent/PedidoContent"
import { PedidoContext } from "../PedidoContext/PedidoContext"
import styles from "./DetalhesPedido.module.css"

export default function DetalhesPedido(){
    const { pedidosSelected, setPedidosSelected } = useContext(PedidoContext) 
    
    return (
        <>
        {!pedidosSelected ? (<></>) : (<div className={styles.container}>
            
            <div className={styles.pedidoDetails}>
                <h1>Detalhes do pedido</h1>
                <div className={styles.comprador}>
                    <p>Informações pessoais:</p>
                   
                    <span> <span style={{fontWeight: 700}}>Nome:</span> {pedidosSelected.nome}.</span>
                    <span> <span style={{fontWeight: 700}}>Telefone:</span> {pedidosSelected.telefone}</span>
                    <span> <span style={{fontWeight: 700}}>Cpf:</span> {pedidosSelected.cpf}</span>
                </div>
                <div className={styles.endereco}>
                    <p>Endereço de entrega:</p>
                    <span> <span style={{fontWeight: 700}}>Rua:</span> Rua Amaral.</span>
                    <span> <span style={{fontWeight: 700}}>Bairro:</span> Vila Legionárias.</span>
                    <span> <span style={{fontWeight: 700}}>Complemento:</span> Quadra B, Lt 7.</span>
                    <span> <span style={{fontWeight: 700}}>Cep:</span> 74863-230</span>
                    <span> <span style={{fontWeight: 700}}>Ponto de Referência:</span> Portão verde ao lado do mercadinho.</span>
                </div>
                <div className={styles.tempoTotal}>
                    <p>Tempo total(minutos): </p>
                    <span style={{fontWeight: 700}}>40</span>

                </div>
                
            </div>
            <div className={styles.pedidosContainer}>
                <div className={styles.pedidos}>
                    <PedidoContent ordem="1"/>
                    <PedidoContent ordem="2"/>
                    <PedidoContent ordem="3"/>
                    <PedidoContent ordem="4"/>
                    <PedidoContent ordem="5"/>
                </div>
            <div className={styles.pedidosRodape}>
                <div className={styles.statusMenu}>
                    <select>
                     <option value="0">Preparando</option>
                     <option value="0">Entrega</option>
                     <option value="0">Finalizado</option>
                    </select>
                </div>
                <div className={styles.botoes}>
                    <button>Cancelar</button>
                    <button onClick={() => console.log(pedidosSelected)}>Imprimir</button>

                </div>
            </div>
            </div>

        </div>)}
        </>
        
    )
}