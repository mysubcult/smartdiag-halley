import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Основное окно согласия с куки, адаптированное для мобильных устройств и с учетом виджета онлайн-чата */}
      <div className="fixed bottom-4 left-4 right-32 md:right-4 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg w-auto max-w-md border-2 border-gray-300 dark:border-gray-700 flex flex-col items-center space-y-3">
        <p className="text-gray-800 dark:text-gray-200 text-sm w-full text-center">
          Мы используем файлы cookie для улучшения вашего опыта. Продолжая использовать сайт, вы соглашаетесь с их использованием.
        </p>
        <div className="flex space-x-2 justify-center">
          <button
            className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition duration-300 text-sm"
            onClick={acceptCookies}
          >
            Принять
          </button>
          <button
            className="text-red-600 underline hover:text-red-800 text-sm"
            onClick={openModal}
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Модальное окно с информацией о куки */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
          onClick={closeModal} // Закрытие при клике вне окна
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Предотвращение закрытия при клике внутри окна
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Что такое куки?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта. Они помогают нам улучшать наш сайт и предоставлять вам более персонализированный сервис.
            </p>
            <button
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
