import React from 'react';

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {
        state = {
            data: [],
            searchTerm: '',
        };

        componentDidMount() {
            fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                .then((response) => response.json())
                .then((data) => this.setState({ ...this.state, data: data }));
        }

        render() {
            let { searchTerm, data } = this.state;
            let filteredData = data.filter((d) => {
                if (entity === 'users') {
                    const { name } = d;
                    return name.indexOf(searchTerm) >= 0;
                }
                if (entity === 'todos') {
                    const { title } = d;
                    return title.indexOf(searchTerm) >= 0;
                }
            });

            return (
                <>
                    <div
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
                            {entity}
                        </h1>
                        <input
                            type='text'
                            value={searchTerm}
                            onChange={(e) =>
                                this.setState({
                                    ...this.state,
                                    searchTerm: e.target.value,
                                })
                            }
                            style={{
                                width: '33%',
                                padding: '0.5rem',
                                marginBottom: '1rem',
                            }}
                        />
                        <WrappedComponent data={filteredData} />
                    </div>
                </>
            );
        }
    };
};

export default HOC;
