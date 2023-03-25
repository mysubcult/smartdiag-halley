import Image from "next/image";

const services = [
  {
    title: "Мультимарочники",
    description:
      "(Autocom, Delphi DS150e и т.п.)",
    image: "/images/services/1.svg",
    link: "ydF5sRELzHEwzQn",
    alt: "Service description",
  },
  {
    title: "Commodi mollitia",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/2.svg",
        link: "ydF5sRELzHEwzQn",
    alt: "Service description",
  },
  {
    title: "Neque numquam",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia",
    image: "/images/services/3.svg",
        link: "ydF5sRELzHEwzQn",
    alt: "Service description",
  },
  {
    title: "Vero animi",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/4.svg",
        link: "ydF5sRELzHEwzQn",
    alt: "Service description",
  },
  {
    title: "Repudiandae pariatur",
    description:
      "voluptatum ex molestiae quae alias quasi eum magnam maxime autem atque",
    image: "/images/services/5.svg",
        link: "ydF5sRELzHEwzQn",
    alt: "Service description",
  },
  {
    title: "Placeat voluptas",
    description:
      "vitae iure impedit magni consequuntur nihil consectetur laboriosam perspiciatis",
    image: "/images/services/6.svg",
        link: "ydF5sRELzHEwzQn",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Программы для оборудования</h2>

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
            <h2 className="font-bold text-lg text-center"><a href="https://i.getspace.us/cloud/s/{link}/ target="_blank">{title}</a></h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
