import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'
import Signin from './Signin'
import NIC from './NIC'
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div className='app'>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/nic' element={<NIC/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;


