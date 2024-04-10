import css from './App.module.css'
import { Suspense, lazy, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Routes, Route } from "react-router-dom";
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import { refreshUser } from '../../redux/auth/operations'
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';

const LoginPage =lazy(() =>  import("../../pages/LoginPage/LoginPage"));
const HomePage =lazy(() =>  import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));



export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])
  
  return (
    <Layout>
        <Suspense fallback={<div className={css.loaderWrapper}><Loader /></div>}>
        <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/' />} />
        
        <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        
        <Route path='/contacts' element={<PrivateRoute component={<ContactsPage/>} redirectTo='/login'/>}/>
          </Routes>
          </Suspense>
      </Layout>
  )
}


