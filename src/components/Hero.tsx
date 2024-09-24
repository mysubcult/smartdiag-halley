// components/Hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  // Определение вариантов анимации
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Задержка между анимациями дочерних элементов
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="bg-white dark:bg-neutral-900 flex items-start lg:items-center justify-center h-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 flex flex-col lg:flex-row items-center lg:justify-center gap-8">
        
        {/* Левый блок: Текст и кнопки */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left space-y-6 lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Заголовок */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-neutral-900 dark:text-neutral-100 max-w-xl"
            variants={itemVariants}
          >
            Добро пожаловать в <br />
            <span className="text-red-600 font-extrabold">
              SmartDiag <span className="wave">👋</span>
            </span>
          </motion.h1>

          {/* Описание */}
          <motion.p
            className="text-base sm:text-lg dark:text-neutral-400"
            variants={itemVariants}
          >
            Здесь вы найдёте всё необходимое программное обеспечение для диагностики и обслуживания вашего автомобиля. Мы предлагаем высококачественное и надёжное оборудование, которое поможет вам быстро и эффективно провести анализ и ремонт вашего авто. Мы уверены, что техническое обслуживание автомобиля может быть простым и доступным для каждого.
          </motion.p>

          {/* Кнопки */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4"
            variants={itemVariants}
          >
            {/* Кнопка "Программы для приборов" */}
            <Link href="/soft" passHref>
              <motion.a
                className="inline-flex bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white rounded-full py-3 px-6 text-base font-medium items-center group shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Программы для приборов
                <motion.svg
                  className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-1000"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  {/* Шестерёнка SVG */}
                  <path
                    d="M12 15.5c1.933 0 3.5-1.567 3.5-3.5S13.933 8.5 12 8.5 8.5 10.067 8.5 12s1.567 3.5 3.5 3.5zm0-5c.828 0 1.5.672 1.5 1.5S12.828 11.5 12 11.5 10.5 10.828 10.5 10s.672-1.5 1.5-1.5z"
                  />
                  <path
                    d="M19.4 15a1.992 1.992 0 0 0 .1-1c0-.3-.05-.59-.14-.87l2.12-1.65a.5.5 0 0 0 .11-.7l-2-3.464a.5.5 0 0 0-.6-.2l-2.49 1a7.014 7.014 0 0 0-1.6-.93l-.38-2.65A.5.5 0 0 0 14 4h-4a.5.5 0 0 0-.5.42l-.38 2.65c-.56.24-1.09.56-1.6.93l-2.49-1a.5.5 0 0 0-.6.2l-2 3.464a.5.5 0 0 0 .11.7l2.12 1.65c-.09.28-.14.58-.14.87 0 .3.05.59.14.87l-2.12 1.65a.5.5 0 0 0-.11.7l2 3.464c.12.2.38.3.6.2l2.49-1c.51.37 1.04.69 1.6.93l.38 2.65c.04.23.24.42.5.42h4c.26 0 .46-.19.5-.42l.38-2.65c.56-.24 1.09-.56 1.6-.93l2.49 1c.22.1.48 0 .6-.2l2-3.464a.5.5 0 0 0-.11-.7l-2.12-1.65c.09-.28.14-.58.14-.87zm-7.4 3c-1.93 0-3.5-1.57-3.5-3.5S10.07 11 12 11s3.5 1.57 3.5 3.5S13.93 18 12 18z"
                  />
                </motion.svg>
              </motion.a>
            </Link>

            {/* Кнопка "Обратная связь" */}
            <Link href="/contact" passHref>
              <motion.a
                className="inline-flex bg-black text-white rounded-full py-3 px-6 text-base font-medium items-center group shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:bg-opacity-90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Обратная связь
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>

        {/* Правый блок: Изображение */}
        <motion.div
          className="flex items-center justify-center lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/images/hero/hero.svg"
            alt="Иллюстрация, представляющая диагностику автомобиля"
            title="Диагностическое оборудование для вашего автомобиля"
            width={512}
            height={331}
            quality={75}
            sizes="100vw"
            priority
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
