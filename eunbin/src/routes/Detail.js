import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      // state가 없으면 홈으로 리다이렉트
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  if (!location.state) {
    return null; // 리다이렉트 중이라 아무것도 안 보여줌
  }

  const { poster, title, year, genres, summary } = location.state;

  return (
    <div>
      <img src={poster} alt={title} title={title} />
      <div>
        <h3>{title}</h3>
        <h5>{year}</h5>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Detail;
