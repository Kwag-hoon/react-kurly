import React from 'react';
import '../css/join.css';

function JoinForm() {

 


  return (
    <>
      <div className="join-wrap">
        <h2 className="join-title">회원가입</h2>

        <form className="join-form">
          {/* 아이디 */}
          <div className="join-row">
            <label>아이디<span className="required">*</span></label>
            <div className="join-input">
              <input type="text" placeholder="아이디를 입력해주세요" />
              <button type="button">중복확인</button>
            </div>
          </div>

          {/* 비밀번호 */}
          <div className="join-row">
            <label>비밀번호<span className="required">*</span></label>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>

          {/* 비밀번호 확인 */}
          <div className="join-row">
            <label>비밀번호 확인<span className="required">*</span></label>
            <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
          </div>

          {/* 이름 */}
          <div className="join-row">
            <label>이름<span className="required">*</span></label>
            <input type="text" placeholder="이름을 입력해주세요" />
          </div>

          {/* 이메일 */}
          <div className="join-row">
            <label>이메일<span className="required">*</span></label>
            <div className="join-input">
              <input type="text" placeholder="이메일을 입력해주세요" />
              <select>
                <option>@marketkurly.com</option>
                <option>@gmail.com</option>
                <option>@naver.com</option>
              </select>
            </div>
          </div>

          {/* 휴대폰 */}
          <div className="join-row">
            <label>휴대폰<span className="required">*</span></label>
            <div className="join-input">
              <input type="text" placeholder="숫자만 입력해주세요" />
              <button type="button" disabled>인증번호 받기</button>
            </div>
          </div>

          {/* 주소 */}
          <div className="join-row">
            <label>주소<span className="required">*</span></label>
            <button type="button" className="address-btn">주소 검색</button>
          </div>

          {/* 성별 */}
          <div className="join-row">
            <label>성별</label>
            <div className="radio-wrap">
              <label><input type="radio" name="gender" /> 남자</label>
              <label><input type="radio" name="gender" /> 여자</label>
              <label><input type="radio" name="gender" /> 선택안함</label>
            </div>
          </div>

          {/* 생년월일 */}
          <div className="join-row">
            <label>생년월일</label>
            <div className="birth-wrap">
              <input type="text" placeholder="YYYY" />
              <span>/</span>
              <input type="text" placeholder="MM" />
              <span>/</span>
              <input type="text" placeholder="DD" />
            </div>
          </div>

          {/* 추천인 */}
          <div className="join-row">
            <label>추천인</label>
            <div className="join-input">
              <input type="text" placeholder="추천인 아이디 입력" />
              <button type="button">아이디 확인</button>
            </div>
          </div>

          {/* 약관 동의 */}
          <div className="agree-wrap">
            <label className="agree-all">
              <input type="checkbox" /> 전체 동의합니다.
            </label>

            <ul>
              <li>
                <label>
                  <input type="checkbox" /> 이용약관 동의 (필수)
                </label>
                <span>약관보기 &gt;</span>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 개인정보 수집·이용 동의 (필수)
                </label>
                <span>약관보기 &gt;</span>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> 마케팅 정보 수신 동의 (선택)
                </label>
              </li>
            </ul>
          </div>

          {/* 가입 버튼 */}
          <button type="submit" className="join-submit">가입하기</button>
        </form>
      </div>
    </>
  );
}

export default JoinForm;