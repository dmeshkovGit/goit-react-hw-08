import { clsx } from 'clsx';
import css from './AddContactModal.module.css'
import { IoClose } from "react-icons/io5";
import ContactForm from "../ContactForm/ContactForm";
import { TbUserSquareRounded } from "react-icons/tb";

export default function AddContactModal({switchModal, isOpen}) {
    return (
        <div className={clsx(css.layout, isOpen && css.modalIsOpen)}>
        <div className={css.modalWrapper}>
                <button className={css.closeBtn} onClick={() => switchModal()} type='button'><IoClose className={css.closeIcon} /></button>
                <h2 className={css.title}>New Contact</h2>
                <TbUserSquareRounded className={css.contactIcon} />
                <ContactForm switchModal={switchModal} />  
        </div>
        </div>
        
    )
}