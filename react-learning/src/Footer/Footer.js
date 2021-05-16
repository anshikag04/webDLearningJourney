import {Component} from "react"
 class Footer extends Component {

     constructor(props) {
         super(props) 
         this.props = props
         this.state = {
             x: 65,
         }
     }
     render() {
         return(
            <div>
                {this.state.x}
                <button onClick={()=>{this.setState({x:this.state.x+1})}}>Increment</button>
                {
                    this.state.x==69? 'GREAT NUMBER': 'TRY AGAIN, BETTER LUCK NEXT TIME'
                }
            </div>
         )
     }
 }
 export default Footer