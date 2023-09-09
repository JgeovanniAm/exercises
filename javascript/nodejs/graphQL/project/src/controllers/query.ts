import { IResolvers } from 'graphql-tools' //response to my querys
import { data as students, } from '../data/data.store';

// my operations to resolve
export const query: IResolvers = {
    Query: {
        students(): any[] {
            return students.students
        },
        student(i: void, { id }): any {
            //console.log(students.students.filter(item => item.id === id))
            return students.students.filter(item => item.id === id)[0]
        },
        course(): any[] {
            return students.course
        },
        courseId(i: void, { id }): any {
            console.log(i)
            return students.course.filter(item => item.id === id)[0]
        }
    },
}
