import React,{useContext,useEffect} from "react";
import {coloercontext} from '../context/coloercontext' 
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
        
    <div >
        <button onClick={()=> {
            localStorage.clear()
            setfavoriteColors([])
            }}>clear</button>
        {favoriteColors.map((color)=> <h1 style={{backgroundColor:color}}>{color}</h1>)}
    </div>
    )};

export default Favorite
