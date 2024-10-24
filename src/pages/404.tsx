// src/pages/404.tsx

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
      <div
        className="bg-white dark:bg-neutral-900 w-full px-4 pt-32 pb-16"
        id="faq"
      >
        <h2 className="text-4xl font-bold text-center">Упс! Что-то пошло не так.</h2>
        <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Страница не найдена.
        </p>
        <Image
          src="/images/404/404.svg"
          alt="Image 404"
          width={1920}
          height={1080}
          quality={75}
          sizes="100vw"
          className="w-[350px] md:w-4/12 justify-center text-center mx-auto"
        />
        <div className="mt-16 text-center">
          <Link href="/">
            <button className="bg-rose-500 text-white text-base rounded-full px-16 p-3 font-medium">
              Вернуться на главную
            </button>
          </Link>
        </div>
      </div>
  );
}
