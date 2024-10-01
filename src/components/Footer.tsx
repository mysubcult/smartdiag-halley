// components/Footer.tsx

import Link from 'next/link';
import { motion } from 'framer-motion';

// Define menus and socialLinks outside the component to prevent re-creation on each render
const menus = [
  { title: 'Главная', url: '/' },
  { title: 'Программы', url: '/soft' },
  { title: 'О нас', url: '/services' },
  { title: 'Статьи', url: '/articles' },
  { title: 'Обратная связь', url: '/contact' },
];

const socialLinks = [
  {
    name: 'Telegram',
    href: 'https://смартдиаг-поддержка.рф/telegram',
    iconPath:
      'M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z',
  },
  {
    name: 'WhatsApp',
    href: 'https://смартдиаг-поддержка.рф/whatsapp',
    iconPath:
      'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-400"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 lg:px-8 py-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Раздел авторских прав */}
        <motion.div
          className="text-center lg:text-left mb-4 lg:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="/">
            <a className="hover:text-red-500 font-medium transition-colors duration-300">
              SmartDiag &copy; 2023-{currentYear}
            </a>
          </Link>
        </motion.div>

        {/* Раздел меню */}
        <motion.nav
          className="mb-4 lg:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ul className="flex flex-wrap gap-6 justify-center">
            {menus.map(({ title, url }) => (
              <li key={title}>
                <Link href={url}>
                  <a className="hover:text-red-500 font-medium transition-colors duration-300">
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Раздел социальных ссылок */}
        <motion.div
          className="flex space-x-6 justify-center lg:justify-end"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {socialLinks.map(({ name, href, iconPath }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d={iconPath} />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}
