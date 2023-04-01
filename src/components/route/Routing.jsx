import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Form } from  '../form/Form'
import { Nav } from  '../nav/Nav'
import { Other } from  '../other/Other'

export const Routing = ()=>{
    return(
        <div>
           <BrowserRouter>
           <Nav/>
           <Routes>
               <Route path="/" element={<Form/>}/>
               <Route path="/form" element={<Form/>}/>
               <Route path="/other" element={<Other/>}/>
           </Routes>
           </BrowserRouter>
        </div>
    );
}