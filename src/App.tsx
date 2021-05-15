import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Print Stream</h1>
        <!-- <img src="http://99.132.123.210:5001/html/cam_pic_new.php" alt="stream" />-->
        <iframe style="height: 600px; width: 400px; border: none; overflow: none;" src="http://99.132.123.210:5001/html/cam_pic_new.php" title="Stream"></iframe> 
      </div>
    </div>
  );
}

export default App;
