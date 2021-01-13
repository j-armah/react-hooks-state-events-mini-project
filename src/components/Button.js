import React, { useState } from 'react'

const Button = ({ category, selectedCategory }) => {
    const [isClicked, setIsClicked] = useState("")

    const handleClick = (event) => {
        setIsClicked("selected")
        selectedCategory(category)
    }

    return (
        <button className={isClicked} onClick={handleClick}> {category} </button>
    )
}

export default Button