import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

interface InstructionLink {
  link: string;
  label: string;
  available?: boolean;
  speed?: number; // Заменено с ping на speed для отображения скорости загрузки
}

const products = [
  {
    title: "Delphi DS150e",
    price: 12,
    currency: "$",
    frecuency: "month",
    description:
      "Многофункциональный диагностический инструмент для легковых и грузовых автомобилей.",
    features: [
      "Delphi 2021.10b, Delphi + Delphi 2020.23",
      "Инструкции по установке ПО",
      "Руководство пользователя",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/BiaqYzKpxZRTc58", label: "Скачать с сервера 1" },
      { link: "https://i.getspace.us/cloud/s/anotherLink", label: "Скачать с сервера 2" }
    ],
    mostPopular: false,
    docs: true,
    docsLinks: [
      { link: "https://i.getspace.us/cloud/s/7BwyBJf2YHxEkaC", label: "Инструкция по установке Delphi 2020.23" },
      { link: "https://i.getspace.us/cloud/s/qJRfJdgjsqkPxme", label: "Инструкция по установке Delphi 2021.10b" }
    ],
  },
  {
    title: "Autocom CDP+",
    price: 12,
    currency: "$",
    frecuency: "month",
    description:
      "Универсальный диагностический сканер для чтения и удаления кодов неисправностей.",
    features: [
      "Autocom 2021.11, Delphi + Autocom 2020.23",
      "Инструкции по установке ПО",
      "Руководство пользователя",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/S9CKwWMNDbeB2XH", label: "Скачать с сервера 1" },
      { link: "https://i.getspace.us/cloud/s/anotherLink2", label: "Скачать с сервера 2" }
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      { link: "https://i.getspace.us/cloud/s/xdr4QZqwsR6k8rr", label: "Инструкция по установке Autocom 2020.23" },
      { link: "https://i.getspace.us/cloud/s/bbRzaksyH6LkSg4", label: "Инструкция по установке Autocom 2021.11" },
    ],
  },
  {
    title: "Wurth WoW Snooper+",
    price: 12,
    currency: "$",
    frecuency: "month",
    description:
      "Инструмент диагностики автомобилей для чтения и удаления кодов неисправностей.",
    features: [
      "Wurth WoW 5.00.8",
      "Инструкция по установке ПО",
      "Руководство пользователя",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/eTR2gqbEbZi66Md", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "MUCAR BT200/Thinkcar Mini/Thinkdiag",
    price: 12,
    currency: "$",
    frecuency: "month",
    description: "Универсальные мобильные приборы для диагностики автомобилей.",
    features: ["Diagzone", "ProDiag", "X-DIAG", "X-PRO5"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/fAMr3QsBMekwR2n", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "Galletto 1260",
    price: 12,
    currency: "$",
    frecuency: "month",
    description:
      "Универсальный программатор для чип-тюнинга, чтения и удаления кодов неисправностей.",
    features: ["Galletto 1260", "Драйвер"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/dfYejQP9rZGK9Td", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "VCDS + Вася",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностический инструмент для автомобилей Volkswagen Group.",
    features: [
      "Вася, VCDS",
      "Инструкции по установке ПО",
      "Сборники кодировок",
      "Видеокурсы",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/R7ycKecn9P6b55a", label: "Скачать с сервера 1" }
    ],
    mostPopular: true,
    docs: true,
    docsLinks: [
      { link: "https://i.getspace.us/cloud/s/bmi7a7zdHbXHMnB", label: "Инструкция 1" },
    ],
  },
  {
    title: "BMW E-NET (E-Sys)",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностическая система для автомобилей BMW.",
    features: [
      "E-SYS",
      "Rheingold",
      "ISTA+",
      "ISTA-P",
      "Инструкции по установке ПО",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "K-Dcan INPA",
    price: 120,
    currency: "$",
    frecuency: "year",
    description: "Диагностическая система для автомобилей BMW.",
    features: [
      "Rheingold",
      "INPA",
      "ISTA-D",
      "DIS",
      "NCS",
      "Инструкции по установке ПО",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/jiiandKXdi6BEJS", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "ELS 27",
    price: 120,
    currency: "$",
    frecuency: "year",
    description:
      "Диагностический интерфейс для автомобилей Ford и Mazda.",
    features: ["FORScan", "FoCCCus", "ELMConfig", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/oBNcC2w85wnj2Lx", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "Mini-VCI",
    price: 120,
    currency: "$",
    frecuency: "year",
    description:
      "Диагностический инструмент для автомобилей Toyota и Lexus.",
    features: ["Techstream ", "Инструкция по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/Q3kWQ8ajB8WdF5g", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "Lexia 3/PP2000",
    price: 120,
    currency: "$",
    frecuency: "year",
    description:
      "Диагностический инструмент для автомобилей Peugeot и Citroen.",
    features: ["Diagbox", "Инструкция по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/eBmZpZWza2kt2Dc", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "ELM 327 Mini",
    price: 120,
    currency: "$",
    frecuency: "elm",
    description:
      "Универсальный диагностический сканер для автомобилей, который подключается к порту OBD-II и работает через приложение на смартфоне или компьютере.",
    features: [
      "EOBD Facile",
      "Car Scanner",
      "Torque",
      "Инструкция по установке ПО",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/xyz123", label: "Скачать с сервера 1" }
    ],
    mostPopular: true,
    docs: false,
    docsLinks: [],
  },
];

const ProductList = () => {
  const [modalLinks, setModalLinks] = useState<InstructionLink[]>([]);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const checkLinks = async (links: InstructionLink[], productTitle: string) => {
    const updatedLinks = await Promise.all(
      links.map(async (link) => {
        try {
          const startTime = Date.now();
          const response = await fetch(link.link, { method: "HEAD" });
          const endTime = Date.now();
          const contentLength = response.headers.get('content-length');
          const speed = contentLength 
            ? parseFloat((parseInt(contentLength) / (endTime - startTime) / 1000).toFixed(2)) 
            : undefined;
          return { ...link, available: true, speed };
        } catch (error) {
          return { ...link, available: false, speed: undefined };
        }
      })
    );

    setModalLinks(updatedLinks);
    setActiveProduct(productTitle);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.title} className="product mb-6 p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold">
            Price: {product.price}{product.currency} ({product.frecuency})
          </p>
          {product.downloadLinks && product.downloadLinks.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Download Links:</h3>
              <ul className="list-disc pl-5">
                {product.downloadLinks.map((link) => (
                  <li key={link.link} className="mb-2">
                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {link.label}
                    </a>
                    <button
                      onClick={() => checkLinks(product.downloadLinks, product.title)}
                      className="ml-4 p-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Check Link
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {product.docsLinks && product.docsLinks.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Documentation Links:</h3>
              <ul className="list-disc pl-5">
                {product.docsLinks.map((docLink) => (
                  <li key={docLink.link} className="mb-2">
                    <a href={docLink.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {docLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {modalLinks.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-4">
            <h3 className="text-xl font-bold mb-4">Link Status for {activeProduct}</h3>
            <ul className="list-disc pl-5">
              {modalLinks.map((link) => (
                <li key={link.link} className="mb-2">
                  <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {link.label}
                  </a>
                  <p>Status: {link.available ? 'Available' : 'Not Available'}</p>
                  {link.speed !== undefined && link.available && (
                    <p>Speed: {link.speed} KB/s</p>
                  )}
                  {!link.available && <CheckIcon className="w-6 h-6 text-red-500 inline-block ml-2" />}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setModalLinks([])}
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
