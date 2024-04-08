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
        <Formik
        initialValues={{
        name: "",
        email: "",
        password: ""
        }} onSubmit={handleSubmit}>
            <Form>
                <label>
                    Name
                    <Field type="name" name="name"></Field>
                </label> 
                <label>
                    Email
                    <Field type="email" name="email"></Field>
                </label> 
                 <label>
                    Password
                    <Field type="password" name="password"></Field>
                </label> 
                <button type='submit'>Register</button>
            </Form>
        </Formik>
    )
}