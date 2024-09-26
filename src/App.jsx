import './App.css'
import { useState } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'

function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  
  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }
  const resetFeedback = () => {
    setFeedback({
    good: 0,
    neutral: 0,
    bad: 0
  })
  } 

  return (
    <div>
      <Description/>
      <Options update={updateFeedback} reset={resetFeedback} />
      <Feedback feedback={feedback} />
  </div>
  )
}

export default App
