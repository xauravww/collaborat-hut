import React from "react"
import "./showtask.css"
import Task from "../components/Task"
import TASKS from "../utils/tasks"
const ShowTasks = () => {
  return (
    <div className="showtask-container">
      <h1>Show Tasks</h1>
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
  )
}

export default ShowTasks
