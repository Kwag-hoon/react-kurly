import React, { useState } from 'react';
import '../css/Common.css';

function Login() {
  // 상태관리
  const [formData, setFormData] = useState({
    userId: '',
    userPw: '',
  });
  // 2️. input 변경 이벤트
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3️. 로그인 버튼 클릭
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.userId || !formData.userPw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    console.log('아이디:', formData.userId);
    console.log('비밀번호:', formData.userPw);

    //나중에 여기서 서버로 로그인 요청(fetch / axios)
  };

  return (
    <>
      <div className="login-wrap">
        <form className='login' onSubmit={handleSubmit}>

          <div className="login-title">
            <h2>로그인</h2>
          </div>
          <div className="login-input">
            <input
              type="text"
              name="userId"
              placeholder="아이디를 입력해주세요"
              value={formData.userId}
              onChange={handleChange}
            />
            <input
              type="password"
              name="userPw"
              placeholder="비밀번호를 입력해주세요"
              value={formData.userPw}
              onChange={handleChange}
            />
          </div>

          <div className='find-wrap'>
            <div className="login-input-find">
              <button type="button" className="link-btn">아이디 찾기</button>
              <span>|</span>
              <button type="button" className="link-btn">비밀번호 찾기</button>
            </div>
          </div>
          <div className="login-btn">
            <button type="submit" onClick={handleSubmit}>로그인</button>
            <button type="button" >회원가입</button>
          </div>
          <div className="login-sns">
            <div className="login-sns-title">
              <h2>간편 로그인</h2>
            </div>
            <div className="login-sns-btn">
              <button type="button" className="naver-btn"> 네이버로 계속하기</button>
              <button type="button" className="kakao-btn">카카오로 계속하기</button>
            </div>
          </div>

        </form>
      </div>
    </>
  );
}

export default Login;
