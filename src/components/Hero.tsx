import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div id="hero" className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-6 sm:pt-5 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-12 sm:pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Добро пожаловать в <br />{" "}
            <span className="text-red-600 font-extrabold">
              SmartDiag <span className="wave">👋</span>
            </span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            Здесь вы найдёте всё необходимое программное обеспечение для
            диагностики и обслуживания вашего автомобиля. Мы предлагаем
            высококачественное и надёжное оборудование, которое поможет вам
            быстро и эффективно провести анализ и ремонт вашего авто. Мы уверены,
            что техническое обслуживание автомобиля может быть простым и
            доступным для каждого.
          </p>
          <div className="flex flex-auto pt-10 gap-4 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#soft">
                <button className="btn-grad-red text-base font-medium flex items-center">
                  Программы для приборов
                  <span className="icon-container ml-2">
                    <svg className="icon w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.14 12.94c.04-.25.06-.51.06-.76s-.02-.51-.06-.76l2.19-1.71a1 1 0 0 0 .23-1.15l-2.5-4.33a1 1 0 0 0-1.22-.43L16.09 5.7a7.961 7.961 0 0 0-1.73-.76L13.59.98a1 1 0 0 0-1.11-.42l-2.73.64a1 1 0 0 0-.73.57L8.43 4.09a7.962 7.962 0 0 0-1.88.85L4.85 2.27a1 1 0 0 0-1.21.24l-2.5 4.33a1 1 0 0 0 .23 1.15l2.19 1.71c-.04.25-.06.51-.06.76s.02.51.06.76l-2.19 1.71a1 1 0 0 0-.23 1.15l2.5 4.33a1 1 0 0 0 1.22.43l2.72-2.15c.32.15.66.28 1.01.39l.64 2.73a1 1 0 0 0 .73.57l2.73-.64a1 1 0 0 0 .73-.57l1.01-2.72c.35-.11.69-.24 1.01-.39l2.72 2.15a1 1 0 0 0 1.22-.43l2.5-4.33a1 1 0 0 0-.23-1.15l-2.19-1.71zm-7.14 1.06a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="currentColor"/>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            <div>
              <Link href="#contact">
                <button className="btn-grad-black text-base font-medium">
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

      <style jsx>{`
        .btn-grad-red {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          transition: transform 0.6s ease; /* Плавная анимация */
          color: currentColor; /* Использует цвет текста кнопки */
        }

        .btn-grad-red:hover .icon {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
}
