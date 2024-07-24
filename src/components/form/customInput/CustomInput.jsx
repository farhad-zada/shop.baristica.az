import React from 'react'
import './customInput.css'

export default function CustomInput(props) {
    const { placeholder, onChange, value, name } = props
    return (
        <input
            name={name}
            className='customInput border20 green600 f18'
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            value={value}
            type='text'
        />
    )
}
