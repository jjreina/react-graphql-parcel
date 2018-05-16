import * as React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/bookList';
import AddBook from './components/addBook';

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

export const App: React.StatelessComponent = () => {

    const text: string = 'Hello React plus Typescript';
    const number: number = 6
    return(
        <ApolloProvider client={client}>
            <div>
                <h1>{`${text} plus es${number} on Parcel!!`}</h1>
                <BookList/>
                <AddBook/>
            </div>
        </ApolloProvider>
    )
} 