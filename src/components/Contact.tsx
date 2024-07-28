import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import { MapIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

// Импорт изображений QR-кодов
import telegramQR from './assets/telegram-qr.png';
import whatsappQR from './assets/whatsapp-qr.png';

type Info = {
  access_key: string;
  subject: string;
  from_name: string;
  botcheck: string;
  name: string;
  email: string;
  message: string;
  topic: string;
  orderNumber: string;
};

export default function Contact() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Info>({
    mode: "onSubmit",
  });
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(''); // Используем camelCase для названия переменной
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };

  const topic = watch("topic");

  useEffect(() => {
    setSelectedTopic(topic);
  }, [topic]);

  const getMessagePlaceholder = (topic: string) => {
    switch (topic) {
      case "Активация прибора":
        return "Введите ваше сообщение. В зависимости от типа прибора, необходимо предоставить соответствующую информацию, такую как номер заказа, серийный номер, ACTIVATION ID и т.п.";
      case "Помощь с установкой ПО":
        return "Введите ваше сообщение. Уточните модель прибора и удобное для вас время, когда мы можем связаться с вами для дистанционной установки ПО.";
      case "Заказ оборудования":
        return "Мы рады предложить вам разнообразный ассортимент приборов, доступных как с наших складов в Москве, так и напрямую от лучших поставщиков из Китая. У нас есть всё, что вам может понадобиться, и это по лучшим ценам. Напишите нам, чтобы уточнить подробности.";
      default:
        return "Введите ваше сообщение";
    }
  };

  const htmlLinkToTerms = `Я прочитал и согласен с <a href="#!" onclick="showPopup()" class="terms-link" style="color: inherit; text-decoration: inherit;">правилами на обработку персональных данных</a>.`;

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
          Мы очень ценим ваше мнение и постоянно работаем над улучшением нашего сервиса. Если у вас есть предложения, вопросы или комментарии, пожалуйста, свяжитесь с нами! Вы можете написать нам через форму обратной связи, которая находится ниже, или связаться с нами через мессенджеры. Наша команда старается оперативно отвечать на все запросы, и мы гарантируем, что вы получите ответ в течение 12 рабочих часов.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold text-center">💬 Мы в мессенджерах!</h2>
          <p className="max-w mt-4 mb-4 dark:text-neutral-400 text-center">
            🕑 <strong>График работы технической поддержки:</strong><br />
            <span className="block mt-2">Понедельник - Пятница: 10:00 - 19:00 (МСК)</span>
            <span className="block mt-2">Суббота - Воскресенье: 10:00 - 18:00 (МСК)</span><br />
            💬 <strong>Мы доступны в Telegram и WhatsApp:</strong>
          </p>

          <div className="flex justify-center mt-2 text-dark-600 dark:text-neutral-400">
            <div className="flex flex-col items-center space-y-2 mx-4">
              <div className="flex items-center space-x-2">
                <div className="text-2xl">
                  <i className="fab fa-telegram"></i>
                </div>
                <div>
                  <a href="https://t.me/MilerdTest" className="dark:text-neutral-300 underline">
                    Telegram
                  </a>
                </div>
                {/* Вставка QR-кода для Telegram */}
                <img src={telegramQR} alt="Telegram QR Code" className="h-20 mt-2" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <a href="https://wa.me/79779158808" className="dark:text-neutral-300 underline">
                    WhatsApp
                  </a>
                </div>
                {/* Вставка QR-кода для WhatsApp */}
                <img src={whatsappQR} alt="WhatsApp QR Code" className="h-20 mt-2" />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center dark:text-neutral-400">
            <p>
              📍 <strong>Наш офис:</strong>
              <span className="block mt-2">ул. Вавилова, д. 4, офис 213, Москва, Россия</span>
            </p>
            <p className="mt-4">
              ✉️ <strong>Электронная почта:</strong>
              <span className="block mt-2">
                <a href="mailto:support@milerd.ru" className="dark:text-neutral-300 underline">
                  support@milerd.ru
                </a>
              </span>
            </p>
            <p className="mt-4">
              ☎️ <strong>Телефон:</strong>
              <span className="block mt-2">
                <a href="tel:+79779158808" className="dark:text-neutral-300 underline">
                  +7 977 915-88-08
                </a>
              </span>
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-md p-6 lg:p-10">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <input type="hidden" value="YOUR_ACCESS_KEY_HERE" {...register("access_key")}></input>
              
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium dark:text-neutral-300">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    autoComplete="off"
                    className={`form-input w-full dark:bg-neutral-900 dark:text-neutral-300 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    {...register("name", { required: "Пожалуйста, укажите ваше имя" })}
                  />
                  {errors.name && (
                    <div className="mt-1 text-red-500 text-sm">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Ваш email"
                    autoComplete="off"
                    className={`form-input w-full dark:bg-neutral-900 dark:text-neutral-300 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", {
                      required: "Пожалуйста, укажите ваш email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Неверный формат email",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="mt-1 text-red-500 text-sm">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="topic" className="block mb-1 text-sm font-medium dark:text-neutral-300">
                    Выберите тему обращения
                  </label>
                  <select
                    id="topic"
                    className={`form-select w-full dark:bg-neutral-900 dark:text-neutral-300 ${
                      errors.topic ? "border-red-500" : ""
                    }`}
                    {...register("topic", { required: "Пожалуйста, выберите тему" })}
                    onChange={handleTopicChange}
                  >
                    <option value="" disabled>
                      Выберите тему
                    </option>
                    <option value="Активация прибора">Активация прибора</option>
                    <option value="Помощь с установкой ПО">Помощь с установкой ПО</option>
                    <option value="Заказ оборудования">Заказ оборудования</option>
                  </select>
                  {errors.topic && (
                    <div className="mt-1 text-red-500 text-sm">
                      {errors.topic.message}
                    </div>
                  )}
                </div>

                {selectedTopic === "Активация прибора" && (
                  <div>
                    <label htmlFor="orderNumber" className="block mb-1 text-sm font-medium dark:text-neutral-300">
                      Номер заказа
                    </label>
                    <input
                      id="orderNumber"
                      type="text"
                      placeholder="Ваш номер заказа"
                      autoComplete="off"
                      className={`form-input w-full dark:bg-neutral-900 dark:text-neutral-300 ${
                        errors.orderNumber ? "border-red-500" : ""
                      }`}
                      {...register("orderNumber", { required: "Пожалуйста, укажите номер заказа" })}
                    />
                    {errors.orderNumber && (
                      <div className="mt-1 text-red-500 text-sm">
                        {errors.orderNumber.message}
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium dark:text-neutral-300">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    placeholder={getMessagePlaceholder(selectedTopic)}
                    rows={4}
                    autoComplete="off"
                    className={`form-textarea w-full dark:bg-neutral-900 dark:text-neutral-300 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    {...register("message", { required: "Пожалуйста, введите сообщение" })}
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-500 text-sm">
                      {errors.message.message}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="terms" className="inline-flex items-center dark:text-neutral-300">
                    <input
                      type="checkbox"
                      className="form-checkbox dark:bg-neutral-900"
                      id="terms"
                      {...register("botcheck")}
                    />
                    <span
                      className="ml-2 text-sm"
                      dangerouslySetInnerHTML={{ __html: htmlLinkToTerms }}
                    ></span>
                  </label>
                  {errors.botcheck && (
                    <div className="mt-1 text-red-500 text-sm">
                      {errors.botcheck.message}
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 w-full text-white bg-blue-600 rounded-md ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить"}
                  </button>
                </div>
              </div>
            </form>

            {isSubmitSuccessful && (
              <div className={`mt-4 ${isSuccess ? "text-green-500" : "text-red-500"}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
