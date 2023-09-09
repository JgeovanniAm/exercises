import { IResolvers } from 'graphql-tools' //response to my querys
import { query } from './query';
import {type} from './type';
import { mutation } from './mutation';

// my operations to resolve
export const resolve: IResolvers = {
    ...query,
    ... mutation,
    ...type
}

