import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../UI/App';
import QuestionElement from '../../UI/QuestionElement';
import Question from '../../Model/Question';
import Answer from '../../Model/Answer';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test single selection for QuestionElement', () => {
  const question = new Question();
  question.text = "This is the Question";
  const answer1 = new Answer()
  answer1.text = "cat";
  const answer2 = new Answer();
  answer2.text = "dog";
  answer2.isCorrect = true;
  
  render(<QuestionElement question={question}></QuestionElement>)
});