import React from 'react';
import {ContactWrapper} from "../style/ContactStyle.jsx";
import { useFormik } from "formik";
import {ContactSchema} from "../schemas/ContactSchema.jsx";

const Contact = (props) => {
    const mt15 = props.emptyMt.marginTop15;
    const initialValues = {
        username: "",
        email: "",
        message: "", 
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: ContactSchema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: (values, action) => { 
                //// to get rid of all the values after submitting the form
                action.resetForm();
            },
        });
    
    return (
        <>
            <ContactWrapper>
                <div style={{marginTop: mt15}}></div>
                <h2 className="contact-heading"><span>Feel Free to Contact us</span></h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239550783!2d90.2791949819438!3d23.7808874545031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1661968186501!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className="container">
                    <div className="contact-form">
                        <form action="https://formspree.io/f/mvoygeee" method="POST" className="contact-inputs form-border" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                autoComplete="off"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.username && errors.username ? (
                                <p className="form-error">{errors.username}</p>
                            ) : null}

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email ? (
                                <p className="form-error">{errors.email}</p>
                            ) : null}
                            <textarea
                                name="message"
                                cols="30"
                                rows="6"
                                autoComplete="off"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}></textarea>
                            {touched.message && errors.message ? (
                                <p className="form-error">{errors.message}</p>
                            ) : null}
                            <input type="submit" value="send" />
                        </form>
                    </div>
                </div>
            </ContactWrapper>
            );
        </>
    );
};

export default Contact;
