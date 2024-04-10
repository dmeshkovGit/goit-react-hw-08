import { Link } from 'react-router-dom'
import css from './AuthNav.module.css'
import { FiLogIn } from "react-icons/fi";

export default function AuthNav() {
    return (
        <><Link to='/login'><FiLogIn className={css.logInIcon} /></Link></>
    )
}