import Answer from "./Answer";

class Question {

    constructor() {
        this.answers = [];
    }

    text: string | undefined;
    answers: Answer[];
}

export default Question;