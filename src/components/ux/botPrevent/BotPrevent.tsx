import { FC, MouseEventHandler, useState } from "react";
import { getRandomQuestionData } from "../../../utils/botUtils";
import styles from './BotPrevent.module.scss';

interface BotPreventProps {
    isPassed: boolean,
    onClickHandler: MouseEventHandler<HTMLInputElement>,
    reset: Function
}

const BotPrevent: FC<BotPreventProps> = ({ isPassed, onClickHandler, reset }) => {
    const [questionData, setQuestion] = useState(getRandomQuestionData());
    const randomOnClickHandler = () => {
        reset();
        setQuestion(getRandomQuestionData(questionData.index));
    }
    // const onClickHandler = (event: FormEvent<HTMLInputElement>) => {
    //     const answerValue = event.currentTarget.value;
    //     const isCorrect = checkAnswer(+answerValue);
    //     isCorrect && alert('ok');
    // }
    return <div>
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
        <br />
        <button onClick={randomOnClickHandler}>losuj pytanie</button>
    </div>
}

export default BotPrevent;