import React from 'react';
// it will show my card information

export default props => <img onClick={(e) => props.displayinfo(props.id)} src={props.url} alt="my card" />

