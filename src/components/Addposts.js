import React, { Component } from 'react';


class Addposts extends Component {
    state = {
        posted: [],
        post: ""
    }

    addToPosted = (post) => {
        let newPosts = [...this.state.posted, post]
        this.setState({
            posted: newPosts,
            post: ''
        })
    }

    deleteFromPosted = (post) => {
        let deletedPost = [...this.state.posted, post.Splice()]
        this.setState({
            posted: deletedPost
        })
    }


    render() {
        return (
            <div className="inner-container">
                <div className="add-post">
                    <div className="post-container">
                        <ol align="center">
                            {this.state.posted.map((p, i) => <ul className="ul-item" key={i}>{p}
                            <button className="ul-delete-btn">X</button>
                            <button className="ul-update-btn">U</button>
                            </ul>)}
                            
                        </ol>
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            className="post-form"
                            placeholder="Make Post.."
                            value={this.state.post.toLowerCase()}
                            onChange={(e) => this.setState({ post: e.target.value })}>
                        </input>
                        <button
                            className="btn btn-primary"
                            id="submit-button"
                            type="button"
                            value={this.state.post}
                            onClick={() => this.addToPosted(this.state.post)}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addposts;