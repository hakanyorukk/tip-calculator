import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  const totalPer = per1 + per2;
  const totalTip = bill + (bill * totalPer) / 100;

  function handleReset() {
    setBill(0);
    setPer1(0);
    setPer2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage onSetPer={setPer1} per={per1}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage onSetPer={setPer2} per={per2}>
        How did your friend like the service?:{" "}
      </SelectPercentage>
      <OutputComponent totalTip={totalTip} totalPer={totalPer} bill={bill}>
        You pay $
      </OutputComponent>
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ text, bill, onSetBill }) {
  return (
    <div>
      <label>
        How much was the bill? {}
        <input
          placeholder="Bill Value"
          type={text}
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        ></input>
      </label>
    </div>
  );
}

function SelectPercentage({ per, onSetPer, input, children }) {
  return (
    <div>
      <p>
        {children}{" "}
        <select onChange={(e) => onSetPer(Number(e.target.value))} value={per}>
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="20">20%</option>
        </select>
        {input}
      </p>
    </div>
  );
}

function OutputComponent({ children, totalTip, bill, totalPer }) {
  return (
    <div>
      <h1>
        {children}
        <span>{totalTip}</span>
        <span>
          (${bill} + ${totalPer})
        </span>
      </h1>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
