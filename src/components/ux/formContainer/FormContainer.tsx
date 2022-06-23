import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import styles from './FormContainer.module.scss';
import { validateEmail, validateMessage, validateName, validatePhone } from "../../../utils/formUtils";
import InputField from "./inputField/InputField";

import useInput from "../../../hooks/useInput";
import BotPrevent from "../botPrevent/BotPrevent";
import useCaptcha from "../../../hooks/useCaptcha";
import { validateAnswer } from "../../../utils/botUtils";
import CheckBox from "../../ui/checkBox/CheckBox";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

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

    const [rodoPassed, setRodoPassed] = useState(false);
    const [formIsSubmiting, setFormIsSubmiting] = useState(false);

    const rodoClickHandler = () => {
        setRodoPassed(prev => !prev);
    }

    const formIsValid =
        nameData.isValid &&
        emailData.isValid &&
        phoneData.isValid &&
        messageData.isValid &&
        (captchaData.isPassed && captchaData.isUserPassed) &&
        rodoPassed;

    const resetForm = useCallback(() => {
        nameData.reset();
        emailData.reset();
        phoneData.reset();
        messageData.reset();
        captchaData.reset();
        setRodoPassed(false);
        setFormIsSubmiting(false);
    }, [nameData, emailData, phoneData, messageData, captchaData]);

    useEffect(() => {
        if (isFormActiveChanged !== isFormActive) {
            setIsFormActiveChanged(isFormActive);
            resetForm();
        }
    }, [isFormActive, resetForm, isFormActiveChanged])

    const formSubmitionHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formIsValid) return;

        setFormIsSubmiting(true);

        // console.
    }

    return <div className={styles.container}>
        {formIsSubmiting && <div className={styles.sendingOverlay}>
            <div className={styles.infoContainer}>
                <h4>Wysyłam wiadomość</h4>
                <LoadingSpinner />
            </div>
        </div>
        }
        {!formIsSubmiting && <form onSubmit={formSubmitionHandler} autoComplete="nope">
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
            <CheckBox label="Rodo jakies czy cos innego" onClick={rodoClickHandler} checked={rodoPassed} />

            <button className={`${styles.submit} ${formIsValid ? '' : styles.disabled}`} type="submit">wyślij</button>
        </form>
        }
    </div>
}

export default FormContainer;