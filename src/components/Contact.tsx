import React from "react";
import { useForm, useWatch } from "react-hook-form";

import { MapIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

type Info = {
  access_key: string;
  subject: string;
  from_name: string;
  botcheck: string;
  name: string;
  email: string;
  message: string;
  topic: string;
};

export default function Contact() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Info, any>({
    mode: "onSubmit",
  });

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const htmlLinkToTerms = (`Я прочитал и согласен с <a href="#!" onclick="showPopup()">правилами на обработку персональных данных</a>.`);

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };
  return (
    <div className="bg-white-50 dark:bg-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Обратная связь 📩</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Наша команда постоянно на связи, мы прилагаем все усилия, чтобы ответить на Ваши сообщения максимально быстро. Ответ на Вашу заявку не займет более 12 часов. Если у Вас есть срочные вопросы, пожалуйста, напишите нам в онлайн-чате на сайте.
        </p>
      </div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold">💬 Мы в мессенджерах!</h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-neutral-400">
            Оставайтесь на связи с нами в любом месте. Получайте оперативную помощь и ответы на вопросы от нашей поддержки через мессенджеры. Мы доступны в Телеграм и WhatsApp:
          </p>


<div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
  <EnvelopeIcon className="w-5 h-5" />
  <a href="https://t.me/smartdiag_robot" target="_blank" className="hover:text-blue-500">Telegram</a>
</div>

<div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
  <PhoneIcon className="w-5 h-5" />
  <a href="https://wa.me/message/XVMV4LKBTXB4E1" target="_blank" className="hover:text-green-500">WhatsApp</a>
</div>

        </div>

        <div>
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="hidden"
                value="c39d2187-6537-4c0b-87e1-3cff0bf0c1c3"
                {...register("access_key")}
              />
              <input type="hidden" {...register("subject")} />
              <input type="hidden" value="SmartDiag" {...register("from_name")} />
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Введите Ваше имя"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-500 dark:bg-neutral-900 focus:ring-4 ${
                    errors.name
                      ? "border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0"
                      : "border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("name", {
                    required: "Необходимо ввести Ваше имя",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-rose-500">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Введите Ваш Email"
                  // name="email"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-500 dark:bg-neutral-900   focus:ring-4  ${
                    errors.email
                      ? "border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0"
                      : "border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("email", {
                    required: "Необходимо ввести Ваш Email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Введите, пожалуйста, правильный адрес электронной почты",
                    },
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-rose-500">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>

<div className="mb-3 relative">
  <label htmlFor="topic" className="sr-only">
    Тема сообщения
  </label>
  <div className="relative">
    <select
      id="topic"
      autoComplete="off"
      className={`w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 bg-white appearance-none ${
        errors.topic
          ? "border-rose-500 focus:border-rose-500 ring-rose-100 dark:border-rose-500 dark:focus:border-white dark:ring-0"
          : "border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
      }`}
      style={{ paddingLeft: '6px', textIndent: '10px', paddingRight: '2rem' }}
      {...register("topic", { required: "Необходимо выбрать тему сообщения" })}
    >
      <option value="">Выберите тему сообщения</option>
      <option value="Вопрос о товаре">Вопрос о товаре</option>
      <option value="Активация прибора">Активация прибора</option>
      <option value="Помощь с установкой ПО">Помощь с установкой ПО</option>
      <option value="Сообщить о проблеме">Сообщить о проблеме</option>
      <option value="Другое">Другое</option>
    </select>
    <div className="absolute inset-y-0 right-2 flex items-center justify-center pointer-events-none">
      <svg
        className="w-6 h-6 fill-current text-gray-400"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3.707 3.707a1 1 0 001.414 0l3.707-3.707a1 1 0 000-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
  {errors.topic && (
    <div className="mt-1 text-rose-500">
      <small>{errors.topic.message}</small>
    </div>
  )}
</div>

              
              <div className="mb-3">
                <textarea
                  // name="message"
                  placeholder={
  watch("topic") === "Активация прибора" 
    ? "В зависимости от типа прибора, необходимо предоставить соответствующую информацию, такую как номер заказа, серийный номер, ACTIVATION ID и т.п."
    : watch("topic") === "Помощь с установкой ПО"
      ? "Введите ваше сообщение. Уточните модель прибора и удобное для вас время, когда мы можем связаться с вами для дистанционной установки ПО."
      : "Введите ваше сообщение"
}
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white dark:placeholder:text-neutral-500 dark:bg-neutral-900   rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0"
                      : "border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("message", { required: "Необходимо ввести текст сообщения" })}
                />
                {errors.message && (
                  <div className="mt-1 text-rose-500">
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>
                <div className="flex items-center mb-4">
<input
      type="checkbox"
      id="agree"
      className="mr-2"
      defaultChecked
      required
    />
    <label htmlFor="agree" className="text-sm">
      <div dangerouslySetInnerHTML={{ __html: htmlLinkToTerms }} />
    </label>
  </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white dark:text-neutral-900 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Отправить сообщение"
                )}
              </button>
            </form>
          )}

          {isSubmitSuccessful && isSuccess && (
            <>
              <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
                <svg
                  width="100"
                  height="100"
                  className="text-green-500"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="py-5 text-2xl font-medium text-green-500">
                  Успешно!
                </h3>
                <p className="text-neutral-900 dark:text-neutral-300 md:px-4">
                  Ваше сообщение отправлено.
                </p>
                <button
                  className="mt-6 py-2 px-4 bg-rose-500 rounded-full focus:outline-none text-neutral-100"
                  onClick={() => reset()}
                >
                  Вернуться
                </button>
              </div>
            </>
          )}

          {isSubmitSuccessful && !isSuccess && (
            <div className="flex flex-col items-center justify-center text-center text-neutral-900 dark:text-neutral-300 rounded-md">
              <svg
                width="97"
                height="97"
                viewBox="0 0 97 97"
                className="text-rose-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                  stroke="CurrentColor"
                  strokeWidth="3"
                />
              </svg>

              <h3 className=" py-5 text-2xl font-medium text-rose-500">
                Упс, что-то пошло не так!
              </h3>
              <p className="text-neutral-900 dark:text-neutral-300 md:px-4">
                {Message}
              </p>
              <button
                className="mt-6 py-2 px-4 bg-rose-500 rounded-full focus:outline-none text-neutral-100"
                onClick={() => reset()}
              >
                Попробовать еще
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
