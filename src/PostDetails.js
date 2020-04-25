import React, { Component } from "react";

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postId: this.props.match.params.postId,
            post: [],
            comments: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => this.setState({ post: data[this.state.postId-1] }))

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => this.setState({ comments: data }))
    }

    render() {
        let { postId, post, comments } = this.state;
        return (
            <div className="container">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Topic: {post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
                <h3>Comments</h3>
                {comments.map(function(comment) {
                    if(comment.postId == postId) {
                        return (                
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Topic: {comment.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Author: {comment.email}</h6>
                                <p className="card-text">{comment.body}</p>
                            </div>
                        </div>);
                    }
                })}
            </div>
        )
    }
}

export default PostDetails;