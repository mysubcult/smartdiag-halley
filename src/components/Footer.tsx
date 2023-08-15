import Link from "next/link";
import { menus } from "./NavLinks";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

const social = [
  {
    name: "telegram",
    href: "https://t.me",
    icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
  },
  {
    name: "whatsapp",
    href: "https://api.whatsapp.com/send?phone=51931133631&text=Hola!%20necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
  },
];

interface FooterProps {
  bgColor: string;
  textColor: string;
  hoverColor: string;
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200">
      <div className="mx-auto px-6 lg:px-8 py-24 lg:py-4 grid grid-cols-1 lg:grid-cols-3">
        <div className="text-center lg:text-left justify-center my-auto order-3 lg:order-1">
          <Link href="https://www.humbernieto.pro/" target="_blank">
            Quina &copy; {new Date().getFullYear()}
          </Link>
        </div>
        <div className="order-2 lg:order-2 py-10 lg:py-0 lg:flex gap-6 text-center mx-auto">
          {menus.map((menu) => (
            <div key={menu.title}>
              <ul>
                <Link href={menu.url}>
                  <li className="py-2 hover:underline font-medium">
                    {menu.title}
                  </li>
                </Link>
              </ul>
            </div>
          ))}
        </div>
        <div className="flex gap-8 max-w-full justify-center my-auto lg:justify-end order-1 lg:order-3">
          {social.map((red) => (
            <Link
              key={red.name}
              href={red.href}
              target="_blank"
              title={red.name}
            >
              <div
                className="hover:text-[#00B19A] h-6 w-6 flex items-center justify-center"
              >
                {red.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
