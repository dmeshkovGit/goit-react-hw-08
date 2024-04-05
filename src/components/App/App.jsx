import css from './App.module.css'
import { useState, useId, useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contactsOps'
import Loader from '../Loader/Loader'
import { selectError, selectLoading } from '../../redux/contactsSlice'
import { Toaster } from 'react-hot-toast'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function App() {
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
      {isError ? <ErrorMessage/> : <ContactList />}
      <Toaster
        position="top-right"
        reverseOrder={false} />
    </div>
  )
}


