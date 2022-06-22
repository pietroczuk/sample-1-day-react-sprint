import questions from './botPreventData/questions.json';

export const getRandomQuestionData = (prevIndex?: number) => {
    let randomIndex = 0;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (randomIndex === prevIndex);

    return {
        question: questions[randomIndex].question,
        answers: shuffleAnswers([...questions[randomIndex].answers]),
        index: randomIndex
    };
}
interface Answers {
    answer: string;
    correct?: boolean;
}
const shuffleAnswers = (answers: Array<Answers>) => {
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}