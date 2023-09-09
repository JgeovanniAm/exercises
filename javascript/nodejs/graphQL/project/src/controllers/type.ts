import { IResolvers } from 'graphql-tools' //response to my querys
import { data as course } from '../data/data.store';
// this solution it could be a class with child properties or class
// my operations to resolve
export const type: IResolvers = {
    Students: {
        course: parent => {
            const curso: any = []
            parent.courses.forEach((element: any) => {
                curso.push(course.course.filter((item: any) => item.id === element)[0])
            });
            return curso
        },
    },
    Course: {
        students: parent => { // parent is my query info
            let students: any = [];
            course.students.forEach((item) => {
                const student = item.courses.filter((item) => item === parent.id)
                if (student.length > 0)  students = [...students, item ];
            })
            console.log(students)
            return students
        },
    }
}
