import css from './Navigation.module.css'
import { FaCircleInfo } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { BiSolidContact } from "react-icons/bi";
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const makeLinkClass = ({ isActive }) => {
        return clsx(css.navLink, isActive && css.isActive, !isLoggedIn && css.soloLink)
    };
    return (
        <nav className={css.authNavWrapper}>
            <NavLink to="/" className={makeLinkClass}><FaCircleInfo className={css.appIcon} /></NavLink>
            {isLoggedIn && <NavLink to="/contacts" className={makeLinkClass}><BiSolidContact className={css.contactsIcon} /></NavLink>}
        </nav>
    )
}