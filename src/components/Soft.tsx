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
      "ELMScan",
      "Carista",
      "BimmerCode",
      "LeafSpy",
      "Проверка и очистка кодов ошибок",
      "Просмотр параметров в реальном времени",
    ],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/7Y9JtSgM5PfHDBx", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "VCI 6154",
    price: 120,
    currency: "$",
    frecuency: "year",
    description:
      "Диагностический интерфейс для автомобилей, поддерживающий различные протоколы.",
    features: ["Профессиональная диагностика", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/nbgkAswux4weoym", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "LAUNCH X431",
    price: 120,
    currency: "$",
    frecuency: "year",
    description:
      "Продвинутая диагностическая система для автомобилей, с поддержкой множества брендов.",
    features: ["Поддержка большинства марок", "Обновления по подписке", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/a9LsFTjq7HzuhXg", label: "Скачать с сервера 1" }
    ],
    mostPopular: true,
    docs: false,
    docsLinks: [],
  },
  {
    title: "Foxwell NT510",
    price: 120,
    currency: "$",
    frecuency: "year",
    description:
      "Многофункциональный диагностический сканер для автомобилей.",
    features: ["Поддержка OBD-II", "Диагностика всех систем", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/gA5odqwEoZ3kKXs", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
  {
    title: "Carly OBD",
    price: 120,
    currency: "$",
    frecuency: "year",
    description:
      "Мобильное приложение для диагностики автомобилей через адаптер OBD-II.",
    features: ["Обновления по подписке", "Инструкции по установке ПО"],
    downloadLinks: [
      { link: "https://i.getspace.us/cloud/s/m2xNZK5u5oTe55r", label: "Скачать с сервера 1" }
    ],
    mostPopular: false,
    docs: false,
    docsLinks: [],
  },
];

const ProductList = () => {
  const [modalLinks, setModalLinks] = useState<InstructionLink[]>([]);

  const checkLinks = async (links: InstructionLink[]) => {
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
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.title} className="product">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}{product.currency} ({product.frecuency})</p>
          {product.downloadLinks && product.downloadLinks.length > 0 && (
            <div>
              <h3>Download Links:</h3>
              <ul>
                {product.downloadLinks.map((link) => (
                  <li key={link.link}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                    <button onClick={() => checkLinks([link])}>Check Link</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {product.docsLinks && product.docsLinks.length > 0 && (
            <div>
              <h3>Documentation Links:</h3>
              <ul>
                {product.docsLinks.map((docLink) => (
                  <li key={docLink.link}>
                    <a href={docLink.link} target="_blank" rel="noopener noreferrer">
                      {docLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      <div className="modal">
        {modalLinks.map((link) => (
          <div key={link.link} className="modal-content">
            <p>{link.label}</p>
            <p>Status: {link.available ? 'Available' : 'Not Available'}</p>
            {link.speed !== undefined && (
              <p>Speed: {link.speed} KB/s</p>
            )}
            {!link.available && <CheckIcon className="w-6 h-6 text-red-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
