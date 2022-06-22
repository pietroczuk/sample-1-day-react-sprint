import { FC, useState } from "react";
import { getRandomQuestionData } from "../../../utils/botUtils";

const BotPrevent: FC = () => {
    const [questionData, setQuestion] = useState(getRandomQuestionData());
    const onClickHandler = () => {
        setQuestion(getRandomQuestionData(questionData.index));
    }
    return <div>
        <h4>{questionData.question}</h4>
        {questionData.answers.map((answer, index) => {
            return <p key={index}>{answer.answer}</p>
        })}
        <button onClick={onClickHandler}>losuj pytanie</button>
    </div>
}

export default BotPrevent;