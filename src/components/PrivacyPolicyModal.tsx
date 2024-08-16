import React, { useEffect } from 'react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    // Убираем влияние на флажок при открытии и закрытии модального окна
    const body = document.querySelector('body');
    if (isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }

    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-3xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Политика конфиденциальности</h2>
        <p className="mb-4">
          {/* Ваш текст политики конфиденциальности */}
        </p>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
