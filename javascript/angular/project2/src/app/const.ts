export interface IformTask {
    title: string
    name: string
    file: string
    description: string
    status ?: boolean
    date: Date
    _id ?: number | string
}