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
      <Options resetBtn={feedback.good || feedback.neutral || feedback.bad ? true:false} update={updateFeedback} reset={resetFeedback} />
      {feedback.good || feedback.neutral || feedback.bad ?
        <Feedback feedback={feedback} /> : "No feedback yet"}
  </div>
  )
}

export default App
