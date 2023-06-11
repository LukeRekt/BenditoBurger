import React, { useEffect, useState } from 'react';
import styles from "./PainelLogin.module.css"
import LogoImage from '../../../assets/logo.png';

import { Navigate, useNavigate } from 'react-router-dom';
import Popup from '../../Popup/Popup';

function PainelLogin() {
  const [ emailSelect, setEmailSelect ] = useState(false);
  const [ passwordSelect, setPasswordSelect ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [loading, setLoading] = useState(true);
  //const history = useHistory();
  const navigate = useNavigate();

//   useEffect(()=>{
//     let storage_email = localStorage.getItem('email');
//     let storage_token = sessionStorage.getItem('token');

//     if(!!storage_email)
//       setEmail(storage_email)

//     if(!!storage_token){
//       setLoading(true);
//       check_login(storage_token);
//     }

//   }, []);


//   const check_login = async (storageToken = "") => {

//     if(storageToken === "")
//       storageToken = sessionStorage.getItem('token');


//     await api.get(`token/${storageToken}`)
//     .then( async (response)=>{
//       if(response.data.message === "success"){
//         //history.push('/catalogador');
//       }
//       else{
//           sessionStorage.removeItem('token');
//           logout();
//       }
//     })
//     .catch(async (error) => {
//       console.log("USER UNAUTHORIZED!");
//       sessionStorage.removeItem('token');
//       logout();
//     });

//     setLoading(false);
//   }


  const sign_in = async () => {

    setLoading(true);

    // await login(email, password)
    // .then((user) => {
    //   if(!user.hasOwnProperty("errorCode")){
    //     check_login();
    //     localStorage.setItem('email', email);

    //   }
    //   else{
    //     alert("ERROR CONNECTING!");
    //   }
    // });

    // toast.success("Logado com sucesso!");
    navigate("/painel/pedidos")
    setLoading(false);

  }

  const handleEmail = (e) => {
    if(e.target.value.length >= 250)
      e.preventDefault();
    else
      setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    if(e.target.value.length >= 100)
      e.preventDefault();
    else
      setPassword(e.target.value);
  }

  const handleSelectInput = (e) => {
    let input_type = e.target.getAttribute('type');

    if(input_type === 'email'){
      setEmailSelect(true);
      setPasswordSelect(false);
    }
    else{
      setEmailSelect(false);
      setPasswordSelect(true);
    }

  }


  return (
    <div className={styles.container}>
    
      <a href=""><img className={styles.logo} src={LogoImage}/></a>

      <div className={styles.loginBox}>
        <h1 className={styles.title}>Bem-Vindo</h1>
        <input
          className={styles.textInput}
          selected={emailSelect}
          value={email}
          placeholder="Seu email..."
          type="email"
          onChange={handleEmail}
          onFocus={handleSelectInput}
          onBlur={()=> setEmailSelect(false)}
        />
        <input
        className={styles.textInput}
          selected={passwordSelect}
          placeholder="Sua senha..."
          type="password"
          onChange={handlePassword}
          onFocus={handleSelectInput}
          onBlur={()=> setPasswordSelect(false)}
          autoComplete="on"
        />
        <button type="button" onMouseDown={() => sign_in()}>Login</button>

      </div>


    </div>


  );
}

export default PainelLogin;