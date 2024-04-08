import { useDispatch, useSelector } from 'react-redux'
import css from './ModalMenu.module.css'
import {logOut } from '../../redux/auth/operations'
import { clsx } from 'clsx'
import { FaCircleInfo } from "react-icons/fa6";
import {  selectUser } from '../../redux/auth/selectors'
import { TbUserSquareRounded } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom'

export default function ModalMenu({isOpen, switchModal}) {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut());
        switchModal();
    };
    
    return (
        <div className={clsx(css.modalWrapper, isOpen && css.modalIsOpen)}>
            <div className={css.modalContentWrapper}>
        <button className={css.closeBtn} type='button' onClick={() => switchModal()}><IoClose className={css.closeIcon} /></button>

         <div className={css.wrapper}>
              <div className={css.userInfoWrapper}>
                <TbUserSquareRounded className={css.userIcon} />
                <p className={css.userName}>{`${user.name}`}</p>
                <p>{`${user.email}`}</p>
            </div>
        
                <ul className={css.modalFuncList}>
            <li className={css.modalFuncItem}>
<Link className={css.link} to="/" onClick={() => switchModal()}>App info<FaCircleInfo className={css.icons}/></Link>
            </li>
            <li className={css.modalFuncItem}>
<Link className={css.link} to="/contacts" onClick={() => switchModal()}>My contacts<BiSolidContact className={css.icons} /></Link>
                    </li>
         <li className={css.modalFuncItem}>
           <button className={css.btn} type='button' onClick={handleLogOut}>Log out<TbLogout2 className={css.icons} /></button>
          </li>
            </ul>
            </div>
     </div>
        </div>
    )
}