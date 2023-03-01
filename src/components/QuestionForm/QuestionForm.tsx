import React, { useState } from 'react'

type ChoiceKeyType = 'label' | 'value'

export interface IChoice {
  label: string
  value: string
}

interface IQuestionFormProps {
  onSubmit: (question: string, choices: IChoice[]) => void
}

const QuestionForm: React.FC<IQuestionFormProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState<string>('')
  const [choices, setChoices] = useState<IChoice[]>([
    { label: '', value: '' },
  ])

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value)
  }

  const handleChoiceChange = (index: number, type: ChoiceKeyType, event: React.ChangeEvent<HTMLInputElement>) => {
    const newChoices = [...choices]
    newChoices[index][type] = event.target.value
    setChoices(newChoices)
  }

  const handleAddChoice = () => {
    setChoices([...choices, { label: '', value: '' }])
  }

  const handleRemoveChoice = (index: number) => {
    const newChoices = [...choices]
    newChoices.splice(index, 1)
    setChoices(newChoices)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(question, choices)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input type="text" value={question} onChange={handleQuestionChange} />
      </label>
      {choices.map((choice, index) => (
        <div key={index}>
          <label>
            Choice {index + 1} label:
            <input type="text" value={choice.label} onChange={(event) => handleChoiceChange(index, 'label', event)} />
          </label>
          <label>
            Choice {index + 1} value:
            <input type="text" value={choice.value} onChange={(event) => handleChoiceChange(index, 'value', event)} />
          </label>
          <button type="button" onClick={() => handleRemoveChoice(index)}>Remove Choice</button>
        </div>
      ))}
      <button type="button" onClick={handleAddChoice}>Add Choice</button>
      <button type="submit">Add Question</button>
    </form>
  )
}

export default QuestionForm
