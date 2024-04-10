import { useState } from 'react';
import css from './UserMenu.module.css'
import { FaCircleUser } from "react-icons/fa6";
import ModalMenu from '../ModalMenu/ModalMenu';

export default function UserMenu() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    const switchModalIsOpen = () => {
   return setModalIsOpen(!modalIsOpen) 
  }
    return (
        <>
        <button type='button' onClick={() => switchModalIsOpen()} className={css.modalBtn}><FaCircleUser className={css.userIcon} /></button>
        <ModalMenu isOpen={modalIsOpen} switchModal={switchModalIsOpen}/>
        </>
        
    )
}