import React from 'react';
import foodRecipe from '../assets/foodRecipe.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RecipeItems from '../components/RecipeItems';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';

export default function Home(){
    const navigate=useNavigate();
    const [isOpen,setIsOpen]=useState(false);
    const addRecipe=()=>{
        let token=localStorage.getItem('token');
        if(token){
            navigate('/addRecipe')
        }
        else{
            setIsOpen(true)
        }
    }
  return (
    <>
        <section className='home'>
            <div className='left'>
                <h1>Food Recipe</h1>
                <h5>In medieval and early modern periods, medical and culinary recipes were fundamentally connected through their material format, shared domestic origins, and underlying scientific theory.[20] During this era, the majority of healthcare was home-based, so most medicines and remedies were produced within the same household kitchens and stillrooms used for food preparation.[21] This resulted in tools such as pots, skillets, mortars and pestles, and jelly bags for straining to be used both for cooking meals and compounding medical remedies. </h5>
                <button onClick={addRecipe}>Share your recipe</button>
            </div>
            <div className='right'>
                <img src={foodRecipe} width='320px' height='300px' />
            </div>
        </section>
        <div className='bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,128L24,112C48,96,96,64,144,80C192,96,240,160,288,154.7C336,149,384,75,432,69.3C480,64,528,128,576,176C624,224,672,256,720,229.3C768,203,816,117,864,106.7C912,96,960,160,1008,160C1056,160,1104,96,1152,69.3C1200,43,1248,53,1296,48C1344,43,1392,21,1416,10.7L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        </div>
        {(isOpen)&& <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
        <div className='recipe'>
            <RecipeItems />
        </div>
    </>
  )
}