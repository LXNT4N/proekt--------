import React, { useState } from 'react';

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [result, setResult] = useState(0);

  const calculateFormula = () => {
    const formulaResult = 66.5 + (13.7 * a) + (5 * b) - (6.76 * c) * d;
    setResult(formulaResult);
  };

  return (
    <div>
      <h2>Calculator для мужчин</h2>
      <label htmlFor="a">Введите ваш вес:</label>
      <input
        type="number"
        id="a"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />

      <label htmlFor="b">Введите ваш рост:</label>
      <input
        type="number"
        id="b"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <label htmlFor="c">Введите ваш возраст:</label>
      <input
        type="number"
        id="c"
        value={c}
        onChange={(e) => setC(Number(e.target.value))}
      />

      <label htmlFor="d">Введите ваш КФА:</label>
      <input
        type="number"
        id="d"
        value={d}
        onChange={(e) => setD(Number(e.target.value))}
      />

      <button onClick={calculateFormula}>Calculate</button>

      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculator;
