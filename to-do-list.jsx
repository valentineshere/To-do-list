import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask(){

    if(newTask.trim() !== ""){
        setTasks(t => [...tasks, newTask]);
        setNewTask("");
    }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index -  1]] = [updatedTask[index -1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index -  1]] = [updatedTask[index -1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    return(<div class="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input
            type="text"
            placeholder="Enter a task..." />
            value={newTask}
            onChange={handleInputChange}
            <button class="add-btn"
            onClick={addTask}>
            Add
            </button>
        </div>

        <ol>
            {tasks.map((element, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="del-btn"
                onClick={() => deleteTask(index)}>
                    Delete
                </button>
                <button className="move-btn"
                onClick={() => moveTaskUp(index)}>
                    Up
                </button>
                <button className="move-btn"
                onClick={() => moveTaskDown(index)}>
                    Down
                </button>
            </li>)}
        </ol>

    </div>)

}
export default ToDoList