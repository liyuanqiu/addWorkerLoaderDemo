import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';
import './App.css';
import ExampleWorker from './example.worker';

function App() {
  const [number1, setNumber1] = useState(3);
  const [number2, setNumber2] = useState(4);
  const [sum, setSum] = useState();
  const exampleWorker = useMemo(() => {
    const worker = new ExampleWorker();
    worker.onmessage = e => setSum(e.data);
    return worker;
  }, []);
  useEffect(() => {
    exampleWorker.postMessage([number1, number2]);
  }, [number1, number2]);
  return (
    <div>
      <input
        type="number"
        value={number1}
        onChange={e => setNumber1(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={number2}
        onChange={e => setNumber2(parseFloat(e.target.value))}
      />
      <span>=</span>
      <span>
        {sum}
      </span>
    </div>
  );
}

export default App;
