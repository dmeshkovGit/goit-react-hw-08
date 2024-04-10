import css from './UserMenu.module.css'
import { FaCircleUser } from "react-icons/fa6";

export default function UserMenu({switchModalIsOpen}) {
    return (
        <button type='button' onClick={() => switchModalIsOpen()} className={css.modalBtn}><FaCircleUser className={css.userIcon} /></button>
    )
}