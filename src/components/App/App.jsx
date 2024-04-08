import css from './App.module.css'
import { useEffect } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactList from '../ContactList/ContactList'
import SearchBox from '../SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'
import Loader from '../Loader/Loader'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage"
import ContactsPage from "../../pages/ContactsPage/ContactsPage"
import AppBar from '../AppBar/AppBar'
import ModalMenu from '../ModalMenu/ModalMenu'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export default function App() {
  
  return (
    <div className={css.appWrapper}>
      <AppBar/>

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/' />} />
        
        <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        
        <Route path='/contacts' element={<PrivateRoute component={<ContactsPage/>} redirectTo='/login'/>}/>
      </Routes>
      
      <Toaster
        position="top-right"
        reverseOrder={false} />
    </div>
  )
}


