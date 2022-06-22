import questions from './botPreventData/questions.json';

export const getRandomQuestionData = (prevIndex?: number) => {
    let randomIndex = 0;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (randomIndex === prevIndex);
    console.log("randomIndex", randomIndex, "prevIndex", prevIndex);

    return {
        question: questions[randomIndex].question,
        answers: questions[randomIndex].answers,
        index: randomIndex
    };
}