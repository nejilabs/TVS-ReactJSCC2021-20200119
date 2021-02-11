# TVS-ReactJS-ReactJSCC2021

<p>Link:
  <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">React JS Crash Course 2021 (Jan 19, 2020)</p>
  </a>

<p>Timestamp:  DONE / 1:48:47</p>

<p>Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.</p>

<details>
<summary>Timestamps</summary>

- 0:00 - Intro & Slides
- 12:37 - Create a React app
- 14:52 - Files & folders
- 18:54 - App component & JSX
- 22:39 - Expressions in JSX
- 23:49 - Creating a component
- 27:18 - Component Props
- 28:50 - PropTypes
- 30:42 - Styling
- 34:17 - Button Component
- 37:46 - Events
- 40:18 - Tasks Component
- 41:03 - Create a list with .map()
- 43:07 - State & useState Hook
- 44:55 - Global state
- 46:52 - Task Component
- 49:30 - Icons with react-icons
- 51:41 - Delete task & prop drilling
- 55:50 - Optional message if no tasks
- 56:58 - Toggle reminder & conditional styling
- 1:03:13 - Add Task Form
- 1:06:16 - Form input state (controlled components)
- 1:09:18 - Add task submit
- 1:14:36 - showAddTask state
- 1:15:58 - Button toggle
- 1:19:33 - Build for production
- 1:21:51 - JSON Server
- 1:25:53 - useEffect Hook & Fetch tasks from server
- 1:30:13 - Delete task from server
- 1:31:51 - Add task to server
- 1:39:15 - Routing, footer & about
- 1:35:15 - Toggle reminder on server
</details>

