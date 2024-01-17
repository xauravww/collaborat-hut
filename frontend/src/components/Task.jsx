import React from "react"
import "./task.css"
import checkmark from "../../public/assets/checkmark.svg"
const Task = ({
  id,
  name,
  description,
  assignedTo,
  dueDate,
  project,
  status
}) => {
  const [tickChecked, setTickChecked] = React.useState(false)

  return (
    <div className="task-container">
      <div className="main-wrapper">
        <input
          className="input-checkbox"
          type="checkbox"
          onClick={() => setTickChecked(!tickChecked)}
        />
        <div className="custom-checkbox">
          <img
            className="checkmark"
            src={checkmark}
            style={{
              display: tickChecked ? "block" : "none"
            }}
            onClick={() => setTickChecked(!tickChecked)}
          />
        </div>

        <p className="task-name">{name}</p>
      </div>
      <div className="info-wrapper">
        <p className="info-wrapper-description">{description}</p>
        <div className="info-meta-detail-wrapper">
          <div className="assigned-to">Assigned to : {assignedTo}</div>
          <div className="due-date">Deadline : {dueDate}</div>
          <div className="project-name">Project Name: {project}</div>
        </div>
      </div>
    </div>
  )
}

export default Task
