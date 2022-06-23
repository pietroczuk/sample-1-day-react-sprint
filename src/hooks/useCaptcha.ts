import { FormEvent, useState } from "react";

const useCaptcha = (validateFn: (value: number) => boolean) => {
    const [answerValue, setAnswerValue] = useState(0);
    const [isUserPassed, setIsUserPassed] = useState(false);
    const isPassed = validateFn(answerValue);

    const onClickHandler = (event: FormEvent<HTMLInputElement>) => {
        setAnswerValue(+event.currentTarget.value);
    }
    const reset = () => {
        setAnswerValue(0);   
        setIsUserPassed(false);
    }
    return {
        isPassed,
        isUserPassed,
        onClickHandler,
        setIsUserPassed,
        reset
    }
}

export default useCaptcha;