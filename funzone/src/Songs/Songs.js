import {Component} from 'react'
import axios from 'axios'
import './Songs.css'
class Songs extends Component{
    constructor() {
        super()
        this.state = {
            quote: []
        }
    }
    componentDidMount() {
        axios.get("http://api.quotable.io/quotes").then((response) => {
            if(response.data){
                this.setState({quote : response.data.results})
            }
        })
    }
    render() {
        return(
            <div>
                {this.state.quote ? this.state.quote.map((qu,index) => {
                    return(<div key={index} className="box">
                    <div className="quote">{qu.content}</div>
                </div>)
                }) : 'Fetching'}
            </div>
        )
    }
}
export default Songs;