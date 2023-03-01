import React from 'react'
import QuestionForm, { IChoice } from '../../components/QuestionForm/QuestionForm'

export default function QuestionFormPage() {
  const handleQuestionSubmit = (question: string, choices: IChoice[]) => {
    console.log(question)
    console.log(choices)
  }

  return (
    <div className="App">
      <QuestionForm onSubmit={handleQuestionSubmit} />
    </div>
  )
}
