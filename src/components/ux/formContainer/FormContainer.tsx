import { FC, useState, FormEvent } from "react";
import styles from './FormContainer.module.scss';
import ValidIcon from "../validation/validIcon/ValidIcon";

const FormContainer: FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

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

        if (name.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        } else {
            setEnteredNameIsValid(true);
        }
        // console.log(name, email, phone, message);
    }

    return <div className={styles.container}>
        <form onSubmit={formSubmitionHandler}>
            <div className={styles.inputDataContainer}>
                <label htmlFor="name">Imię i nazwisko</label>
                <div className={styles.inputContainer}>
                    <input className={`${enteredNameIsValid ? styles.valid : styles.invalid}`} id="name" type="text" onChange={setNameHandler} value={name} />
                    {enteredNameIsValid ?
                        <ValidIcon isValid={true} />
                        :
                        <ValidIcon isValid={false} />
                    }
                </div>
            </div>
            <div className={styles.inputDataContainer}>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" onChange={setEmailHandler} value={email} />
            </div>

            <div className={styles.inputDataContainer}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" type="phone" onChange={setPhoneHandler} value={phone} />
            </div>
            <div className={styles.inputDataContainer}>
                <label htmlFor="message">Wiadomość</label>
                <textarea id="message" rows={4} onChange={setMessageHandler} value={message} />
            </div>

            <p>nie jestem robotem itd</p>
            <p>moze jakies rodo jeszcze</p>

            <button className={styles.submit} type="submit">wyślij</button>
            <button onClick={resetForm}>reset</button>
        </form>
    </div>
}

export default FormContainer;