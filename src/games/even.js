import readlineSync from 'readline-sync';

const questionsCount = 3;

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const isEven = number => number % 2 === 0;
const correctAnswer = question => (isEven(question) ? 'yes' : 'no');


export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (questionsLeft) => {
    if (questionsLeft === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getRandomNumber();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const correctAnsw = correctAnswer(question);
    if (correctAnsw === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.\nLet's try again, ${userName}!`);
      return;
    }

    iter(questionsLeft - 1);
  };

  iter(questionsCount);
};
