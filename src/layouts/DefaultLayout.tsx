import { Button } from 'applet-design'
import { useEffect } from 'react'
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'

export default function DefaultLayout() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const token = searchParams.get('token')
  if (token) {
    localStorage.setItem('TOKEN', token)
  }

  useEffect(() => {
    if (token) {
      searchParams.delete('token')
      setSearchParams(searchParams)
    }
  }, [])

  const handleGotoCreateQuestion = () => {
    navigate('/questions/new')
  }

  return (
    <>
      <div className="flex justify-between items-center py-2 border-b px-4">
        <Link
          className="text-xl text-stone-900"
          to="/">
          Questions
        </Link>

        <Button
          onClick={handleGotoCreateQuestion}>
          Add Question
        </Button>
      </div>
      <Outlet />
    </>
  )
}
