import './App.css';
import Post from './Post/Post'

function App() {
    let posts = [
        {
            fullName: 'Ashutosh Kumar',
            userName: 'raxraj',
            tweet: 'I know I am silly, Forgive me.'
        },
        {
            fullName: 'Ashutosh Kumar',
            userName: 'raxraj',
            tweet: 'Atleast Tell me Why?.'
        },
        {
            fullName: 'Ashutosh Kumar',
            userName: 'raxraj',
            tweet: 'I am sorry'
        },
        {
            fullName: 'Ashutosh Kumar',
            userName: 'raxraj',
            tweet: 'I love you more. <3'
        }
    ]
    return (
        <div>
            {
                posts.map((post, index) => {
                    return (<Post key={index} fullName={post.fullName} userName={post.userName} tweet={post.tweet} />)
                })
            }
        </div>
    );
}

export default App;
