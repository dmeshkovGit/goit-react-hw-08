import { useSelector } from 'react-redux'
import css from './Navigation.module.css'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';


export default function Navigation({switchModalIsOpen}) {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>{isLoggedIn ? <UserMenu switchModalIsOpen={switchModalIsOpen} /> : <AuthNav/>}</>
    )
}