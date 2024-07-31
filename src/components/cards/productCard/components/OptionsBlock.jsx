import React, { useState, useEffect } from 'react';

const filterByWeight = (options) => {
    return options.filter(option => option.hasOwnProperty('weight'));
};

export const OptionsBlock = ({ options, selectedOption, setSelectedOption, setPrice }) => {
    const [weightOptions, setWeightOptions] = useState([])

    const handleOptionClick = (e, option) => {
        e.stopPropagation()
        setSelectedOption(option);
    };

    useEffect(() => {
        if (options?.length > 0) {
            const weightOptionsArr = filterByWeight(options)
            setWeightOptions(weightOptionsArr.length > 0 ? weightOptionsArr : [])
            setSelectedOption(weightOptionsArr.length > 0 ? weightOptionsArr[0] : null)
        }
    }, [options])

    useEffect(() => {
        if (weightOptions?.length > 0) {
            setPrice(weightOptions[0].price)
        }
    }, [weightOptions])

    useEffect(() => {
        if (selectedOption) {
            setPrice(selectedOption.price)
        }
    }, [selectedOption])

    if (weightOptions.length > 0) {
        return (
            <div className="productCard-mass flex green800 f18 fS16">
                {
                    weightOptions.map((option, index) => (
                        <span
                            key={index}
                            className={selectedOption === option ? 'active' : ''}
                            onClick={(e) => handleOptionClick(e, option)}
                        >
                            {option.weight}
                        </span>
                    ))
                }
            </div>
        );
    }
    return <></>
};
