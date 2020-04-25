import React, { Component } from "react";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.setState({ posts: data }))
    }

    render() {

        return (
            <div className="container">
                <div className="page-header">
                    <h1>Posts</h1>
                </div>
                <div className="card-columns">
                    {/***********************************************************/}
                    {this.state.posts.map((post) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <a href={`posts/${post.id}`} className="btn btn-primary">Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Posts;