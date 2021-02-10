import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, text: "task1", day: "day1", reminder: false },
    { id: 2, text: "task2", day: "day2", reminder: false },
    { id: 3, text: "task3", day: "day3", reminder: false }
  ])

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
