import { Dispatch, FC, MouseEventHandler, SetStateAction, useState } from "react";
import { getRandomQuestionData } from "../../../utils/botUtils";
import CheckBox from "../../ui/checkBox/CheckBox";
import styles from './BotPrevent.module.scss';
import refreshIcon from '../../ui/icons/refresh.svg';
import closeIcon from '../../ui/icons/close.svg';
import IconButton from "../iconButton/IconButton";

interface BotPreventProps {
    isPassed: boolean,
    isUserPassed: boolean,
    onClickHandler: MouseEventHandler<HTMLInputElement>,
    setIsUserPassed: Dispatch<SetStateAction<boolean>>,
    reset: Function
}

const BotPrevent: FC<BotPreventProps> = ({ isPassed, onClickHandler, reset, isUserPassed, setIsUserPassed }) => {
    const [questionData, setQuestion] = useState(getRandomQuestionData());
    const [showCaptcha, setShowCaptcha] = useState(false);

    // const [captchaPassed, setCaptchaPassed] = useState(false);

    const checkboxClickHandler = () => {
        setShowCaptcha(prev => !prev);
    }
    const randomOnClickHandler = () => {
        reset();
        // setCaptchaPassed(false);
        setQuestion(getRandomQuestionData(questionData.index));
    }
    const closeHandler = () => {
        setShowCaptcha(false);
        // setCaptchaPassed(false);
        reset();
    }
    const checkAnswerHandler = () => {
        if (isPassed) {
            setIsUserPassed(true);
            setShowCaptcha(false);
            // reset();
        } else {
            randomOnClickHandler();
        }
    }
    // console.log('captchaPassed', captchaPassed);
    return <div className={styles.mainCointainer}>
        <CheckBox label="Nie jestem robotem" onClick={checkboxClickHandler} forceChecked={isUserPassed} />

        {showCaptcha && !isUserPassed && <div className={styles.captchaCointainer}>
            {/* <p>{isPassed ? 'HUMAN' : 'BOT'}</p> */}
            <div className={styles.question}>{questionData.question}</div>
            <div className={styles.answersContainer}>
                {questionData.answers.map(answerData => {
                    const answerId = `answer_${answerData.id}_${new Date().getMilliseconds()}`;
                    return <div className={styles.answer} key={answerData.id}>
                        <input id={answerId} type="radio" name="answer" value={answerData.id} onClick={onClickHandler} />
                        <label htmlFor={answerId}>{answerData.answer} {answerData.id}
                            {/* {checkAnswer(answerData.id) ? '[OK]' : ''} */}
                        </label>
                    </div>
                })}
            </div>
            <div className={styles.buttonsCointaner}>
                <button className={styles.send} onClick={checkAnswerHandler}>sprawdź odpowiedź</button>
                <IconButton iconSrc={refreshIcon} onClick={randomOnClickHandler} />
            </div>
            <div className={styles.closeIconCointaner}>
                <IconButton iconSrc={closeIcon} onClick={closeHandler} />
            </div>
        </div>}
    </div>
}

export default BotPrevent;