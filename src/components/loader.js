import React from 'react'
import ReactDOM from 'react-dom';
import './loader.css';
export default function loader() {
    return (
        <div>
 
        </div>
    )
}
function MyForm() {
  return (
    <form>
      <h2>Create Load</h2>
      <label>Load number:
        <input type="text" />
      </label>
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));