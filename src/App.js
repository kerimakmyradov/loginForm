import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Auth from './pages/Auth';
import UserDetails from './pages/UserDetails'

const App = () =>  {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/user' element={<UserDetails/>}/>
      </Routes>
    </Router>
  )
};

export default App;
