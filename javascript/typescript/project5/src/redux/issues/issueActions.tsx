import {ActionAdd}  from '../../interface';
import {Iissues}  from '../../interface';


export default {
    addNewIssue: (issueItem: Iissues): ActionAdd => ({ type: 'ADD-NEWISSUE', issueItem: issueItem }),
    respondIssue: (issueItem: Iissues): ActionAdd => ({ type: 'RESPOND-NEWISSUE', issueItem:issueItem })
}