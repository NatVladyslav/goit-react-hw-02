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
  
}

  return (
    <div>
      <Description/>
      <Options option={updateFeedback} />
      <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
  </div>
  )
}

export default App
