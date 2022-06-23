import questions from './botPreventData/questions.json';

const primeNumbersArray = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomNotPrimeNumber = (range: number, alreadyUsedNumbersArr: number[]) => {
    let fakeNumber = 0;
    do {
        fakeNumber = getRandomNumber(4, range);
        // need to check if its not prime ane we dont already used it
        // because it will effect to not unique key prop
    } while (primeNumbersArray.includes(fakeNumber - 1) || alreadyUsedNumbersArr.includes(fakeNumber));
    return fakeNumber
}

export const getRandomQuestionData = (prevIndex?: number) => {
    let randomIndex = 0;
    do {
        randomIndex = getRandomNumber(0, questions.length);
        // make sure we dont get the same number as before
    } while (randomIndex === prevIndex);

    return {
        question: questions[randomIndex].question,
        answers: shuffleAnswers(questions[randomIndex].answers),
        index: randomIndex
    };
}

interface Answers {
    answer: string;
    correct?: boolean;
}

interface CryptoArrayItem {
    answer: string,
    id: number
}
const shuffleAnswers = (answers: Array<Answers>) => {
    const newAnswers = [...answers];

    /**
     * Need to add extra security
     * 1. Value of correct answer will have random prime number + 1
     * 2. Validation will be:
     *      - substract 1 from value
     *      - check if this number is prime number
     * 3. Each answer theoretically, will have random value on every loop
     * 4. +- 1 is for confuse chetears with odd and even numbers
     */

    const cryptoAnswers: CryptoArrayItem[] = [];
    const alreadyUsedNumbers: number[] = [];
    newAnswers.forEach(answer => {
        const answerValue = answer.correct ?
            primeNumbersArray[getRandomNumber(0, primeNumbersArray.length)] + 1
            :
            getRandomNotPrimeNumber(100, alreadyUsedNumbers);

        alreadyUsedNumbers.push(answerValue);
        cryptoAnswers.push({
            answer: answer.answer,
            id: answerValue,
        })
    });
    /**
     * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array/6274381#6274381
     * Shuffle answers array
     */
    for (let i = cryptoAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cryptoAnswers[i], cryptoAnswers[j]] = [cryptoAnswers[j], cryptoAnswers[i]];
    }
    return cryptoAnswers;
}

export const validateAnswer = (value: number) => {
    return primeNumbersArray.includes(value - 1);
}