import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/context';
import { Link } from 'react-router-dom';
export default function Header(){
    const { cart } = useContext(CartContext)

    return (
    <div className={styles.container}>
        <GiHamburgerMenu className={styles.menu}/>
        <Link to="/"><img className={styles.logo} src={logo}/></Link>
        {!cart || cart < 1 ? (<Link to="/carrinho"><div className={styles.carrinho}>
        <FaShoppingCart/>
        </div></Link>) : (<Link to="/carrinho">
            <div className={styles.carrinho}>
            <div className={styles.redCircle}>
                {cart}
            </div>
            <FaShoppingCart/>
            </div></Link>
        )}
        
       
    </div>)
}