import React, { useState } from "react"
import "./showtask.css"
import Task from "../../components/Task/Task"
import TASKS from "../../utils/tasks"
import CreateTask from "../../components/CreateTask/CreateTask"

const ShowTasks = () => {
  const [createTaskToggle, setCreateTasktoggle] = useState(false)

  return (
    <div className="showtask-container">
      <h1>Show Tasks</h1>
      <div className="showtask-container-item">
        {TASKS.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              description={task.description}
              assignedTo={task.assignedTo}
              dueDate={task.dueDate}
              project={task.project}
              status={task.status}
            />
          )
        })}
      </div>
      <div
        className="add-task"
        onClick={() => setCreateTasktoggle(!createTaskToggle)}
        style={{
          bottom: createTaskToggle ? "10vw" : "3vw"
        }}
      >
        <img
          src={
            !createTaskToggle
              ? "https://res.cloudinary.com/drvntsbpo/image/upload/v1705471946/plus_dhgjs3.png"
              : "https://res.cloudinary.com/drvntsbpo/image/upload/v1705565883/cross_twmgud.svg"
          }
        />
      </div>
      {createTaskToggle ? <CreateTask /> : null}
    </div>
  )
}

export default ShowTasks
