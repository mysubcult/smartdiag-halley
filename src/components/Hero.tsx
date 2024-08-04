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
                      <path d="M12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5C13.3807 13.5 14.5 12.3807 14.5 11C14.5 9.61929 13.3807 8.5 12 8.5ZM12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11ZM20.7071 15.7071C20.3166 15.3166 19.6834 15.3166 19.2929 15.7071L18.7071 16.2929C18.3166 16.6834 18.3166 17.3166 18.7071 17.7071C19.0976 18.0976 19.7308 18.0976 20.1213 17.7071L20.7071 17.1213C21.0976 16.7308 21.0976 16.0976 20.7071 15.7071ZM5.29289 15.7071C4.90237 15.3166 4.2692 15.3166 3.87868 15.7071L3.29289 16.2929C2.90237 16.6834 2.90237 17.3166 3.29289 17.7071C3.68342 18.0976 4.31658 18.0976 4.70711 17.7071L5.29289 17.1213C5.68342 16.7308 5.68342 16.0976 5.29289 15.7071ZM20.7071 8.70711C20.3166 8.31658 19.6834 8.31658 19.2929 8.70711L18.7071 9.29289C18.3166 9.68342 18.3166 10.3166 18.7071 10.7071C19.0976 11.0976 19.7308 11.0976 20.1213 10.7071L20.7071 10.1213C21.0976 9.7308 21.0976 9.0976 20.7071 8.70711ZM5.29289 8.70711C5.68342 8.31658 5.68342 7.68342 5.29289 7.29289L4.70711 6.70711C4.31658 6.31658 3.68342 6.31658 3.29289 6.70711C2.90237 7.0976 2.90237 7.7308 3.29289 8.1213L3.87868 8.70711C4.2692 9.0976 4.90237 9.0976 5.29289 8.70711ZM12 4.5C7.059 4.5 3.5 8.059 3.5 12C3.5 15.941 7.059 19.5 12 19.5C16.941 19.5 20.5 15.941 20.5 12C20.5 8.059 16.941 4.5 12 4.5Z" fill="currentColor"/>
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
