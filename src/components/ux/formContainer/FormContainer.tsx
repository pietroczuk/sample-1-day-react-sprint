import { FC, FormEvent } from "react";
import styles from './FormContainer.module.scss';
import { validateEmail, validateMessage, validateName, validatePhone } from "../../../utils/formUtils";
import InputField from "./inputField/InputField";

import useInput from "../../../hooks/useInput";
import BotPrevent from "../botPrevent/BotPrevent";

const FormContainer: FC = () => {
    const nameData = useInput(validateName);
    const emailData = useInput(validateEmail);
    const phoneData = useInput(validatePhone);
    const messageData = useInput(validateMessage);

    const formIsValid = nameData.isValid && emailData.isValid && phoneData.isValid && messageData.isValid;

    const resetForm = () => {
        nameData.reset();
        emailData.reset();
        phoneData.reset();
        messageData.reset();
    }

    const formSubmitionHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return <div className={styles.container}>
        <form onSubmit={formSubmitionHandler} autoComplete="nope">
            <InputField
                fieldId="name"
                label="Imię i nazwisko"
                inputType="text"
                {...nameData}
            />

            <InputField
                fieldId="email"
                label="E-mail"
                inputType="email"
                {...emailData}
            />
            <InputField
                fieldId="phone"
                label="Telefon"
                inputType="phone"
                {...phoneData}
            />
            <InputField
                fieldId="message"
                label="Wiadomość"
                inputType="textarea"
                {...messageData}
            />

            <BotPrevent />
            <p>moze jakies rodo jeszcze</p>

            <button className={`${styles.submit} ${formIsValid ? '' : styles.disabled}`} type="submit">wyślij</button>
            <button onClick={resetForm}>reset</button>
        </form>
    </div>
}

export default FormContainer;