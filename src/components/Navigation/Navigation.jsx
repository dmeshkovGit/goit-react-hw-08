import css from './Navigation.module.css'
import { FaCircleInfo } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'

export default function Navigation() {

    return (
        <div><NavLink to="/" className={css.homeLink}><FaCircleInfo className={css.appIcon} /></NavLink></div>
    )
}