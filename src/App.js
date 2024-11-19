import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Home';
import Messages from './components/Messages/Messages';
export default function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/search" element={<h1>검색</h1>} />
          <Route path="/metaverse" element={<h1>피드</h1>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/upload" element={<h1>게시물 올리기</h1>} />
          <Route path="/profile" element={<h1>프로필</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
