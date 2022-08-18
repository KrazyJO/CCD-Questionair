import React from 'react';
import FileReader from '../Logic/FileReader';
import Transformer from '../Logic/Transformer';
import Question from '../Model/Question';
import './App.css';
import QuestionList from './QuestionList';

type AppState = {
  buttonEnabled: boolean
}

class App extends React.Component<any, AppState> {

  private questions: Question[];

  constructor(props: any, state: any) {
    super(props, state);
    this.questions = this.readQuestionsFile();
    this.state = {
      buttonEnabled: false
    }
  }

  readQuestionsFile() {
    const fileReader = new FileReader();
    const lines = fileReader.readfile();
    const transformer = new Transformer();
    const questions = transformer.buildQuestions(lines);
    return questions;
  }

  onButtonClicked() {
    console.log("yeah!");
  }

  setButtonEnabled(buttonEnabled: boolean) {
    this.setState({buttonEnabled});
  }

  render() {
    return (
      <div className="App">
        <header>Questionair</header>
        <QuestionList questions={this.questions} setButtonEnabled={this.setButtonEnabled.bind(this)}></QuestionList>
        <button onClick={() => {this.onButtonClicked()}} disabled={!this.state.buttonEnabled}>Show Score</button>
      </div>
    );
  }
}

export default App;
