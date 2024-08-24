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

  const handleToggleChange = (type: keyof CookiePreferences) => {
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

  const handleClose = () => {
    if (isModalOpen) {
      closeModal();
    } else if (isSettingsOpen) {
      closeSettingsModal();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Основное окно согласия с куки */}
      <div className="fixed bottom-4 left-4 md:right-4 right-24 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg w-auto max-w-md border-2 border-gray-300 dark:border-gray-700 flex flex-col items-center space-y-3">
        <p className="text-gray-800 dark:text-gray-200 text-sm w-full text-center">
          Мы используем файлы cookie для улучшения работы нашего сайта. Вы можете принять все куки, нажав на соответствующую кнопку, или выбрать, какие куки разрешить, настроив их вручную.
        </p>
        <div className="w-full flex justify-center items-center">
          <div className="flex space-x-4 justify-center mx-auto">
            <button
              className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition duration-300 text-sm"
              onClick={acceptAllCookies}
            >
              Принять все
            </button>
            <button
              className="text-red-600 underline hover:text-red-800 text-sm"
              onClick={openSettingsModal}
            >
              Настроить
            </button>
          </div>
          {/* Кнопка "Подробнее" видна только в ПК версии */}
          <button
            className="text-gray-500 underline text-xs ml-auto hidden md:inline"
            onClick={openModal}
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Универсальное затемнение фона для всех модальных окон */}
      {(isSettingsOpen || isModalOpen) && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center" onClick={handleClose}>
          {/* Модальное окно с настройками куки */}
          {isSettingsOpen && (
            <div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 shadow-lg relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Настройки файлов cookie</h2>
              <div className="flex flex-col items-start space-y-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-800 dark:text-gray-200 text-sm">Необходимые куки (всегда включены)</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={true} disabled className="sr-only" />
                    <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                    <div className="dot absolute left-6 top-[-2px] w-5 h-5 bg-gray-500 rounded-full shadow transition"></div>
                  </label>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-800 dark:text-gray-200 text-sm">Аналитические куки</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookies.analytics}
                      onChange={() => handleToggleChange('analytics')}
                      className="sr-only"
                    />
                    <div className={`w-10 h-4 rounded-full shadow-inner ${cookies.analytics ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    <div className={`dot absolute left-0 top-[-2px] w-5 h-5 bg-white rounded-full shadow transition ${cookies.analytics ? 'transform translate-x-6 bg-green-500' : ''}`}></div>
                  </label>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-800 dark:text-gray-200 text-sm">Маркетинговые куки</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookies.marketing}
                      onChange={() => handleToggleChange('marketing')}
                      className="sr-only"
                    />
                    <div className={`w-10 h-4 rounded-full shadow-inner ${cookies.marketing ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    <div className={`dot absolute left-0 top-[-2px] w-5 h-5 bg-white rounded-full shadow transition ${cookies.marketing ? 'transform translate-x-6 bg-green-500' : ''}`}></div>
                  </label>
                </div>
              </div>
              <div className="flex space-x-2 justify-between mt-4">
                <button
                  className="text-gray-600 underline hover:text-gray-800 text-sm"
                  onClick={() => { openModal(); }} // Открываем "Что это?" и не закрываем настройки
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

          {/* Модальное окно с информацией о куки, поверх окна "Настроить" */}
          {isModalOpen && (
            <div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 md:w-[80%] w-11/12 max-h-[70vh] overflow-y-auto shadow-lg absolute z-20 m-4 mt-32 md:mt-8 mb-12"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Что такое куки?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Необходимые куки:</strong> Эти файлы cookie необходимы для корректной работы сайта и его основных функций. Они позволяют сохранять ваши предпочтения, такие как настройки языка, и обеспечивают безопасность при навигации. Подробнее о необходимых куки можно узнать на <a href="https://rkn.gov.ru/communication/p490/p791/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">сайте Роскомнадзора</a>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Аналитические куки:</strong> Эти куки помогают нам понять, как посетители взаимодействуют с сайтом, собирая анонимные данные, такие как количество посетителей, откуда они пришли на сайт, и какие страницы посещают. Эти данные помогают улучшать работу сайта и его контент. Дополнительная информация доступна на <a href="https://duma.gov.ru/news/48953/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">сайте Государственной Думы РФ</a>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Маркетинговые куки:</strong> Эти файлы cookie используются для того, чтобы показывать вам рекламу, которая может быть интересна именно вам, основываясь на ваших предпочтениях. Они также помогают измерять эффективность рекламных кампаний. Узнайте больше о маркетинговых куки на <a href="https://minsvyaz.ru/ru/events/40879/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">сайте Министерства связи России</a>.
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
