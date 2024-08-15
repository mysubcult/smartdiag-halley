import React from 'react';

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Закрытие только при нажатии на затемненную область, но не на содержимое модального окна
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleOverlayClick}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Затемнение фона */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-3xl mx-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-600">
          ×
        </button>
        <h4 className="text-xl font-semibold mb-4">Политика в отношении обработки персональных данных</h4>
        <div className="overflow-y-auto max-h-96">
          <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»...</p>
          {/* Добавьте остальной текст политики здесь */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
