import React, { Component } from "react";

class UserDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.userId,
            user: [{}],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                const theUser = data.filter(item => {
                    return item.id === parseInt(this.state.userId);
                })
                this.setState({
                    user: theUser,
                    isLoaded: true
                })
            })
    }

    render() {
        let { user, isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div className="container">
                    <br />
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title text-center">{user[0].name}</h4>
                        </div>
                        <div className="card-body">
                            <h4>Personal Data</h4>
                            <dl className="row">
                                <dt className="col-sm-3">Username:</dt>
                                <dd className="col-sm-9">{user[0].username}</dd>
                                <dt className="col-sm-3">Email:</dt>
                                <dd className="col-sm-9">{user[0].email}</dd>
                                <dt className="col-sm-3">Phone:</dt>
                                <dd className="col-sm-9">{user[0].phone}</dd>
                                <dt className="col-sm-3">Website:</dt>
                                <dd className="col-sm-9">{user[0].website}</dd>
                            </dl>
                        </div>
                        <div className="card-body">
                            <h4>Company</h4>
                            <dl className="row">
                            <dt className="col-sm-3">Name:</dt>
                                <dd className="col-sm-9">{user[0].company.name}</dd>
                                <dt className="col-sm-3">Skills:</dt>
                                <dd className="col-sm-9">{user[0].company.bs}</dd>
                                <dt className="col-sm-3">Pros:</dt>
                                <dd className="col-sm-9">{user[0].company.catchPhrase}</dd>
                            </dl>
                        </div>
                        <div class="card-footer">
                            <h4>Address</h4>
                            <dl className="row">
                            <dt className="col-sm-3">City:</dt>
                                <dd className="col-sm-9">{user[0].address.city}, {user[0].address.zipcode}</dd>
                                <dt className="col-sm-3">Street & Suite:</dt>
                                <dd className="col-sm-9">{user[0].address.street}, {user[0].address.suite}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default UserDetails;