import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task1", day: "day1", reminder: false },
    { id: 2, text: "task2", day: "day2", reminder: false },
    { id: 3, text: "task3", day: "day3", reminder: false }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div>
      <Header title="Task Tracker" />
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
