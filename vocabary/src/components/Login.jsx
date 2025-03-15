import './Login.scss';

export default function Login(){

    return(
        <main className='login-container'>
            <form className="login-form">
                <img className='vocabary-logo' src='./img/vocabaryLogo.svg' />
                <input className='user-text' type='text' autocomplete="off" name='email' placeholder='Email ID'/>
                <input className='password-text' type='password' name='password' placeholder='Password'/> 
                <div className='memorization-container'>
                    <div className='remember-me'>
                        <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberme" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href='#'>Forgot password?</a>
                </div>
                <button formMethod='post'>LOGIN</button>
                <input type='button' value="Sign Up" />
            </form>
        </main>
    );
}