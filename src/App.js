import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Time from './pages/Time';
import Countdown from './pages/Countdown';
import Stopwatch from "./pages/Stopwatch";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/timerApp/' element={<Home/>}> </Route>
        <Route path='/timerApp/time' element={<Time/>}> </Route>
        <Route path='/timerApp/countdown' element={<Countdown/>}> </Route>
        <Route path='/timerApp/stopwatch' element={<Stopwatch/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
