import React from 'react';

const AccordionContext = React.createContext();

const Accordion = ({ children }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggle = () => {
        setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    };

    return (
        <AccordionContext.Provider
            value={{
                isExpanded,
                toggle,
            }}
        >
            <div
                style={{
                    border: '1px solid #222',
                    borderRadius: '5px',
                    padding: '1rem',
                    margin: '2rem 1rem',
                }}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

const Header = ({ children }) => {
    const { isExpanded, toggle } = React.useContext(AccordionContext);

    return (
        <>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    onClick: toggle,
                });
            })}
        </>
    );
};

const Body = ({ children }) => {
    const { isExpanded } = React.useContext(AccordionContext);

    if (!isExpanded) {
        return null;
    }

    return <>{children}</>;
};

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
