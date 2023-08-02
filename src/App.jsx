// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { useRef } from "react";

const App = () => {
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    // Handle the input change, such as storing the value in state or validating the OTP.
    // For this example, we'll just log the value.
    console.log(value);

    // Move the focus to the next input if there is a value.
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={ref}
          onChange={(e) => handleInputChange(index, e)}
          style={{ width: "30px", marginRight: "5px",border: "1px solid blue", borderRadius: "5px", padding: "5px", }}
        />
      ))}
    </div>
  );
};

export default App;
