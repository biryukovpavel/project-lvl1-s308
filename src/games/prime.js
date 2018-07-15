import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import startGame from '../gameEngine';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  const findSmallestDivisor = (testDivisor) => {
    if (testDivisor ** 2 > num) {
      return num;
    }

    if (num % testDivisor === 0) {
      return testDivisor;
    }

    return findSmallestDivisor(testDivisor + 1);
  };

  return num === findSmallestDivisor(2);
};
const getCorrectAnswer = question => (isPrime(question) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return cons(question, correctAnswer);
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
