import React,{useContext,useEffect} from "react";
import {coloercontext} from '../context/coloercontext';
import './style/Random.css';
const Favorite = () => {
    const fav = useContext(coloercontext)
    const {favoriteColors, setfavoriteColors} = fav
    useEffect(() => {
        console.log(localStorage.colorList);
        if(localStorage.colorList === undefined){
            setfavoriteColors([])
        }else{
            setfavoriteColors(JSON.parse(localStorage.colorList))
        }
    },[])

    return (
        <>
        <h1>Favorite</h1>
        <button onClick={()=> {
            localStorage.clear()
            setfavoriteColors([])}} >clear</button>
    <section className='random'>
        {favoriteColors.map((color)=> <div className='color-box' style={{backgroundColor:color}}> <h1> {color}</h1> </div>)}
    
    </section>

    </>
    )};

export default Favorite
