import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // BrowserRouter로 감싸고, Routes 사용
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>뉴스 번역 & 산업 시세 분석</h1>
        </header>
        <Routes>
          {/* React Router v6에서 Routes와 Route를 사용 */}
          <Route path="/" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