Table Of Contents:
- [TVS-ReactJS-ReactJSCC2021](#tvs-reactjs-reactjscc2021)
- [0:00 - Intro & Slides](#000---intro--slides)
  - [React](#react)
  - [Why React](#why-react)
  - [Components: Functions vs Classes:](#components-functions-vs-classes)
  - [Working with state](#working-with-state)
  - [React Hooks](#react-hooks)
- [12:37 - Create a React app](#1237---create-a-react-app)
- [14:52 - Files & folders && 18:54 - App component & JSX](#1452---files--folders--1854---app-component--jsx)
- [22:39 - Expressions in JSX](#2239---expressions-in-jsx)
- [23:49 - Creating a component](#2349---creating-a-component)
- [27:18 - Component Props](#2718---component-props)
  - [How to pass props](#how-to-pass-props)
  - [default props if now props are given](#default-props-if-now-props-are-given)
  - [With object destructuring when passing props as parameter.](#with-object-destructuring-when-passing-props-as-parameter)
- [28:50 - PropTypes](#2850---proptypes)
  - [prop types to make the code more robust](#prop-types-to-make-the-code-more-robust)
- [30:42 - Styling](#3042---styling)
  - [Inline Styling:](#inline-styling)
- [34:17 - Button Component](#3417---button-component)
  - [<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/7.png"/>](#)
- [37:46 - Events](#3746---events)
  - [Way#1: create method within the component](#way1-create-method-within-the-component)
  - [Way#2: Pass Methods as props to the component](#way2-pass-methods-as-props-to-the-component)
- [40:18 - Tasks Component && 41:03 - Create a list with .map()](#4018---tasks-component--4103---create-a-list-with-map)
- [43:07 - State & useState Hook && 44:55 - Global state](#4307---state--usestate-hook--4455---global-state)
- [46:52 - Task Component](#4652---task-component)
- [49:30 - Icons with react-icons](#4930---icons-with-react-icons)
- [51:41 - Delete task & prop drilling](#5141---delete-task--prop-drilling)
- [55:50 - Optional message if no tasks](#5550---optional-message-if-no-tasks)
- [56:58 - Toggle reminder & conditional styling](#5658---toggle-reminder--conditional-styling)
- [1:03:13 - Add Task Form](#10313---add-task-form)
- [1:06:16 - Form input state (controlled components)](#10616---form-input-state-controlled-components)
- [1:09:18 - Add task submit](#10918---add-task-submit)
- [1:14:36 - showAddTask state && 1:15:58 - Button toggle](#11436---showaddtask-state--11558---button-toggle)
- [1:19:33 - Build for production](#11933---build-for-production)
- [1:21:51 - JSON Server](#12151---json-server)
- [1:25:53 - useEffect Hook & Fetch tasks from server](#12553---useeffect-hook--fetch-tasks-from-server)
- [1:30:13 - Delete task from server](#13013---delete-task-from-server)
- [1:31:51 - Add task to server](#13151---add-task-to-server)
- [1:35:15 - Toggle reminder on server](#13515---toggle-reminder-on-server)
- [1:39:15 - Routing, footer & about](#13915---routing-footer--about)

---

# 0:00 - Intro & Slides

## React

- library for building ui
- runs of clients as a SPA (Single Page App)
- used to build full stack apps by communicating with a server/API (ex: MERN)
- Often referred to as a front-end framework bc its capable and directly comparable to other frontend frameworks like vue and angular.

## Why React

- Structure "view" layer of your app.
- Reusable components with their own state
- JSX - Dynamic Markup
- Interactive UIs with Virtual DOM
- Performance and TEsting
- Very Popular in industry

- When using react, think of ur ui as bunch of separate components

## Components: Functions vs Classes:

<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/1.png"/>

## Working with state

- Components have state (object that determines how a component renders and behaves.
- App / Global state refers to state that is available to the entire UI (not just a single component).
- Before, we have to use class based components to use state.
- Now we can use functional components too with hooks.

## React Hooks

- functions for functional components that let them hook into the React State & lifecycle features.
    - useState - returns stateful value, and a function to update it
    - useEffect - perform side effects in function components
    - You can also create your own custom hooks.
    - useContext, useReducer, useRef - FOR FURTHER LEARNING NOT HERE!!!

---

# 12:37 - Create a React app

- Make sure first to have node.js, to check:

```bash
npm --version
```

- Then we can use create-react app. instead of installing create-react-app on our local system, we can just use npx to install it from online.

```bash
npx create-react-app <name-of-app>
cd <name-of-app>
npm start
```

- Also, good to have browser extension would be react developer tools.
- For VS Code : ES7 React/Redux/... by dzsnajder

Now lets start:

```bash
npx create-react-app tvs-reactjs-reactjscc2021
cd tvs-reactjs-reactjscc2021
npm start
```

---

# 14:52 - Files & folders && 18:54 - App component & JSX

Anyways clean everything up from scratch and if you command

```bash
tree -I node_modules
```

you shud have

```bash
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.js
│   ├── index.css
│   └── index.js
└── yarn.lock
```

---

# 22:39 - Expressions in JSX

App.js

```jsx
function App() {
  const name = "name";
  const boolean = false;
  return (
    <div>
      <p>Hello {name}</p>
      <p>{boolean? "Yes": "No"}</p>
    </div>
  );
}

export default App;
```

Output:

```jsx
Hello name
No
```

---

# 23:49 - Creating a component

```jsx
cd src/ && mkdir components && cd components && touch Header.js && code. Header.js
```

create a components folder inside src then 

touch and code Header.js, then _rafce to generate the functional arrow component snippet.

```jsx
_rafce
```

```jsx
const Header = () => {
  return (
    <div>
      
    </div>
  )
}

export default Header
```

then

Header.js:

```jsx
const Header = () => {
  return (
    <header>
      <h1>Task Tracker</h1>
    </header>
  )
}

export default Header
```

App.js

```jsx
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
```

if you want Header.js to be a class based component, use rcc snippet

---

# 27:18 - Component Props

## How to pass props
<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/8.png"/>

## default props if now props are given
<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/3.png"/>

## With object destructuring when passing props as parameter.
<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/4.png"/>

---

# 28:50 - PropTypes

## prop types to make the code more robust

above header.js do impt then:
<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/5.png"/>

although it still gonna render it, an error will be printed on the console.
<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/6.png"/>
you can also use typescript to make ur code more robust.

---

# 30:42 - Styling

## Inline Styling:

```jsx
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1 style={{ color: "red", backgroundColor: "black" }}>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Header Title"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
```

another way you could do is

```jsx
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1 style={headingStyle}>{props.title}</h1>
    </header>
  )
}

const headingStyle = {
  color: "red", 
  backgroundColor: "black"
}

Header.defaultProps = {
  title: "Default Header Title"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
```

anyways, get na lang the styles from his github repo for the index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

footer {
  margin-top: 30px;
  text-align: center;
}
```

---

# 34:17 - Button Component

touch Button.js inside components:

Header.js

```jsx
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="btn1" />
      <Button color="blue" text="btn2" />
      <Button color="red" text="btn3" />
      <Button />
    </header>
  )
}

Header.defaultProps = {
  title: "Default Header Title"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
```

Button.js

```jsx
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  return <button style={{ backgroundColor: color }} className="btn">{text}</button>
}

Button.defaultProps = {
  text: "Button",
  color: "steelblue"
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
export default Button
```
<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/7.png"/>
---

# 37:46 - Events

## Way#1: create method within the component

```jsx
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  const eventClick = () => {
    console.log("Clicked!")
  }

  return <button onClick={eventClick} style={{ backgroundColor: color }} className="btn">{text}</button>
}

Button.defaultProps = {
  text: "Button",
  color: "steelblue"
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
export default Button
```

## Way#2: Pass Methods as props to the component

create method within the parent element, and pass the method as a prop to the component for it to fire an event defined in the parent element

Header.js

```jsx
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title }) => {
  const eventClick = () => {
    console.log("Clicked!")
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={eventClick} />
    </header>
  )
}

Header.defaultProps = {
  title: "Default Header Title"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
```

Button.js

```jsx
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
}

Button.defaultProps = {
  text: "Button",
  color: "steelblue"
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Button
```

---

# 40:18 - Tasks Component && 41:03 - Create a list with .map()

inside components, touch Tasks Component:

```jsx
const tasks = [
  { id: 1, text: "task1", day: "day1", reminder: false },
  { id: 2, text: "task2", day: "day2", reminder: true },
  { id: 3, text: "task3", day: "day3", reminder: false }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks––
```

App.js

```jsx
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  return (
    <div>
      <Header title="Task Tracker" />
      <Tasks />
    </div>
  );
}

export default App;
```
<img src="https://github.com/nellyXinwei/TVS-ReactJS-ReactJSCC2021/blob/master/READMEImgs/8.png"/>

---

# 43:07 - State & useState Hook && 44:55 - Global state

App.js

```jsx
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
```

Tasks.js

```jsx
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
```

---

# 46:52 - Task Component

touch components/task.js:

```jsx
import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
```

Tasks.js

```jsx
import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
```

---

# 49:30 - Icons with react-icons

```bash
npm i react-icons
```

```jsx
import { FaTimes } from "react-icons/fa"
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.text} <FaTimes style={{ color: "red", cursor: "pointer" }} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task;
```

---

# 51:41 - Delete task & prop drilling

App.js, add deleteTask methods then pass them as props for task.js to call the method. then delete Task filters whatever task it is with that id.

```jsx
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task1", day: "day1", reminder: false },
    { id: 2, text: "task2", day: "day2", reminder: true },
    { id: 3, text: "task3", day: "day3", reminder: false }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
```

Tasks.js

```jsx
import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Tasks
```

Task.js

```jsx
import { FaTimes } from "react-icons/fa"
const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: "red", cursor: "pointer" }} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task;
```

---

# 55:50 - Optional message if no tasks

```jsx
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task1", day: "day1", reminder: false },
    { id: 2, text: "task2", day: "day2", reminder: true },
    { id: 3, text: "task3", day: "day3", reminder: false }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Header title="Task Tracker" />
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} />) :
        ("No Tasks to show")
      }

    </div>
  );
}

export default App;
```

---

# 56:58 - Toggle reminder & conditional styling

Just like onDelete

App.js

```jsx
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task1", day: "day1", reminder: false },
    { id: 2, text: "task2", day: "day2", reminder: true },
    { id: 3, text: "task3", day: "day3", reminder: false }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    console.log(id);
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
```

Tasks.js

```jsx
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
```

Task.js

```jsx
import { FaTimes } from "react-icons/fa"
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task;
```

---

# 1:03:13 - Add Task Form

touch components/AddTask.js:

```jsx
const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" />
      </div>

      <div className="form-control form-control-check">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>

      <div className="form-control">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask
```

App.js, pass as component

```jsx
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

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
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask />
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
```

---

# 1:06:16 - Form input state (controlled components)

AddTask.js: , add the useStates, values, and onChange, then check react dev tools to see them updating realtime.

```jsx
import { useState } from "react"

const AddTask = () => {

  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div className="form-control form-control-check">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>

      <div className="form-control">
        <label>Set Reminder</label>
        <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask
```

---

# 1:09:18 - Add task submit

App.js , add addTask method and pass it as props sa AddTask component

```jsx
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "task1", day: "day1", reminder: false },
    { id: 2, text: "task2", day: "day2", reminder: false },
    { id: 3, text: "task3", day: "day3", reminder: false }
  ])

  const addTask = (task) => {
    console.log(task);
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
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask} />
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
```

AddTask.js: , add the onSubmit method, then forgot to add checked={reminder} sa checkbox

```jsx
import { useState } from "react"

const AddTask = ({ onAdd }) => {

  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task")
      return
    }

    onAdd({
      text, day, reminder
    })

    //Reset Form
    setText("");
    setDay("");
    setReminder(false);

  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div className="form-control form-control-check">
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>

      <div className="form-control">
        <label>Set Reminder</label>
        <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask
```

addTask

```jsx
const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }
```

---

# 1:14:36 - showAddTask state && 1:15:58 - Button toggle

add state hook [showAddTask, setShowAddTask] to be able to hide show the AddTask component.

App.js

```jsx
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);  

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} title="Task Tracker" />

      { showAddTask && <AddTask onAdd={addTask} />}

    </div>
  );
}

export default App;
```

Header.js

```jsx
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title, onAdd }) => {

  return (
    <header className="header">
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  )
}

export default Header
```

then for button state depending on the showAddTask state, we pass showAddTask to header, then create conditionals on color and text of the button

App.js:

```jsx
<Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} title="Task Tracker" /
```

Header.js

```jsx
<Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Add"} onClick={onAdd} />
```

---

# 1:19:33 - Build for production

```bash
npm run build

// install serve dependency if you want to view your build for production
sudo npm i -g serve 

serve -s build -p 8000
```

---

# 1:21:51 - JSON Server

```bash
npm i json-server
```

then at package.json

insert script

```json
"server": "json-server --watch db.json --port 5000"
```

then back at terminal

```bash
//create db.json and start our server
npm run server

//run on another terminal dev server for front
npm start

```

then replace evrything in db.json with the tasks array you had with app.js, remove the tasks data from app.json and leave it as an empty array.

App.js

```jsx
const [tasks, setTasks] = useState([])
```

db.json

```json
{
  "tasks": [
    {
      "id": 1,
      "text": "task1",
      "day": "day1",
      "reminder": false
    },
    {
      "id": 2,
      "text": "task2",
      "day": "day2",
      "reminder": false
    },
    {
      "id": 3,
      "text": "task3",
      "day": "day3",
      "reminder": false
    }
  ]
}
```

now you can check ur backend dev server at [http://localhost:5000/tasks](http://localhost:5000/tasks) and u shud see the data.

---

# 1:25:53 - useEffect Hook & Fetch tasks from server

App.js

```jsx
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const respond = await fetch("http://localhost:5000/tasks")
      const data = await respond.json()

      console.log(data)
    }
    fetchTasks()
  }, [])

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
```

then check your console to see the data

however, since you want to still reuse fetchTasks and not just useEffect when the page loads:

put out the fetch Tasks under useEffect, then create a new async function inside useEffect to get the data using the fetchTasks method, then setTasks(data)

```jsx
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
```

u shud see the data again after reload.

---

# 1:30:13 - Delete task from server

change delete tasks into async function, and this time making a delete request to our server.

```jsx
//Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter((task) => task.id !== id));
  }
```

---

# 1:31:51 - Add task to server

```jsx
const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()
    setTasks([...tasks, data]);
  }
```

---

# 1:35:15 - Toggle reminder on server

create first a fetch single task method called fetchTask() to get a single task. you can just copy the fetchTasks method, then pass the id parameters.

```jsx
const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  }
```

then for toggleReminder method:

```jsx
const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !data.reminder } : task))
  }
```

then when you try out toggling, you can see put requests being logged in your server console.

---

# 1:39:15 - Routing, footer & about

```bash
npm i react-router-dom
```

inside components, touch Footer.js

```jsx
const Footer = () => {
  return (
    <foooter>
      <p>Copyright &copy; 2021</p>
      <a href="/about">About</a>

    </foooter>
  )
}

export default Footer
```

touch also About.js

```jsx
const About = () => {
  return (
    <div>
      <h4>About Page</h4>
      <a href="/">Go Back</a>

    </div>
  )
}

export default About
```

then at App.js, import the components. and also router from react router dom

```jsx
import { BrowserRouter as Router, Route } from "react-router-dom"

import Footer from "./components/Footer"
import About from "./components/About"
```

then react the whole content inside <Route></Route> then:

```jsx
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

import About from "./components/About"

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
    const response = await fetch("http://localhost:5000/tasks")
    const data = await response.json()
    return data
  }

  //Fetch a single task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  }

  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()
    setTasks([...tasks, data]);
  }

  //Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !data.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} title="Task Tracker" />

        <Route path="/" exact render={(props) => {
          <>
            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ?
              (<Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />) :
              ("No Tasks to show")
            }

          </>
        }} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

now, noticed how when routing with the a tags, the whole page reloads, to prevent that, we get link from react-router-dom then change all a's to Link, and href's to to.

Footer.js

```jsx
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <foooter>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>

    </foooter>
  )
}

export default Footer
```

About.js

```jsx
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
      <h4>About Page</h4>
      <Link to="/">Go Back</Link>

    </div>
  )
}

export default About
```

now, we still see the add task button inside about page which doesnt make sense, so we use the useLocation hook react-router-dom inside Header.js

```jsx
import PropTypes from 'prop-types'
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" &&
        <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Add"} onClick={onAdd} />}
    </header>
  )
}

Header.defaultProps = {
  title: "Default Header Title"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
```

---