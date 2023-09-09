import React, { useState, useContext } from 'react';
import ChatForm from '../chatForm';
import Conversations from './conversations';
import { Iissues } from '../../interface';
import { useDispatch } from 'react-redux';
import ActionReduxIssues from '../../redux/issues/issueActions';
import Context from '../index';

export default ({ selfIssue }: Iprops) => {
    const [stateBtn, setStateBtn] = useState(false);
    const dispatch = useDispatch();
    const context: any = useContext(Context);

    const sendMethodDispatch = (result: Iissues) => {
        dispatch(ActionReduxIssues.respondIssue(result));
        context.updateMessageTotal(selfIssue.arrConver.length);
        setStateBtn(!stateBtn);
    }

    return (
        <div>
            <article>
                <h3>{selfIssue.name}</h3>
                <p>{selfIssue.message}</p>
                <button onClick={() => setStateBtn(!stateBtn)}>respond issue</button>
                {
                    stateBtn && <ChatForm sendMethodDispatch={sendMethodDispatch} selfIssue={selfIssue} />
                }
            </article>
            {
                <Conversations conversation={selfIssue} />
            }
        </div>
    );
}

interface Iprops {
    selfIssue: Iissues
}
