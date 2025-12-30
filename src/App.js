
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/HeaderLayout';
import Footer from './layout/FooterLayout';
import Main from './layout/Main';


import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';



function App() {
  return (
    <>
      <Header />
      

      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
