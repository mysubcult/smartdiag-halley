import Image from "next/image";
import Link from "next/link";
import ThemeSwitchOption from "./ThemeSwitchOption";

const social = [
  {
    name: "Telegram",
    href: "https://www.facebook.com/",
    icon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
  <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
              fill="currentColor"
    />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://www.instagram.com/",
    icon: (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  fill="currentColor"
    />
      </svg>
    ),
  },

  {
    name: "youtube",
    href: "https://www.youtube.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="none">
        <path
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none">
        <path
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const column1 = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Faq", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const column2 = [
  { name: "Not Found 404", href: "404" },
  { name: "Documentation", href: "/" },
  { name: "Guides", href: "/" },
  { name: "Help", href: "/" },
];

const column3 = [
  { name: "Privacy Policy", href: "/" },
  { name: "Terms of Service", href: "/" },
  { name: "Support Terms", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 sm:col-span-3 md:col-span-3 lg:col-span-2 2xl:col-span-2">
          <Link href="/">
            <Image
              className="h-10 w-auto"
              src="/images/logos/logo.png"
              alt="SmartDiag"
              width={180}
              height={180}
              quality={100}
              sizes="100vw"
            />
          </Link>

          <p className="md:text-sm pt-4 w-auto sm:w-6/12 md:w-6/12 lg:w-8/12">
            Halley is ipsum dolor sit amet consectetur adipisicing itaque enim
            labore dolores culpa consequatur harum.
          </p>

          <div className="flex gap-2 pt-6 sm:pt-6 md:pt-6 lg:pt-12 max-w-[300px]">
            {social.map((red) => (
              <Link key={red.name} href={red.href} target="_blank">
                <div className="w-9 h-9 p-2 text-white bg-rose-500 hover:opacity-75 rounded-full flex items-center justify-center">
                  {red.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            COMPANY
          </h3>
          {column1.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            RESOURCES
          </h3>
          {column2.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="text-sm md:text-xs font-bold pb-4 pt-12 lg:pt-0">
            LEGAL
          </h3>
          {column3.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-rose-500 md:text-sm my-4 grid"
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-12">
            <ThemeSwitchOption />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 p-6 text-center border-t border-neutral-800">
        <Link
          href="https://humbersanchez.com"
          target="_blank"
          className="text-neutral-300 dark:text-neutral-400 text-sm hover:text-rose-500 dark:hover:text-rose-500 transition duration-300"
        >
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
        </Link>
      </div>
    </footer>
  );
}
