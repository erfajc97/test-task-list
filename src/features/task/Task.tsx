import { Link } from "react-router-dom";
import useTask from "./hooks/useTask";
import { TaskItem, AddTaskButton, TasksContainer } from "./styles/TaskStyles";

const TasksPage: React.FC = () => {
  const {
    tasks,
    showModal,
    newTaskDesc,
    setShowModal,
    setNewTaskDesc,
    handleAddTask,
  } = useTask();

  return (
    <TasksContainer>
      <button>
        <Link to="/">Home</Link>
      </button>
      <AddTaskButton onClick={() => setShowModal(true)}>
        Nueva Task
      </AddTaskButton>
      {tasks.map((task) => (
        <TaskItem key={task?.id}>{task.description}</TaskItem>
      ))}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <input
              type="text"
              value={newTaskDesc}
              placeholder="New Task Name"
              onChange={(e) => setNewTaskDesc(e.target.value)}
            />
            <AddTaskButton onClick={handleAddTask}>ADD</AddTaskButton>
            <button onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </TasksContainer>
  );
};

export default TasksPage;
