import React, {Component} from 'react' ;

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0
  };
}

handleIncrement = () => {
  this.setState((prevState) => ({
    count: prevState.count + 1
  }));
}

handleDecrement = () => {
  this.setState((prevState) => ({
    count: prevState.count - 1,
  }));
  
}


handleReset = () => {
  this.setState ({
    count: 0 ,
  });
};

render() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{this.state.count}</h2>

      <button onClick={this.handleIncrement} style={{ padding: '10px', margin: '5px' }}>
        Increment
      </button>

      <button onClick={this.handleDecrement} style={{ padding: '10px', margin: '5px' }}>
        Decrement
      </button>

      <button onClick={this.handleReset} style={{ padding: '10px', margin: '5px' }}>
        Reset
      </button>
    </div>
  );
}
}

export default Counter;



// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
// import Reducer from './Reducer';


// class ToDoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [], 
//       newTask: ''
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ newTask: e.target.value });
//   };

//   addTask = () => {
//     if (this.state.newTask.trim()) {
//       const updatedTasks = [...this.state.tasks, { text: this.state.newTask, completed: false }];
//       this.setState({ tasks: updatedTasks, newTask: '' });
//     }
//   };

//   toggleTaskCompletion = (index) => {
//     const updatedTasks = this.state.tasks.map((task, i) =>
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     this.setState({ tasks: updatedTasks });
//   };

//   deleteTask = (index) => {
//     const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
//     this.setState({ tasks: updatedTasks });
//   };

//   render() {
//     return (
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-body">
//                 <h1 className="card-title text-center">To-Do List</h1>
                
//                 <div className="input-group mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={this.state.newTask}
//                     onChange={this.handleInputChange}
//                     placeholder="Add a new task"
//                   />
//                   <button
//                     className="btn btn-primary"
//                     onClick={this.addTask}
//                   >
//                     Add Task
//                   </button>
//                 </div>

//                 <ul className="list-group">
//                   {this.state.tasks.map((task, index) => (
//                     <li
//                       key={index}
//                       className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}
//                     >
//                       <span
//                         onClick={() => this.toggleTaskCompletion(index)}
//                         style={{
//                           textDecoration: task.completed ? 'line-through' : 'none',
//                           cursor: 'pointer'
//                         }}
//                       >
//                         {task.text}
//                       </span>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => this.deleteTask(index)}
//                       >
//                         Delete
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ToDoApp;
