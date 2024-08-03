import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './ContactForm.css';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const serviceID = 'YOUR_SERVICE_ID'; // החלף ב-service ID שלך מ-emailjs
        const templateID = 'YOUR_TEMPLATE_ID'; // החלף ב-template ID שלך מ-emailjs
        const userID = 'YOUR_USER_ID'; // החלף ב-user ID שלך מ-emailjs

        emailjs.send(serviceID, templateID, data, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('ההודעה נשלחה בהצלחה!');
            }, (error) => {
                console.log('FAILED...', error);
                alert('ההודעה נכשלה, אנא נסה שנית.');
            });
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>צור קשר</h2>
                    <div className="p-field">
                        <label htmlFor="email">מייל</label>
                        <InputText id="email" {...register('email', { required: true })} className={errors.email ? 'p-invalid' : ''} />
                        {errors.email && <small className="p-error">שדה זה הינו חובה</small>}
                    </div>
                    <div className="p-field">
                        <label htmlFor="message">פרטי פניה</label>
                        <InputTextarea id="message" {...register('message', { required: true })} rows={5} className={errors.message ? 'p-invalid' : ''} />
                        {errors.message && <small className="p-error">שדה זה הינו חובה</small>}
                    </div>
                    <Button type="submit" label="שלח" icon="pi pi-check" className="p-button-rounded p-button-success" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
