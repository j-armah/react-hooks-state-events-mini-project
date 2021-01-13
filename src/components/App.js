import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //let filteredTasks = [...TASKS]
  const [tasks, setTasks] = useState(TASKS)
  //const [category, setCategory] = useState("All")

  const handleSelectedCategory = (categorySelect) => {
    if (categorySelect !== "All") {
      const filteredTasks = TASKS.filter(task => task.category === categorySelect)
      setTasks(filteredTasks)
    } else {
      setTasks(TASKS)
    }
  }

  const handleNewTask = (newTask) => {
    setTasks([...TASKS, newTask])
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
