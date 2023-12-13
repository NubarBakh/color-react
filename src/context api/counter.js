import {createContext, useState} from "react";
export const counter =createContext ();

export default function Counter ({children }){

    const [power, setPower]=useState('OFF')
    const [color, setColor]=useState({ backgroundColor: 'blue' })


    return <>
    <counter.Provider  value={[power, setPower, color, setColor]}>  {children} </counter.Provider>
    
    </>

}