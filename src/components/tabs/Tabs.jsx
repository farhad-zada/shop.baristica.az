    import React, { useEffect, useState } from 'react';
    import './tabs.css'

    const Tab = ({ children, isSelected, onClick }) => (
        <button
            className={
                isSelected
                    ?
                    'tab selectedTab flex align-center text-blue'
                    :
                    'tab flex align-center text-gray'
            }
            style={{
                padding: '7px',
                cursor: 'pointer',
                width: 'max-content',
                whiteSpace: 'nowrap'
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );

    const Tabs = ({ children }) => {
        const [selectedTab, setSelectedTab] = useState(children[0].props.label);
        useEffect(() => {
            setSelectedTab(children[0].props.label)
        },[children])
        return (
            <div className='tabs'>
                <div className='tabs-headings' style={{ display: 'flex' }}>
                    {children?.map((child) => {
                        const { label, count } = child?.props;
                        return (
                            <Tab
                                key={label}
                                isSelected={label === selectedTab}
                                onClick={() => {
                                    setSelectedTab(label)
                                }}
                            >
                                {label} 
                            </Tab>
                        );
                    })}
                </div>
                <div>
                    {children?.map((child) => {
                        if (child?.props?.label !== selectedTab) return undefined;
                        return child?.props?.children;
                    })}
                </div>
            </div>
        );
    };

    export default Tabs;

