import css from './Feedback.module.css'
const Feedback = ({feedback}) => {
    let { good, neutral, bad } = feedback;
    let total = good + neutral + bad;
    let percent = Math.round(good/total * 100)
  return (
    <div className={css.feedback_wrap}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {total === 0 ? 0 : percent}%</p>
    </div>
  )
}

export default Feedback
