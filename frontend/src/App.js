import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' Component={LoginPage} exact></Route>
        <Route path='/signup' Component={SignupPage} exact></Route>
        {/* <Route path='community' component = {Communitypage}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
