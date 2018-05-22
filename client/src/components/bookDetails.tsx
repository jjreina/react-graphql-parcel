import * as React from 'react';
import { graphql, compose } from 'react-apollo';

import  { getBookQuery, removeBookMutation, getBooksQuery } from '../queries/queries'

interface Props {
    bookId: string,
    data?: any,
    removeBookMutation?: any
}

class BookDetails extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    };

    removeBook(bookId: string) {
        console.log(bookId);
        this.props.removeBookMutation({
            variables: {
                id: bookId
            },
            refetchQueries: [
                { query: getBooksQuery }, 
                { query: getBookQuery, variables: { id: bookId } }
            ]
        });
    }

    displayBookDetails() {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                    <button onClick={this.removeBook.bind(this, book.id)}>-</button>
                    <p className="remove-text">Remove book</p>
                </div>
            )
        } else {
            return (
                <div>No book selected</div>
            )
        }
    }
    render() {
        return(
            <div id="book-details">
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default compose(
    graphql(getBookQuery, {
        options: (props: Props) => {
            return {
                variables: {
                    id: props.bookId
                }
            }
        }
    }),
    graphql(removeBookMutation, { name: "removeBookMutation" })
)(BookDetails);