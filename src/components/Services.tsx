import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    title: "Широкий ассортимент оборудования",
    description:
      "У нас вы найдете все необходимое для компьютерной диагностики автомобилей, включая сканеры, программное обеспечение, кабели и другие аксессуары.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Качественные товары",
    description:
      "Мы работаем только с проверенными поставщиками и гарантируем качество продукции.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Опытные специалисты",
    description:
      "Наши сотрудники имеют большой опыт работы с диагностическим оборудованием и всегда готовы помочь с выбором и использованием продукции.",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "Конкурентные цены",
    description:
      "Мы стараемся предложить нашим клиентам наилучшее соотношение цены и качества.",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "Быстрая доставка",
    description:
      "Мы оперативно обрабатываем заказы и быстро доставляем товары по всей России.",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "Онлайн-поддержка",
    description:
      "Мы всегда готовы ответить на ваши вопросы и помочь в решении любых проблем, связанных с диагностическим оборудованием, через наш сайт или мессенджеры.",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];

// Анимации для карточек
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ServiceCard: React.FC<Service> = React.memo(({ title, description, image, alt }) => (
  <motion.div
    className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-200 hover:dark:bg-neutral-700 h-full flex flex-col"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Контейнер для изображения с фиксированной высотой */}
    <div className="flex justify-center mb-4 h-24">
      <Image
        src={image}
        alt={alt}
        width={96}
        height={96}
        quality={75}
        sizes="100vw"
        priority
        loading="lazy"
      />
    </div>
    
    {/* Заголовок с фиксированной высотой */}
    <h2 className="font-bold text-lg text-center mb-2 line-clamp-2 min-h-[48px]">
      {title}
    </h2>

    {/* Описание с фиксированной высотой */}
    <p className="text-sm text-center dark:text-neutral-400 flex-grow line-clamp-3 min-h-[72px]">
      {description}
    </p>
  </motion.div>
));

ServiceCard.displayName = "ServiceCard";

export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          О нас 👋
        </motion.h2>

        <motion.p
          className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          Мы специализируемся на продаже оборудования для диагностики
          автомобилей уже на протяжении многих лет. За это время мы
          зарекомендовали себя как надежный поставщик высококачественного
          оборудования.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
