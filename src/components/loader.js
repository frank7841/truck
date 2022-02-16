import React from 'react'
// import ReactDOM from 'react-dom';
import './loader.css';
// import { useState } from "react";


export default function loader() {
    return (
        <div>
 
        </div>
    )
}
function MyForm() {
  return (
    <form>
      <h4>Create Load</h4>
      <label>Load number:
        <input type="text" 
        value={""}
        />
      </label>
    </form>
  )
}
// function MyForm() {
//   const [number, setNumber] = useState("");
//   return (
//     <form>
//       <h2>Create Load</h2>
//       <label>Load number:
//         <input 
//         type="text"
//         value={"number"}
//         onChange={(e) => setNumber(e.target.value)}
//          />
//       </label>
//     </form>
//   )
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));