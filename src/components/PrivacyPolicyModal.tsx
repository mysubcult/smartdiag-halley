import React, { useEffect } from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body?.classList.add('overflow-hidden');
    } else {
      body?.classList.remove('overflow-hidden');
    }

    return () => {
      body?.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-3xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Политика конфиденциальности</h2>
        <p className="mb-4">
          Здесь должен быть полный текст правил обработки персональных данных, который был ранее. Вы можете добавить его сюда.
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
