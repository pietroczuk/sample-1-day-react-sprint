import { FC, useState, FormEvent } from "react";
import styles from './FormContainer.module.scss';

const FormContainer: FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const setNameHandler = (event: FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }
    const setEmailHandler = (event: FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }
    const setPhoneHandler = (event: FormEvent<HTMLInputElement>) => {
        setPhone(event.currentTarget.value);
    }
    const setMessageHandler = (event: FormEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value);
    }
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }
    const formSubmitionHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(name, email, phone, message);
    }

    return <div className={styles.container}>
        <form onSubmit={formSubmitionHandler}>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Imię i nazwisko</label>
                <input id="name" type="text" onChange={setNameHandler} value={name} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" onChange={setEmailHandler} value={email} />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" type="phone" onChange={setPhoneHandler} value={phone} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="message">Wiadomość</label>
                <textarea id="message" rows={4} onChange={setMessageHandler} value={message} />
            </div>

            <button className={styles.submit} type="submit">wyślij</button>
            <button onClick={resetForm}>reset</button>
        </form>
    </div>
}

export default FormContainer;