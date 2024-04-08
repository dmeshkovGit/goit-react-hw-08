import { Link } from 'react-router-dom'
import css from './HomePage.module.css'
import { useSelector } from 'react-redux'
import {selectIsLoggedIn} from "../../redux/auth/selectors"
export default function HomePage() {
    const isLogedIn = useSelector(selectIsLoggedIn)
    const reviewEmail = 'dmitriymeshkov.a@gmail.com'
    return (
        <div className={css.homeWrapper}>
            <h1 className={css.title}>Welcome to the PhoneBook App</h1>
            <p className={css.text}>This application is designed to help you store and organize your contacts. To access your contacts, you need to <Link to='/login'>login</Link> to your account and then tap on the top left icon to open the user menu. </p>
            <p className={css.text}>I hope you enjoy using this app and if you have any ideas to improve it, please feel free to  <a href={`mailto:${reviewEmail}`}>text me</a> </p>
            
        </div>
    )
}