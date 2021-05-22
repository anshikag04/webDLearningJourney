import { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css'
function Movies() {
    let [quote,setQuote] = useState([])

    useEffect(()=>{
        axios.get("http://api.quotable.io/quotes").then((response) => {
            if(response){
                setQuote(response.data.results)
            }
        })
    },[]) // --> Similar to Component Did Mount
    return(
        <div>
           {quote ? quote.map((qu) => {
               return(
                <div className="box">
                <div className="quote">{qu.content}</div>
            </div>
               )
           }) : 'Fetching'}
        </div>
    )
}
export default Movies;