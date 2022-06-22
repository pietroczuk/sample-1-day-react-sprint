import { FC, useState } from "react";
import { getRandomQuestionData } from "../../../utils/botUtils";

const BotPrevent: FC = () => {
    const [questionData, setQuestion] = useState(getRandomQuestionData());
    const onClickHandler = () => {
        setQuestion(getRandomQuestionData(questionData.index));
    }
    // console.log(questionData);
    return <div>
        <h4>{questionData.question}</h4>
        {questionData.answers.map((answerData, index) => {
            return <p key={index}>{answerData.answer}</p>
        })}
        <button onClick={onClickHandler}>losuj pytanie</button>
    </div>
}

export default BotPrevent;