import IInteractor from "./Interfaces/IInteractor";
import Answer from "./Model/Answer";
import Question from "./Model/Question";
import Score from "./Model/Score";

class Interactor implements IInteractor {
    select(questions: Question[], answer: Answer, question: Question): boolean {
        this.deselectAll(question);
        this.selectSelected(answer);
        const isAllSelected = this.isAllSelected(questions);
        return isAllSelected;
    }

    deselectAll(question: Question) {
        for (let answer of question.answers) {
            answer.isSelected = false;
        }
    }

    selectSelected(answer: Answer) {
        answer.isSelected = true;
    }

    isAllSelected(questions: Question[]) {
        let questionIsSelected = false
        for(let question of questions) {
            answers: for(let answer of question.answers) {
                if (answer.isSelected) {
                    questionIsSelected = true;
                    break answers;
                }
            }

            if (!questionIsSelected) {
                return false;
            }

            questionIsSelected = false;
        }

        return true;
    }

    showScore(questions: Question[]): [Question[], Score] {
        const score = this.aggregateScore(questions);
        this.calcPercentage(score);
        return [questions, score];
    }

    aggregateScore(questions: Question[]): Score {
        const score = new Score();
        score.total = questions.length;
        let count = 0;
        for(let q of questions) {
            if(this.isQuestionCorrectAnswered(q)) {
                count++;
            }
        }
        score.sumCorrect = count;
        score.percentage = this.calcPercentage(score);
        return score;
    }

    isQuestionCorrectAnswered(question: Question) {
        for(let answ of question.answers) {
            if (answ.isCorrect && answ.isSelected) {
                return true;
            }
        }
        return false;
    }

    calcPercentage(score: Score) {
        return score.sumCorrect / score.total;
    }

}

export default Interactor;