import readlineSync from 'readline-sync';

const questionsCount = 3;

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const correctAnswer = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
const getRandomOperation = () => {
  const randOperation = getRandomNumber(1, 3);
  switch (randOperation) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
};

export default () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (questionsLeft) => {
    if (questionsLeft === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operation = getRandomOperation();
    const question = `${num1} ${operation} ${num2}`;
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const correctAnsw = correctAnswer(num1, num2, operation);
    if (String(correctAnsw) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.\nLet's try again, ${userName}!`);
      return;
    }

    iter(questionsLeft - 1);
  };

  iter(questionsCount);
};
