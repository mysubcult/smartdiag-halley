// src/pages/404.tsx

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Head>
        {/* Мета-теги для SEO */}
        <title>404 - Страница не найдена | SmartDiag</title>
        <meta name="description" content="Страница не найдена. Перейдите на главную страницу SmartDiag для поиска нужной информации." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="404 - Страница не найдена | SmartDiag" />
        <meta property="og:description" content="Страница не найдена. Перейдите на главную страницу SmartDiag для поиска нужной информации." />
      </Head>

      <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16 text-center">
        <h2 className="text-4xl font-bold text-center">Упс! Что-то пошло не так.</h2>
        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Страница не найдена.
        </p>
        <Image
          src="/images/404/404.svg"
          alt="404 Image"
          width={350}
          height={200}
          quality={75}
          className="w-[350px] md:w-4/12 justify-center text-center mx-auto"
        />
        <div className="mt-16 text-center">
          <Link href="/" passHref>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-rose-500 hover:bg-rose-600 transition-colors duration-300 text-white text-base rounded-full px-16 p-3 font-medium shadow-lg"
            >
              Вернуться на главную
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
