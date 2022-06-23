import { FC, FormEvent, useState } from "react";
import { checkAnswer, getRandomQuestionData } from "../../../utils/botUtils";
import styles from './BotPrevent.module.scss';

const BotPrevent: FC = () => {
    const [questionData, setQuestion] = useState(getRandomQuestionData());
    const rnadomOnClickHandler = () => {
        setQuestion(getRandomQuestionData(questionData.index));
    }
    const onClickHandler = (event: FormEvent<HTMLInputElement>) => {
        const answerValue = event.currentTarget.value;
        const isCorrect = checkAnswer(+answerValue);
        isCorrect && alert('ok');
    }
    return <div>
        <h4>{questionData.question}</h4>
        {questionData.answers.map(answerData => {
            const answerId = `answer_${answerData.id}_${new Date().getMilliseconds()}`;
            return <div className={styles.answer} key={answerData.id}>
                <input id={answerId} type="radio" name="answer" value={answerData.id} onClick={onClickHandler}/>
                <label htmlFor={answerId}>{answerData.answer} {answerData.id}
                {checkAnswer(answerData.id) ? '[OK]' : ''}
                </label>
            </div>
        })}
        <br />
        <button onClick={rnadomOnClickHandler}>losuj pytanie</button>
    </div>
}

export default BotPrevent;