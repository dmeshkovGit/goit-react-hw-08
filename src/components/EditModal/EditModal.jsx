import React from 'react';
import Modal from 'react-modal';
import css from './EditModal.module.css'
import { IoClose } from "react-icons/io5";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react'
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import { TbUserSquareRounded } from "react-icons/tb";


const customStyles = {
  content: {
    top: '198px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '300px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
      justifyContent: 'center',
  alignItems: 'center',
    },
    overlay: {
     backgroundColor: '#3939395c'
    }
};
Modal.setAppElement('#root');



export default function EditModal({ id, name, number, isOpen, closeModal }) {
   
    const nameFieldId = useId(); 
    const numberFieldId = useId();
    const ContactSchema = Yup.object().shape({
        contactName: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
        contactNumber: Yup.string().min(3, "Too short").max(50, "Too long").required("Required")
    });
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteContact(id));
        closeModal();
    }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit contact modal"
      >
            <h2 className={css.title}>Contact</h2>
            <TbUserSquareRounded className={css.contactIcon} />
              <button className={css.closeBtn} onClick={closeModal}><IoClose className={css.closeIcon} /></button>

              <Formik
                  initialValues={{ contactName: `${name}`, contactNumber: `${number}` }}

                  validationSchema={ContactSchema}

                  onSubmit={({ contactName, contactNumber }) => {
                      const newContact = { name: contactName, number: contactNumber };
                      const contactInfo = {id, newContact}
                      dispatch(editContact(contactInfo));
                      closeModal();
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
                      <div className={css.btnsWrapper}>
                          <button type='bitton' onClick={() => handleDelete(id)} className={css.deleteBtn}>Delete</button>
                          <button className={css.submitBtn} type="submit">Edit</button>
                      </div>
                      
                      
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}