import Question from "../Model/Question";

interface ITransformer {
    buildQuestions(lines: string[]): Question[];
}

export default ITransformer;