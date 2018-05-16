import * as React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`
interface Props {
    data: any
}

class AddBook extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    displayAuthors= () => {
        const data = this.props.data;
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

    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);