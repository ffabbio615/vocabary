import './Login.scss';
import { auth } from '../firebase/config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail,
    onAuthStateChanged, 
    updateProfile } from "firebase/auth";
import { useState } from 'react';

export default function Login({userApp, setUserApp}){

    const [userCredentials, setUserCredentials] = useState({});
    const [loader, setLoader] = useState(true);


    function handleCredentials(e){
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
    }

    function handleSignUp(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    // async function handleSignUp(e){//Sign Up com nome de usuário e foto
    //     e.preventDefault();
    //     try {
    //         const userCredential = await createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password);
    //         const user = userCredential.user;
    
    //         // Atualizar perfil com displayName e photoURL
    //         await updateProfile(user, {
    //             displayName: "Digital Print",
    //             photoURL: "https://img.freepik.com/vetores-premium/letra-inicial-d-letra-d-do-logotipo-isolada-em-fundo-branco-elemento-de-modelo-de-design-de-logotipo-de-vetor-plano_806019-3454.jpg?semt=ais_hybrid",
    //         });
    //         console.log("Usuário criado com sucesso:", user);
    //     } catch (error) {
    //         console.error("Erro ao criar usuário:", error.message);
    //     }
    // }

    function handleLogin(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            // Logged in 
            const user = userCredential.user;
            setUserApp({id: user.uid, email: user.email});
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    function handlePasswordReset(){
        sendPasswordResetEmail(auth, userCredentials.email);
        alert("E-mail de recuperação enviado! Verifique sua caixa de entrada e siga as instruções para alterar a senha.");
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserApp({id: user.uid, email: user.email});
        } else if(userApp.id){
            console.log("Deslogou!");
            setUserApp({});
        }
        if(loader){
            setLoader(false);
        }
    });

    return(
        <main className='login-container'>
            { loader && <div className='loader'><img src="./img/vocabaryLogo.svg" alt="Logo Vocabary" /></div> }

            <form className="login-form">
                <img className='vocabary-logo' src='./img/vocabaryLogo.svg' />
                <input onChange={(e) => {handleCredentials(e)}} className='user-text' type='text' autoComplete='off' spellCheck={false} name='email' placeholder='Email'/>
                
                <input onChange={(e) => {handleCredentials(e)}} className='password-text' type='password' autoComplete="new-password" name='password' placeholder='Senha'/> 
                <div className='remember-password-container'>
                    <div className='remember-me'>
                        <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberme" />
                        <label htmlFor="rememberMe">Lembrar-me</label>
                    </div>
                    <p className='forgot--password' onClick={handlePasswordReset}>Esqueceu a senha?</p>
                </div>
                <button onClick={(e) => handleLogin(e)} className='login-button'>LOGIN</button>
                <button onClick={(e) => handleSignUp(e)} className='sign-up-button' type='button'>Cadastre-se</button>
            </form>
        </main>
    );
}