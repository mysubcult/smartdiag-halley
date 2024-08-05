import React from 'react';

// Создайте интерфейс для карточек блога
interface BlogCardProps {
  title: string;
  description: string;
  link: string;
}

// Создайте компонент карточки блога
const BlogCard: React.FC<BlogCardProps> = ({ title, description, link }) => {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="read-more">
        Читать далее
      </a>
    </div>
  );
};

// Основной компонент страницы
const BlogPage: React.FC = () => {
  // Пример данных для блога
  const blogPosts = [
    {
      title: 'Первая новость блога',
      description: 'Краткое описание первой новости блога.',
      link: '/blog/first-post',
    },
    {
      title: 'Вторая новость блога',
      description: 'Краткое описание второй новости блога.',
      link: '/blog/second-post',
    },
    // Добавьте больше записей по мере необходимости
  ];

  return (
    <div className="blog-page">
      <h1>Наш блог</h1>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <BlogCard 
            key={index}
            title={post.title}
            description={post.description}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
