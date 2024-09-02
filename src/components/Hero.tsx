import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div id="hero" className="relative bg-white dark:bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            Добро пожаловать в <span className="text-red-600">SmartDiag</span> 👋
          </h1>
          <p className="text-lg mb-8 text-neutral-700 dark:text-neutral-300">
            Здесь вы найдёте всё необходимое программное обеспечение для диагностики и обслуживания вашего автомобиля. Мы предлагаем только лучшие продукты и решения, которые помогут вам поддерживать ваш автомобиль в отличном состоянии.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#soft" scroll={false}>
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">Программы для приборов</button>
            </Link>
            <Link href="#contact" scroll={false}>
              <button className="bg-white text-red-600 border border-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition">Обратная связь</button>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <Image src="/images/hero/hero.svg" alt="Illustration representing car diagnostics" width={512} height={331} priority />
        </div>
      </div>
    </div>
  );
}
