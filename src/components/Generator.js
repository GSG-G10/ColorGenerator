import React,{useState,useEffect} from "react";
import Values from 'values.js'

const Generator = () => {
    const [color, setColor] = useState('')
    const [list, setList] = useState(false)
    
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
            <h2>{list? list.map((color)=> {return (<h1 style={{backgroundColor:'#'+color.hex}}>{'#'+color.hex}</h1>) }): 'LIST WELL SHOW HERE'}</h2>
        </>
    )
    };

export default Generator
