/** @format */

import React, { useState } from 'react';
import './Upload.css';

export default function Upload() {
  const [postText, setPostText] = useState(''); // 게시물 텍스트
  const [image, setImage] = useState(null); // 업로드된 이미지 미리보기

  // 이미지 파일 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file); // 파일을 Base64로 변환
    }
  };

  // 게시물 업로드 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim() || image) {
      console.log('Post submitted:', { postText, image });
      alert('게시물이 업로드되었습니다!');
      setPostText(''); // 입력창 초기화
      setImage(null); // 이미지 초기화
    } else {
      alert('내용 또는 이미지를 입력해주세요.');
    }
  };

  return (
    <div className="upload">
      <h2>새 게시물 올리기</h2>
      <form className="upload_form" onSubmit={handleSubmit}>
        {/* 게시물 텍스트 입력 */}
        <textarea
          className="upload_textarea"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="게시물 내용을 입력하세요..."
        />

        {/* 이미지 업로드 */}
        <div className="upload_image">
          {image && <img src={image} alt="Preview" className="image_preview" />}
          <label className="upload_image_label">
            이미지 업로드
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="upload_image_input"
            />
          </label>
        </div>

        {/* 업로드 버튼 */}
        <button type="submit" className="upload_button">
          업로드
        </button>
      </form>
    </div>
  );
}
