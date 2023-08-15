import Link from "next/link";
import { menus } from "./NavLinks";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

const social = [
  {
    name: "telegram",
    href: "https://t.me",
    icon: <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjQxNDIxOyI+PHBhdGggaWQ9InRlbGVncmFtLTEiIGQ9Ik0xOC4zODQsMjIuNzc5YzAuMzIyLDAuMjI4IDAuNzM3LDAuMjg1IDEuMTA3LDAuMTQ1YzAuMzcsLTAuMTQxIDAuNjQyLC0wLjQ1NyAwLjcyNCwtMC44NGMwLjg2OSwtNC4wODQgMi45NzcsLTE0LjQyMSAzLjc2OCwtMTguMTM2YzAuMDYsLTAuMjggLTAuMDQsLTAuNTcxIC0wLjI2LC0wLjc1OGMtMC4yMiwtMC4xODcgLTAuNTI1LC0wLjI0MSAtMC43OTcsLTAuMTRjLTQuMTkzLDEuNTUyIC0xNy4xMDYsNi4zOTcgLTIyLjM4NCw4LjM1Yy0wLjMzNSwwLjEyNCAtMC41NTMsMC40NDYgLTAuNTQyLDAuNzk5YzAuMDEyLDAuMzU0IDAuMjUsMC42NjEgMC41OTMsMC43NjRjMi4zNjcsMC43MDggNS40NzQsMS42OTMgNS40NzQsMS42OTNjMCwwIDEuNDUyLDQuMzg1IDIuMjA5LDYuNjE1YzAuMDk1LDAuMjggMC4zMTQsMC41IDAuNjAzLDAuNTc2YzAuMjg4LDAuMDc1IDAuNTk2LC0wLjAwNCAwLjgxMSwtMC4yMDdjMS4yMTYsLTEuMTQ4IDMuMDk2LC0yLjkyMyAzLjA5NiwtMi45MjNjMCwwIDMuNTcyLDIuNjE5IDUuNTk4LDQuMDYyWm0tMTEuMDEsLTguNjc3bDEuNjc5LDUuNTM4bDAuMzczLC0zLjUwN2MwLDAgNi40ODcsLTUuODUxIDEwLjE4NSwtOS4xODZjMC4xMDgsLTAuMDk4IDAuMTIzLC0wLjI2MiAwLjAzMywtMC4zNzdjLTAuMDg5LC0wLjExNSAtMC4yNTMsLTAuMTQyIC0wLjM3NiwtMC4wNjRjLTQuMjg2LDIuNzM3IC0xMS44OTQsNy41OTYgLTExLjg5NCw3LjU5NloiLz48L3N2Zz4=">
  },
  {
    name: "whatsapp",
    href: "https://api.whatsapp.com/send?phone=51931133631&text=Hola!%20necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos.",
    icon: <PhoneIcon className="w-5 h-5" />
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
