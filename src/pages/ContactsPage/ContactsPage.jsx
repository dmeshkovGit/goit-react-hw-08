import css from './ContactsPage.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import ContactForm from '../../components/ContactForm/ContactForm'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'

export default function ContactsPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
    return (
      <div className={css.phonebookContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      {isLoading && <Loader/>}
      {isError ? <ErrorMessage /> : <ContactList />}
    </div> 
    )
}