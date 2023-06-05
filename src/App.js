import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navigation from './Home/Navigation';
import HomePage from './Home/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="*" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
