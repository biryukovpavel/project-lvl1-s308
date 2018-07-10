import askName from '..';
import evenGame from '../games/even';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const userName = askName();
evenGame(userName);
