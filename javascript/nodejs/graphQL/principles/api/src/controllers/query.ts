import { IResolvers } from 'graphql-tools' //response to my querys

// my operations to resolve
export const query: IResolvers = {
    Query: {
        name(): string {
            return 'jimmy'
        },
        lastName(): string {
            return 'jimmy'
        },
        greets(__: void, { name }): string {
            return `hola mi querido amigo ${name}`
        }
    },
}