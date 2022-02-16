import React from 'react'
import ReactDOM from 'react-dom';
import './loader.css';
import { useState } from "react";


export default function loader() {
  const[name,setNumber] = useState("");
    return (
        <div>
          <form>
            <h4>Create load</h4>
            <label>
              load number: 
              <input>
              type="text"
              value={"number"}
              onChange={(e) => setNumber (e.target.value)}
              </input>
            </label>
          </form>
        </div>
    )
}
// export default function MyForm() {
//   const [name, setName] = useState("");

//   return (
//     <form>
//       <h4>Create load</h4>
//       <label>Load number:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </form>
//   )
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Track load:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="full track load">Full track load</option>
//             <option value="less than track load">Less than track load</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// );

