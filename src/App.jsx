import './App.css'
import { useEffect, useState } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {

  const [feedback, setFeedback] = useState(() => {
let data = JSON.parse(localStorage.getItem("localData"));
    if (data !== null) {
      return data;
    } else {
      return {
      good: 0,
      neutral: 0,
      bad: 0
    }
    }
  });
  const updateFeedback = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });  
  }
  useEffect(() => {
    if(feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0)
    localStorage.setItem("localData", JSON.stringify(feedback));
    }, [feedback])
  const resetFeedback = () => {
    localStorage.removeItem("localData")
    setFeedback(
      {
      good: 0,
      neutral: 0,
      bad: 0
    })
  } 
 
  const { good, neutral, bad } = feedback;

  let totalFeedback = good + neutral + bad;
  let positivePercent = Math.round(good/totalFeedback * 100)

  return (
    <div>
      <Description/>
      <Options total={totalFeedback} update={updateFeedback} reset={resetFeedback} />
      {good > 0 || neutral > 0 || bad > 0 ?
        <Feedback feedback={feedback} total={totalFeedback} posPercent={positivePercent}/> : <Notification/>}
  </div>
  )
}

export default App
