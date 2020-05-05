import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {all the reducers/actions} from './slice.js';
// import styles from './name.module.css';

function Example() {
  const count = useSelector(selectCount);
  const amount = useSelector((state) => state.counter.amount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={amount}
          onChange={(e) => dispatch(changeAmount(e.target.value))}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
        >
          Add Amount
        </button>
        <button
          type="button"
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(amount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

export default Example;
