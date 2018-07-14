import getRandomNumber from '../common/randomNumber';
import startGame, { makeQuestionAndAnswer } from '../gameEngine';

const description = 'What number is missing in this progression?';

const termsCount = 10;

const makeProgressionGenerator = (firstNumber, difference) => (
  index => firstNumber + (index * difference)
);
const getProgression = (getProgressionElement, missingNumberIndex) => {
  const iter = (elementsIndex, acc) => {
    if (elementsIndex === termsCount) {
      return acc;
    }

    const element = elementsIndex === missingNumberIndex ? '..' : getProgressionElement(elementsIndex);
    return iter(elementsIndex + 1, `${acc} ${element}`);
  };

  return iter(0, '');
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const difference = getRandomNumber(1, 25);
  const missingNumberIndex = getRandomNumber(0, termsCount - 1);

  const getProgressionElement = makeProgressionGenerator(firstNumber, difference);

  const question = getProgression(getProgressionElement, missingNumberIndex);
  const correctAnswer = getProgressionElement(missingNumberIndex);

  return makeQuestionAndAnswer(question, correctAnswer);
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
