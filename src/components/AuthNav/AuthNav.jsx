import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'
import { FiLogIn } from "react-icons/fi";
import { MdAppRegistration } from "react-icons/md";
import clsx from 'clsx';

export default function AuthNav() {

    const makeLinkClass= ({ isActive }) => {
        return clsx(css.navLink, isActive && css.isActive)
    };

    return (
        <div className={css.authNavWrapper}>
            <NavLink className={makeLinkClass} to='/register'><MdAppRegistration className={css.regIcon} /></NavLink>
            <NavLink className={makeLinkClass} to='/login'><FiLogIn className={css.logInIcon} /></NavLink>
        </div>
    )
}