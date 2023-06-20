import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const newsItems = [
  {
    title: "Заголовок новости 1",
    date: "15 июня 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a metus sed ligula cursus eleifend. Nullam tristique ex ante, vitae rhoncus risus commodo non.",
  },
  {
    title: "Заголовок новости 2",
    date: "10 июня 2023",
    content:
      "Nullam cursus enim at elit euismod, a dapibus arcu hendrerit. Donec laoreet mi et interdum placerat. Aliquam posuere quam ut ligula vehicula fringilla.",
  },
  {
    title: "Заголовок новости 3",
    date: "5 июня 2023",
    content:
      "Etiam in tortor sit amet metus bibendum cursus. Nullam lacinia tellus sed maximus pellentesque. Suspendisse potenti. Maecenas venenatis urna sit amet tristique congue.",
  },
  {
    title: "Заголовок новости 4",
    date: "1 июня 2023",
    content:
      "Praesent sed mauris eu lorem auctor feugiat. Sed cursus ligula eget mauris mollis hendrerit. Ut interdum risus et aliquam consectetur.",
  },
];

export default function News() {
  const initialNewsCount = 3;
  const [showAllNews, setShowAllNews] = useState(false);

  const toggleShowAllNews = () => {
    setShowAllNews((prevState) => !prevState);
  };

  return (
    <div className="bg-white dark:bg-neutral-900 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Новости и события 📰
        </h2>
        {newsItems.slice(0, initialNewsCount).map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="mb-4">
                <Disclosure.Button
                  className={`${
                    open
                      ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100"
                      : ""
                  } flex justify-between items-center w-full py-4 px-6 rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50`}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {item.date}
                    </p>
                  </div>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } h-5 w-5 flex-shrink-0 text-neutral-500 dark:text-neutral-400`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`${
                    open ? "px-6 py-4 text-base" : "hidden"
                  } bg-neutral-100 dark:bg-neutral-800 rounded-lg mt-2`}
                >
                  <p>{item.content}</p>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
        {!showAllNews && newsItems.length > initialNewsCount && (
          <div className="text-center mt-4">
            <button
              onClick={toggleShowAllNews}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
            >
              Читать далее
            </button>
          </div>
        )}
        {showAllNews &&
          newsItems.slice(initialNewsCount).map((item, index) => (
            <Disclosure key={index} as="div" className="mb-4">
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100"
                        : ""
                    } flex justify-between items-center w-full py-4 px-6 rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.date}
                      </p>
                    </div>
                    <ChevronDownIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } h-5 w-5 flex-shrink-0 text-neutral-500 dark:text-neutral-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open ? "px-6 py-4 text-base" : "hidden"
                    } bg-neutral-100 dark:bg-neutral-800 rounded-lg mt-2`}
                  >
                    <p>{item.content}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
      </div>
    </div>
  );
}
