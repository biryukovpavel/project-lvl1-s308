import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const questionsCount = 3;

export const makeQuestionAndAnswer = (question, answer) => cons(question, answer);
const getQuestion = questionAndAnswer => car(questionAndAnswer);
const getAnswer = questionAndAnswer => cdr(questionAndAnswer);

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (questionsLeft) => {
    if (questionsLeft === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const questionAndAnswer = getQuestionAndAnswer();
    const question = getQuestion(questionAndAnswer);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const correctAnswer = getAnswer(questionAndAnswer);
    if (String(correctAnswer) === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    iter(questionsLeft - 1);
  };

  iter(questionsCount);
};
