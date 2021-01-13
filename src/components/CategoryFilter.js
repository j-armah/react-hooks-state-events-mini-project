import React, {useState} from "react";
import Button from './Button'

function CategoryFilter({ categories, selectedCategory, category }) {
  const [isClicked, setIsClicked] = useState("")

  // const onToggleButton = (category) => {
  //   const button = catList.find(item => item.props.category === category)
  //   console.log(button)
  // }

  // const catList =  categories.map(category => 
  //     <Button key={category} 
  //       category={category} 
  //       selectedCategory={selectedCategory}
  //       toggleButton={onToggleButton}
  //     />
  // )

  const handleClick = (category) => {
    //onClick("selected")
    selectedCategory(category)
    //toggleButton(category)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {/* { catList } */}
      <button className={category === "All" ? "selected" : ""} onClick={() => handleClick("All")}> All </button>
      <button className={category === "Code" ? "selected" : ""} onClick={() => handleClick("Code")}> Code </button>
      <button className={category === "Food" ? "selected" : ""} onClick={() => handleClick("Food")}> Food </button>
      <button className={category === "Money" ? "selected" : ""} onClick={() => handleClick("Money")}> Money </button>
      <button className={category === "Misc" ? "selected" : ""} onClick={() => handleClick("Misc")}> Misc </button>
    </div>
  );
}

export default CategoryFilter;
