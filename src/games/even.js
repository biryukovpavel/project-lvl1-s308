import getRandomNumber from '../common/randomNumber';
import { makeQuestionAndAnswer } from '../common/questionAndAnswer';
import startGame from '../game';


const isEven = number => number % 2 === 0;
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = getCorrectAnswer(question);

  return makeQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  startGame(description, getQuestionAndAnswer);
};
