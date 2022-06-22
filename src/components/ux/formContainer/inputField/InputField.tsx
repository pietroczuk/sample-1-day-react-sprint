import { ChangeEventHandler, FC, FocusEventHandler } from "react";
import ValidIcon from "../../validation/validIcon/ValidIcon";
import styles from './inputField.module.scss';

interface InputFieldProps {
    fieldId: string,
    inputType: string,
    value: string,
    label: string,
    hasError: boolean | null,
    isValid: boolean,
    onChangeHandler: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
    onBlurHandler: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>,
}

const InputField: FC<InputFieldProps> = (props) => {
    const { fieldId, inputType, value, label, hasError, isValid, onChangeHandler, onBlurHandler } = props;

    const inputClass = hasError === null ? '' : hasError ? styles.invalid : styles.valid;

    return (
        <div className={styles.inputDataContainer}>
            <label htmlFor={fieldId}>{label}</label>
            <div className={styles.inputContainer}>
                {inputType === 'textarea' ?
                    <textarea
                        rows={4}
                        className={inputClass}
                        id={fieldId}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                        value={value}
                    ></textarea> :
                    <input
                        className={inputClass}
                        id={fieldId}
                        type={inputType}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                        value={value}
                    />
                }
                {hasError !== null &&
                    <ValidIcon isValid={isValid} />
                }
            </div>
        </div>
    )
}

export default InputField;