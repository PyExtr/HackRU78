import React from 'react';
import './App.css';
import './BottomAppBar'
import BottomAppBar from './BottomAppBar';
import ScrollView from './ScrollView';
import SuggestionsTec from  "./SuggestionsTec";
import SuggestionsPr from  "./SuggestionsPr";



function App() {
  return (
    <div className="App">

      <div className='Left'>
        <BottomAppBar></BottomAppBar>
      </div>

      <div className='right'>
        <ScrollView></ScrollView>
        <div className='suggestion'>
          <div>
            <SuggestionsTec></SuggestionsTec>
          </div>
          <div>
            <SuggestionsPr></SuggestionsPr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
