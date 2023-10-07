import React, { useEffect, useState } from 'react';
import HOC from './HOC';

const TodosList = ({ data }) => {
    /*
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch users from API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data));
    }, []);
    */

    return (
        <>
            {/* <div
                className='
                todos-list-header
                '
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'end',
                    flexDirection: 'row',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        marginBottom: '1rem',
                        marginTop: '1rem',
                    }}
                >
                    Todos List
                </h1>
                <input
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '33%',
                        padding: '0.5rem',
                        marginBottom: '1rem',
                    }}
                />
            </div> */}
            <div
                className='todos-list'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}
            >
                {data.slice(0, 10).map((todo) => {
                    return (
                        <div
                            key={todo.id}
                            className='todo'
                            style={{
                                border: '1px solid #ccc',
                                padding: '1rem',
                                borderRadius: '5px',
                                width: 'calc(100% / 3 - 1rem)',
                            }}
                        >
                            <h4>{todo.title}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const SearchTodos = HOC(TodosList, 'todos');

export default SearchTodos;
