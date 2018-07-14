import getRandomNumber from '../common/randomNumber';
import startGame, { makeQuestionAndAnswer } from '../gameEngine';

const description = 'Is this number prime?';

const isPrime = (num) => {
  const smallestDivisor = () => {
    const findDivisor = (testDivisor) => {
      if (testDivisor ** 2 > num) {
        return num;
      }

      if (num % testDivisor === 0) {
        return testDivisor;
      }

      return findDivisor(testDivisor + 1);
    };

    return findDivisor(2);
  };

  return num === smallestDivisor();
};
const getCorrectAnswer = question => (isPrime(question) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return makeQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
