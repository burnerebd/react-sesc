import { Footer, TaskForm, TaskList, Header } from "../../components";
import { useContext } from "react";
import { TaskContext } from "../../context/task-context";

function TasksPage() {

  const { tasks,
	addTask,
	startTask,
	deleteTask,
	closeTask } = useContext(TaskContext);

  return (
    <>
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        startTask={startTask}
        closeTask={closeTask}
      />
      <Footer />
    </>
  );
}

export default TasksPage;
