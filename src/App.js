import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import TweetBox from './components/TweetBox';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      {/*Feed section*/}
      <Feed />
      {/*Widgets*/}
      <TweetBox />
    </div>
  );
}

export default App;
