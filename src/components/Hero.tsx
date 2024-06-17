import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState for managing hover state

export function Hero() {
  const [rocketHover, setRocketHover] = useState(false); // State for rocket hover

  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold">
            Добро пожаловать в <br />{" "}
            <span className="text-red-600 font-extrabold">SmartDiag <span className="wave">👋</span></span>
          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400 relative">
            Здесь вы найдете всё необходимое программное обеспечение для диагностики и обслуживания вашего автомобиля. Мы предоставляем высококачественное и надежное оборудование, которое поможет вам провести быстрый и эффективный анализ и ремонт вашего автомобиля. Мы верим, что техническое обслуживание автомобиля может быть простым и доступным каждому.
            <span
              className={`rocket-icon absolute top-1/2 right-0 transform -translate-y-1/2 ${
                rocketHover ? "animate-bounce-x" : ""
              }`}
              onMouseEnter={() => setRocketHover(true)}
              onMouseLeave={() => setRocketHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a1 1 0 0 1 .832.445l7 10a1 1 0 0 1 .168.555l-1.178 5.89a1 1 0 0 1-.07.198l-1 2a1 1 0 0 1-.74.555l-3.5.583a1 1 0 0 1-.95-.246l-2.25-2a1 1 0 0 1-.21-.266L5.038 18.8a1 1 0 0 1-.252-.75l.212-3.793a1 1 0 0 1 .196-.455l4.5-6.75A1 1 0 0 1 10 0zm1.14 2H8.86l-3.83 5.745a1 1 0 0 1-.206.294l-2.23 2.23a1 1 0 0 1-.196.456L2.3 16.195l.764-3.82 1.083-5.416 6.01-8.99 1.09 1.09-1.8 8.99 4.4-5.94-3.18-3.18z"
                />
              </svg>
            </span>
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
            <div>
              <Link href="#soft">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium hover:bg-gray-600 dark:hover:bg-gray-300 transition-colors">
                  Программы для приборов
                </button>
              </Link>
            </div>

            <div>
              <Link href="#contact">
                <button className="bg-red-600 text-white text-base rounded-full px-4 p-2 font-medium hover:bg-red-700 transition-colors">
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
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }

        .animate-bounce-x {
          animation: bounce-x 0.5s infinite;
        }
        
        .rocket-icon {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}
