import { IResolvers } from 'graphql-tools' //response to my querys
import { data } from '../data/data.store';

export const mutation: IResolvers = { // my operations to resolve
    Mutation: {
        newCourse: function (_: void, { course }): any {
            const item = {
                id: data.course.length.toString() ,
                title: course.title ,
                description: course.description ,
                class: course.class,
                time: course.time ,
                logo: course.logo ,
                level: course.level ,
                path: course.path ,
                teacher: course.teacher,
                students: course.students,
                reviews: [],
            }
            data.course.push(item)
            return item
        },
        editCourse: function(_ : void, { course }:any): any {
            let foundItem = data.course.find((item:any) => item.id === course.id )
            if(foundItem){
                data.course[parseFloat(foundItem.id)] = course;
            }
            return course
        },
        deleteCourse: function(_ : void, { course }:any): any {
            let foundItem = data.course.find((item:any) => item.id === course.id )
            if(foundItem){
                data.course = data.course.filter((item:any) => item.id !== course.id)
            }
            return course
        }
    }
}