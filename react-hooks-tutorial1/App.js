import React, { useState } from 'react';
import { useForm } from './useForm';

const App = () => {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, setValues] = useForm({ email: '', password: '' });

  return (
    <div>
      <h4>counter app</h4>
      <button
        onClick={() => {
          setCount(c => c + 1);
          setCount2(c => c + 1);
        }}
      >
        +
      </button>
      <div>count1: {count}</div>
      <div>count2: {count2}</div>




      <div>
        <h4>form example:</h4>
        <input
          name="email"
          value={values.email}
          onChange={setValues}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={setValues}
        />
      </div>
    </div>
  );
}

export default App;
