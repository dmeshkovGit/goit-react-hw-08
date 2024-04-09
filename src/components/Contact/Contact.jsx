import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson, IoPersonAdd } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { TbUserEdit } from "react-icons/tb";
import EditModal from '../EditModal/EditModal';
import { useState } from 'react';

export default function Contact({ contact: { id, name, number } }) {
    
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
    setIsOpen(true);  }

    const closeModal = () => {
    setIsOpen(false);}

    return (
        <>
        <div  className={css.contactWrapper}>
            <a href={`tel:${number}`} className={css.phoneLink}>
                <div className={css.contactInfo}>
                <p className={css.contactText}><IoPerson className={css.contactIcon} />{name}</p>
                <p className={css.contactText}><FaPhoneAlt className={css.phoneIcon} />{number}</p>
            </div>
            </a> 
            <button className={css.editBtn} onClick={openModal} type="button"><TbUserEdit className={css.editIcon} /></button>
            </div>
            <EditModal id={id} name={name} number={number} closeModal={closeModal} isOpen={modalIsOpen} />
         </>
    )
}