import getRandomNumber from '../common/randomNumber';
import { makeQuestionAndAnswer } from '../common/questionAndAnswer';
import startGame from '../game';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};
const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);

  return makeQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  startGame(description, getQuestionAndAnswer);
};
