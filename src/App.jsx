import React from 'react';
import UsersList from './components/UsersList';
import TodosList from './components/TodosList';
import SearchUsers from './components/UsersList';
import SearchTodos from './components/TodosList';
import RenderProps from './components/RenderProps';
import { Accordion } from './components/Accordion';

const App = () => {
    return (
        <>
            {/* <h2>Higher Order Components</h2>
            <SearchUsers />
            <SearchTodos /> */}

            {/* <h2>The Render Props Pattern</h2>
            <RenderProps
                render={(value) => {
                    return (
                        <>
                            <h1>This is the value: {value}</h1>
                        </>
                    );
                }}
            />

            {
                <RenderProps
                    render={(value) => {
                        return (
                            <>
                                <>
                                    <h1>This is another value: {value}</h1>
                                </>
                            </>
                        );
                    }}
                />
            } */}

            <h1>The Compound Components Pattern</h1>
            <Accordion>
                <Accordion.Header>
                    <button
                        style={{
                            backgroundColor: '#eee',
                            width: '100%',
                            color: '#222',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        What is the compound component pattern?
                    </button>
                </Accordion.Header>
                <Accordion.Body>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: '#222',
                            margin: '2rem 0',
                            textAlign: 'justify',
                        }}
                    >
                        The compound component pattern is a pattern that allows
                        us to create components that share state and logic
                        without having to use a render prop or a higher order
                        component.
                    </p>
                </Accordion.Body>
            </Accordion>

            <Accordion>
                <Accordion.Header>
                    <button
                        style={{
                            backgroundColor: '#eee',
                            width: '100%',
                            color: '#222',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        How the compound component pattern is different from the
                        render props pattern?
                    </button>
                </Accordion.Header>
                <Accordion.Body>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: '#222',
                            margin: '2rem 0',
                            textAlign: 'justify',
                        }}
                    >
                        The compound component pattern is different from the
                        render props pattern because it allows us to share state
                        and logic between components without having to use a
                        render prop or a higher order component.
                    </p>
                </Accordion.Body>
            </Accordion>
        </>
    );
};

export default App;
