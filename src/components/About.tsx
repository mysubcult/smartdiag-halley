import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

const ServiceCard: React.FC<Service> = React.memo(({ title, description, image, alt }) => (
  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-200 hover:dark:bg-neutral-700">
    <div className="h-24 w-24 flex justify-center mx-auto">
      <Image
        src={image}
        alt={alt}
        width={96}
        height={96}
        quality={75}
        sizes="100vw"
        priority
      />
    </div>
    <h2 className="font-bold text-lg text-center mt-4">{title}</h2>
    <p className="pt-2 text-sm text-center dark:text-neutral-400 mt-2">
      {description}
    </p>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

export function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mt-6" id="about">
      {/* Встраивание PDF-файла с сертификатом в верхней части страницы */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mt-8">Мы сертифицированные специалисты с торговым знаком!</h3>
        <p className="text-base mt-4 mb-6 dark:text-neutral-400">
          Наши товары и услуги соответствуют высоким стандартам качества, и мы гордимся тем, что имеем зарегистрированный торговый знак.
        </p>
        <motion.embed
          src="/docs/certificate.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
          className="mt-4 border rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        {mounted ? (
          <>
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              О нас 👋
            </motion.h2>
            <motion.p
              className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Мы специализируемся на продаже оборудования для диагностики
              автомобилей уже на протяжении многих лет. За это время мы
              зарекомендировали себя как надежный поставщик высококачественного
              оборудования.
            </motion.p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-bold">О нас 👋</h2>
            <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
              Мы специализируемся на продаже оборудования для диагностики
              автомобилей уже на протяжении многих лет. За это время мы
              зарекомендировали себя как надежный поставщик высококачественного
              оборудования.
            </p>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 lg:gap-x-8 lg:gap-y-16">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}
