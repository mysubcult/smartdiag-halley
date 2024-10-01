import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    title: 'Широкий ассортимент оборудования',
    description:
      'У нас вы найдете все необходимое для компьютерной диагностики автомобилей, включая сканеры, программное обеспечение, кабели и другие аксессуары.',
    image: '/images/services/1.svg',
    alt: 'Широкий ассортимент оборудования для компьютерной диагностики автомобилей',
  },
  {
    title: 'Качественные товары',
    description:
      'Мы работаем только с проверенными поставщиками и гарантируем качество продукции.',
    image: '/images/services/2.svg',
    alt: 'Качественные товары от проверенных поставщиков',
  },
  {
    title: 'Опытные специалисты',
    description:
      'Наши сотрудники имеют большой опыт работы с диагностическим оборудованием и всегда готовы помочь с выбором и использованием продукции.',
    image: '/images/services/3.svg',
    alt: 'Опытные специалисты, готовые помочь с выбором оборудования',
  },
  {
    title: 'Конкурентные цены',
    description:
      'Мы стараемся предложить нашим клиентам наилучшее соотношение цены и качества.',
    image: '/images/services/4.svg',
    alt: 'Конкурентные цены на высококачественное оборудование',
  },
  {
    title: 'Быстрая доставка',
    description:
      'Мы оперативно обрабатываем заказы и быстро доставляем товары по всей России.',
    image: '/images/services/5.svg',
    alt: 'Быстрая доставка товаров по всей России',
  },
  {
    title: 'Онлайн-поддержка',
    description:
      'Мы всегда готовы ответить на ваши вопросы и помочь в решении любых проблем, связанных с диагностическим оборудованием, через наш сайт или мессенджеры.',
    image: '/images/services/6.svg',
    alt: 'Онлайн-поддержка для решения любых вопросов',
  },
];

// ServiceCard Component
const ServiceCard: React.FC<Service> = React.memo(({ title, description, image, alt }) => (
  <motion.div
    className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-neutral-700 transition duration-200 ease-out hover:shadow-lg"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="h-24 w-24 flex justify-center mx-auto">
      <Image
        src={image}
        alt={alt}
        width={96}
        height={96}
        quality={75}
        sizes="100vw"
      />
    </div>
    <h2 className="font-bold text-lg text-center mt-4">{title}</h2>
    <p className="pt-2 text-sm text-center text-gray-700 dark:text-gray-300 mt-2">
      {description}
    </p>
  </motion.div>
));

ServiceCard.displayName = 'ServiceCard';

// Trademark Component
const Trademark: React.FC = () => (
  <motion.div
    className="mt-12 max-w-3xl mx-auto p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="prose dark:prose-dark mb-4 md:mb-0">
      <h3 className="text-xl font-semibold text-black dark:text-white">Наш товарный знак</h3>
      <p className="text-gray-700 dark:text-gray-300">
        Мы гордимся нашим товарным знаком, который символизирует качество и надёжность нашей продукции.
      </p>
    </div>
    <Link href="/docs/certificate.pdf" passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        aria-label="Просмотреть сертификат товарного знака"
      >
        <span>Сертификат</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </a>
    </Link>
  </motion.div>
);

// About Component
export function About() {
  return (
    <section className="mt-6" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <motion.h2
          className="text-4xl font-bold text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          О нас 👋
        </motion.h2>

        <motion.p
          className="pt-6 text-lg max-w-2xl text-center m-auto text-gray-700 dark:text-gray-300 prose dark:prose-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Мы специализируемся на продаже оборудования для диагностики автомобилей уже на протяжении многих лет. За это время мы зарекомендировали себя как надежный поставщик высококачественного оборудования.
        </motion.p>

        <Trademark />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 lg:gap-x-8 lg:gap-y-16">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
