import { Field, Form, Formik } from 'formik'
import css from './LoginForm.module.css'
import { useDispatch } from 'react-redux';
import { logIn, logOut } from '../../redux/auth/operations';

export default function LoginForm() {
    
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
    }

    return (
        <Formik
         initialValues={{ email: "", password: "" }}
         onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label className={css.lable}>
                    Email
                    <Field className={css.field} type="email" name="email"/>
                </label>  
                <label className={css.lable}>
                    Password
                    <Field className={css.field} type="password" name="password"/>
                </label>  
                <button className={css.btn} type="submit">Login</button>
            </Form>
        </Formik>
    )
}