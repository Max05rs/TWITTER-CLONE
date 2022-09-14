import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import TweetBox from './components/TweetBox';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      {/*Feed section*/}
      <Feed />
      {/*Widgets*/}
    </div>
  );
}

export default App;
