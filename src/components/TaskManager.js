import { useEffect, useState } from "react";
import CreateTasks from "./modals/CreateTasks";
import Card from "./Card";

const TaskManager = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  // useEffect to get the data from local storage if any and update our state.

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  // function for modal to toggle it off
  const toggle = () => {
    setModal(!modal);
  };

  // function that will create and set the data in the array taskList entered by the user
  const saveTask = (taskobj) => {
    let temp = taskList;
    temp.push(taskobj);
    localStorage.setItem("taskList", JSON.stringify(temp)); // to use local storage for storing our state.
    setTaskList(temp);
  };

  // delete functionality
  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  // update functionality
  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header text-center shadow  mb-5  rounded">
        <h3 className="">Task Manager</h3>
        <button className="btn btn-primary mt-3" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((list, index) => {
          return (
            <Card
              key={index}
              taskObj={list}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          );
        })}
      </div>
      <CreateTasks modal={modal} toggle={toggle} saveTask={saveTask} />
    </>
  );
};
export default TaskManager;
