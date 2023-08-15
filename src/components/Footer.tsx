import Link from "next/link";
import { menus } from "./NavLinks";

const social = [
  {
    name: "instagram",
    href: "https://www.instagram.com/quinaerp/"
  },
  {
    name: "whatsapp",
    href: "https://api.whatsapp.com/send?phone=51931133631&text=Hola!%20necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos.",
  },
];

interface FooterProps {
  bgColor: string;
  textColor: string;
  hoverColor: string;
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 text-black">
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
                {red.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
