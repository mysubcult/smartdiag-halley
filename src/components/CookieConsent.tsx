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
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-6 rounded-lg max-w-md w-full mx-auto flex flex-col items-center space-y-4">
        <p className="text-gray-800 text-center">
          Мы используем файлы cookie для улучшения вашего опыта. Продолжая использовать наш сайт, вы соглашаетесь с нашей политикой конфиденциальности.
        </p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={acceptCookies}
          >
            Принять
          </button>
          <button
            className="text-blue-600 underline hover:text-blue-800"
            onClick={openModal}
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Что такое куки?</h2>
            <p className="text-gray-700 mb-4">
              Файлы cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта. Они помогают нам улучшать наш сайт и предоставлять вам более персонализированный сервис.
            </p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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
