import { createPost } from 'applet-apis'
import { Post } from 'applet-types'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IQuestion {
  text: string
  choices: string[]
}

const initialQuestionState: IQuestion = {
  text: '',
  choices: ['', ''],
}

const QuestionFormPage: React.FC = () => {
  const navigate = useNavigate()
  const [question, setQuestion] = useState<IQuestion>(initialQuestionState)

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion({ ...question, text: event.target.value })
  }

  const handleChoiceChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newChoices = [...question.choices]
    newChoices[index] = event.target.value
    setQuestion({ ...question, choices: newChoices })
  }

  const handleAddChoice = () => {
    const newChoices = [...question.choices, '']
    setQuestion({ ...question, choices: newChoices })
  }

  const handleRemoveChoice = (index: number) => {
    const newChoices = [...question.choices]
    newChoices.splice(index, 1)
    setQuestion({ ...question, choices: newChoices })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submit question:', question)
    // TODO: Add code to submit question to server/database
    const blocks2Create = [
      {
        content: { text: question.text },
        contentType: 'Text'
      }
    ]

    question.choices.forEach(choiceItem => {
      blocks2Create.push(
        {
          content: { text: choiceItem },
          contentType: 'Text'
        }
      )
    })

    const post2Create: Post = {
      contentType: 'MULTIPLE_CHOICE',
      blocks: blocks2Create,
      isDraft: false
    }
    await createPost(post2Create)

    setQuestion(initialQuestionState)

    navigate(-1)
  }

  return (
    <div>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Question Text:</label>
          <input type="text" id="text" name="text" value={question.text} onChange={handleTextChange} />
        </div>
        <div>
          <label htmlFor="choices">Choices:</label>
          <ul>
            {question.choices.map((choice, index) => (
              <li key={index}>
                <label htmlFor={`choice${index}`}>{`Choice ${index + 1}`}</label>
                <input
                  type="text"
                  id={`choice${index}`}
                  name={`choice${index}`}
                  value={choice}
                  onChange={(event) => handleChoiceChange(index, event)}
                />
                <button type="button" onClick={() => handleRemoveChoice(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button type="button" onClick={handleAddChoice}>Add Choice</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default QuestionFormPage
