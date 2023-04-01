import { useState } from 'react';
import './Form.css'

export const Form = () =>{
  const [name,setName] = useState("Test");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");

  const handleonsubmit = (e) =>{
    e.preventDefault();
    // console.log(e);
    const getDetails = {
        formName:name,
        formAddress:address,
        formEmail:email,
        formAge:age
    }
    console.log(getDetails);
  }

 

   return(
      <div>
         <form id="myform" onSubmit={handleonsubmit}>          
         <h1>My Form</h1>         
         <label for="name">Name:</label>

         <input 
         id="name" 
         type="text"
         value={name}
         onChange={e => setName(e.target.value)}      
         />

         
         <label for="contact">Contact No.:</label>

         <input 
         id="contact" 
         type="number" 
         value={address}
         onChange={e =>setAddress(e.target.value)}
         />

         <label for="email">Email:</label>

         <input 
         id="email" 
         type="email" 
         value={email}
         onChange = {e => setEmail(e.target.value)}
         />

         <label for="age">Age:</label>

         <input 
         id="age" 
         type="number" 
         value={age}
         onChange = {e => setAge(e.target.value)}
         />

          <div>
          <button className='submit' type="submit">Save</button>
          <button className="reset" type="reset">Reset</button>
          </div>      

         </form> 
      </div>
   );
}