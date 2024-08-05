import React from 'react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
    title: string;
    summary: string;
    date: string;
    id: string; // идентификатор для ссылки на полную статью
}

const NewsCard: React.FC<NewsCardProps> = ({ title, summary, date, id }) => {
    return (
        <div className="news-card">
            <h2>{title}</h2>
            <p>{summary}</p>
            <small>{date}</small>
            <Link to={`/blog/${id}`}>Читать далее</Link>
        </div>
    );
};

export default NewsCard;
