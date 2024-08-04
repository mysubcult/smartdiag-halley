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
                      <path d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5zm0-6a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm4.65-1.35a.75.75 0 0 0-1.1-.65l-1.5.87a4.5 4.5 0 0 0-1.9-.54l-.23-1.6a.75.75 0 0 0-.75-.66H8.5a.75.75 0 0 0-.75.66l-.23 1.6a4.5 4.5 0 0 0-1.9.54l-1.5-.87a.75.75 0 0 0-1.1.65l.87 1.5a4.5 4.5 0 0 0-.54 1.9l-1.6.23a.75.75 0 0 0-.66.75v2.5a.75.75 0 0 0 .66.75l1.6.23a4.5 4.5 0 0 0 .54 1.9l-.87 1.5a.75.75 0 0 0 .65 1.1l1.5-.87a4.5 4.5 0 0 0 1.9.54l.23 1.6a.75.75 0 0 0 .75.66h2.5a.75.75 0 0 0 .75-.66l.23-1.6a4.5 4.5 0 0 0 1.9-.54l1.5.87a.75.75 0 0 0 1.1-1.1l-.87-1.5a4.5 4.5 0 0 0 .54-1.9l1.6-.23a.75.75 0 0 0 .66-.75v-2.5a.75.75 0 0 0-.66-.75l-1.6-.23a4.5 4.5 0 0 0-.54-1.9l.87-1.5z" fill="currentColor"/>
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
