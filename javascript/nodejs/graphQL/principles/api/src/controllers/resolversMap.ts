import { IResolvers } from 'graphql-tools' //response to my querys
import {query} from './query';

// my operations to resolve
export const resolve: IResolvers = {
    ...query
}
