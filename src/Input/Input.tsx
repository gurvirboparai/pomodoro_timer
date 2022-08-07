import React from "react";
import "./Input.css";

type props = { setMinutes: React.Dispatch<React.SetStateAction<number>> };

const Input = ({ setMinutes }: props) => {

    return (
    <div className="inputBox">
      <button onClick={() => setMinutes(prev => prev - 5)}> -5 Min </button>
      <button onClick={() => setMinutes(prev => prev - 1)}> -1 Min</button>
      <button onClick={() => setMinutes(prev => prev + 1)}> +1 Min</button>
      <button onClick={() => setMinutes(prev => prev + 5)}> +5 Min</button>
    </div>
  );
};

export default Input;
