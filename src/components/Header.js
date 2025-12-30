import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import mapPinIcon from '../images/lucide_map-pin.svg';
import heartIcon from '../images/mingcute_heart-line.svg';
import cartIcon from '../images/cil_cart1.svg';
import searchIcon from '../images/search.svg';




function Header() {
  return (
    <>
      <header className="kurly-header">

        {/* 1. 상단 유틸 */}
        <div className="header-top">
          <div className="inner">

            <ul className="util-menu">
              <li className="join-btn active">
                <Link to="/join">회원가입</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>|</li>
              <li>
                고객센터<i className="fas fa-angle-down"></i>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. 로고 + 탭 + 검색 */}
        <div className="header-middle">
          <div className="inner middle-flex">
            {/* 로고 + 탭 묶음 */}
            <div className="logo-area">
              <h1 className="logo">
                <img src="images/kurlly_logo.svg" alt="컬리로고" />
              </h1>

              <ul className="service-tab">
                <li className="active">마켓컬리</li>
                <li>|</li>
                <li>뷰티컬리</li>
              </ul>
            </div>

            {/* 검색폼 */}
            <form className="search-form">
              <input type="text" placeholder="검색어를 입력해주세요" />
              <button type="submit">
                <img src={searchIcon} alt="검색 아이콘" />
              </button>
            </form>

            {/* 아이콘 */}
            <div className="header-icons">
              <img src={mapPinIcon} alt="지도" />
              <img src={heartIcon} alt="하트" />
              <img src={cartIcon} alt="장바구니" />
            </div>
          </div>
        </div>

        {/* 3️.GNB */}
        <nav className="header-bottm">
          <div className="inner">
            <div className="category">
              <i className="fas fa-bars"></i>
              카테고리
            </div>
            
            <ul className="gnb">
              <li>베스트</li>
              <li>세일</li>
              <li>패션</li>
              <li>리빙</li>
              <li>신상</li>
              <li>특가/혜택</li>
            </ul>
            {/* 배송 안내 */}
            <div className="delivery-guide">
              <span className="purple">샛별&#x00B7;하루</span> 배송안내
            </div>
          </div>
        </nav>

      </header>



    </>
  );
}

export default Header;
