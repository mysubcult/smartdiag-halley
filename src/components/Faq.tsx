import React from 'react';

// Интерфейс для карточек блога
interface BlogCardProps {
  title: string;
  description: string;
  link: string;
}

// Компонент карточки блога
const BlogCard: React.FC<BlogCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:text-blue-700">
        Читать далее
      </a>
    </div>
  );
};

// Основной компонент страницы блога
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
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Наш блог</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
