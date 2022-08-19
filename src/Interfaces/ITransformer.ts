import Answer from "../Model/Answer";
import Question from "../Model/Question";

interface ITransformer {
    questions: Question[];
    currentQuestion: Question | undefined;
    
    buildQuestions(lines: string[]): Question[];
    isQuestion(line: string): boolean;
    isCorrect(line: string): boolean;
    addAnswerToQuestion(line: string): Answer;
    newQuestion(line:string): void;
}

export default ITransformer;