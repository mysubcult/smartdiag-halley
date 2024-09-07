import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useCallback } from "react";

type BlogPost = {
  title: string;
  image: string;
  excerpt: string;
  link: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  // Раздел "Ошибки" - 16 статей
  { title: "Как справиться с ошибкой при открытии архива", image: "/images/blog/post1.jpg", excerpt: "Узнайте, как справиться с наиболее частыми ошибками при открытии архивов и что может вызывать эти проблемы.", link: "/blog/post1", category: "Ошибки" },
  { title: "Проблемы с запуском программы", image: "/images/blog/post1.jpg", excerpt: "Что делать, если программа не запускается или исчезают ярлыки? Решения и советы.", link: "/blog/post2", category: "Ошибки" },
  { title: "Как справиться с зависанием программы во время установки", image: "/images/blog/post1.jpg", excerpt: "Пошаговое руководство для устранения проблем, связанных с зависанием программ во время установки.", link: "/blog/post8", category: "Ошибки" },
  { title: "Ошибки в программном обеспечении", image: "/images/blog/post1.jpg", excerpt: "Типичные ошибки при работе с программным обеспечением и способы их устранения.", link: "/blog/post11", category: "Ошибки" },
  { title: "Непредвиденные сбои программ при работе", image: "/images/blog/post1.jpg", excerpt: "Решения для устранения непредвиденных сбоев программного обеспечения.", link: "/blog/post12", category: "Ошибки" },
  { title: "Нестабильная работа приложений", image: "/images/blog/post1.jpg", excerpt: "Как исправить нестабильную работу программных приложений?", link: "/blog/post13", category: "Ошибки" },
  { title: "Ошибки при запуске программ", image: "/images/blog/post1.jpg", excerpt: "Советы по устранению ошибок, возникающих при запуске программ.", link: "/blog/post14", category: "Ошибки" },
  { title: "Как устранить ошибку установки драйверов", image: "/images/blog/post1.jpg", excerpt: "Узнайте, как справиться с ошибками при установке драйверов.", link: "/blog/post15", category: "Ошибки" },
  { title: "Ошибки совместимости программного обеспечения", image: "/images/blog/post1.jpg", excerpt: "Решения для устранения проблем совместимости программ.", link: "/blog/post16", category: "Ошибки" },
  { title: "Обновление ПО вызывает сбои", image: "/images/blog/post1.jpg", excerpt: "Как справиться с проблемами, возникающими после обновления программного обеспечения?", link: "/blog/post17", category: "Ошибки" },
  { title: "Ошибка при подключении к серверу", image: "/images/blog/post1.jpg", excerpt: "Что делать, если программа не может подключиться к серверу?", link: "/blog/post18", category: "Ошибки" },
  { title: "Зависание программ в процессе работы", image: "/images/blog/post1.jpg", excerpt: "Руководство по решению проблем зависания программ.", link: "/blog/post19", category: "Ошибки" },
  { title: "Сбой при сохранении файлов", image: "/images/blog/post1.jpg", excerpt: "Что делать, если программа не может сохранить файлы?", link: "/blog/post20", category: "Ошибки" },
  { title: "Ошибки в интерфейсе программ", image: "/images/blog/post1.jpg", excerpt: "Как справиться с проблемами интерфейса программ?", link: "/blog/post21", category: "Ошибки" },
  { title: "Проблемы с лицензированием ПО", image: "/images/blog/post1.jpg", excerpt: "Решение типичных проблем с лицензированием программ.", link: "/blog/post22", category: "Ошибки" },
  { title: "Ошибка при установке обновлений", image: "/images/blog/post1.jpg", excerpt: "Как исправить ошибки, возникающие при установке обновлений программ?", link: "/blog/post23", category: "Ошибки" },

  // Раздел "Установка ПО" - 16 статей
  { title: "Помощь в установке программного обеспечения", image: "/images/blog/post1.jpg", excerpt: "Как получить помощь при установке программного обеспечения. Контакты и часы работы службы поддержки.", link: "/blog/post4", category: "Установка ПО" },
  { title: "Частые проблемы с установкой", image: "/images/blog/post1.jpg", excerpt: "Советы по устранению проблем с установкой программ.", link: "/blog/post12", category: "Установка ПО" },
  { title: "Как выбрать правильный установочный файл", image: "/images/blog/post1.jpg", excerpt: "Советы по выбору правильных установочных файлов для вашего устройства.", link: "/blog/post24", category: "Установка ПО" },
  { title: "Как исправить ошибку установки", image: "/images/blog/post1.jpg", excerpt: "Решение распространенных проблем с установкой программ.", link: "/blog/post25", category: "Установка ПО" },
  { title: "Установка программ на внешние носители", image: "/images/blog/post1.jpg", excerpt: "Руководство по установке программ на внешние носители.", link: "/blog/post26", category: "Установка ПО" },
  { title: "Обновление установленных программ", image: "/images/blog/post1.jpg", excerpt: "Как обновить установленные программы до последней версии.", link: "/blog/post27", category: "Установка ПО" },
  { title: "Как установить антивирус", image: "/images/blog/post1.jpg", excerpt: "Шаги по установке антивирусных программ для вашего устройства.", link: "/blog/post28", category: "Установка ПО" },
  { title: "Ошибки при установке ПО на Mac", image: "/images/blog/post1.jpg", excerpt: "Как справиться с ошибками при установке ПО на устройствах Apple.", link: "/blog/post29", category: "Установка ПО" },
  { title: "Как установить драйвера", image: "/images/blog/post1.jpg", excerpt: "Руководство по установке драйверов для различных устройств.", link: "/blog/post30", category: "Установка ПО" },
  { title: "Проблемы с правами администратора", image: "/images/blog/post1.jpg", excerpt: "Как справиться с проблемами установки, требующими прав администратора.", link: "/blog/post31", category: "Установка ПО" },
  { title: "Как установить программы из магазина приложений", image: "/images/blog/post1.jpg", excerpt: "Руководство по установке приложений из официальных магазинов.", link: "/blog/post32", category: "Установка ПО" },
  { title: "Решение проблем с установкой на Windows", image: "/images/blog/post1.jpg", excerpt: "Как справиться с проблемами установки на Windows.", link: "/blog/post33", category: "Установка ПО" },
  { title: "Как установить программы в виртуальной среде", image: "/images/blog/post1.jpg", excerpt: "Установка программ в виртуальных машинах и средах.", link: "/blog/post34", category: "Установка ПО" },
  { title: "Обновление BIOS перед установкой программ", image: "/images/blog/post1.jpg", excerpt: "Нужно ли обновлять BIOS перед установкой новых программ?", link: "/blog/post35", category: "Установка ПО" },
  { title: "Ошибки при установке через командную строку", image: "/images/blog/post1.jpg", excerpt: "Как установить программы через командную строку и устранить ошибки.", link: "/blog/post36", category: "Установка ПО" },
  { title: "Как установить программы через пакеты", image: "/images/blog/post1.jpg", excerpt: "Установка программных пакетов и зависимости.", link: "/blog/post37", category: "Установка ПО" },

  // Раздел "Безопасность" - 16 статей
  { title: "Безопасность программ и антивирусы", image: "/images/blog/post1.jpg", excerpt: "Как антивирусное ПО может влиять на ваши программы и как правильно настраивать исключения.", link: "/blog/post5", category: "Безопасность" },
  { title: "Как выбрать лучшее антивирусное ПО для вашего компьютера", image: "/images/blog/post1.jpg", excerpt: "Узнайте, какое антивирусное ПО подходит именно для вас и как его настроить.", link: "/blog/post7", category: "Безопасность" },
  { title: "Важные аспекты безопасности ПО", image: "/images/blog/post1.jpg", excerpt: "Как избежать вирусов и защитить свои данные.", link: "/blog/post13", category: "Безопасность" },
  { title: "Лучшие практики настройки антивирусов", image: "/images/blog/post1.jpg", excerpt: "Как настроить антивирусные программы для оптимальной защиты.", link: "/blog/post14", category: "Безопасность" },
  { title: "Современные угрозы безопасности ПО", image: "/images/blog/post1.jpg", excerpt: "Рассмотрим, какие угрозы могут повлиять на вашу безопасность.", link: "/blog/post16", category: "Безопасность" },
  { title: "Как настроить VPN для безопасности", image: "/images/blog/post1.jpg", excerpt: "Руководство по настройке VPN для защиты данных в сети.", link: "/blog/post38", category: "Безопасность" },
  { title: "Обзор лучших антивирусов", image: "/images/blog/post1.jpg", excerpt: "Сравнение антивирусных программ для защиты вашего устройства.", link: "/blog/post39", category: "Безопасность" },
  { title: "Как защитить данные от фишинговых атак", image: "/images/blog/post1.jpg", excerpt: "Советы по защите от фишинговых атак и мошенничества.", link: "/blog/post40", category: "Безопасность" },
  { title: "Безопасное хранение данных в облаке", image: "/images/blog/post1.jpg", excerpt: "Рекомендации по безопасному хранению данных в облачных сервисах.", link: "/blog/post41", category: "Безопасность" },
  { title: "Защита от вредоносного ПО", image: "/images/blog/post1.jpg", excerpt: "Как защитить устройство от вредоносных программ.", link: "/blog/post42", category: "Безопасность" },
  { title: "Настройка двухфакторной аутентификации", image: "/images/blog/post1.jpg", excerpt: "Шаги по настройке двухфакторной аутентификации для повышения безопасности.", link: "/blog/post43", category: "Безопасность" },
  { title: "Как защитить данные на мобильных устройствах", image: "/images/blog/post1.jpg", excerpt: "Советы по безопасности для мобильных телефонов и планшетов.", link: "/blog/post44", category: "Безопасность" },
  { title: "Безопасность сетевых подключений", image: "/images/blog/post1.jpg", excerpt: "Как обезопасить сетевые подключения вашего устройства.", link: "/blog/post45", category: "Безопасность" },
  { title: "Как выбрать лучший файрвол", image: "/images/blog/post1.jpg", excerpt: "Рекомендации по выбору и настройке файрвола для защиты данных.", link: "/blog/post46", category: "Безопасность" },
  { title: "Защита от угроз в социальных сетях", image: "/images/blog/post1.jpg", excerpt: "Как защитить себя от угроз в социальных сетях.", link: "/blog/post47", category: "Безопасность" },
  { title: "Как избежать утечки данных", image: "/images/blog/post1.jpg", excerpt: "Советы по предотвращению утечки данных.", link: "/blog/post48", category: "Безопасность" },

  // Раздел "Рекомендации" - 16 статей
  { title: "Использование ключа активации на другом устройстве", image: "/images/blog/post1.jpg", excerpt: "Можно ли использовать один ключ активации на нескольких устройствах? Ответы и рекомендации.", link: "/blog/post3", category: "Рекомендации" },
  { title: "Рекомендации по использованию наших программ", image: "/images/blog/post1.jpg", excerpt: "Лучшие практики и советы по использованию программного обеспечения для достижения максимальной эффективности.", link: "/blog/post6", category: "Рекомендации" },
  { title: "Настройка облачных хранилищ для резервного копирования", image: "/images/blog/post1.jpg", excerpt: "Руководство по настройке облачных сервисов для резервного копирования ваших файлов и данных.", link: "/blog/post9", category: "Рекомендации" },
  { title: "Обзор программ для работы с архивами", image: "/images/blog/post1.jpg", excerpt: "Сравнение различных программ для работы с архивами и их основные функции.", link: "/blog/post10", category: "Рекомендации" },
  { title: "Рекомендации по управлению лицензиями", image: "/images/blog/post1.jpg", excerpt: "Советы по управлению лицензиями и активацией ПО.", link: "/blog/post15", category: "Рекомендации" },
  { title: "Как настроить резервное копирование", image: "/images/blog/post1.jpg", excerpt: "Советы по организации и настройке резервного копирования данных.", link: "/blog/post49", category: "Рекомендации" },
  { title: "Как выбрать программное обеспечение для работы с документами", image: "/images/blog/post1.jpg", excerpt: "Рекомендации по выбору программ для работы с текстами и таблицами.", link: "/blog/post50", category: "Рекомендации" },
  { title: "Как увеличить производительность системы", image: "/images/blog/post1.jpg", excerpt: "Рекомендации по повышению производительности системы.", link: "/blog/post51", category: "Рекомендации" },
  { title: "Как работать с электронными подписями", image: "/images/blog/post1.jpg", excerpt: "Инструкции по использованию электронных подписей в документах.", link: "/blog/post52", category: "Рекомендации" },
  { title: "Как настроить программные обновления", image: "/images/blog/post1.jpg", excerpt: "Рекомендации по настройке автоматических обновлений.", link: "/blog/post53", category: "Рекомендации" },
  { title: "Рекомендации по использованию облачных сервисов", image: "/images/blog/post1.jpg", excerpt: "Как эффективно использовать облачные сервисы.", link: "/blog/post54", category: "Рекомендации" },
  { title: "Как выбрать правильные периферийные устройства", image: "/images/blog/post1.jpg", excerpt: "Советы по выбору принтеров, сканеров и других периферийных устройств.", link: "/blog/post55", category: "Рекомендации" },
  { title: "Как настроить синхронизацию данных", image: "/images/blog/post1.jpg", excerpt: "Как настроить синхронизацию данных между устройствами.", link: "/blog/post56", category: "Рекомендации" },
  { title: "Рекомендации по работе с архивами", image: "/images/blog/post1.jpg", excerpt: "Как эффективно организовать работу с архивными файлами.", link: "/blog/post57", category: "Рекомендации" },
  { title: "Рекомендации по настройке мониторов", image: "/images/blog/post1.jpg", excerpt: "Как правильно настроить мониторы для лучшей работы.", link: "/blog/post58", category: "Рекомендации" },
  { title: "Как выбрать лучший PDF-редактор", image: "/images/blog/post1.jpg", excerpt: "Советы по выбору программ для редактирования PDF-файлов.", link: "/blog/post59", category: "Рекомендации" }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const postsPerPage = 8;

  const categories = useMemo(() => [
    { name: "Все", value: "Все" },
    { name: "Ошибки", value: "Ошибки" },
    { name: "Установка ПО", value: "Установка ПО" },
    { name: "Безопасность", value: "Безопасность" },
    { name: "Рекомендации", value: "Рекомендации" },
  ], []);

  const filteredPosts = useMemo(() => {
    return selectedCategory === "Все"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [currentPage, filteredPosts]);

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    setShowModal(false);
  }, []);

  const handleEllipsisClick = () => {
    setShowModal(true);
  };

  const renderPagination = () => {
    const maxVisiblePages = 5;

    const pagesToShow: (string | number)[] = [];
    pagesToShow.push(1);

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    if (startPage > 2) pagesToShow.push('...');
    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }
    if (endPage < totalPages - 1) pagesToShow.push('...');
    pagesToShow.push(totalPages);

    return pagesToShow.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === 'number' ? handlePageChange(page) : handleEllipsisClick()}
        className={`${
          page === currentPage
            ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
            : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
        } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out ${
          typeof page !== 'number' ? 'cursor-pointer' : ''
        }`}
        disabled={typeof page !== 'number'}
      >
        {page === '...' ? '...' : page}
      </button>
    ));
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Статьи 📰 (в разработке)</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В нашем блоге вы найдете полезные статьи и советы по использованию наших продуктов и услуг.
        </p>
      </div>

      <div className="max-w-max mx-auto px-6">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center sm:mt-8 p-1 gap-1">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              className={`${
                category.value === selectedCategory
                  ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
              } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
        {paginatedPosts.map(({ title, image, excerpt, link }) => (
          <div
            key={title}
            className="rounded-lg overflow-hidden flex flex-col border-neutral-300 border dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:shadow-lg transition-all duration-300 h-full"
          >
            <Link href={link}>
              <div className="relative h-[200px]">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  className="w-full object-cover"
                  priority={title === paginatedPosts[0].title}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <h3
                style={{
                  minHeight: '3em',
                  lineHeight: '1.5em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
                className="text-lg font-semibold mb-2"
              >
                {title}
              </h3>
              <p
                style={{
                  minHeight: '4.5em',
                  lineHeight: '1.5em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  flexGrow: 1,
                }}
                className="text-sm text-neutral-600 dark:text-neutral-400 mb-4"
              >
                {excerpt}
              </p>
              <div className="mt-auto text-right">
                <Link href={link}>
                  <button className="bg-red-600 text-white text-sm rounded-md px-4 py-2 transition-colors duration-300 hover:bg-red-500">
                    Читать далее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="max-w-max mx-auto px-6 pb-4">
        <div className="relative text-base font-semibold mt-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg inline-flex flex-wrap justify-center p-1 gap-1">
          {renderPagination()}
        </div>
      </div>

      {/* Модальное окно для выбора страницы */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Выберите страницу</h2>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`${
                    page === currentPage
                      ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-900 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700"
                  } rounded-md py-2 px-4 whitespace-nowrap transition-colors duration-300 ease-in-out`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
