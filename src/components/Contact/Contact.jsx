import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ contact: { id, name, number } }) {
    
    const dispatch = useDispatch(); 

    return (
        <div className={css.contactWrapper}>
            <div className={css.contactInfo}>
                <p className={css.contactText}><IoPerson />{name}</p>
                <p className={css.contactText}><FaPhoneAlt />{number}</p>
            </div>
            <button className={css.deleteBtn} onClick={() => {dispatch(deleteContact(id))}} type="button">Delete</button>
        </div>
    )
}