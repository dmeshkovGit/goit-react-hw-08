
import css from './AppBar.module.css'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';


export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn) 
  const isRefreshing = useSelector(selectIsRefreshing)

    return (
            <div className={css.barWrapper}>
              <Navigation/>
             <h1 className={css.title}>PhoneBook</h1>
            {isRefreshing ? <span className={css.loader}></span> :(isLoggedIn ? <UserMenu /> : <AuthNav/>)} 
            </div> 
    )
}