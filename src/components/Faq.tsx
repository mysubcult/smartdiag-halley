import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "Я установил программу, но через какое-то время она не запускается, и ярлыки исчезли. Что мне делать?",
    response:
      "Наиболее частой причиной такой проблемы является антивирусное ПО. В этом случае вам следует удалить программу полностью с компьютера и затем установить ее заново, следуя инструкции. Не забудьте добавить папку с программой в исключения антивируса после ее установки, чтобы предотвратить повторное блокирование.",
  },
  {
    question: "Я получил ключ активации, но хочу установить программу на другое устройство. Могу ли я использовать тот же самый ключ?",
    response:
      "Нет, для каждого устройства генерируется уникальный ключ активации. Если вы хотите установить программное обеспечение на другое устройство, вам нужно обратиться в техническую поддержку, чтобы мы могли сгенерировать для вас новый ключ активации. Обращайтесь к нам в любое время, мы всегда готовы помочь вам с любыми вопросами по нашему ПО.",
  },
  {
    question: "У меня не получается установить программное обеспечение, можете ли вы мне помочь?",
    response:
      "Конечно, мы готовы помочь всем нашим клиентам с установкой и настройкой программного обеспечения по необходимости. Для этого вам нужно связаться с нами через мобильные мессенджеры или заполнить форму обратной связи на нашем сайте и оставить заявку на помощь в установке. Мы свяжемся с вами в кратчайшие сроки и окажем необходимую помощь. Не стесняйтесь обращаться к нам в любое время, мы всегда готовы помочь вам с любыми вопросами по нашему ПО.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Часто задаваемые вопросы (FAQ) ❓
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Здесь вы можете найти полезную информацию о наших товарах и услугах, оплате, доставке, гарантии, возврате и других аспектах, которые могут вас интересовать. Этот раздел был создан для вашего удобства, чтобы вы могли быстро получить ответы на свои вопросы и сэкономить время на общении с нашей поддержкой.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
