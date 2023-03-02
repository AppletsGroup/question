import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface IQuestion {
  id: number
  text: string
}

const initialQuestionsState: IQuestion[] = [
  { id: 1, text: 'What is your favorite color?' },
  { id: 2, text: 'What is your favorite animal?' },
]

const QuestionListPage: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>(initialQuestionsState)

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link to={`/questions/${question.id}`}>{question.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionListPage
