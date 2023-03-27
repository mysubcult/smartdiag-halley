import Image from "next/image";
import Link from "next/link";
import ThemeSwitchOption from "./ThemeSwitchOption";

const social = [
  {
    name: "WhatsApp",
    href: "https://www.facebook.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none">
							<path d="M10.696,12.191c-0.123-0.068-0.22-0.161-0.265-0.275c-0.006-0.019,0-2.357,0-2.357h1.729V8.273h-1.728V6.545l-1.1,0.006c-0.047,0.356-0.132,0.649-0.257,0.88s-0.29,0.428-0.495,0.592C8.375,8.188,8.128,8.314,7.84,8.402l0,1.166l0.865-0.009V11.8c0,0.314,0.035,0.556,0.105,0.722c0.071,0.166,0.197,0.322,0.379,0.471c0.182,0.147,0.402,0.261,0.66,0.341c0.257,0.079,0.536,0.121,0.872,0.121c0.294,0,0.535-0.029,0.79-0.086c0.254-0.056,0.619-0.153,0.933-0.292l0.005-1.062c-0.368,0.229-0.823,0.313-1.194,0.313C11.044,12.328,10.858,12.282,10.696,12.191 M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637"
								 fill="currentColor">
								        />
						</svg>
    ),
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none">
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
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
