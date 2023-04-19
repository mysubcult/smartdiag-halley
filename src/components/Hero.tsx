import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Добро пожаловать в <br />{" "}
            <span className="text-red-600 font-extrabold">SmartDiag</span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            Здесь Вы можете найти все необходимое программное обеспечение для диагностики и обслуживания вашего автомобиля. Мы предоставляем высококачественное и надежное оборудование, которое поможет вам провести быстрый и эффективный анализ и ремонт вашего автомобиля.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#soft">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium hover:bg-gray-300 hover:text-white transition-all">
                  Программы для приборов
                </button>
              </Link>
            </div>

            <div>
              <Link href="#contact">
                <button className="bg-red-600 text-white text-base rounded-full px-4 p-2 font-medium hover:bg-red-800 transition-all">
                  Обратная связь
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/hero.svg"
            alt="Image hero description"
            width={512.5}
            height={331}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
