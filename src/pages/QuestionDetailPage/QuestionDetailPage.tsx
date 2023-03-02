import { getPost } from 'applet-apis'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface IQuestion {
  id: number
  text: string
  choices: string[]
}

const QuestionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [question, setQuestion] = React.useState<IQuestion | null>(null)

  useEffect(() => {
    const loadPost = async () => {
      const res = await getPost(Number(id))
      if (res && res.postBlocks.length > 0) {
        const questionPostBlock = res.postBlocks[0]
        const questionText = questionPostBlock.block.content.text
        const questionChoices = res.postBlocks.slice(1).map((choicePostBlock: any) => {
          return choicePostBlock.block.content.text
        })
        setQuestion({
          id: res.id,
          text: questionText,
          choices: questionChoices
        })
      }
    }

    if (id) {
      void loadPost()
    }
  }, [id])

  if (!question) return <></>

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