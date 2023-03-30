// import reactLogo from "./assets/react.svg";
import { useState } from "react";
import "./App.css";
// import { Friend } from "./components/Friend";
// import styles from "./App.module.css";
// import { Job } from "./components/Job";
// import Name from "./components/Name";
// import { Heading } from "./components/Heading";
// import { Planet } from "./components/Planet";

function App() {
  /** STATES - useState HOOK */
  // useState hook notifies react when a state/variable value changes and the react changes it and render it on UI
  // [variable, functionThatUpdatesVariableValue]

  // EXERCISE ON useState HOOK
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <br />
      <button onClick={increaseCount}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to zero</button>
    </div>
  );

  // const [age, setAge] = useState(0);
  // const [inputValue, setInputValue] = useState("");
  // const [showText, setShowText] = useState(true);
  // const [textColor, setTextColor] = useState("black");
  // const increaseAge = () => {
  //   setAge(age + 1);
  // };
  // const handleInputValue = (e) => {
  //   setInputValue(e.target.value);
  // };
  // return (
  //   <div className="App">
  //     {/* {age}
  //     <button onClick={increaseAge}>Increase age</button> */}
  //     {/* <input
  //       type="text"
  //       placeholder="Type text here"
  //       className="input"
  //       onChange={handleInputValue}
  //     />
  //     <p>{inputValue}</p> */}
  //     {/* <button onClick={() => setShowText(!showText)}>Show/Hide</button>
  //     {showText && <h1>My name is Isaac</h1>} */}
  //     <button
  //       onClick={() => setTextColor(textColor === "black" ? "blue" : "black")}>
  //       Change color
  //     </button>
  //     {<h1 style={{ color: textColor }}>My name is Isaac</h1>}
  //   </div>
  // );
  /**------------------------------------------------------------------ */
  /** LISTS */
  // const friends = ["Isaac", "Patrick", "Terrence", "Gad", "JIS 👑", "Daniel"];
  // return (
  //   <div>
  //     {/* <Heading title="My friends are: " />
  //     <Friend /> */}
  //     <Planet />
  //   </div>
  // );
  /**------------------------------------------------------------------ */
  /** CONDITIONALLY RENDERING */
  // ? : ternary operator is the same as (if else), && is the same as (if).
  // const age = 18;
  // const isGreen = true;
  // return (
  //   <div style={{ color: isGreen && "green" }}>
  //     {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1>}
  //   </div>
  // );
  /**------------------------------------------------------------------ */
  /** COMPONENTS & PROPS */
  // return (
  //   <>
  //     <div className="App">
  //       <Name name="ISHIMWE Isaac" />
  //     </div>
  //     <Job
  //       className={styles.h1}
  //       name="ISHIMWE Isaac"
  //       company="Amazon"
  //       position="Senior Software Engineer"
  //       salary={200000}
  //     />
  //     <Job
  //       name="NGENDABANGA Celestin"
  //       company="Google"
  //       position="Senior Trainer"
  //       salary={200000}
  //     />
  //     <Job
  //       name="Moi albert"
  //       company="Microsoft"
  //       position="Senior Strategic officer"
  //       salary={200000}
  //     />
  //   </>
  // );
}

export default App;
