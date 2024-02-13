import { useState } from "react";

export default function App() {
  const [tip, setTip] = useState(0);
  const [per, setPer] = useState(0);
  const [friendPer, setFriendPer] = useState(0);

  const totalPer = per + friendPer;
  const totalBill = tip + (tip * totalPer) / 100;

  function handleReset() {
    setTip(0);
    setPer(0);
    setFriendPer(0);
  }

  return (
    <div>
      <BillInput tip={tip} onSetTip={setTip} />
      <SelectPercentage onSetPer={setPer} per={per}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage onSetPer={setFriendPer} per={friendPer}>
        How did your friend like the service?:{" "}
      </SelectPercentage>
      <OutputComponent totalBill={totalBill} totalPer={totalPer} tip={tip}>
        You pay $
      </OutputComponent>
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ text, tip, onSetTip }) {
  return (
    <div>
      <label>
        How much was the bill? {}
        <input
          placeholder="Bill Value"
          type={text}
          value={tip}
          onChange={(e) => onSetTip(Number(e.target.value))}
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

function OutputComponent({ children, totalBill, tip, totalPer }) {
  return (
    <div>
      <h1>
        {children}
        <span>{totalBill}</span>
        <span>
          (${tip} + ${totalPer})
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
