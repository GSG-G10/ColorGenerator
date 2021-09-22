import React,{useEffect,useContext} from "react";

import {coloercontext} from '../context/coloercontext';
import savelocalstorge from '../generalfunc/savelocalstorge';
const axios = require('axios');

const Random = () => {
    const fav = useContext(coloercontext)
    const {favoriteColors, setfavoriteColors,RandomColors,setRandomColors} = fav

    useEffect( () => {
        const randomHex = Math.floor(Math.random()*16777215).toString(16)
        axios.get(`https://www.thecolorapi.com/scheme?hex=${randomHex}`)
        .then((res) => {
            setRandomColors(res.data.colors)
        })
        .catch((error) => {
          console.log(error);
        })
        
    },[])

    return (
        <>
        
        {RandomColors.map((color) => {
            return (
            <div>
            <h1 style={{backgroundColor:color.hex.value}}>{color.hex.value}</h1>
            <button onClick={() => {
                savelocalstorge(color.hex.value)
                favoriteColors.push(color.hex.value)
                setfavoriteColors(favoriteColors)
            }}>save {color.hex.value}</button>
            </div>

                )
        })}
        </>
    )
    };

export default Random
