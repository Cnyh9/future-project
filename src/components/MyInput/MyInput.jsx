import React from 'react'
import './MyInput.scss'

export const MyInput = ({searchValue, setSearchValue,...props}) => {
    return (
        <input {...props} 
            className="myInput"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)} 
        />
    )
}
