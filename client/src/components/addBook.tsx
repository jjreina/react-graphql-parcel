import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import { onChangeFormName, onChangeFormGenre, onChangeFormAuthorId } from '../actions/onChangeFormAction';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { SyntheticEvent } from 'react';

interface Props {
    getAuthorsQuery: any,
    addBookMutation: any,
    name: String,
    genre: String,
    authorId: String,
    onChangeForm: any
}

class AddBook extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    displayAuthors = () => {
        const data = this.props.getAuthorsQuery;
        if (data.loading) {
            return(<option disabled>Loading Authors...</option>);
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                );
            })
        }
    }

    submitForm = (e: React.FormEvent<HTMLSelectElement>) => {
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.props.name, 
                genre: this.props.genre, 
                authorId: this.props.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    render() {
        return (
            <form id="add-book" onSubmit= { this.submitForm.bind(this) }>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange= { this.props.onChangeForm.bind(this, 'name') }/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange= { this.props.onChangeForm.bind(this, 'genre') }/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange= { this.props.onChangeForm.bind(this, 'authorId') } >
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.onChangeFormReducer.name,
        genre: state.onChangeFormReducer.genre,
        authorId: state.onChangeFormReducer.authorId
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeForm: (combo: string, e: React.ChangeEvent<HTMLInputElement>) => {
            switch (combo) {
                case 'name': {
                    return dispatch(onChangeFormName(e.target.value));
                }
                case 'genre': {
                    return dispatch(onChangeFormGenre(e.target.value));
                }
                default:
                    return dispatch(onChangeFormAuthorId(e.target.value));
            }
        }
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addBookMutation, { name: "addBookMutation"})
)(connect(mapStateToProps, mapDispatchToProps)(AddBook));