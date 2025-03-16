import './UserDashboard.scss';
import { auth } from '../firebase/config.js';
import { signOut } from "firebase/auth";

export default function UserDashboard({setUserApp}){

    function handleSignOut(){
        signOut(auth).then(() => {
            setUserApp({});
        }).catch((error) => {
            // An error happened.
        });
    }

    return(
        <>
        <div className='hello-panel-container'>
        <p onClick={handleSignOut} className='sign-out'>Sair</p>
            <p className="hello-panel">Logou!</p>
        </div>
        </>
    );
}