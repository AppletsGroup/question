import { queryMyPosts } from 'applet-apis'
import { Post } from 'applet-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface IQuestion {
  id: number
  text: string
}

const QuestionListPage: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])

  useEffect(() => {
    const loadPosts = async () => {
      const queryParams: any = {
        page: 1,
        contentTypes: ['MULTIPLE_CHOICE']
      }
      const response = await queryMyPosts(queryParams)
      const formatQuestions = response.data.map((questionItem: Post) => {
        const questionBlocks = questionItem.postBlocks
        const questionPostBlock = questionBlocks ? questionBlocks[0] : {}
        const questionText = questionPostBlock.block.content.text

        return {
          id: questionItem.id,
          text: questionText
        }
      })
      setQuestions(formatQuestions)
    }
    loadPosts()
  }, [])

  return (
    <div>
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
