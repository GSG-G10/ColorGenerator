import React,{useState,useEffect,useContext} from "react";
import Values from 'values.js'
import savelocalstorge from '../generalfunc/savelocalstorge'
import {coloercontext} from '../context/coloercontext';
import './style/Generator.css';
const Generator = () => {
    const [color, setColor] = useState('')
    const [list, setList] = useState(false)
    const fav = useContext(coloercontext)
    const {favoriteColors, setfavoriteColors} = fav

    useEffect(() => {   
        try { 
            const colorList = new Values(color).all(10);
            
            setList(colorList);
        } catch (error) {
            setList(false);
        }
    },[color])
    return (
        <section className='generator-container'>

        
        <input className='color-input' type='text' value={color} onChange={(e) => {setColor(e.target.value)}} placeholder='Enter color hex ' />
        <section className='random'>
            {list? list.map((color)=> {
                
                return (<div className='color-box' style={{backgroundColor:'#'+color.hex}}>     <h1 >{'#'+color.hex}</h1>
                <button onClick={() => {
                    savelocalstorge('#'+color.hex)
                    favoriteColors.push('#'+color.hex)
                    setfavoriteColors(favoriteColors)
                }}>save {color.hex}</button>
                </div>
                ) 
        
        }): 'COLORS WELL SHOW HERE'}</section>


</section>
    )
};

export default Generator
