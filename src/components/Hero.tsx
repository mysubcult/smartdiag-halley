// src/components/Hero.tsx

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
        <div className="flex flex-col justify-center text-center lg:text-left space-y-6 lg:w-1/2 w-full">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-neutral-900 dark:text-neutral-100 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Добро пожаловать в<br />
            <span className="text-red-600 font-extrabold">
              SmartDiag <span className="wave">👋</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg dark:text-neutral-400 mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Здесь вы найдёте всё необходимое программное обеспечение для
            диагностики и обслуживания вашего автомобиля. Мы предлагаем
            высококачественное и надёжное оборудование, которое поможет вам
            быстро и эффективно провести анализ и ремонт вашего авто. Мы уверены,
            что техническое обслуживание автомобиля может быть простым и
            доступным для каждого.
          </motion.p>

          <div className="flex flex-col items-center gap-4 mb-6 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/soft">
              <div className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white rounded-full py-3 px-6 text-base font-medium items-center group shadow-lg transform transition-transform duration-300 mx-auto sm:mx-0 inline-block hover:scale-105 cursor-pointer">
                <span className="flex items-center whitespace-nowrap">
                  Программы для приборов
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform duration-1000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 60"
                  >
                    {/* Outlet */}
                    <rect className="fill-current text-black" x="70" y="20" width="20" height="20" />

                    {/* Plug */}
                    <g className="group-hover:translate-x-12 transition-transform duration-500">
                      <rect className="fill-current text-gray-500" x="0" y="22" width="30" height="16" />
                      <rect className="fill-current text-gray-500" x="30" y="26" width="5" height="4" />
                      <rect className="fill-current text-gray-500" x="30" y="30" width="5" height="4" />
                    </g>
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="/contact">
              <div className="bg-black text-white rounded-full py-3 px-6 text-base font-medium items-center group shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:bg-opacity-90 mx-auto sm:mx-0 inline-block cursor-pointer">
                <span className="flex items-center whitespace-nowrap">
                  Обратная связь
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center lg:w-1/2">
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
        </div>
      </div>
    </section>
  );
};
