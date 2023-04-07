import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTasks = ({ modal, toggle, saveTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("not defined");
  const [status, setStatus] = useState("pending");

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

  // function to handle the click create

  const handleCreate = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["Date"] = date;
    taskObj["Status"] = status;
    saveTask(taskObj);
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Enter Task Details</ModalHeader>
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
                  id="flexRadioDefault1"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                <label className="form-check-label">Completed</label>
              </div>
            </div>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleCreate}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default CreateTasks;
