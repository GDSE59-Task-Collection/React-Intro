import { useState,useEffect } from "react";

export const Effect = () => {
    const [value,setValue] = useState("");
    const [data,setData] = useState([]);
    
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/${value}`)
      .then(response => response.json())
      .then(json => setData(json))
      console.log("Effect")

      return () =>{
        console.log("Previous Resource Cleaned");
    }
    },[value])

    


   return (
     <>
     <div className="btn-pnl">
         <button className="btn-size btn-clr" onClick={() => setValue("comments")}>Comment</button>
         <button className="btn-size btn-clr"  onClick={() => setValue("posts")}>Posts</button>
         <button className="btn-size btn-clr" onClick={() => setValue("users")}>Users</button>
         <button className="btn-size btn-clr" onClick={() => setValue("photos")}>Photos</button>
         
     </div>
     <div>
        <h1>{value}</h1>
        {data.map(details =>{
            return <pre>{JSON.stringify(details)}</pre>
        })}
     </div>
     </>
   );
}