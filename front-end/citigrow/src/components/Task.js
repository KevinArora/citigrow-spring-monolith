import React from 'react';
const Task = () => {
  return (
    <div>
      <input
        name="title"
        onChange={(event)=>props.handleTaskChange(event,props.index)}
        onBlur={()=> props.updateTask(props.index)}
        value={props.title}
        />
      <textarea
        name="description"
        onChange={(event)=>props.handleTaskChange(event,props.index)}
        onBlur={()=> props.updateTask(props.index)}
        value={props.description} 
        />
      <div>
        <button
        onClick={()=>props.deleteTask(props.id,props.index)}>delete</button>
      </div>
    </div>
  ) 
}
 
export default Task;