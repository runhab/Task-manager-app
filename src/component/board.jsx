import React from 'react'


// import App from '../App';
const Board = ({task, index,taskList,setTaskList}) => {
    
    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTask=>currentTask.filter(todo=>index===removeIndex)))
    }

    return ( 
        <div className='indlist'>
            <p>{task}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
     );
}
 
export default Board;

