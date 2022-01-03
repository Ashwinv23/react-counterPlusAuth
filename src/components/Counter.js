import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { reducerActions } from '../reducerSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);

  const handlePlus = () => {
    dispatch(reducerActions.increment());
  };

  const handleMinus = () => {};

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
