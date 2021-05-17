import { Component } from "react"
import Message from "../Message"
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            name: ''
        }
    }
    render() {
        return (

            <div>
            ENTER YOUR NAME:
                <input type="text" value={this.state.name} onChange={(event) =>{this.setState({name:event.target.value})} }/>
                Your Name Is:{this.state.name}
            </div>
        )
    }

}
export default Navbar