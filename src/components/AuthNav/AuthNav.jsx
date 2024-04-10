import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'
import { FiLogIn } from "react-icons/fi";

export default function AuthNav() {
    return (
        <><NavLink to='/login'><FiLogIn className={css.logInIcon} /></NavLink></>
    )
}