import { useState } from 'react';

import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
