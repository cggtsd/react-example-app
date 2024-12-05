import { useState } from "react"

export const ToDoList = () => {
    const [tasks, setTasks] = useState(["Eat breakfast","Have a shower","walk the dog"])
    const [newTask, setNewTask] = useState("")
    
    function handleInput(e) {
        setNewTask(n => e.target.value)
      
    }

    function addTask(e) {
     setTasks(t=>[...tasks,newTask])
     setNewTask(n=>"")
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="todo-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={newTask}
                    onChange={handleInput}
                />
                <button className="add-button"
                 onClick={addTask}>Add</button>
            </div>
            <ol>
                {
                    tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>  
                            <button
                                className="delete-button"
                                onClick={()=>deleteTask(index)}>
                                Delete</button>
                            <button
                                className="move-button"
                                onClick={()=>moveTaskUp(index)}>
                            👆</button>
                            <button
                                className="move-button"
                                onClick={()=>moveTaskDown(index)}>
                            👎</button>
                    </li>)
                }
            </ol>
        </div>
    )
}