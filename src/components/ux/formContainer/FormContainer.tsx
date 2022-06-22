import { FC, useState, FormEvent } from "react";
import styles from './FormContainer.module.scss';
import { validateEmail, validateMessage, validateName, validatePhone } from "../../../utils/utils";
import InputField from "./inputField/InputField";

const FormContainer: FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false);
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

    const enteredNameIsValid = validateName(name);
    const enteredEmailIsValid = validateEmail(email);
    const enteredPhoneIsValid = validatePhone(phone);
    const enteredMessageIsValid = validateMessage(message);

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
                onChangeHandlerFn={setName}
                value={name}
                wasTouched={enteredNameTouched}       
            />
            <InputField 
                fieldId="email"
                inputType="email"
                valueIsValid={enteredEmailIsValid}
                label="E-mail"
                onBlurHandlerFn={setEnteredEmailTouched}
                onChangeHandlerFn={setEmail}
                value={email}
                wasTouched={enteredEmailTouched}       
            />
            <InputField 
                fieldId="phone"
                inputType="phone"
                valueIsValid={enteredPhoneIsValid}
                label="Telefon"
                onBlurHandlerFn={setEnteredPhoneTouched}
                onChangeHandlerFn={setPhone}
                value={phone}
                wasTouched={enteredPhoneTouched}       
            />
            <InputField 
                fieldId="message"
                inputType="textarea"
                valueIsValid={enteredMessageIsValid}
                label="Wiadomość"
                onBlurHandlerFn={setEnteredMessageTouched}
                onChangeHandlerFn={setMessage}
                value={message}
                wasTouched={enteredMessageTouched}       
            />
            
            <p>nie jestem robotem itd</p>
            <p>moze jakies rodo jeszcze</p>

            <button className={styles.submit} type="submit">wyślij</button>
            <button onClick={resetForm}>reset</button>
        </form>
    </div>
}

export default FormContainer;