import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Switch from './components/Switch';
function App() {
  return (
    <div className='app'>
      <Sidebar />
      {/*Feed section*/}
      <Feed><Switch /></Feed> 
      {/*Widgets*/}
      <Widgets />
    </div>
  );
}

export default App;
