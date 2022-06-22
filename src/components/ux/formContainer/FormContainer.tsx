import { FC, useState, FormEvent } from "react";
import styles from './FormContainer.module.scss';
import { validateName } from "../../../utils/utils";
import InputField from "./inputField/InputField";

const FormContainer: FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = validateName(name);

    const nameInputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        const inputValue = event.currentTarget.value;
        setName(inputValue);
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
        setEnteredNameTouched(false);
    }

    const formSubmitionHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEnteredNameTouched(true);
    }

    return <div className={styles.container}>
        <form onSubmit={formSubmitionHandler}>
            <InputField 
                fieldId="name"
                inputType="text"
                valueIsValid={enteredNameIsValid}
                label="Imię i nazwisko"
                onBlurHandlerFn={setEnteredNameTouched}
                onChangeHandler={nameInputChangeHandler}
                value={name}
                wasTouched={enteredNameTouched}       
            />
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