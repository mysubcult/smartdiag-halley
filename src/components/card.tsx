import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  link: string;
  features?: string[];
  mostPopular?: boolean;
  category?: string;
  type?: 'article' | 'product';
}

const Card: FC<CardProps> = ({ title, description, image, link, features, mostPopular, category, type }) => {
  const displayedFeatures = features && features.length > 3 ? [...features.slice(0, 3), 'и т.д.'] : features;

  return (
    <div className={`rounded-lg p-4 relative flex flex-col border-neutral-300 border dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300 ${mostPopular ? 'border-red-300 dark:border-red-600' : ''}`}>
      {image && (
        <div className="relative h-40">
          <Image src={image} alt={title} layout="fill" className="w-full object-cover" />
        </div>
      )}
      <div className="flex-grow p-4">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        {category && <p className="text-sm text-neutral-500">{category}</p>}
        {description && <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400 line-clamp-3">{description}</p>}
        {displayedFeatures && (
          <ul className="mt-4">
            {displayedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                <span className="ml-3 dark:text-neutral-400">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-auto text-right">
        <Link href={link}>
          <button className="bg-red-600 text-white text-sm rounded-md px-4 py-2 transition-colors duration-300 hover:bg-red-500">
            {type === 'article' ? 'Читать далее' : 'Скачать'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
