import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * ((max - min) + 1)) + min;
const correctAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

export default (userName) => {
  const iter = (number, acc) => {
    if (acc === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    // console.log(`Your answer: ${answer}`);

    const correctAnsw = correctAnswer(number);
    if (correctAnswer(number) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.\nLet's try again, ${userName}!`);
      return;
    }

    iter(getRandomNumber(), acc - 1);
  };

  const count = 3;
  iter(getRandomNumber(), count);
};
