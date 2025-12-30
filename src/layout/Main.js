import React from 'react';

import { Outlet } from 'react-router-dom';
import MainSlider from '../components/MainSlider';



function Main(props) {
  return (
    <div>
      <main>
        <MainSlider />
        <section>
          <h3>인기 급상승! 연말 필수 ~ 56%</h3>
          {/* 상품 영역 */}
        </section>
        <Outlet />
      </main>
    </div>
  );
}

export default Main;