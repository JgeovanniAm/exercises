export interface ActionAdd {
    type: string
    issueItem: Iissues
}

export interface Iissues {
    name: string
    title: string
    message: string
    arrConver: Array<IrespondIssue>
}

export interface IrespondIssue {
    name: string
    message: string
}