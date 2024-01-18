import React, { useState, useEffect } from "react"
import "./createtask.css"
const CreateTask = () => {
  const [priorityToggle, setpriorityToggle] = useState(false)
  const [priorityColor, setpriorityColor] = useState(`
  invert(47%) sepia(58%) saturate(2273%) hue-rotate(171deg)
    brightness(102%) contrast(101%)`)
  useEffect(() => {
    document.addEventListener("mousedown", setpriorityToggle(false))

    return () => {
      document.removeEventListener("mousedown", setpriorityToggle(false))
    }
  }, [priorityColor])
  return (
    <div className="create-task-container">
      {/* <h4>Create Task</h4> */}
      <input
        className="input-add-task"
        type="text"
        placeholder="What would you like to do?"
      />
      <input
        className="input-add-task-description"
        type="text"
        placeholder="Description (optional)"
      />
      <div className="add-task-helper-container">
        <div className="helper-item-wrapper">
          {priorityToggle && (
            <div className="priority-box">
              <div
                className="priority-box-item"
                onClick={() =>
                  setpriorityColor(`
  invert(47%) sepia(58%) saturate(2273%) hue-rotate(171deg)
    brightness(102%) contrast(101%)`)
                }
              >
                Low
              </div>
              <div
                className="priority-box-item"
                onClick={() =>
                  setpriorityColor(`
                  invert(95%) sepia(59%) saturate(4540%) hue-rotate(340deg) brightness(104%) contrast(93%)`)
                }
              >
                Med
              </div>
              <div
                className="priority-box-item"
                onClick={() =>
                  setpriorityColor(`
                  invert(11%) sepia(86%) saturate(4511%) hue-rotate(332deg) brightness(101%) contrast(113%)`)
                }
              >
                High
              </div>
            </div>
          )}
          <div className="add-task-helper-item">
            <img src="" alt="" />
          </div>
          <div
            className="add-task-helper-item priority"
            onClick={() => setpriorityToggle(!priorityToggle)}
          >
            <img
              src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705574341/priority-svgrepo-com_ttituh.svg"
              alt="priority"
              style={{ filter: priorityColor }}
            />
          </div>
          <div className="add-task-helper-item deadline">
            <img
              src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705574341/deadline-svgrepo-com_nxcsjs.svg"
              alt="deadline"
            />
          </div>
          <div className="add-task-helper-item project">
            <img
              src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705574341/project-svgrepo-com_x480es.svg"
              alt="project"
            />
          </div>
        </div>
        <div className="submit">
          <img
            src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705574932/submit-success-check-mark-svgrepo-com_fcedap.svg"
            alt="submit"
          />
        </div>
      </div>
    </div>
  )
}

export default CreateTask
