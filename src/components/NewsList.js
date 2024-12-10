import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // App.css 파일 import

const NewsList = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  // 임시 데이터 사용
  useEffect(() => {
    const fetchData = () => {
      const dummyData = [
        { id: 1, title: '뉴스 제목 1', summary: '뉴스 요약 1', image: '/images/news1.jpg' },
        { id: 2, title: '뉴스 제목 2', summary: '뉴스 요약 2', image: '/images/news2.jpg' },
        { id: 3, title: '뉴스 제목 3', summary: '뉴스 요약 3', image: '/images/news3.jpg' },
      ];
      setNews(dummyData);
    };
    fetchData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="news-list">
      <div className="news-gallery">
        {news.map((item) => (
          <div
            key={item.id}
            className="news-item"
            onClick={() => handleItemClick(item.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={item.image} className="news-image" />
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
