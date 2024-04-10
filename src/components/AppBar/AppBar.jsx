import { Link } from 'react-router-dom'
import css from './AppBar.module.css'
import { useState } from 'react';
import ModalMenu from '../ModalMenu/ModalMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FaCircleInfo } from "react-icons/fa6";
import Navigation from '../Navigation/Navigation';

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
                
          <Navigation switchModalIsOpen={switchModalIsOpen} />
            
            </div>
            
            <ModalMenu isOpen={modalIsOpen} switchModal={switchModalIsOpen}/>
            </div> 
        
    )
}