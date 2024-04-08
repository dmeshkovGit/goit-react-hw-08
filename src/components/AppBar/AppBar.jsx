import { Link } from 'react-router-dom'
import css from './AppBar.module.css'
import { FaCircleUser } from "react-icons/fa6";
import { useState } from 'react';
import ModalMenu from '../ModalMenu/ModalMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FiLogIn } from "react-icons/fi";
import { FaCircleInfo } from "react-icons/fa6";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn) 
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const switchModalIsOpen = () => {
   return setModalIsOpen(!modalIsOpen) 
  }

    return (
        <div>
            <div className={css.barWrapper}>
            <div><Link to="/" className={css.homeLink}><FaCircleInfo className={css.appIcon} /></Link></div>
                
            <h1 className={css.title}>PhoneBook</h1>
                
            {isLoggedIn ? <button type='button' onClick={() => switchModalIsOpen()} className={css.modalBtn}><FaCircleUser className={css.userIcon} /></button> : <Link to='/login'><FiLogIn className={css.logInIcon} /></Link>}
            
            </div>
            
            <ModalMenu isOpen={modalIsOpen} switchModal={switchModalIsOpen}/>
            </div> 
        
    )
}