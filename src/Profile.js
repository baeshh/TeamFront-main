/** @format */

import React, { useState } from 'react';
import './Profile.css';

export default function Profile() {
  // 사용자 정보 상태
  const [profile, setProfile] = useState({
    name: '배승환',
    email: 'baesh6778@gmail.com',
    bio: '안녕하세요! 저는 React 개발자입니다.',
    profilePicture: 'https://via.placeholder.com/150', // 기본 프로필 이미지
  });

  // 수정 상태 관리
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  // 입력 값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 저장 핸들러
  const handleSave = () => {
    setProfile(updatedProfile);
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div className="profile">
      <h2>프로필</h2>
      <div className="profile_card">
        {/* 프로필 이미지 */}
        <div className="profile_image">
          <img src={profile.profilePicture} alt={`${profile.name}'s Profile`} />
          {isEditing && (
            <input
              type="text"
              name="profilePicture"
              value={updatedProfile.profilePicture}
              onChange={handleInputChange}
              placeholder="이미지 URL 입력"
            />
          )}
        </div>

        {/* 프로필 정보 */}
        <div className="profile_info">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={updatedProfile.name}
                onChange={handleInputChange}
                placeholder="이름 입력"
              />
              <input
                type="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleInputChange}
                placeholder="이메일 입력"
              />
              <textarea
                name="bio"
                value={updatedProfile.bio}
                onChange={handleInputChange}
                placeholder="소개를 입력하세요"
              />
            </>
          ) : (
            <>
              <h3>{profile.name}</h3>
              <p>{profile.email}</p>
              <p>{profile.bio}</p>
            </>
          )}
        </div>

        {/* 버튼 */}
        <div className="profile_actions">
          {isEditing ? (
            <button className="save_button" onClick={handleSave}>
              저장
            </button>
          ) : (
            <button className="edit_button" onClick={() => setIsEditing(true)}>
              수정
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
