import './Header.css';
import {NavLink} from 'react-router-dom'

function Header(){
  return(
    <>
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    </header>
  </>  
  )
}
export default Header