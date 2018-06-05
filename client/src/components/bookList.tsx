import * as React from 'react';
import { graphql } from 'react-apollo';
import BookDetails from './bookDetails';
import { connect } from 'react-redux';

import { getBooksQuery} from '../queries/queries';
import { selectedBook } from '../actions/selectBookAction';

interface Props {
    data: any,
    selectedBookId: string,
    selectedBook: any
}

class BookList extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    displayBooks = () =>
    {
        const data = this.props.data;
        if (data.loading) {
            return(<div>Loading books..</div>);
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id} onClick={ this.props.selectedBook.bind(this, book.id) }>{book.name}</li>
                );
            })
        }
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId={ this.props.selectedBookId }/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBookId: state.selectBookReducer.selectedBookId
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        selectedBook: (selectedBookId: string, e: React.ChangeEvent<HTMLInputElement>) => {
            return dispatch(selectedBook(selectedBookId));
        }
    }
}

export default graphql(getBooksQuery)(connect(mapStateToProps, mapDispatchToProps)(BookList));