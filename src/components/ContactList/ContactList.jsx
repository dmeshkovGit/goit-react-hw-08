import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectSortedContacts } from '../../redux/contactsSlice'



export default function ContactList({  }) {
    const sortedContacts = useSelector(selectSortedContacts);

    return (
        <ul className={css.contactsList}>
            {sortedContacts.map((contact) => {
                return <li key={contact.id}>
                    <Contact contact={contact}/>
             </li>
         })}
        </ul>
    )
}