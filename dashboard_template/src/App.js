import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='/dashboard/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
