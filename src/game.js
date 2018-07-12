import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './common/questionAndAnswer';

const questionsCount = 3;

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
    const correctAnsw = getAnswer(questionAndAnswer);
    if (String(correctAnsw) === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.\nLet's try again, ${userName}!`);
      return;
    }

    iter(questionsLeft - 1);
  };

  iter(questionsCount);
};
