import React from 'react';
import Transformer from '../../Logic/Transformer';
import Answer from '../../Model/Answer';
import Question from '../../Model/Question';

test('newQuestion()', () => {
    const q = "Is this a Question?";
    const transformer = new Transformer();
    transformer.newQuestion(`?${q}`);
    expect(transformer.questions[0].text).toEqual(q);
});

test('addAnswerToQuestion()', () => {
    const answ = "42";
    const transformer = new Transformer();
    const sampleQuestion = new Question();
    transformer.currentQuestion = sampleQuestion;
    transformer.addAnswerToQuestion(answ);
    expect(transformer.currentQuestion.answers?.length).toBe(1)
    expect(transformer.currentQuestion.answers[0].text).toBe(answ);
});

test('makeAnswerCorrect()', () => {
    const answ = new Answer();
    answ.text = "*correct";

    const transformer = new Transformer();
    transformer.makeAnswerCorrect(answ);
    expect(answ.isCorrect).toBe(true);
    expect(answ.text).toEqual("correct");
});

test('isCorrectAnswer', () => {
    const answ = "*correct"
    const tranformer = new Transformer();
    const isCorrect = tranformer.isCorrect(answ);
    expect(isCorrect).toBe(true);
});

test('isNotCorrectAnswer', () => {
    const answ = "wrong"
    const tranformer = new Transformer();
    const isCorrect = tranformer.isCorrect(answ);
    expect(isCorrect).toBe(false);
});

test('isQuestion', () => {
    const q = "?Question";
    const tranformer = new Transformer();
    const isQuestion = tranformer.isQuestion(q);
    expect(isQuestion).toBe(true);
});

test('isNoQuestion', () => {
    const q = "Answer";
    const tranformer = new Transformer();
    const isQuestion = tranformer.isQuestion(q);
    expect(isQuestion).toBe(false);
});