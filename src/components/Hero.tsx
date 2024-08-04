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
                    <svg className="icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"/>
                      <circle cx="128" cy="128" r="44" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                      <path d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
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
