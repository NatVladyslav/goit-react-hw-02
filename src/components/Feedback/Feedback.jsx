import css from './Feedback.module.css'
const Feedback = () => {
  return (
    <div className={css.feedback_wrap}>
          <p>{"Good: "}</p>
          <p>{"Neutral: "}</p>
          <p>{"Bad: "}</p>
          <p>{"Total: "}</p>
          <p>{"Positive: "}</p>
    </div>
  )
}

export default Feedback
