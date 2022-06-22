import { ChangeEventHandler, Dispatch, FC, SetStateAction } from "react";
import ValidIcon from "../../validation/validIcon/ValidIcon";
import styles from './inputField.module.scss';

interface InputFieldProps {
    fieldId: string,
    inputType: string,
    value: string,
    label: string,
    wasTouched: boolean,
    valueIsValid: boolean,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>,
    onBlurHandlerFn: Dispatch<SetStateAction<boolean>>,
}

const InputField: FC<InputFieldProps> = (props) => {
    const { fieldId, inputType, value, label, wasTouched, valueIsValid, onChangeHandler, onBlurHandlerFn } = props;

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
    return (
        <div className={styles.inputDataContainer}>
            <label htmlFor={fieldId}>{label}</label>
            <div className={styles.inputContainer}>
                <input
                    className={nameInputClasses}
                    id={fieldId}
                    type={inputType}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    value={value}
                />
                <ValidIcon isValid={valueIsValid} isHiding={!wasTouched} />
            </div>
        </div>
    )
}

export default InputField;