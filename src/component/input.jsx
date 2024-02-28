import React from 'react'

const Input = ({taskList,setTaskList}) => {

    const [input, setInput] = React.useState("");
    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }
   
    return ( 
        <>  
            <div >
                <form action="">
                    <input
                        type="text"
                        placeholder="input your task"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                    />
                    <button onClick={handleAddTask}> Add</button>
                </form>
            </div>
        </>
     );
}
 
export default Input;