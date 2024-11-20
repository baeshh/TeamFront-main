/** @format */

import React, { useState } from 'react';
import './Search.css';

export default function Search() {
  const [query, setQuery] = useState(''); // 검색어
  const [searchResults, setSearchResults] = useState([]); // 검색 결과

  // 더미 데이터 (사용자와 게시물)
  const data = [
    { id: '1', type: 'user', name: 'Alice', bio: 'Frontend Developer' },
    { id: '2', type: 'user', name: 'Bob', bio: 'Backend Developer' },
    { id: '3', type: 'feed', title: 'React Hooks Tutorial', content: 'Learn how to use React Hooks effectively.' },
    { id: '4', type: 'feed', title: 'JavaScript Tips', content: 'Useful tips for better JavaScript code.' },
    { id: '5', type: 'user', name: 'Charlie', bio: 'Full Stack Developer' },
  ];

  // 더미 데이터: 핫한 게시물
  const hotPosts = [
    { id: '101', title: '박지훈 개발 포기 선언', content: 'BAESH의 주가 하락세로 이어져..' },
    { id: '102', title: '송민규 vs 명현재', content: '세계관 최강자들의 싸움이 펼쳐진다.' },
    { id: '103', title: '이창준 SKT TI의 괴물 신인으로 데뷔', content: '중국에서 연 6조 2년 계약 오퍼 들어와..' },
  ];

  // 검색 핸들러
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const results = data.filter((item) => {
        if (item.type === 'user') {
          return item.name.toLowerCase().includes(query.toLowerCase());
        }
        if (item.type === 'feed') {
          return item.title.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search">
      <h2>검색</h2>

      {/* 검색창 */}
      <form className="search_form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search_input"
          placeholder="사용자 이름 또는 피드를 검색하세요..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search_button">
          검색
        </button>
      </form>

      {/* 핫한 게시물 */}
      <div className="hot_posts">
        <h3></h3>
        <div className="hot_posts_list">
          {hotPosts.map((post) => (
            <div key={post.id} className="hot_post_card">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 검색 결과 */}
      <div className="search_results">
        <h3>검색 결과</h3>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id} className={`search_item ${result.type}`}>
              {result.type === 'user' ? (
                <div className="user_result">
                  <h3>{result.name}</h3>
                  <p>{result.bio}</p>
                </div>
              ) : (
                <div className="feed_result">
                  <h3>{result.title}</h3>
                  <p>{result.content}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no_results">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
