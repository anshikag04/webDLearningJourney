import {Component} from "react"
import Message from "../Message"
class Navbar extends Component {
    constructor(props) {
        super(props) 
        this.props = props
        this.state = {
            x:70
        }
    }
    decrement =  ()=>{
        this.setState({x: this.state.x-1})
    }
    render() { 
        return(
            
            <div>
                <button onClick={this.decrement}>Decrement</button>
                <h1>{this.state.x}</h1>
                { this.state.x<70 ? <Message text="happy"/> : <Message text="sad"/>}
                <button onClick={() => {this.setState({x: this.state.x+1})}}>Increment</button>
            </div>
        )
    }

}
export default Navbar