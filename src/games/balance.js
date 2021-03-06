import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import startGame from '../gameEngine';

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

const getBalancedNumber = (number) => {
  const makeBalancedNumber = (digitsCount, minDigit, maxDigitsCount) => {
    if (digitsCount === 0) {
      return '';
    }

    const currentDigit = digitsCount > maxDigitsCount ? minDigit : minDigit + 1;
    return `${currentDigit}${makeBalancedNumber(digitsCount - 1, minDigit, maxDigitsCount)}`;
  };

  const digitsCount = getCountDigits(number);
  const sumDigits = getSumDigits(number);
  const minDigit = Math.floor(sumDigits / digitsCount);
  const maxDigitsCount = sumDigits % digitsCount;
  return makeBalancedNumber(digitsCount, minDigit, maxDigitsCount);
};

const getQuestionAndAnswer = () => {
  const num = getRandomNumber(10, 200);

  const question = num;
  const correctAnswer = getBalancedNumber(num);

  return cons(question, correctAnswer);
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
