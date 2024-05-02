import { useSelector, useDispatch } from "react-redux"
import "./Counter.css"
import { arttir, arttirma, azalt, azaltma, sil, silme } from "../../store/counterReducer"

const Counter = () => {
  const {count} = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive" onClick={() => dispatch(arttirma())}>increase</button>

        <button className="counter-button zero"onClick={() => dispatch(silme())}>reset</button>

        <button className="counter-button negative"onClick={() => dispatch(azaltma())}>decrease</button>
      </div>
    </div>
  )
}

export default Counter
