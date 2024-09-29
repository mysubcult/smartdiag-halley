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
  // Данные services
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

  const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/docs/certificate.pdf`; // Убедитесь, что PDF доступен по публичному URL

  return (
    <div className="mt-6" id="about">
      {/* Встраивание PDF-файла через Google Docs Viewer */}
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
        <div className="mt-8 border rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
            className="w-full h-[600px]"
            title="Сертификат"
            frameBorder="0"
            allowFullScreen
          />
        </div>
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
