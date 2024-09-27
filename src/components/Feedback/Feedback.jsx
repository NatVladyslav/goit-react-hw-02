import css from './Feedback.module.css'
const Feedback = ({feedback, total, posPercent}) => {
    let { good, neutral, bad } = feedback;
  return (
    <div className={css.feedback_wrap}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p className={css.total}>Total: {total}</p>
          <p className={css.positive}>Positive: {total === 0 ? 0 : posPercent}%</p>
    </div>
  )
}

export default Feedback
