import css from './Options.module.css'
const Options = ({ update, reset}) => {
  return (
    <div className={css.options_wrap}>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={()=> update("neutral")}>Neutral</button>
      <button onClick={()=> update("bad")}>Bad</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Options
