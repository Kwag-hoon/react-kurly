import React from 'react';
import '../css/footer.css';
import instagramIcon from '../images/ico_instagram.png';
import facebookIcon from '../images/ico_fb.png';
import blogIcon from '../images/ico_blog.png';
import youtubeIcon from '../images/ico_youtube.png';

function Footer() {
  return (
    <>
      <footer className="kurly-footer">

        {/* ================== TOP ================== */}
        <div className="footer-top">
          <div className="inner footer-top-flex">

            {/* 고객행복센터 */}
            <div className="cs-area">
              <h3>고객행복센터</h3>
              <div className="cs-contact">
                <span className="cs-phone">1644-1107</span>
                <span className="cs-time">월~토요일 오전 7시 - 오후 6시</span>
              </div>

              <div className="cs-btns">
                <button>카카오톡 문의</button>
                <button>1:1 문의</button>
                <button>대량주문 문의</button>
              </div>

              <ul className="cs-info">
                <li>365일 고객센터 운영시간에 순차적으로 답변드리겠습니다.</li>
                <li>비회원 문의 : help@kurlycorp.com</li>
              </ul>
            </div>

            {/* 회사 정보 */}
            <div className="company-area">

              {/* 메뉴 */}
              <ul className="company-menu">
                <li>회사소개</li>
                <li>컬리소개영상</li>
                <li>투자정보</li>
                <li>인재채용</li>
                <li>이용약관</li>
                <li className="bold">개인정보처리방침</li>
                <li>이용안내</li>
                <li>입점신청</li>
              </ul>

              {/* 상세 정보 */}
              <div className="company-info">
                <p>
                  법인명 (상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 <span>사업자정보 확인</span><br />
                  통신판매업 : 제 2018-서울강남-01646 호<br />
                  주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)<br />
                  대표이사 : 김슬아<br />
                  채용문의 : <span className='recru'>recruit@kurlycorp.com</span><br />
                  팩스 : 070-7500-6098
                </p>
              </div>

              {/* SNS */}
              <ul className="sns">
                <li><img src={instagramIcon} alt="인스타그램" /></li>
                <li><img src={facebookIcon} alt="페이스북" /></li>
                <li><img src={blogIcon} alt="블로그" /></li>
                <li><img src={youtubeIcon} alt="유튜브" /></li>
              </ul>

            </div>
          </div>
        </div>

        {/* ================== CERT ================== */}
        <div className="footer-cert">
          <div className="inner cert-flex">
            <div>
              <img src="" alt="" />
              <span>
                [인증범위] 컬리 쇼핑몰 서비스 개발·운영<br />
                [유효기간] 2025.01.15 ~ 2028.01.14
              </span>
            </div>

            <div>
              <img src="" alt="" />
              <span>
                고객님의 현금으로 결제한 금액에 대해<br />
                우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
              </span>
            </div>
          </div>
        </div>

        {/* ================== BOTTOM ================== */}
        <div className="footer-bottom">
          <div className="inner">
            <p>
              컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br />
              마켓플레이스 상품의 경우 컬리는 통신판매중개자로서 통신판매 당사자가 아니며, 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
            </p>
            <span>© KURLY CORP. ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
