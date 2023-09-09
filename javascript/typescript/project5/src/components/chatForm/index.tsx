import React, { useState } from 'react';
import {Iissues, IrespondIssue}  from '../../interface';

export default ({ selfIssue, sendMethodDispatch }: Iprops) => {
    const [state, setState] = useState<IrespondIssue>({ name: '', message: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const inputElem: any = e.target;
        setState({ ...state, [inputElem.name]: inputElem.value });
    }

    const handleClick = () => {
        selfIssue.arrConver.push(state);
        validation() ? sendMethodDispatch(selfIssue) : alert('err');
    }

    const validation = () => state.message === '' || state.name === '' ? false : true;

    return (
        <div>
            <form >
                <div>
                    <input onChange={handleChange} name="name" type="text" placeholder="your name" />
                </div>
                <div>
                    <textarea onChange={handleChange} name="message" placeholder="message"></textarea>
                </div>
                <input onClick={handleClick} value="send" type="button" />
            </form>
        </div>
    );
}

interface Iprops {
    selfIssue: Iissues
    sendMethodDispatch: (e:Iissues)=> void
}