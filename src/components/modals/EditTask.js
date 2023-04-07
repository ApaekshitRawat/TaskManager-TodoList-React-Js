import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
    setDate(taskObj.Date);
    setStatus(taskObj.Status);
  }, [taskObj.Name, taskObj.Date, taskObj.Description, taskObj.Status]);

  // function for forms
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "status") {
      setStatus(value);
    }
  };

  // function to handle the click update

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["Date"] = date;
    taskObj["Status"] = status;
    updateTask(taskObj);
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group mb-2">
            <label className="mb-2">Task Name</label>
            <input
              type="text"
              value={taskName}
              name="taskName"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-2">
            <label className="mb-2">Description</label>
            <textarea
              cols="60"
              rows="5"
              className="form-control"
              value={description}
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group mb-2">
            <label className="mb-2">Date to be completed</label>
            <input
              type="date"
              className="form-control"
              value={date}
              name="date"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-1">
            <label className="mb-2">Status</label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  value="pending"
                  onChange={handleChange}
                  id="flexRadioDefault1"
                />
                <label className="form-check-label">Pending</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  value="completed"
                  id="flexRadioDefault2"
                  onClick={handleChange}
                />
                <label className="form-check-label">Completed</label>
              </div>
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default EditTask;
