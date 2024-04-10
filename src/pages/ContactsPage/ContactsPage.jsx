import css from './ContactsPage.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { IoPersonAdd } from "react-icons/io5";
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import AddContactModal from '../../components/AddContactModal/AddContactModal'

export default function ContactsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleSwitchModal = () => {
    setModalIsOpen(!modalIsOpen)
  }
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
    return (
      <div className={css.phonebookContainer}>
           <div className={css.addContactWrap}>
          <h1 className={css.title}>Contacts</h1>
          <button className={css.addContactBtn} onClick={()=>handleSwitchModal() } type='button'><IoPersonAdd className={css.addContactIcon} /></button>
      </div>
      <SearchBox />
        {isLoading && <div className={css.loaderWrapper}><Loader /></div>}
        {isError ? <ErrorMessage /> : <ContactList />}
      <AddContactModal switchModal={handleSwitchModal} isOpen={modalIsOpen}/>
    </div> 
    )
}