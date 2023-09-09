import React, { useState } from 'react';
import Chat from '../chat';
import { Iissues } from '../../interface';
import Context from '../index';

export default React.memo(({ item, index }: Iprops) => {
    const [state, setState] = useState(false);
    const [totalMessage, setTotal] = useState(0);

    const  updateMessageTotal = (length:number) => {
       setTotal(length);
    }

    const contextValue = {
        updateMessageTotal: updateMessageTotal
    }

    return (
        <Context.Provider value={contextValue}>
            <li key={index}>
                <div>
                    <button onClick={() => setState(!state)}>
                        <h2>{item.title}</h2>
                        <span>{totalMessage}</span>
                    </button>
                    {
                        state && <Chat selfIssue={item} />
                    }
                </div>
            </li>
        </Context.Provider>
    );
}, (prevProps, nextProp) => prevProps.index === nextProp.index) // si es true no se renderiza y si es false se render

interface Iprops {
    item: Iissues
    index: number
}

