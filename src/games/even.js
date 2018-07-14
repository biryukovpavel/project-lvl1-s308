import { cons } from 'hexlet-pairs';
import getRandomNumber from '../common/utils';
import startGame from '../gameEngine';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return cons(question, correctAnswer);
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
