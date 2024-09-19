import { useState } from 'react';
import Card from './Card';

const products = [
  {
    title: "Delphi DS150e",
    description: "Многофункциональный диагностический инструмент для легковых и грузовых автомобилей.",
    features: ["Delphi 2021.10b", "Руководство пользователя", "Инструкции по установке ПО"],
    downloadLinks: [{ link: "https://example.com", label: "Скачать" }],
    mostPopular: false,
    type: "мультимарочные",
  },
  {
    title: "Autocom CDP+",
    description: "Универсальный диагностический сканер для чтения и удаления кодов неисправностей.",
    features: ["Autocom 2021.11", "Delphi 2020.23"],
    downloadLinks: [{ link: "https://example.com", label: "Скачать" }],
    mostPopular: true,
    type: "мультимарочные",
  },
  // Добавь больше продуктов при необходимости
];

const Soft = () => {
  const [selectedType, setSelectedType] = useState<string>("мультимарочные");

  const filteredProducts = products.filter((product) => product.type === selectedType);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Card
          key={product.title}
          title={product.title}
          description={product.description}
          features={product.features}
          link={product.downloadLinks[0].link}
          mostPopular={product.mostPopular}
          type="product"
        />
      ))}
    </div>
  );
};

export default Soft;
