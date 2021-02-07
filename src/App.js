import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task1", day: "day1", reminder: false },
    { id: 2, text: "task2", day: "day2", reminder: true },
    { id: 3, text: "task3", day: "day3", reminder: false }
  ])

  return (
    <div>
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
