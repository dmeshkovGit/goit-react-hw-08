import { Field, Form, Formik } from 'formik'
import css from './LoginForm.module.css'
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';


export default function LoginForm() {
    
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    }

    return (
        <div className={css.wrapper}>
             <Formik 
         initialValues={{ email: "", password: "" }}
         onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                    <h1 className={css.title}>User Login</h1>
                    <div className={css.fieldWrapper}>
                    <Field placeholder="Email" className={css.field} type="email" name="email"/>
                    <Field placeholder="Password" className={css.field} type="password" name="password"/>
                    </div>
        <p className={css.registerInfo}>Don't have an account yet? <NavLink to="/register">Create now</NavLink></p>
                <button className={css.btn} type="submit">Login</button>
            </Form>
        </Formik>
        </div>
       
    )
}