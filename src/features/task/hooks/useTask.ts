import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../store/slices/taskSlice";
import { useState } from "react";
import { RootState } from "../../../store/store";

const useTask = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasksList);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newTaskDesc, setNewTaskDesc] = useState("");

  const handleAddTask = () => {
    if (newTaskDesc.trim() !== "") {
      dispatch(addTask(newTaskDesc));
      setNewTaskDesc("");
      setShowModal(false);
    }
  };
  return {
    tasks,
    showModal,
    handleAddTask,
    setShowModal,
    newTaskDesc,
    setNewTaskDesc,
  };
};

export default useTask;
