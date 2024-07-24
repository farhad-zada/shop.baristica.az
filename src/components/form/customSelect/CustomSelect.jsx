import React, { useState, useRef, useEffect } from 'react';
import './customSelect.css';

const CustomSelect = ({ options, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const selectRef = useRef(null);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option.text);
        setIsOpen(false);
        if (onOptionSelect) {
            onOptionSelect(option.value);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if(options){
            setSelectedOption(options[0]?.text)
        }
    },[options])

    return (
        <div className="custom-select-wrapper " ref={selectRef}>
            <div className="custom-select flex column" onClick={toggleOpen}>
                <div className="custom-select-trigger f18 border20 flex a-center j-between">
                    <span>{selectedOption}</span>
                    <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
                </div>
                {isOpen && (
                    <div className="custom-options">
                        {options &&  options?.map((option) => (
                            <span 
                                key={option.value} 
                                className={`custom-option ${selectedOption === option.text ? 'selected' : ''}`}
                                onClick={() => selectOption(option)}
                            >
                                {option.text}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomSelect;
