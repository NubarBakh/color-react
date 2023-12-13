import { useCallback, useContext } from "react"
import { counter } from "./counter"
import style from './a.module.css'
export default function A (){


    const [power, setPower, color, setColor] = useContext(counter);


    function onclick(){
        if(power==='OFF'){
            setPower('ON')
        }else{setPower('OFF')}
    }

  
 
      function change (){
        if(power==='ON'){
        
            setColor((evvel)=>{
              if(evvel.backgroundColor==='blue'){
                setColor({backgroundColor:'green'})
              } else{setColor({backgroundColor:'blue'})}
            })

}
            }
        
        
      

    
    return<>
<h1>Lamp Effect Control </h1>
<div>Power:{power} </div>
<div> Color: {color.backgroundColor}</div>

<button onClick={onclick}>Lock and unlock</button>
<button onClick={change}>change color</button>
<div style={color} className={style.main}>
        
      </div>

    </>}
