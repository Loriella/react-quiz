import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Черный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Розовый', id: 3},
          {text: 'Зеленый', id: 4}
        ]
      },
      {
        question: 'Год основания Санкт-Петербурга?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: '1700', id: 1},
          {text: '1702', id: 2},
          {text: '1703', id: 3},
          {text: '1803', id: 4}
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log('Answer Id: ', answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizeLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;