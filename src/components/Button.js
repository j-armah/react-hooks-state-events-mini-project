import React, { useState } from 'react'

const Button = ({ category, selectedCategory, toggleButton}) => {
    
    const handleClick = (event) => {
        //onClick("selected")
        selectedCategory(category)
        toggleButton(category)
    }
    return (
        <button className="" onClick={handleClick}> {category} </button>
    )
}

export default Button