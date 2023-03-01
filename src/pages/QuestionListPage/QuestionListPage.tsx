import React, { useState } from 'react'
import { IChoice } from '../../components/QuestionForm/QuestionForm'

interface IQuestion {
  question: string
  choices: IChoice[]
}

const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])

  const handleQuestionSubmit = (question: string, choices: IChoice[]) => {
    setQuestions([...questions, { question, choices }])
  }

  return (
    <div>
      <h2>Questions:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.choices.map((choice, index) => (
                <li key={index}>
                  <strong>{choice.label}:</strong> {choice.value}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionList
