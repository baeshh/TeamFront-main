import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Home';
import Messages from './components/Messages/Messages';
import { Upload } from '@mui/icons-material';
import Profile from './Profile';
import Search from './Search';
export default function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/metaverse" element={<h1>피드</h1>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/upload" element={<h1>게시물 올리기</h1>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}
