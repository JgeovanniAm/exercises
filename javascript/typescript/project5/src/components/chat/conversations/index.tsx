import React, { useState, useEffect } from 'react';
import { Iissues } from '../../../interface';

export default ({ conversation }: Iprops) => {
    return (
        <ul>
            {
                conversation.arrConver.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}</h4>
                        <p>{item.message}</p>
                    </li>
                ))
            }
        </ul>
    );
}

interface Iprops {
    conversation: Iissues
}
