import getRandomNumber from '../common/randomNumber';
import startGame, { makeQuestionAndAnswer } from '../gameEngine';

const description = 'Balance the given number.';

const getCountDigits = (number) => {
  const iter = (items, acc) => {
    if (items === 0) {
      return acc;
    }

    const nextItems = Math.floor(items / 10);
    return iter(nextItems, acc + 1);
  };

  return iter(number, 0);
};
const getSumDigits = (number) => {
  const iter = (items, acc) => {
    if (items === 0) {
      return acc;
    }

    const nextItems = Math.floor(items / 10);
    const newAcc = acc + (items % 10);
    return iter(nextItems, newAcc);
  };

  return iter(number, 0);
};
const getBalancedNumber = (countDigits, minDigit, countMaxDigit) => {
  if (countDigits === 0) {
    return '';
  }

  const currentDigit = countDigits > countMaxDigit ? minDigit : minDigit + 1;
  return `${currentDigit}${getBalancedNumber(countDigits - 1, minDigit, countMaxDigit)}`;
};

const getQuestionAndAnswer = () => {
  const num = getRandomNumber(10, 200);

  const countDigits = getCountDigits(num);
  const sumDigits = getSumDigits(num);
  const minDigit = Math.floor(sumDigits / countDigits);
  const countMaxDigit = sumDigits % countDigits;

  const question = num;
  const correctAnswer = getBalancedNumber(countDigits, minDigit, countMaxDigit);

  return makeQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
