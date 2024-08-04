import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div id="hero" className="bg-white dark:bg-neutral-900"> {/* Добавляем id="hero" */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-5 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-12 sm:pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start"> {/* Изменен отступ сверху для мобильных устройств */}
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
                    {/* Иконка шестеренки */}
                    <svg className="icon w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.5C12.5523 4.5 13 4.94772 13 5.5V7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5V5.5C11 4.94772 11.4477 4.5 12 4.5ZM12 2C11.4477 2 11 2.44772 11 3V5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5V3C13 2.44772 12.5523 2 12 2ZM16.7071 8.70711C16.3166 8.31658 15.6834 8.31658 15.2929 8.70711L14.7071 9.29289C14.3166 9.68342 14.3166 10.3166 14.7071 10.7071C15.0976 11.0976 15.7308 11.0976 16.1213 10.7071L16.7071 10.1213C17.0976 9.7308 17.0976 9.0976 16.7071 8.70711ZM7.29289 10.7071C7.68342 10.3166 7.68342 9.68342 7.29289 9.29289L6.70711 8.70711C6.31658 8.31658 5.68342 8.31658 5.29289 8.70711C4.90237 9.0976 4.90237 9.7308 5.29289 10.1213L5.87868 10.7071C6.2692 11.0976 6.90237 11.0976 7.29289 10.7071ZM16.7071 16.7071C16.3166 16.3166 15.6834 16.3166 15.2929 16.7071L14.7071 17.2929C14.3166 17.6834 14.3166 18.3166 14.7071 18.7071C15.0976 19.0976 15.7308 19.0976 16.1213 18.7071L16.7071 18.1213C17.0976 17.7308 17.0976 17.0976 16.7071 16.7071ZM7.29289 16.7071C7.68342 16.3166 7.68342 15.6834 7.29289 15.2929L6.70711 14.7071C6.31658 14.3166 5.68342 14.3166 5.29289 14.7071C4.90237 15.0976 4.90237 15.7308 5.29289 16.1213L5.87868 16.7071C6.2692 17.0976 6.90237 17.0976 7.29289 16.7071ZM12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10ZM12 12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z" fill="currentColor"/>
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
        }

        .icon-container {
          display: flex;
          align-items: center;
        }

        .icon {
          transition: transform 0.6s ease; /* Плавная анимация */
        }

        .btn-grad-red:hover .icon {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
}
