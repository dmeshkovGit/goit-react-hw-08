import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import css from './LoginPage.module.css'

export default function LoginPage() {
    return (
        <div>
            <LoginForm />
            <p>If you haven`t an account yet tap to register <Link to="/register">Register</Link></p>
            <Link to="/contacts">contacts</Link>
        </div>
        
    )
}