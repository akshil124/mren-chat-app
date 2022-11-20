import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chatpage from './pages/chatpage';
import Home from './pages/home';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chat' exact element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
