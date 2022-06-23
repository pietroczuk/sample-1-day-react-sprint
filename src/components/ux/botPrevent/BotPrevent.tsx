import { FC, MouseEventHandler, useState } from "react";
import { getRandomQuestionData } from "../../../utils/botUtils";
import CheckBox from "../../ui/checkBox/CheckBox";
import styles from './BotPrevent.module.scss';
import refreshIcon from '../../ui/icons/refresh.svg';

interface BotPreventProps {
    isPassed: boolean,
    onClickHandler: MouseEventHandler<HTMLInputElement>,
    reset: Function
}

const BotPrevent: FC<BotPreventProps> = ({ isPassed, onClickHandler, reset }) => {
    const [questionData, setQuestion] = useState(getRandomQuestionData());
    const [showCaptcha, setShowCaptcha] = useState(false);

    const checkboxClickHandler = () => {
        setShowCaptcha(prev => !prev);
    }
    const randomOnClickHandler = () => {
        reset();
        setQuestion(getRandomQuestionData(questionData.index));
    }

    return <div className={styles.mainCointainer}>
        <CheckBox label="Nie jestem robotem" onClick={checkboxClickHandler} />

        {showCaptcha && <div className={styles.captchaCointainer}>
            <p>{isPassed ? 'HUMAN' : 'BOT'}</p>
            <h4>{questionData.question}</h4>
            {questionData.answers.map(answerData => {
                const answerId = `answer_${answerData.id}_${new Date().getMilliseconds()}`;
                return <div className={styles.answer} key={answerData.id}>
                    <input id={answerId} type="radio" name="answer" value={answerData.id} onClick={onClickHandler} />
                    <label htmlFor={answerId}>{answerData.answer} {answerData.id}
                        {/* {checkAnswer(answerData.id) ? '[OK]' : ''} */}
                    </label>
                </div>
            })}
            <div className={styles.buttonsCointaner}>
            <button onClick={()=> {}}>sprawdź</button>
                <div className={styles.refresh} onClick={randomOnClickHandler}>
                    <img src={refreshIcon} alt="odśwież" width="100%" height="100%" />
                </div>   
            </div>
        </div>}
    </div>
}

export default BotPrevent;