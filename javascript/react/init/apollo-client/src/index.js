
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider, ApolloConsumer } from '@apollo/react-hooks';

// init apollo client
const container = document.getElementById('root');

const client = new ApolloClient({
    uri: 'http://localhost:3000reportgl',
});

console.log(client)

const App = () => { 
   /* return (
        <ApolloProvider client={client}>
            <ApolloConsumer>
                {client => <Title result={client} />}
            </ApolloConsumer>
        </ApolloProvider>
    ) */
    return (
        <ApolloProvider client={client}>
           hi
        </ApolloProvider>
    )
}

/*  // consumer component
const Title = function ({ result }) {
    result.query({
        query: gql`
        {
            course{
                title
                id
            }
        }
        `
    }).then(data => {
        //console.log(data)
    })
    return <h1>hello world</h1>
}
*/

/* // useQuery graphQL querys
const Title = function ( ) {
    const query = gql`
    {
        course {
            title
            id
        }
    }
    `
    // variables with useQuery
    const query = useQuery(query, {
                    variables: { id: 'uno' },
                    skip: !id
                }) 
    const result = useQuery(query);
    console.log(result)
    return <h1>hello world</h1>
} 
*/ 

/*  // mutation example
const myCompon = function () {
    const [addTodo, { data }] = useMutation(ADD_TODO);
    return (
        <div>
        <form
            onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = '';
            }}
        >
            <input
            ref={node => {
                input = node;
            }}
            />
            <button type="submit">Add Todo</button>
        </form>
        </div>
    );
}
*/

ReactDOM.render(<App />, container)
