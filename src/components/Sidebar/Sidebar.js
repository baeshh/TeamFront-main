/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Explore, Message, AddCircle, AccountCircle } from '@mui/icons-material';
import './Sidebar.css';
import newLogo from '../../assets/favicon.png'; // 로컬 이미지 파일 가져오기

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src={newLogo} // 로컬 이미지 변수 사용
        alt="Baesh Logo"
        className="sidebar_logo"
      />
      <Link to="/home" className="sidebar_option">
        <Home />
        <span>홈</span>
      </Link>
      <Link to="/search" className="sidebar_option">
        <Search />
        <span>검색</span>
      </Link>
      <Link to="/metaverse" className="sidebar_option">
        <Explore />
        <span>피드</span>
      </Link>
      <Link to="/messages" className="sidebar_option">
        <Message />
        <span>메시지</span>
      </Link>
      <Link to="/upload" className="sidebar_option">
        <AddCircle />
        <span>게시</span>
      </Link>
      <Link to="/profile" className="sidebar_option">
        <AccountCircle />
        <span>프로필</span>
      </Link>
    </div>
  );
}
