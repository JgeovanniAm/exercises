import {Iissues, IrespondIssue }  from '../../interface';

export default (data_issues: Array<Iissues> = [], action: IAction) => {
    switch (action.type) {
        case 'ADD-NEWISSUE': return [...data_issues, action.issueItem];
        case 'RESPOND-NEWISSUE': return data_issues ;
        default: return data_issues;
    }
}

interface IAction {
    type: string
    issueItem: Iissues
    conversation: IrespondIssue
}

