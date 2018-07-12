import getRandomNumber from '../common/randomNumber';
import { makeQuestionAndAnswer } from '../common/questionAndAnswer';
import startGame from '../game';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const randOperation = getRandomNumber(1, 3);

  switch (randOperation) {
    case 1:
      return makeQuestionAndAnswer(`${num1} + ${num2}`, num1 + num2);
    case 2:
      return makeQuestionAndAnswer(`${num1} - ${num2}`, num1 - num2);
    case 3:
      return makeQuestionAndAnswer(`${num1} * ${num2}`, num1 * num2);
    default:
      return null;
  }
};

export default () => {
  const description = 'What is the result of the expression?';

  startGame(description, getQuestionAndAnswer);
};
