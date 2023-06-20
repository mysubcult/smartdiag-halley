import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";

const newsItems = [
  {
    title: "Заголовок новости 1",
    content: "Содержание новости 1",
  },
  {
    title: "Заголовок новости 2",
    content: "Содержание новости 2",
  },
  {
    title: "Заголовок новости 3",
    content: "Содержание новости 3",
  },
  {
    title: "Заголовок новости 4",
    content: "Содержание новости 4",
  },
];

export default function News() {
  const initialNewsCount = 3;
  const [showAllNews, setShowAllNews] = useState(false);

  const toggleShowAllNews = () => {
    setShowAllNews((prevState) => !prevState);
  };

  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, initialNewsCount);

  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="news">
      <h2 className="text-4xl font-bold text-center">Новости 📰</h2>

      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {displayedNews.map((news, index) => (
          <div key={index}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{news.title}</h2>
                    <span
                      className={`${
                        open ? "transform rotate-180" : ""
                      } h-5 w-5 flex-shrink-0 text-neutral-500 dark:text-neutral-400`}
                    >
                      {open ? "▲" : "▼"}
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{news.content}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
        {!showAllNews && (
          <button
            className="block mx-auto mt-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg px-4 py-2 text-base font-medium text-neutral-500 dark:text-neutral-400"
            onClick={toggleShowAllNews}
          >
            Читать далее
          </button>
        )}
      </div>
    </div>
  );
}
