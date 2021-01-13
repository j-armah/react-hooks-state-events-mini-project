import React from "react";
import Button from './Button'

function CategoryFilter({ categories, selectedCategory }) {

  const catList =  categories.map(category => 
      <Button key={category} 
        category={category} 
        selectedCategory={selectedCategory}
      />
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      { catList }

    </div>
  );
}

export default CategoryFilter;
