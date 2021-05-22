import axios from 'axios'
import { Component } from 'react'
import './Game.css'

class Game extends Component {

    constructor(props){
        super(props)
        this.props = props
        this.state = {
            pokemons: []
        }
    }

    componentDidMount(){
        axios.get("https://pokeapi.co/api/v2/pokemon").then((response)=>{
            console.log(response)    
        if(response.data){
                
                this.setState({pokemons: response.data.results})
            }
        })
    }

    render() {
        return(
            <div className="game_comp">
                {this.state.pokemons?this.state.pokemons.map((pokemon,index)=>{
                    return (<div key={index} className="box">
                        <a href={pokemon.url} target="_blank">
                            <div className="heading">
                        {pokemon.name}
                    </div>
                        </a>
                </div>)
                }): 'Loading'}
            </div>
        )
    }
       
}
export default Game;