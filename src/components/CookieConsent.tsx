import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cookies, setCookies] = useState<CookiePreferences>({
    necessary: true, // Эти куки всегда включены и не могут быть отключены
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptAllCookies = () => {
    setCookies({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem('cookiesAccepted', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const acceptSelectedCookies = () => {
    localStorage.setItem('cookiesAccepted', JSON.stringify(cookies));
    setIsVisible(false);
    setIsSettingsOpen(false);
  };

  const handleCheckboxChange = (type: keyof CookiePreferences) => {
    setCookies((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const openSettingsModal = () => {
    setIsSettingsOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsOpen(false);
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
      {/* Основное окно согласия с куки */}
      <div className="fixed bottom-4 left-4 right-32 md:right-4 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg w-auto max-w-md border-2 border-gray-300 dark:border-gray-700 flex flex-col items-center space-y-3">
        <p className="text-gray-800 dark:text-gray-200 text-sm w-full text-center">
          Мы используем файлы cookie для улучшения вашего опыта на нашем сайте, анализа трафика и персонализации контента. Пожалуйста, выберите, какие куки вы хотите разрешить.
        </p>
        <div className="flex space-x-2 justify-center">
          <button
            className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition duration-300 text-sm"
            onClick={acceptAllCookies}
          >
            Принять все
          </button>
          {/* Для мобильной версии показываем две кнопки */}
          <button
            className="text-red-600 underline hover:text-red-800 text-sm block md:hidden"
            onClick={openSettingsModal}
          >
            Настроить
          </button>
          {/* Для ПК версии показываем три кнопки, но теперь "Настроить" слева от "Подробнее" */}
          <button
            className="text-red-600 underline hover:text-red-800 text-sm hidden md:inline-block"
            onClick={openSettingsModal}
          >
            Настроить
          </button>
          <button
            className={`text-red-600 underline hover:text-red-800 text-sm hidden md:inline-block ${isModalOpen ? 'hidden' : 'inline-block'}`}
            onClick={openModal}
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Универсальное затемнение фона для всех модальных окон */}
      {(isSettingsOpen || isModalOpen) && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          {/* Модальное окно с настройками куки */}
          {isSettingsOpen && (
            <div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Настройки файлов cookie</h2>
              <div className="flex flex-col items-start space-y-2 w-full">
                <label className="text-gray-800 dark:text-gray-200 text-sm flex items-center">
                  <input type="checkbox" checked={cookies.necessary} disabled className="mr-2" />
                  Необходимые куки (всегда включены)
                </label>
                <label className="text-gray-800 dark:text-gray-200 text-sm flex items-center">
                  <input
                    type="checkbox"
                    checked={cookies.analytics}
                    onChange={() => handleCheckboxChange('analytics')}
                    className="mr-2"
                  />
                  Аналитические куки
                </label>
                <label className="text-gray-800 dark:text-gray-200 text-sm flex items-center">
                  <input
                    type="checkbox"
                    checked={cookies.marketing}
                    onChange={() => handleCheckboxChange('marketing')}
                    className="mr-2"
                  />
                  Маркетинговые куки
                </label>
              </div>
              <div className="flex space-x-2 justify-between mt-4">
                <button
                  className="text-gray-600 underline hover:text-gray-800 text-sm"
                  onClick={openModal} // Открываем окно "Что это?", но не закрываем текущее
                >
                  Что это?
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition duration-300 text-sm"
                  onClick={acceptSelectedCookies}
                >
                  Принять выбранные
                </button>
              </div>
              <button
                className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
                onClick={closeSettingsModal}
              >
                &times;
              </button>
            </div>
          )}

          {/* Модальное окно с информацией о куки */}
          {isModalOpen && (
            <div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
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
          )}
        </div>
      )}
    </>
  );
};

export default CookieConsent;
