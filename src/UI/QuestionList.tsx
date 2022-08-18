import React from 'react';
import Interactor from '../Interactor';
import Answer from '../Model/Answer';
import Question from '../Model/Question';
import QuestionElement from './QuestionElement';

type QuestionListProps = {
    questions: Question[]
    setButtonEnabled: (enabled: boolean) => void;
}

type QuestionListState = {
    questions: Question[]
}

class QuestionList extends React.Component<QuestionListProps, QuestionListState> {
    private questions: Question[];
    private interactor: Interactor;

    constructor(props: QuestionListProps, state: QuestionListState) {
        super(props, state);
        this.questions = props.questions;
        this.interactor = new Interactor();
        this.state = {
            questions: this.questions
        }
    }

    answerSelected(answ: Answer, question: Question) {
        const areAllQustionsSelected = this.interactor.select(this.questions, answ, question);
        const questions = JSON.parse(JSON.stringify(this.questions));
        this.setState({
            questions
        });
        this.props.setButtonEnabled(areAllQustionsSelected);
    }

    render() {
        return (
            <div className='question-list'>
                {
                    this.questions.map((question, i) => <QuestionElement answerSelected={this.answerSelected.bind(this)} key={i} question={question}></QuestionElement>)
                }
            </div>
        )
    }
}

export default QuestionList;