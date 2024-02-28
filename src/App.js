import React, { useState } from 'react';
import Board from './component/board';
import Input from './component/input';
import './App.css';


function App() {
  const [taskList, setTaskList] = useState([]);
   console.log(taskList);
  return (
    <div className="App">
      <h1> To-Do Lists</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className='tasklists'>
        {
          taskList.map((task, index) => (
           <Board
            key={index} 
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
              
            
            />
          ))
          
        }
      </div>
    </div>
  );
}

export default App;
