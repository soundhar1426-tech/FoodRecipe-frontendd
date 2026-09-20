import React,{useState,useEffect} from 'react'
import Modal from './Modal'
import InputForm from './InputForm'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isOpen,setIsOpen]=React.useState(false);
    let token=localStorage.getItem('token');
    const [isLogin,setIsLogin]=useState((token)?false:true);
    let user=JSON.parse(localStorage.getItem("user"))

    useEffect(()=>{
        setIsLogin((token)?false:true)
    },[token])

    const checkLogin=()=>{
        if(token){ 
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setIsLogin(true)
        }else{
            setIsOpen(true)
        }
        
    }
    return(
        <>
        <header>
            <h2>Food Blog</h2>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin?"/myRecipe":"/"}>My Recipe</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin?"/favRecipe":"/"}>Favourites</NavLink></li>
                <li onClick={checkLogin}><p className='login'> {isLogin ? "Login" : "Logout"}{user?.email? `(${user?.email})`:""}</p></li>
                {/* //user?.email? `(${user?.email})`:""
                // 1stquestion mark is- optional chaining operator, it checks if user is not null or undefined before accessing the email property. If user is null or undefined, it will return undefined instead of throwing an error.
                //2nd question mark is- ternary operator, it checks if user?.email is truthy (not null, undefined, or an empty string). If it is truthy, it will return the string `(${user?.email})`, otherwise it will return an empty string "".
                //example=  user?.email ? something : somethingElse */}
            </ul>
        </header>
        {(isOpen)&& <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
        </>
    )
}