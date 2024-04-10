
import css from './AppBar.module.css'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';


export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn) 
  

    return (
            <div className={css.barWrapper}>
              <Navigation/>
             <h1 className={css.title}>PhoneBook</h1>
             {isLoggedIn ? <UserMenu /> : <AuthNav/>}
            </div> 
    )
}