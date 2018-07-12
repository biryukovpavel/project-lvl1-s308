import { cons, car, cdr } from 'hexlet-pairs';

export const makeQuestionAndAnswer = (question, answer) => cons(question, answer);

export const getQuestion = questionAndAnswer => car(questionAndAnswer);
export const getAnswer = questionAndAnswer => cdr(questionAndAnswer);
