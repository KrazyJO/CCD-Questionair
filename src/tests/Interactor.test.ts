import React from 'react';
import Interactor from '../Interactor';
import Answer from '../Model/Answer';
import Question from '../Model/Question';
import Score from '../Model/Score';

test('all questions are selected', () => {
    const q1 = new Question();
    
    const a11 = new Answer();
    a11.isSelected = true;

    const a12 = new Answer()
    q1.answers.push(a11);
    q1.answers.push(a12);

    const q2 = new Question();
    
    const a21 = new Answer();
    a21.isSelected = true;

    const a22 = new Answer()
    q2.answers.push(a21);
    q2.answers.push(a22);

    const interactor = new Interactor();
    const isAllSelected = interactor.isAllSelected([q1, q2]);
    expect(isAllSelected).toBe(true);
});

test('not all questions are selected', () => {
    const q1 = new Question();
    
    const a11 = new Answer();
    a11.isSelected = true;

    const a12 = new Answer();
    q1.answers.push(a11);
    q1.answers.push(a12);

    const q2 = new Question();
    
    const a21 = new Answer();
    a21.isSelected = false;

    const a22 = new Answer();
    q2.answers.push(a21);
    q2.answers.push(a22);

    const interactor = new Interactor();
    const isAllSelected = interactor.isAllSelected([q1, q2]);
    expect(isAllSelected).toBe(false);
});

test('calcPercentage()', () => {
    const score = new Score();
    score.total = 5;
    score.sumCorrect = 1;
    
    const interactor = new Interactor();
    const percentage = interactor.calcPercentage(score);
    expect(percentage).toBe(0.2);
});

test('isQuestionCorrectAnswered(): yes', () => {
    const question = new Question();
    const answ1 = new Answer();
    const answ2 = new Answer();
    answ2.isCorrect = true;
    answ2.isSelected = true;
    question.answers.push(answ1);
    question.answers.push(answ2);

    const interactor = new Interactor();
    const isCorrect = interactor.isQuestionCorrectAnswered(question);
    expect(isCorrect).toBe(true);
});

test('isQuestionCorrectAnswered(): no', () => {
    const question = new Question();
    const answ1 = new Answer();
    const answ2 = new Answer();
    answ2.isCorrect = false;
    answ2.isSelected = true;
    question.answers.push(answ1);
    question.answers.push(answ2);

    const interactor = new Interactor();
    const isCorrect = interactor.isQuestionCorrectAnswered(question);
    expect(isCorrect).toBe(false);
});

test('aggregateScore()', () => {
    const question = new Question();
    const answ1 = new Answer();
    const answ2 = new Answer();
    answ2.isCorrect = true;
    answ2.isSelected = true;
    question.answers.push(answ1);
    question.answers.push(answ2);

    const question2 = new Question();
    const answ21 = new Answer();
    const answ22 = new Answer();
    answ22.isCorrect = false;
    answ22.isSelected = true;
    question2.answers.push(answ21);
    question2.answers.push(answ22);

    const questions = [question, question2];
    
    const interactor = new Interactor();
    const score = interactor.aggregateScore(questions);
    expect(score.percentage).toBe(0.5);
    expect(score.total).toBe(2);
    expect(score.sumCorrect).toBe(1);
});