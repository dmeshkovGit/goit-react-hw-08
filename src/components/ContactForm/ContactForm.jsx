import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react'
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';




export default function ContactForm({switchModal}) {
    const nameFieldId = useId(); 
    const numberFieldId = useId();
    const ContactSchema = Yup.object().shape({
        contactName: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
        contactNumber: Yup.string().min(3, "Too short").max(50, "Too long").required("Required")
    });
    const dispatch = useDispatch()

    return (
        <Formik initialValues={{ contactName: "", contactNumber: "" }} validationSchema={ContactSchema} onSubmit={({contactName, contactNumber}, actions) => {
            const newContact = { id: nanoid(), name: contactName, number: contactNumber };
            dispatch(addContact(newContact));
            actions.resetForm();
            switchModal();
        }}>
            <Form className={css.form}>
                <div className={css.inputsWrap}>
                <div className={css.inputWrapper}>
                    <Field className={css.input} placeholder="Name" type="text" name="contactName" id={nameFieldId}></Field>
                    <ErrorMessage className={css.error} name="contactName" component="span" />
                </div>
                <div className={css.inputWrapper}>
                    <Field className={css.input} placeholder="Phone" type="phone" name="contactNumber" id={numberFieldId}></Field>
                    <ErrorMessage className={css.error} name="contactNumber" component="span" />  
                </div>    
                 </div>
                
                
            
                <button className={css.submitBtn} type="submit">Add contact</button>
                
          </Form>
        </Formik>
    )
}