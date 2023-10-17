import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Time from './pages/Time';
import Countdown from './pages/Countdown';
import Stopwatch from "./pages/Stopwatch";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/time' element={<Time/>}> </Route>
        <Route path='/countdown' element={<Countdown/>}> </Route>
        <Route path='/stopwatch' element={<Stopwatch/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
