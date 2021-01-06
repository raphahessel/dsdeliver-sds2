import './styles.css'
import {ReactComponent as Logo} from './logotipo.svg'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar