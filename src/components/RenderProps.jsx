import React, { useState } from 'react';

const RenderProps = ({ render }) => {
    const [value, setValue] = useState();
    return (
        <>
            <input
                type='number'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            {render(value)}
        </>
    );
};

export default RenderProps;
