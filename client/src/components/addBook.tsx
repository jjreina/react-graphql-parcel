import * as React from 'react';
import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { SyntheticEvent } from 'react';

interface Props {
    getAuthorsQuery: any,
    addBookMutation: any
}

interface State {
    name: String,
    genre: String,
    authorId: String
}

class AddBook extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
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
                name: this.state.name, 
                genre: this.state.genre, 
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    render() {
        return (
            <form id="add-book" onSubmit= { this.submitForm.bind(this) }>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange= { (e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange= { (e: React.ChangeEvent<HTMLInputElement>) => this.setState({genre: e.target.value}) }/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange= { (e: React.ChangeEvent<HTMLSelectElement>) => this.setState({authorId: e.target.value})} >
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addBookMutation, { name: "addBookMutation"})
)(AddBook);