import ITransformer from "../Interfaces/ITransformer";
import Answer from "../Model/Answer";
import Question from "../Model/Question";

class Transformer implements ITransformer {

    questions: Question[];
    currentQuestion: Question | undefined;

    constructor() {
        this.questions = [];
    }

    buildQuestions(lines: string[]): Question[] {
    
        for(let line of lines) {
            if(this.isQuestion(line)) {
                this.newQuestion(line);
            } else {
                const answer = this.addAnswerToQuestion(line);
                if (this.isCorrect(line)) {
                    this.makeAnswerCorrect(answer);
                }
            }
        }

        return this.questions;
    }

    isQuestion(line: string) {
        return line.startsWith("?");
    }

    isCorrect(answer: string) {
        return answer.startsWith("*");
    }

    addAnswerToQuestion(line: string): Answer {
        const answer = new Answer();
        answer.text = line;
        this.currentQuestion?.answers?.push(answer);
        return answer;
    }

    newQuestion(line: string) {
        const question = new Question();
        question.text = line.substring(1);
        this.questions.push(question);
    }

    makeAnswerCorrect(answer: Answer) {
        answer.isCorrect = true;
        answer.text = answer.text?.substring(1);
    }

}

export default Transformer;