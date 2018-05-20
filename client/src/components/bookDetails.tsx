import * as React from 'react';
import { graphql } from 'react-apollo';

import  { getBookQuery } from '../queries/queries'

interface Props {
    bookId: string,
    data?: any
}

class BookDetails extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    };

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
                    <button>-</button>
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

export default graphql(getBookQuery, {
    options: (props: Props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);