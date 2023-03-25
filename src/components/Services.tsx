import Image from "next/image";

const services = [
  {
    title: "Широкий ассортимент оборудования",
    description:
      "У нас вы найдете все необходимое для компьютерной диагностики автомобилей, включая сканеры, программное обеспечение, кабели и другие аксессуары.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Качественные товары",
    description:
      "Мы работаем только с проверенными поставщиками и гарантируем качество продукции.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Опытные специалисты",
    description:
      "Наши сотрудники имеют большой опыт работы с диагностическим оборудованием и всегда готовы помочь с выбором и использованием продукции.",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "Конкурентные цены",
    description:
      "Мы стараемся предложить нашим клиентам наилучшее соотношение цены и качества.",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "Быстрая доставка",
    description:
      "Мы оперативно обрабатываем заказы и быстро доставляем товары по всей России.",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "Онлайн-поддержка",
    description:
      "Мы всегда готовы ответить на ваши вопросы и помочь в решении любых проблем, связанных с диагностическим оборудованием, через наш сайт или мессенджеры.",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">О нас</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          В этом разделе сайта мы объединили все программное обеспечение для нашего оборудования. Для того, чтобы скачать программы, просто кликните по необходимой ссылке, а затем в новом окне нажмите на 3 точки, расположенные рядом с папкой с нужной вам версией, и нажмите на кнопку Скачать.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
