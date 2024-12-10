import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'; // App.css 파일 import

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 뉴스 API에서 상세 정보 가져오기 (임시로 더미 데이터 사용)
    const fetchData = () => {
      const dummyData = {
        id,
        title: `뉴스 제목 ${id}`,
        content: `뉴스 상세 내용 ${id}`,
        impactAnalysis: `산업 시세 분석 ${id}`
      };
      setNews(dummyData);
    };
    fetchData();
  }, [id]);

  if (!news) return <div>로딩 중...</div>;

  return (
    <div className="news-detail">
      <h2>{news.title}</h2>
      <p>{news.content}</p>
      <h3>산업 시세 분석</h3>
      <p>{news.impactAnalysis}</p>
      <button 
        className="w-btn-blue-outline"
        onClick={() => navigate(-1)}>돌아가기
      </button>
    </div>
  );
};

export default NewsDetail;
