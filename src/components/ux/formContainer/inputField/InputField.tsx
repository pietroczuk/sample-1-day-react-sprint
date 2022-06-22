import { Dispatch, FC, FormEvent, SetStateAction } from "react";
import ValidIcon from "../../validation/validIcon/ValidIcon";
import styles from './inputField.module.scss';

interface InputFieldProps {
    fieldId: string,
    inputType: string,
    value: string,
    label: string,
    wasTouched: boolean,
    valueIsValid: boolean,
    onChangeHandlerFn: Dispatch<SetStateAction<string>>,
    onBlurHandlerFn: Dispatch<SetStateAction<boolean>>,
}

const InputField: FC<InputFieldProps> = (props) => {
    const { fieldId, inputType, value, label, wasTouched, valueIsValid, onChangeHandlerFn, onBlurHandlerFn } = props;

    let nameInputClasses = '';
    if (wasTouched && valueIsValid) {
        nameInputClasses = styles.valid;
    }
    if (wasTouched && !valueIsValid) {
        nameInputClasses = styles.invalid;
    }
    const onBlurHandler = () => {
        onBlurHandlerFn(true);
    }
    const onChangeHandler = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const inputValue = event.currentTarget.value;
        onChangeHandlerFn(inputValue);
    }
    return (
        <div className={styles.inputDataContainer}>
            <label htmlFor={fieldId}>{label}</label>
            <div className={styles.inputContainer}>
                {inputType === 'textarea' ?
                    <textarea
                        rows={4}
                        className={nameInputClasses}
                        id={fieldId}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                        value={value}
                    ></textarea> :
                    <input
                        className={nameInputClasses}
                        id={fieldId}
                        type={inputType}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                        value={value}
                    />
                }
                <ValidIcon isValid={valueIsValid} isHiding={!wasTouched} />
            </div>
        </div>
    )
}

export default InputField;