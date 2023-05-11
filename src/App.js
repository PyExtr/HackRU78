
import './App.css';
import './BottomAppBar'
import BottomAppBar from './BottomAppBar';
import ScrollView from './ScrollView';


function App() {
  return (
    <div className="App">

      <div className='Left'>
        <BottomAppBar></BottomAppBar>
      </div>

      <div className='right'>
        <ScrollView></ScrollView>
      </div>
    </div>
  );
}

export default App;
