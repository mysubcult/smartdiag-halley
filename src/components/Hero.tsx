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
      className="bg-white dark:bg-neutral-900 min-h-screen flex items-start lg:items-center justify-center"
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
            className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-neutral-100"
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
                  viewBox="0 0 16 16"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                >
                  <path
                    d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                    fill="white"
                  />
                  <path
                    d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 2.693-1.115l.094.318c.527.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 0 2.692-1.115l.292.16c.764.415 1.6-.42 1.184-1.185l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094-.319zM6.163 1.626c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
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
