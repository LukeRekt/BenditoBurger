import styles from "./AboutIngredients.module.css"

export default function AboutIngredients(props){
    return (
        <div className={styles.container}>
            <img src={props.imagem}/>
            <p>{props.ingrediente}</p>
        </div>
    )
}