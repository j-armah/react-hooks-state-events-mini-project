import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  console.log(categories.slice(1))
  const [text, setText] = useState("")
  const [category, setCategory] = useState("All")


  const handleSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      text,
      category
    }
    console.log(newTask)
    onTaskFormSubmit(newTask)
  }

  const handleOption = (event) => {
    console.log(event.target.value)
    setCategory(event.target.value)
  }

  const handleInput = (event) => {
    console.log(event.target.value)
    setText(event.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleOption}>
          {/* render <option> elements for each category here */}
          { categories.slice(1).map(category => 
            <option key={category}> 
              {category} 
            </option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
