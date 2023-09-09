import React from 'react';

const search = React.memo(() => {
    console.log('render memo')
    return (
        <input placeholder="search issue" type="search" />
    );
})

export default search