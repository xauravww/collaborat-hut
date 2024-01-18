import React, { useState } from "react"
import "./task.css"
import checkmark from "../../../public/assets/checkmark.svg"
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
  const [showTaskDetailToggle, setshowTaskDetailToggle] = useState(false)
  return (
    <div className="task-container">
      <div className="main-wrapper-container" onClick={() => setshowTaskDetailToggle(!showTaskDetailToggle)}>
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
        <div
          className="task-details-toggle"
          onClick={() => setshowTaskDetailToggle(!showTaskDetailToggle)}
        >
          <img
            src={
              !showTaskDetailToggle
                ? "https://res.cloudinary.com/drvntsbpo/image/upload/v1705567973/doqn_xvovxu.svg"
                : "https://res.cloudinary.com/drvntsbpo/image/upload/v1705568585/up_jy3mhm.svg"
            }
            alt=""
          />
        </div>
      </div>

      {showTaskDetailToggle && (
        <>
          <div className="info-wrapper">
            <p className="info-wrapper-description">
              {description.slice(0, 75) + "..."}
            </p>

            <div className="info-meta-detail-wrapper">
              <div className="assigned-to">Assigned to : {assignedTo}</div>
              <div className="due-date">Deadline : {dueDate}</div>
              <div className="project-name">Project Name: {project}</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Task
