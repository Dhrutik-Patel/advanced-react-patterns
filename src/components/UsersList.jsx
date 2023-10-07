import React, { useEffect, useState } from 'react';
import HOC from './HOC';

const UsersList = ({ data }) => {
    /*
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch users from API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);
    */

    return (
        <>
            {/* <div
                className='
                users-list-header
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
                    Users List
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
                className='users-list'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}
            >
                {data.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className='user'
                            style={{
                                border: '1px solid #ccc',
                                padding: '1rem',
                                borderRadius: '5px',
                                width: 'calc(100% / 3 - 1rem)',
                            }}
                        >
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const SearchUsers = HOC(UsersList, 'users');

export default SearchUsers;
