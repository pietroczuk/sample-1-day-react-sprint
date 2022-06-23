import { FormEvent, useState } from "react";

const useCaptcha = (validateFn: (value: number) => boolean) => {
    const [answerValue, setAnswerValue] = useState(0);
    const isPassed = validateFn(answerValue);

    const onClickHandler = (event: FormEvent<HTMLInputElement>) => {
        setAnswerValue(+event.currentTarget.value);
    }
    const reset = () => {
        setAnswerValue(0);   
    }
    return {
        isPassed,
        onClickHandler,
        reset
    }
}

export default useCaptcha;