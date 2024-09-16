import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div id="hero" className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center text-center sm:text-start space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Добро пожаловать в <br />
            <span className="text-red-600 font-extrabold">
              SmartDiag <span className="wave">👋</span>
            </span>
          </h1>
          <p className="text-base sm:w-10/12 dark:text-neutral-400">
            Здесь вы найдёте всё необходимое программное обеспечение для диагностики и обслуживания вашего автомобиля. Мы предлагаем высококачественное и надёжное оборудование, которое поможет вам быстро и эффективно провести анализ и ремонт вашего авто. Мы уверены, что техническое обслуживание автомобиля может быть простым и доступным для каждого.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 min-w-[350px]">
            <Link href="#soft" scroll={false}>
              <a className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white rounded-full py-3 px-6 text-base font-medium flex items-center group shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-90">
                Программы для приборов
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-1000"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <!-- SVG Path -->
                </svg>
              </a>
            </Link>
            <Link href="#contact" scroll={false}>
              <a className="bg-gradient-to-r from-[#434343] to-[#000000] text-white rounded-full py-3 px-6 text-base font-medium shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-90">
                Обратная связь
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <Image
            src="/images/hero/hero.svg"
            alt="Illustration representing car diagnostics"
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
