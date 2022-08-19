import React from 'react';
import Answer from '../Model/Answer';
import Question from '../Model/Question';

type QuestionProps = {
    question: Question;
    answerSelected?: (answ: Answer, question: Question) => void;
}

class QuestionElement extends React.Component<QuestionProps, any> {

    render() {
        return (
            <div>
                <div className='question'>{this.props.question.text}</div>
                <div>
                    {
                        this.props.question.answers.map((answ, i) => {
                            return <label key={i}>
                            <input
                              type="checkbox"
                              name="lang"
                              checked={answ.isSelected}
                              value={answ.text}
                              onChange={() => this.props.answerSelected?.(answ, this.props.question)}
                            /> {answ.text}
                          </label>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default QuestionElement;