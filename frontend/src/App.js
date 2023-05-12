import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/community/cu' Component={HomePage} exact></Route>
        {/* <Route path='community' component = {Communitypage}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
