import css from './Options.module.css'
const Options = ({ update, reset, resetBtn}) => {
  return (
    <div className={css.options_wrap}>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={()=> update("neutral")}>Neutral</button>
      <button onClick={()=> update("bad")}>Bad</button>
      {resetBtn ? <button onClick={reset}>Reset</button>: null }
    </div>
  )
}
export default Options
