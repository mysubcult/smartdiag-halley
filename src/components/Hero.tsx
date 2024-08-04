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
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14" /* Изменено значение */
                      height="14" /* Изменено значение */
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                        fill="white"
                      ></path>
                      <path
                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                        fill="white"
                      ></path>
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
          width: 14px; /* Уменьшенный размер иконки */
          height: 14px; /* Уменьшенный размер иконки */
          transition: transform 1s ease; /* Плавная анимация */
          color: currentColor; /* Использует цвет текста кнопки */
        }

        .btn-grad-red:hover .icon {
          transform: rotate(180deg); /* Вращение на 180 градусов */
        }
      `}</style>
    </div>
  );
}
