import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:p-6 lg:p-8 m-4 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="text-gray-800">
        Мы используем файлы cookie для улучшения вашего опыта. Продолжая использовать наш сайт, вы соглашаетесь с нашей политикой конфиденциальности.
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        onClick={acceptCookies}
      >
        Принять
      </button>
    </div>
  );
};

export default CookieConsent;
