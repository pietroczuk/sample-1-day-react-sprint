import { FormEvent, useState } from "react";

const useInput = (validateFn: (valueForCheck: string) => boolean) => {
    const [value, setValue] = useState('');
    const [inputWasTouched, setInputWasTouched] = useState(false);

    const inputValueIsValid = validateFn(value);

    let hasError = null;
    if (inputWasTouched && inputValueIsValid) {
        hasError = false;
    }
    if (inputWasTouched && !inputValueIsValid) {
        hasError = true;
    }

    const onChangeHandler = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    }

    const onBlurHandler = () => {
        setInputWasTouched(true);
    }

    const reset = () => {
        setValue('');
        setInputWasTouched(false);
    }

    return {
        value,
        hasError,
        isValid: inputValueIsValid,
        onChangeHandler,
        onBlurHandler,
        reset
    }
}
export default useInput;