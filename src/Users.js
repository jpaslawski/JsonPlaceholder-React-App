import React, { Component } from "react";

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({ users: data }))
    }

    render() {

        return (
            <div className="container">
                <div className="page-header">
                    <h1>Users</h1>
                </div>
                <div className="card-columns">
                    {/***********************************************************/}
                    {this.state.users.map((user) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                                <p clasclassNames="card-text">{user.address.city}, {user.address.zipcode}</p>
                                <a href={`users/${user.id}`} className="card-link">User details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Users;