import {Component} from "react"
 class Footer extends Component {
     constructor(props) {
         super(props) 
         this.props = props
     }
     render() {
         return(
            <div>
                {this.props.surname}
            </div>
         )
     }
 }
 export default Footer