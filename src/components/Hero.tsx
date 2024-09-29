// components/hero/hero.tsx
'use client';

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="w-full pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center flex-1"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
        <motion.div
          className="flex flex-col justify-center text-center space-y-6 lg:w-1/2 w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-neutral-900 dark:text-neutral-100 max-w-xl mx-auto lg:mx-auto"
            variants={headerVariants}
            whileHover={{ scale: 1.05 }}
          >
            Добро пожаловать в<br />
            <span className="text-red-600 font-extrabold">
              SmartDiag <span className="wave">👋</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg dark:text-neutral-400 mx-auto lg:mx-auto"
            variants={descriptionVariants}
          >
            Здесь вы найдёте всё необходимое программное обеспечение для
            диагностики и обслуживания вашего автомобиля. Мы предлагаем
            высококачественное и надёжное оборудование, которое поможет вам
            быстро и эффективно провести анализ и ремонт вашего авто. Мы уверены,
            что техническое обслуживание автомобиля может быть простым и
            доступным для каждого.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 justify-center"
            variants={descriptionVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white rounded-full py-3 px-6 text-base font-medium items-center group shadow-lg transform transition-transform duration-300"
            >
              <Link href="/soft" className="flex items-center">
                Программы для приборов
                <motion.svg
                  className="w-5 h-5 ml-2 transform group-hover:rotate-90 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269c0 .578-.396 1.074-.935 1.286c-.085.034-.17.07-.253.106c-.531.23-1.162.16-1.572-.249a1.269 1.269 0 0 0-1.794 0L4.412 5.446a1.269 1.269 0 0 0 0 1.794c.41.41.48 1.04.248 1.572a7.946 7.946 0 0 0-.105.253c-.212.539-.708.935-1.286.935C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14c.578 0 1.074.396 1.286.935c.034.085.07.17.105.253c.231.531.161 1.162-.248 1.572a1.269 1.269 0 0 0 0 1.794l1.034 1.034a1.269 1.269 0 0 0 1.794 0c.41-.41 1.04-.48 1.572-.249c.083.037.168.072.253.106c.539.212.935.708.935 1.286c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269c0-.578.396-1.074.935-1.287c.085-.033.17-.068.253-.104c.531-.232 1.162-.161 1.571.248a1.269 1.269 0 0 0 1.795 0l1.034-1.034a1.269 1.269 0 0 0 0-1.794c-.41-.41-.48-1.04-.249-1.572c.037-.083.072-.168.106-.253c.212-.539.708-.935 1.286-.935c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269c-.578 0-1.074-.396-1.287-.935a7.755 7.755 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572a1.269 1.269 0 0 0 0-1.794l-1.034-1.034a1.269 1.269 0 0 0-1.794 0c-.41.41-1.04.48-1.572.249a7.913 7.913 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27Z" />
                  <path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z" />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex bg-black text-white rounded-full py-3 px-6 text-base font-medium items-center group shadow-lg transform transition-transform duration-300 hover:bg-gray-800 hover:bg-opacity-90"
            >
              <Link href="/contact" className="flex items-center">
                Обратная связь
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center justify-center lg:w-1/2"
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
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};
