import React, { useContext,useState } from 'react'
import Context from '../../Context/index'
import "./loginStore.css"
import {  useHistory } from 'react-router-dom'

const LoginStore = () => {
    
    const context = useContext(Context)
    const history = useHistory()
    const navigateTo = (path) => {
        history.push(path);
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cliente, setCliente] = useState(true)
    const [registroEmail, setregistroEmail] = useState("")
    const [registroPassword, setregistroPassword] = useState("")
    const [validacionPass, setValidacionPass] = useState(false)

    const handleInputChange = (e) => {
        if(e.target.name === "email"){
            const email = e.target.value
            setEmail(email)
        }
        if(e.target.name === "password"){
            const pass = e.target.value
            setPassword(pass)
            comprobarPass(pass)
        }
        if(e.target.name === "nuevoEmail"){
            const nuevoEmail = e.target.value
            setregistroEmail(nuevoEmail)
        }
        if(e.target.name === "nuevoPassword"){
            const nuevoPassword = e.target.value
            setregistroPassword(nuevoPassword)
            comprobarPass(nuevoPassword)

        }
    }

    const userRegister = (e)=>{
        e.preventDefault()

        let userLogin = {
            "email":registroEmail,
            "password": registroPassword
        }

        if(localStorage){
            let storage;
            if (!localStorage['storage']) storage = [];
            else storage = JSON.parse(localStorage['storage']);
            if (!(storage instanceof Array)) storage = [];
            if(storage.find(user=>user.email === registroEmail)){
                setCliente(false)
            }else{
                setCliente(true)
                storage.push(userLogin);
            }

            localStorage.setItem('storage', JSON.stringify(storage));
        }
        

    }

    
    const user =(e)=>{
        e.preventDefault()

        const getUsers= JSON.parse(localStorage.getItem('storage'))
        const mapeoEmail = getUsers.find(user => user.email === email)

        let usuarioLoged =
        {
            "email":email,
            "password":password,
        }
        if( mapeoEmail ){

            if( usuarioLoged.email === mapeoEmail.email && usuarioLoged.password === mapeoEmail.password 
                && usuarioLoged.email !=="" && usuarioLoged.password !== ""){
                    context.addUsers({email:usuarioLoged.email, password:usuarioLoged.password})
                    navigateTo( "/store" )

            }else{
                alert("user or password incorrect")
            }
        }else{
            alert("user does not exist, please create an Account")
        }
    }

        const comprobarPass = (value) => {
            if(value.length >= 5){
                setValidacionPass(true)
            }else{
                setValidacionPass(false)
            }
        }    
       
return(
   
    <>
    <div className="body-login">
    <h3 className="title-login">User Login</h3>
    <div className="loggin_page">
        <form className="form-login">
            <span>
                <label htmlFor="fname">Email</label>
                <input type="mail" name="email" placeholder="Your name.."
                    onChange={handleInputChange}
                />
            </span>
            <span>
                <label htmlFor="lname">Password</label>
                <input type="password" name="password" placeholder="Your password.." required minLength="5"
                    onChange={handleInputChange}
                />
            </span>
            <input type="submit" value="Loggin" onClick={user} />
        </form>
    </div> 



    <h3 className="title-login">New Account</h3>
    <div>
        <form className="form-login">
            <label htmlFor="fname">Email</label>
            <input type="mail" id="email" name="nuevoEmail" placeholder="Your email..."
                onChange={handleInputChange}
            />
            {!cliente && <h5 style={{color:"red", fontSize:"16px"}}>the email is existed!</h5> } 
            <label htmlFor="lname">Password</label>
            <input type="password" id="password" name="nuevoPassword" placeholder="Your password..." required minLength="5"
                onChange={handleInputChange}
            />
            {!validacionPass && registroPassword.length >= 1 && <h5 style={{color:"red", fontSize:"16px"}}>Password must have more than 5 words</h5>}
            <input type="submit" value="Loggin" onClick={userRegister}/>
        </form>
    </div>
    </div>
    </>
    
    )
}

export default LoginStore