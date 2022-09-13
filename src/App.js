import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'

function App() {
  return (
    <div className='App'>
      <Sidebar />
      {/*Feed section*/}
      <Feed />
      {/*Widgets*/}
    </div>
  );
}

export default App;
