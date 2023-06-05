import styles from "./DetalhesPedido.module.css"

export default function DetalhesPedido(){
    return (
        <div className={styles.container}>
            <div className={styles.pedidoDetails}>
                <h1>Detalhes do pedido</h1>
                <div className={styles.comprador}>
                    <p>Informações pessoais:</p>
                   
                    <span> <span style={{fontWeight: 700}}>Nome:</span> Lucas Rodrigues da Silva Lemes.</span>
                    <span> <span style={{fontWeight: 700}}>Telefone:</span> (62) 984822842</span>
                    <span> <span style={{fontWeight: 700}}>Cpf:</span> 12345678910</span>
                </div>
                <div className={styles.endereco}>
                    <p>Endereço de entrega:</p>
                    <span> <span style={{fontWeight: 700}}>Rua:</span> Rua Amaral.</span>
                    <span> <span style={{fontWeight: 700}}>Bairro:</span> Vila Legionárias.</span>
                    <span> <span style={{fontWeight: 700}}>Complemento:</span> Quadra B, Lt 7.</span>
                    <span> <span style={{fontWeight: 700}}>Cep:</span> 74863-230</span>
                    <span> <span style={{fontWeight: 700}}>Ponto de Referência:</span> Portão verde ao lado do mercadinho.</span>
                </div>
                
            </div>
            <div className={styles.pedidosContainer}>
                <div className={styles.pedidos}>
                    a
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
                    <button>Imprimir</button>

                </div>
            </div>
            </div>

        </div>
    )
}