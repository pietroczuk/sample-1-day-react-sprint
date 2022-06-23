import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import styles from './FormContainer.module.scss';
import { validateEmail, validateMessage, validateName, validatePhone } from "../../../utils/formUtils";
import InputField from "./inputField/InputField";

import useInput from "../../../hooks/useInput";
import BotPrevent from "../botPrevent/BotPrevent";
import useCaptcha from "../../../hooks/useCaptcha";
import { validateAnswer } from "../../../utils/botUtils";
import CheckBox from "../../ui/checkBox/CheckBox";

interface FormContainerProps {
    isFormActive: boolean
}
const FormContainer: FC<FormContainerProps> = ({ isFormActive }) => {
    const [isFormActiveChanged, setIsFormActiveChanged] = useState(isFormActive);

    const nameData = useInput(validateName);
    const emailData = useInput(validateEmail);
    const phoneData = useInput(validatePhone);
    const messageData = useInput(validateMessage);

    const captchaData = useCaptcha(validateAnswer);

    const formIsValid = nameData.isValid && emailData.isValid && phoneData.isValid && messageData.isValid && captchaData.isPassed;

    const resetForm = useCallback(() => {
        nameData.reset();
        emailData.reset();
        phoneData.reset();
        messageData.reset();
        captchaData.reset();
    }, [nameData, emailData, phoneData, messageData, captchaData]);

    useEffect(() => {
        if (isFormActiveChanged !== isFormActive) {
            setIsFormActiveChanged(isFormActive);
            resetForm();
        }
    }, [isFormActive, resetForm, isFormActiveChanged])

    // console.log('isFormActive', isFormActive);

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
            <BotPrevent {...captchaData} />
            <CheckBox label="Rodo jakies czy cos innego" onClick={() => { }} />

            <button className={`${styles.submit} ${formIsValid ? '' : styles.disabled}`} type="submit">wyślij</button>
            <button onClick={resetForm}>reset</button>
        </form>
    </div>
}

export default FormContainer;