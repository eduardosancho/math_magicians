import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Comment from './Comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Name name=" Johnny" />
          <Name name=" Sahar" />
          <Name name=" Ana" />
        </div>

        <div>
          <Comment
            date={comment.date}
            text={comment.text}
            authorName={comment.author.name}
            authorAvatar={comment.author.avatarUrl}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
