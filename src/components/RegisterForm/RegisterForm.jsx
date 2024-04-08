import { Field, Form, Formik } from 'formik'
import css from './RegisterForm.module.css'
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';


export default function RegisterForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        actions.resetForm();
    }
    return (
        <div className={css.wrapper}>
        <Formik
        initialValues={{
        name: "",
        email: "",
        password: ""
        }} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <h1 className={css.title}>User Registration</h1>
                <div className={css.fieldWrapper}>
                    <Field placeholder="Name" className={css.field} type="name" name="name"></Field>
                    <Field placeholder="Email" className={css.field} type="email" name="email"></Field>
                    <Field placeholder="Password" className={css.field} type="password" name="password"></Field>
                </div>
                    
                <button className={css.btn} type='submit'>Register</button>
            </Form>
        </Formik>
        </div>
    )
}