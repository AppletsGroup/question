import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import QuestionDetailPage from './pages/QuestionDetailPage/QuestionDetailPage'
import QuestionFormPage from './pages/QuestionFormPage/QuestionFormPage'
import QuestionListPage from './pages/QuestionListPage/QuestionListPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<QuestionListPage />} />
          <Route path="/questions/new" element={<QuestionFormPage />} />
          <Route path="/questions/:id" element={<QuestionDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
