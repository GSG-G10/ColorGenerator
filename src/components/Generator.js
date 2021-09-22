import React,{useState,useEffect,useContext} from "react";
import Values from 'values.js'
import savelocalstorge from '../generalfunc/savelocalstorge'
import {coloercontext} from '../context/coloercontext';
const Generator = () => {
    const [color, setColor] = useState('')
    const [list, setList] = useState(false)
    const fav = useContext(coloercontext)
    const {favoriteColors, setfavoriteColors} = fav


    useEffect(() => {   
        try { 
            const colorList = new Values(color).all(10);
            console.log(colorList);
            setList(colorList);
        } catch (error) {
            setList(false);
        }
    },[color])
    return (
        <>

        <input value={color} onChange={(e) => {setColor(e.target.value)}} />
            <h1>list</h1>
            <h2>{list? list.map((color)=> {
                
                return (<div>     <h1 style={{backgroundColor:'#'+color.hex}}>{'#'+color.hex}</h1>
                <button onClick={() => {
                    savelocalstorge('#'+color.hex)
                    favoriteColors.push('#'+color.hex)
                    setfavoriteColors(favoriteColors)
                }}>save {color.hex}</button>
                </div>
                ) 
        
        }): 'LIST WELL SHOW HERE'}</h2>


        </>
    )
    };

export default Generator
