// /src/components/CookieConsent.tsx

import { useState, useEffect, useCallback } from 'react';

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
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptAllCookies = useCallback(() => {
    setCookies({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem('cookiesAccepted', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsVisible(false);
  }, []);

  const acceptSelectedCookies = useCallback(() => {
    localStorage.setItem('cookiesAccepted', JSON.stringify(cookies));
    setIsVisible(false);
    setIsSettingsOpen(false);
  }, [cookies]);

  const handleToggleChange = useCallback((type: keyof CookiePreferences) => {
    setCookies((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  const handleClose = () => {
    setIsModalOpen(false);
    setIsSettingsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 md:right-4 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg w-auto max-w-md border dark:border-gray-700 flex flex-col items-center space-y-3">
        <p className="text-gray-800 dark:text-gray-200 text-sm w-full text-center">
          Мы используем файлы cookie для улучшения работы нашего сайта. Вы можете принять все куки, нажав на соответствующую кнопку, или выбрать, какие куки разрешить, настроив их вручную.
        </p>
        <div className="w-full flex justify-center items-center space-x-4">
          <button className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition duration-300 text-sm" onClick={acceptAllCookies}>Принять все</button>
          <button className="text-red-600 underline hover:text-red-800 text-sm" onClick={toggleSettings}>Настроить</button>
          <button className="text-gray-500 underline text-xs ml-auto hidden md:inline" onClick={toggleModal}>Подробнее</button>
        </div>
      </div>

      {(isSettingsOpen || isModalOpen) && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center" onClick={handleClose}>
          {isSettingsOpen && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 shadow-lg relative z-10" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Настройки файлов cookie</h2>
              <div className="flex flex-col items-start space-y-4 w-full">
                <ToggleSwitch label="Необходимые куки (всегда включены)" checked={true} disabled={true} />
                <ToggleSwitch label="Аналитические куки" checked={cookies.analytics} onChange={() => handleToggleChange('analytics')} />
                <ToggleSwitch label="Маркетинговые куки" checked={cookies.marketing} onChange={() => handleToggleChange('marketing')} />
              </div>
              <div className="flex space-x-2 justify-between mt-4">
                <button className="text-gray-600 underline hover:text-gray-800 text-sm" onClick={toggleModal}>Что это?</button>
                <button className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition duration-300 text-sm" onClick={acceptSelectedCookies}>Принять выбранные</button>
              </div>
              <button className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl" onClick={toggleSettings}>&times;</button>
            </div>
          )}
          {isModalOpen && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:w-[80%] w-11/12 max-h-[70vh] overflow-y-auto shadow-lg absolute z-20 m-4 mt-32 md:mt-8 mb-12" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Что такое куки?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Информация о различных типах куки...</p>
              <button className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl" onClick={toggleModal}>&times;</button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const ToggleSwitch = ({ label, checked, disabled, onChange }: any) => (
  <div className="flex justify-between items-center w-full">
    <span className="text-gray-800 dark:text-gray-200 text-sm">{label}</span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} className="sr-only" />
      <div className={`w-10 h-4 rounded-full shadow-inner ${checked ? 'bg-green-500' : 'bg-gray-200'}`}></div>
      <div className={`dot absolute left-0 top-[-2px] w-5 h-5 bg-white rounded-full shadow transition ${checked ? 'transform translate-x-6 bg-green-500' : ''}`}></div>
    </label>
  </div>
);

export default CookieConsent;
