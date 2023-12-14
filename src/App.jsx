import { useState } from 'react'
import './App.css'
import HomeComponent from './component/HomeComponent'
import QuizComponent from './component/QuizComponent'
import ResultComponent from './component/ResultComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeComponent/>
       <QuizComponent/>
      <ResultComponent/>
    </>
  )
}

export default App