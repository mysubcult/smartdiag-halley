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
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.49-1.833l1.357-1.357a.75.75 0 0 0-.27-1.275l-1.795-1.037a.75.75 0 0 0-1.021.403l-.729 1.257a4.978 4.978 0 0 0-2.47-.694L11.5 3.607a.75.75 0 0 0-1.408-.27L8.263 4.81a4.978 4.978 0 0 0-1.575.549L5.423 3.402a.75.75 0 0 0-1.276.27L2.79 5.658a.75.75 0 0 0 .403 1.021l1.037 1.795a.75.75 0 0 0 1.275-.27l1.357-1.357a4.978 4.978 0 0 0 .694 2.47l-1.257.729a.75.75 0 0 0-.403 1.021l1.037 1.795a.75.75 0 0 0 1.275-.27l1.357-1.357a4.978 4.978 0 0 0 2.47.694l.729 1.257a.75.75 0 0 0 1.021.403l1.795-1.037a.75.75 0 0 0 .27-1.275l-1.357-1.357a4.978 4.978 0 0 0 .694-2.47l1.257-.729a.75.75 0 0 0 .403-1.021l-1.037-1.795a.75.75 0 0 0-1.275.27z" fill="currentColor"/>
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
