import { Link } from 'react-router-dom'
import './Nav.css'
export const Nav = () =>{
    return(
        <div id='nav-outer'>
            <Link to="/form">
            <button className='btn-form'>Form</button>
            </Link>
            <Link to="/other">
            <button className='btn-form'>Other</button>
            </Link>
        </div>
    )
}