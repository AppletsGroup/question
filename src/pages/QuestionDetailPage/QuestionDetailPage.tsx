import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IChoice } from '../../components/QuestionForm/QuestionForm'

interface IQuestion {
  id: number
  question: string
  choices: IChoice[]
}

interface IQuestionDetailProps {
  question: IQuestion
}

const QuestionDetail: React.FC<IQuestionDetailProps> = ({ question }) => {
  return (
    <div>
      <h2>Question {question.id}</h2>
      <h3>{question.question}</h3>
      <ul>
        {question.choices.map((choice, index) => (
          <li key={index}>
            <strong>{choice.label}:</strong> {choice.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

const QuestionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [question, setQuestion] = useState<any>()

  if (!question) {
    return <div>Question not found</div>
  }

  return <QuestionDetail question={question} />
}

export default QuestionDetailPage
