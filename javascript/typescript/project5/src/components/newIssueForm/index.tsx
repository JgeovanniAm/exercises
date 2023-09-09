import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ActionReduxIssues from '../../redux/issues/issueActions';

const FormNewIssue: React.FC = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        title: '',
        name: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const inputElem: any = e.target;
        setState({ ...state, [inputElem.name]: inputElem.value });
    }

    const handleClick = () => {
        validation() ? dispatch(ActionReduxIssues.addNewIssue({ ...state, arrConver: [] })) : alert('err');

    }
    const validation = () => state.message === '' || state.name === '' || state.title === '' ? false : true

    return (
        <form>
            <div>
                <input name="title" onChange={handleChange} type="text" placeholder="title issue" />
            </div>
            <div>
                <input name="name" onChange={handleChange} type="text" placeholder="name" />
            </div>
            <div>
                <textarea name="message" onChange={handleChange} placeholder="message"></textarea>
            </div>
            <input onClick={handleClick} type="button" value="public" />
        </form>
    );
}

export default FormNewIssue;