import { useState,useEffect } from "react";

export const State = ()=>{
console.log("Rendered Main")
    const [newvalue,setNewValue] = useState(0)

    useEffect(()=>{
        console.log("Effect")
    })


    const handleonclickup = () => {
         if(newvalue  === 0) {}
         setNewValue(newvalue +1)
         console.log(newvalue);
    }
    const handleonclickdwn = () =>{
        if(newvalue  > 0) {
            setNewValue(newvalue -1)
         }else{
             alert("No valid Values")
           }
        }

    return(
       <div>
           <h1 id="view">{newvalue}</h1>
           <div>
               <button onClick= {handleonclickup} className="my-btn" id="btn-up">+</button>
               <button onClick= {handleonclickdwn} className="my-btn" id="btn-dwn">-</button>
           </div>
       </div>
    )
}