// components/Hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  // Анимации заголовка и описания
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
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
            Здесь вы найдёте всё необходимое программное обеспечение для диагностики и обслуживания вашего автомобиля.
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
                <svg
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M256,151c-57.897,0-105,47.103-105,105c0,57.897,47.103,105,105,105c57.897,0,105-47.103,105-105C361,198.103,313.897,151,256,151z M256,331c-41.355,0-75-33.645-75-75c0-41.355,33.645-75,75-75s75,33.645,75,75S297.355,331,256,331z"/>
                  <path d="M500.582,211.434l-58.674-14.428c-3.532-11.13-8.068-21.925-13.551-32.249c8.78-14.634,27.343-45.573,27.343-45.573c3.541-5.902,2.611-13.457-2.256-18.324l-42.426-42.426c-4.867-4.867-12.422-5.797-18.324-2.256c-0.38,0.228-30.777,18.466-45.626,27.355c-10.269-5.431-20.995-9.927-32.052-13.434c-4.428-17.976-14.451-58.686-14.452-58.686C298.914,4.711,292.902,0,286,0h-60c-6.903,0-12.915,4.711-14.565,11.414c-4.126,16.76-11.024,44.779-14.45,58.68c-11.762,3.73-23.143,8.578-34.001,14.482c-6.428-3.856-16.007-9.604-24.869-14.921l-22.462-13.477c-5.905-3.541-13.457-2.61-18.324,2.256L54.901,100.86c-4.867,4.867-5.797,12.422-2.256,18.324c0.2,0.335,17.785,29.644,29.271,48.869c-4.712,9.31-8.665,18.986-11.817,28.919c-20.002,4.976-58.223,14.35-58.671,14.46C4.718,213.077,0,219.092,0,226v60c0,6.909,4.719,12.923,11.429,14.568c0.443,0.109,38.381,9.411,58.687,14.436c3.565,11.302,8.184,22.273,13.796,32.78l-26.194,43.66c-3.541,5.902-2.611,13.458,2.256,18.324l42.427,42.427c4.867,4.868,12.421,5.797,18.324,2.256c0.369-0.222,29.463-17.678,43.746-26.227c10.419,5.547,21.313,10.131,32.547,13.692l14.416,58.66C213.079,507.284,219.093,512,226,512h60c6.904,0,12.917-4.713,14.566-11.418l14.427-58.669c11.539-3.661,22.671-8.39,33.257-14.128c14.427,8.656,44.444,26.667,44.444,26.667c5.901,3.541,13.457,2.612,18.324-2.256l42.426-42.427c4.867-4.867,5.797-12.422,2.256-18.324c0,0-18.271-30.452-26.958-44.931c5.308-10.088,9.712-20.634,13.161-31.511c17.824-4.399,58.19-14.317,58.676-14.436C507.285,298.919,512,292.906,512,286v-60C512,219.095,507.287,213.083,500.582,211.434z"/>
                </svg>
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

        {/* Правый блок: Изображение (только на ПК) */}
        <motion.div
          className="hidden lg:block flex items-center justify-center lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
