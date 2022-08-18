import Answer from "../Model/Answer";
import Question from "../Model/Question";
import Score from "../Model/Score";

interface IInteractor {

    select(questions: Question[], answer: Answer, question: Question): boolean;
    showScore(questions: Question[]): [Question[], Score];
}

export default IInteractor;