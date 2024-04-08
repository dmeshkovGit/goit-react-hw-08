import { clsx } from 'clsx';
import css from './AddContactModal.module.css'
import { IoClose } from "react-icons/io5";
import ContactForm from "../ContactForm/ContactForm";


export default function AddContactModal({switchModal, isOpen}) {
    return (
        <div className={clsx(css.layout, isOpen && css.modalIsOpen)}>
        <div className={css.modalWrapper}>
        <button className={css.closeBtn} onClick={()=>switchModal()} type='button'><IoClose className={css.closeIcon} /></button>
                <ContactForm switchModal={switchModal} />  
        </div>
        </div>
        
    )
}