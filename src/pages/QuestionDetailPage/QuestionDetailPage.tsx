import React from 'react'
import { useParams } from 'react-router-dom'

interface IQuestion {
  id: number
  text: string
  choices: string[]
}

const initialQuestionState: IQuestion = {
  id: 1,
  text: 'What is your favorite color?',
  choices: ['Red', 'Green', 'Blue', 'Yellow'],
}

const QuestionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [question, setQuestion] = React.useState<IQuestion>(initialQuestionState)

  React.useEffect(() => {
    // TODO: Add code to fetch question with specified ID from server/database
    // For now, just use the initialQuestionState
    setQuestion(initialQuestionState)
  }, [id])

  return (
    <div>
      <h1>{question.text}</h1>
      <ul>
        {question.choices.map((choice, index) => {
          return (
            <li key={index}>
              <input type="radio" name="choices" value={choice} />
              <span>{choice}</span>
            </li>
          )
        })}
      </ul>
    </div >
  )
}

export default QuestionDetailPage