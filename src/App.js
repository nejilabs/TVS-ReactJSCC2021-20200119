import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const respond = await fetch("http://localhost:5000/tasks")
    const data = await respond.json()
    return data
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} title="Task Tracker" />


      { showAddTask && <AddTask onAdd={addTask} />}


      {tasks.length > 0 ?
        (<Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />) :
        ("No Tasks to show")
      }

    </div>
  );
}

export default App;
