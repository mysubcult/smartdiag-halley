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
      className="bg-white dark:bg-neutral-900 flex items-start lg:items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 flex flex-col lg:flex-row items-center lg:justify-center gap-8 h-full">
        
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
                  {/* Корректная иконка шестерёнки */}
                  <path
                    d="M19.14,12.936a7.07,7.07,0,0,0,.06-1.936,7.07,7.07,0,0,0-.06-1.936l2.11-1.65a.5.5,0,0,0,.12-.63l-2-3.464a.5.5,0,0,0-.61-.22l-2.49,1a7.07,7.07,0,0,0-1.6-.93l-.38-2.65A.5.5,0,0,0,14,4H10a.5.5,0,0,0-.5.42l-.38,2.65a7.07,7.07,0,0,0-1.6.93l-2.49-1a.5.5,0,0,0-.61.22l-2,3.464a.5.5,0,0,0,.12.63l2.11,1.65a7.07,7.07,0,0,0-.06,1.936,7.07,7.07,0,0,0,.06,1.936L3.45,14.586a.5.5,0,0,0-.12.63l2,3.464a.5.5,0,0,0,.61.22l2.49-1a7.07,7.07,0,0,0,1.6.93l.38,2.65a.5.5,0,0,0,.5.42h4a.5.5,0,0,0,.5-.42l.38-2.65a7.07,7.07,0,0,0,1.6-.93l2.49,1a.5.5,0,0,0,.61-.22l2-3.464a.5.5,0,0,0-.12-.63Zm-7.14,2.564a3,3,0,1,1,3-3A3,3,0,0,1,12,15.5Z"
                    fill="white"
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
