import Header from '../../Header/Header'
import styles from './Home.module.css'
import imagemBurger from '../../../assets/burgao.jpg'
import logo from '../../../assets/logo.png'
import BurgerCards from '../../BurgerCards/BurgerCards'
export default function Home(){
   
    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <h1>Bem-vindos ao Bendito</h1>
                    <h1>Burger</h1>
                    <div className={styles.botaoPedir}>
                        <p>PEDIR AGORA</p>
                        </div>
                </div>
                <img src={imagemBurger}/>
            </div>
            <div className={styles.especHeader}>
            <img className={styles.logo} src={logo}/>
            <h2>Nossas especialidades</h2>
            </div>
            <BurgerCards/>
            <BurgerCards/>
            <BurgerCards/>
        </div>
    )
}