import styles from "./About.module.css"
import imagemBurger from '../../../assets/burgao.jpg'
import alface from '../../../assets/alface.png'
import tomate from '../../../assets/tomate.webp'
import AboutIngredients from "../../AboutIngredients/AboutIngredients"
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';

export default function About(){
    return(
        <div className={styles.container}>
            
            <div className={styles.imagem}>
            <img src={imagemBurger}/>
            </div>
           <div className={styles.ingredientes}>
           <h2>Ingredientes</h2>
            <div className={styles.ingredientesWrap}>
            <AboutIngredients imagem={alface} ingrediente="2x Alface americano"/>
            <AboutIngredients imagem={tomate} ingrediente="3x Tomate cereja"/>
            <AboutIngredients imagem={alface} ingrediente="2x TESTE"/>
            <AboutIngredients imagem={tomate} ingrediente="3x TESTE"/>
            <AboutIngredients imagem={alface} ingrediente="2x TESTE"/>
            <AboutIngredients imagem={tomate} ingrediente="3x TESTE"/>
            </div>
           </div>
           <div className={styles.rodape}>
           <div className={styles.seletorQuantidade}>
                <AiFillMinusCircle/>
                <p>1</p>
                <AiFillPlusCircle/>
            </div>
           <button className={styles.botao}>PEDIR AGORA</button>
           </div>
          
        </div>
    )
}