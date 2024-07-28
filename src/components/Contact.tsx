import React, { useState } from 'react';
import { useForm, useWatch } from "react-hook-form";

import { MapIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

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
  } = useForm<Info, any>({
    mode: "onSubmit",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState('');

  const topic = watch("topic");  // Using watch directly to get the current topic

  const getMessagePlaceholder = (topic: string) => {
    switch (topic) {
      case "Активация прибора":
        return "Введите ваше сообщение. В зависимости от типа прибора, необходимо предоставить соответствующую информацию, такую как номер заказа, серийный номер, ACTIVATION ID и т.п.";
      case "Помощь с установкой ПО":
        return "Введите ваше сообщение. Уточните модель прибора и удобное для вас время, когда мы можем связаться с вами для дистанционной установки ПО.";
      case "Заказ оборудования":
        return "Мы рады предложить вам разнообразный ассотимент приборов, доступных как с наших складов в Москве, так и напрямую от лучших поставщиков из Китая. У нас есть всё, что вам может понадобиться, и это по лучшим ценам. Напишите нам, чтобы уточнить подробности.";
      default:
        return "Введите ваше сообщение";
    }
  };

  const htmlLinkToTerms = (`Я прочитал и согласен с <a href="#!" onclick="showPopup()" class="terms-link" style="color: inherit; text-decoration: inherit;">правилами на обработку персональных данных</a>.`);

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
                <svg width="24" height="24" viewBox="0 0 24 24" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "1.41421", fill: "currentColor" }}>
                  <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.178,-0.231 0.196,-0.375c0.018,-0.145 -0.017,-0.291 -0.098,-0.41c-0.162,-0.243 -0.474,-0.321 -0.735,-0.187c-3.817,1.946 -9.6,4.89 -11.6,5.915c-0.145,0.073 -0.263,0.187 -0.342,0.325c-0.078,0.138 -0.112,0.297 -0.092,0.453Z" />
                </svg>
                <p className="font-medium">Telegram</p>
              </div>
              <a href="https://t.me/contacts" className="font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline">@contacts</a>
            </div>

            <div className="flex flex-col items-center space-y-2 mx-4">
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "1.41421", fill: "currentColor" }}>
                  <path id="whatsapp-2" d="M20.523,3.468c-4.641,-4.625 -12.153,-4.625 -16.794,0c-4.642,4.641 -4.641,12.153 0,16.794c1.322,1.322 2.9,2.291 4.662,2.866l-0.573,2.079c-0.219,0.796 0.541,1.541 1.331,1.325l3.417,-0.915c1.125,0.216 2.292,0.187 3.448,-0.088c2.131,-0.509 4.094,-1.645 5.646,-3.197c4.641,-4.641 4.641,-12.153 0,-16.794Zm-2.413,14.381c-1.299,1.299 -2.913,2.278 -4.626,2.71c-1.236,0.297 -2.532,0.322 -3.796,0.087c-0.111,-0.024 -0.223,-0.011 -0.331,0.035l-2.458,0.663l0.412,-1.502c0.048,-0.173 0.024,-0.36 -0.072,-0.518c-0.236,-0.393 -0.518,-0.857 -0.812,-1.415c-0.188,-0.349 -0.379,-0.687 -0.54,-0.971c-1.396,-0.6 -2.677,-1.485 -3.739,-2.546c-3.813,-3.813 -3.813,-9.997 0,-13.811c3.814,-3.813 9.998,-3.812 13.811,0c3.813,3.814 3.813,9.998 0,13.811Zm-1.665,-3.011l-1.506,1.41c-0.124,0.115 -0.285,0.171 -0.445,0.151c-1.059,-0.141 -2.099,-0.552 -2.986,-1.187c-0.675,-0.494 -1.272,-1.107 -1.749,-1.813c-0.231,-0.331 -0.441,-0.663 -0.597,-0.976c-0.157,-0.316 -0.278,-0.603 -0.301,-0.828c-0.024,-0.242 0.06,-0.482 0.239,-0.646l1.402,-1.381c0.283,-0.28 0.731,-0.293 1.019,-0.029l0.743,0.666c0.227,0.203 0.472,0.462 0.618,0.622c0.12,0.132 0.189,0.301 0.19,0.477c0.001,0.175 -0.063,0.348 -0.182,0.486c-0.283,0.328 -0.652,0.762 -0.786,0.896c-0.075,0.076 -0.085,0.19 -0.025,0.278c0.377,0.576 0.816,1.071 1.308,1.501c0.57,0.499 1.225,0.906 1.952,1.195c0.092,0.037 0.196,0.014 0.268,-0.059l0.851,-0.907c0.271,-0.289 0.708,-0.368 1.051,-0.195c0.247,0.122 1.074,0.495 1.444,0.672c0.175,0.083 0.301,0.242 0.341,0.431c0.04,0.19 -0.017,0.389 -0.156,0.52Z" />
                </svg>
                <p className="font-medium">WhatsApp</p>
              </div>
              <a href="https://wa.me/1234567890" className="font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline">+7 123 456-78-90</a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 gap-y-6">
              <input
                type="hidden"
                value="your-access-key"
                {...register("access_key")}
              />
              <input
                type="hidden"
                value="Website Contact Form"
                {...register("subject")}
              />
              <input
                type="hidden"
                value="https://your-website.com"
                {...register("from_name")}
              />
              <input
                type="hidden"
                value=""
                {...register("botcheck")}
              />

              <div className="relative">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`block w-full px-4 py-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white`}
                  placeholder="Ваше имя"
                  {...register("name", {
                    required: "Пожалуйста, введите ваше имя",
                    maxLength: {
                      value: 80,
                      message: "Имя не может превышать 80 символов",
                    },
                  })}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  className={`block w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white`}
                  placeholder="Электронная почта"
                  {...register("email", {
                    required: "Пожалуйста, введите адрес электронной почты",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Пожалуйста, введите действующий адрес электронной почты",
                    },
                  })}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>

              <div className="relative">
                <label htmlFor="topic" className="sr-only">Topic</label>
                <select
                  id="topic"
                  className={`block w-full px-4 py-3 border ${errors.topic ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white`}
                  {...register("topic", {
                    required: "Пожалуйста, выберите тему сообщения",
                  })}
                >
                  <option value="">Выберите тему сообщения</option>
                  <option value="Активация прибора">Активация прибора</option>
                  <option value="Помощь с установкой ПО">Помощь с установкой ПО</option>
                  <option value="Заказ оборудования">Заказ оборудования</option>
                </select>
                {errors.topic && <span className="text-red-500">{errors.topic.message}</span>}
              </div>

              <div className="relative">
                <label htmlFor="orderNumber" className="sr-only">Order Number</label>
                <input
                  type="text"
                  id="orderNumber"
                  className={`block w-full px-4 py-3 border ${errors.orderNumber ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white`}
                  placeholder="Номер заказа (если имеется)"
                  {...register("orderNumber")}
                />
                {errors.orderNumber && <span className="text-red-500">{errors.orderNumber.message}</span>}
              </div>

              <div className="relative">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  className={`block w-full px-4 py-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-white`}
                  rows={4}
                  placeholder={getMessagePlaceholder(topic)} // Use the watched topic value directly for placeholder
                  {...register("message", {
                    required: "Пожалуйста, введите ваше сообщение",
                  })}
                />
                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              </div>

              <div className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className={`block focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded ${errors.terms ? "border-red-500" : "border-gray-300"} dark:bg-neutral-800 dark:text-white`}
                    {...register("terms", {
                      required: "Вы должны согласиться с условиями",
                    })}
                  />
                </div>
                <div className="ml-3 text-sm dark:text-neutral-400">
                  <label htmlFor="terms" dangerouslySetInnerHTML={{ __html: htmlLinkToTerms }} />
                </div>
              </div>
              {errors.terms && <span className="text-red-500">{errors.terms.message}</span>}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Отправка..." : "Отправить"}
              </button>
            </div>
          </form>
          {isSubmitSuccessful && (
            <div
              className={`mt-4 p-4 rounded-lg text-white ${
                isSuccess ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {Message}
            </div>
          )}
        </div>

        <div className="mt-10 bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 gap-y-6">
            <h2 className="text-lg font-bold text-center">📞 Свяжитесь с нами напрямую!</h2>
            <div className="flex items-center justify-start mt-4">
              <MapIcon className="h-6 w-6 text-dark-600 dark:text-neutral-400" />
              <p className="ml-2 text-lg text-dark-600 dark:text-neutral-400">
                Москва, Россия
              </p>
            </div>
            <div className="flex items-center justify-start">
              <EnvelopeIcon className="h-6 w-6 text-dark-600 dark:text-neutral-400" />
              <p className="ml-2 text-lg text-dark-600 dark:text-neutral-400">
                <a href="mailto:info@your-website.com">info@your-website.com</a>
              </p>
            </div>
            <div className="flex items-center justify-start">
              <PhoneIcon className="h-6 w-6 text-dark-600 dark:text-neutral-400" />
              <p className="ml-2 text-lg text-dark-600 dark:text-neutral-400">
                <a href="tel:+1234567890">+7 123 456-78-90</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
