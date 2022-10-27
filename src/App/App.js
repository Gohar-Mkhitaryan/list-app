// import { useState, useEffect } from "react";

// import "./App.css";
//import Test from "../Test/Test";
import Input from "../Input/Input";

const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("App in use Effect");
//     return () => console.log("Unmount APP");
//   }, [value]);

//   const handleBtnClick = (event) => {
//     if (event.target.id === "plus") {
//       setValue(value + 1);
//     } else {
//       if (value !== 0) {
//         setValue(value - 1);
//       }
//     }
//   };

  console.log("App in component");

 return (
//     <div className='container'>
//       <button id='plus' onClick={handleBtnClick}>
//         +
//       </button>
//       <span>{value}</span>
//       <button id='minus' onClick={handleBtnClick}>
//         -
//       </button>
//       <Test number={value} text='Custom text' />
      <Input />
//     </div>
);
};

export default App;