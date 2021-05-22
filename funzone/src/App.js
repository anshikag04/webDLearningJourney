import './App.css';
import { Router } from '@reach/router'
import Navbar from './Navbar/Navbar'
import Landing from './Landing/Landing'
import Game from './Game/Game'
import Movies from './Movies/Movies'
import Songs from './Songs/Songs'
function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Landing path="/" />
                <Game path="/game" />
                <Movies path="/movies" />
                <Songs path="/songs" />
            </Router>

        </div>
    );
}

export default App;
