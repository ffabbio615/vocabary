import { useState } from 'react';
import './App.scss';
import Login from './components/Login.jsx'; 
import UserDashboard from './components/UserDashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [user, setUser] = useState({
    // id: "",
    // email: "",
  });

  return (
    <>
      <div className='foreground'></div>
        { user.id ?
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserDashboard setUserApp={setUser}/>} />
          </Routes>
          </BrowserRouter>
          : <Login userApp={user} setUserApp={setUser} />
        }
    </>
  )
}

export default App;
