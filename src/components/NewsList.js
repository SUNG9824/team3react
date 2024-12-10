import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const [news, setNews] = useState([]);

  // 임시 데이터 사용
  useEffect(() => {
    const fetchData = () => {
      const dummyData = [
        { id: 1, title: '뉴스 제목 1', summary: '뉴스 요약 1' },
        { id: 2, title: '뉴스 제목 2', summary: '뉴스 요약 2' },
        { id: 3, title: '뉴스 제목 3', summary: '뉴스 요약 3' }
      ];
      setNews(dummyData);
    };
    fetchData();
  }, []);

  return (
    <div className="news-list">
      {news.map(item => (
        <div key={item.id} className="news-item">
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
          <Link to={`/news/${item.id}`}>자세히 보기</Link>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
