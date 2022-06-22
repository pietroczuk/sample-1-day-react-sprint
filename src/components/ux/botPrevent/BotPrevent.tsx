import { FC, useState } from "react";
import { getRandomQuestionData } from "../../../utils/botUtils";
import styles from './BotPrevent.module.scss';

const BotPrevent: FC = () => {
    const [questionData, setQuestion] = useState(getRandomQuestionData());
    const onClickHandler = () => {
        setQuestion(getRandomQuestionData(questionData.index));
    }
    // console.log(questionData);
    return <div>
        <h4>{questionData.question}</h4>
        {questionData.answers.map((answerData, index) => {
            const answerId = `answer_${index}`;
            return <div className={styles.answer}>
                <input id={answerId} type="radio" key={index} name="answer" value={index} />
                <label htmlFor={answerId}>{answerData.answer}</label>
            </div>
        })}
        <button onClick={onClickHandler}>losuj pytanie</button>
    </div>
}

export default BotPrevent;