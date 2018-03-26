import React, { Component } from 'react';
import axios from 'axios';

class Tastlist extends Component {
  state = {}
  async componentDidMount(){
    try {
      const response = await axios.get("/Tasks");
      this.setState({Tasks:response.data})
    } catch (error){
       console.log("error getting stuff");
       console.log(error);
    }
    
   }
   
   deleteTask = async (TaskId, index) => {
     try {
       await axios.delete(`/Tasks/${TaskId}`)
       const updatedTasksList = [...this.state.Tasks];
       updatedTasksList.splice(index,1);
       this.setState({Tasks: updatedTasksList});
     } catch (error) {
       console.log(`error deleting Task with ID of ${TaskId}`);
       console.log(error);
     }
   }
 
   createTask = async (Task, index) => {
     try {
       const newTaskResponse = await axios.post(`/Tasks`,Task);
 
       const updatedTasksList = [...this.state.Tasks]
       updatedTasksList.push(newTaskResponse);
       this.setState({Tasks : updatedTasksList})
     }catch (error){ 
     console.log("error creating Tasks");
     console.log(error);
     }
   }
    
   updateTask = async (index) => {
     try {
       const TaskToUpdate = this.state.Tasks[index]
       await axios.patch(`/Tasks/${TaskToUpdate.id}`, TaskToUpdate)
     }catch (error){ console.log('error updating Task');
       console.log(error);
 
     }
   }
   handleTaskChange = (event,index) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const updatedTasksList = [...this.state.Tasks];
    const TaskToUpdate = updatedTasksList[index];
    TaskToUpdate[attributeToChange] = newValue;
    this.setState({ Tasks: updatedTasksList });
  }
  
  render() { 
    return ( <div>
      <h1>Task List</h1>
      <TaskNewForm createTask={this.createTask}/>
      {
        this.state.Tasks.map((Task,index)=>{
          return (
            <Task 
            {...Task} 
            key={Task}
            index={index}
            deleteTask={this.deleteTask} 
            handleTaskChange={this.handleTaskChange}
            updateTask={this.updateTask}
            />
          )
        })
      }
    </div> )
  }
}
 
export default Tastlist;