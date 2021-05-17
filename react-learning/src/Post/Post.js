import { Component } from "react"
import './Post.css'
class Post extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render(){
        return(
            <div className="card">
                <div className="heading">
                        <div className="left">
                            <img src="" alt="" className="image" />
                            <div className="name">
                                {this.props.fullName}
                            </div>
                            <div className="username">
                                {this.props.userName}
                            </div>
                        </div>
                        <div className="right">
                            <button className="btn-follow">Follow</button>
                        </div>
                </div>
                <div className="body">
                    {this.props.tweet}
                </div>
            </div>
        )
    }
}
export default Post;