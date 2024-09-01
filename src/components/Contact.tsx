import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import Image from 'next/image';

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
  const [modalState, setModalState] = useState({ isModalOpen: false, isChecked: true, isSuccess: false });

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Info>({
    mode: 'onSubmit',
  });

  const topic = watch('topic');

  const getMessagePlaceholder = (topic: string) => {
    const placeholders: { [key: string]: string } = {
      'Активация прибора':
        'Введите ваше сообщение. В зависимости от типа прибора, необходимо предоставить соответствующую информацию, такую как номер заказа, серийный номер, ACTIVATION ID и т.п.',
      'Помощь с установкой ПО':
        'Введите ваше сообщение. Уточните модель прибора и удобное для вас время, когда мы можем связаться с вами для дистанционной установки ПО.',
      'Заказ оборудования':
        'Мы рады предложить вам разнообразный ассортимент приборов, доступных как с наших складов в Москве, так и напрямую от лучших поставщиков из Китая. У нас есть всё, что вам может понадобиться, и это по лучшим ценам. Напишите нам, чтобы уточнить подробности.',
    };
    return placeholders[topic] || 'Введите ваше сообщение';
  };

  const onSubmit = async (data: Info, e: any) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data, null, 2),
      });
      const json = await response.json();
      if (json.success) {
        setModalState({ ...modalState, isSuccess: true });
        e.target.reset();
        reset();
      } else {
        setModalState({ ...modalState, isSuccess: false });
      }
    } catch (error) {
      setModalState({ ...modalState, isSuccess: false });
      console.error(error);
    }
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
          <h2 className="text-lg font-bold text-center">📞 Наши контакты</h2>
          <p className="max-w mt-4 mb-4 dark:text-neutral-400 text-center">
            🕑 <strong>График работы технической поддержки:</strong>
            <br />
            <span className="block mt-2">
              Понедельник - Пятница: 10:00 - 19:00 (МСК)
            </span>
            <span className="block mt-2">
              Суббота - Воскресенье: 10:00 - 18:00 (МСК)
            </span>
            <br />
            💬 <strong>Мы доступны в:</strong>
          </p>
          {/* Контактная информация */}
          <div className="flex justify-center mt-2 text-dark-600 dark:text-neutral-400">
            <ContactInfo
              href="https://смартдиаг-поддержка.рф/telegram"
              imageSrc="/images/hero/telegram-qr.svg"
              alt="QR Code Telegram"
              platform="Telegram"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: '1.41421',
                    fill: 'currentColor',
                  }}
                >
                  <path
                    id="telegram-1"
                    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                  />
                </svg>
              }
              hoverColor="hover:text-blue-500"
            />
            <ContactInfo
              href="https://смартдиаг-поддержка.рф/whatsapp"
              imageSrc="/images/hero/whatsapp-qr.svg"
              alt="QR Code WhatsApp"
              platform="WhatsApp"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: 'currentColor' }}
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              }
              hoverColor="hover:text-green-500"
            />
          </div>
          <div className="mt-4 text-center dark:text-neutral-400">
            📧 <strong>Email отдела продаж:</strong>
            <a href="mailto:sales@смартдиаг.рф" className="block text-red-600 hover:underline mt-1">
              sales@смартдиаг.рф
            </a>
          </div>
          <div className="mt-4 text-center dark:text-neutral-400">
            🛠 <strong>Email технической поддержки:</strong>
            <a href="mailto:support@смартдиаг.рф" className="block text-red-600 hover:underline mt-1">
              support@смартдиаг.рф
            </a>
          </div>
          <div className="mt-4 text-center dark:text-neutral-400">
            📍 <strong>Адрес компании:</strong>
            <p className="mt-1">г. Тольятти, ул. Ленинградская 68</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-center mb-5">✍️ Обратная связь</h2>
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" value="c39d2187-6537-4c0b-87e1-3cff0bf0c1c3" {...register('access_key')} />
              <input type="hidden" value="Обращение через форму обратной связи на сайте SmartDiag" {...register('subject')} />
              <input type="hidden" value="SmartDiag" {...register('from_name')} />
              <input type="checkbox" id="" className="hidden" style={{ display: 'none' }} {...register('botcheck')}></input>
              
              <InputField
                type="text"
                placeholder="Введите Ваше имя"
                error={errors.name}
                register={register}
                name="name"
                validation={{ required: 'Необходимо ввести Ваше имя', maxLength: 80 }}
              />

              <InputField
                type="email"
                placeholder="Введите Ваш Email"
                error={errors.email}
                register={register}
                name="email"
                validation={{ 
                  required: 'Необходимо ввести Ваш Email',
                  pattern: { value: /^\S+@\S+$/i, message: 'Введите, пожалуйста, правильный адрес электронной почты' },
                }}
              />

              <SelectField
                id="topic"
                options={[
                  { value: '', label: 'Выберите тему сообщения' },
                  { value: 'Вопрос о товаре', label: 'Вопрос о товаре' },
                  { value: 'Активация прибора', label: 'Активация прибора' },
                  { value: 'Помощь с установкой ПО', label: 'Помощь с установкой ПО' },
                  { value: 'Заказ оборудования', label: 'Заказ оборудования' },
                  { value: 'Сообщить о проблеме', label: 'Сообщить о проблеме' },
                  { value: 'Другое', label: 'Другое' },
                ]}
                error={errors.topic}
                register={register}
                name="topic"
                validation={{ required: 'Необходимо выбрать тему сообщения' }}
              />

              {(topic === 'Активация прибора' || topic === 'Помощь с установкой ПО') && (
                <InputField
                  type="text"
                  placeholder="Номер заказа"
                  error={errors.orderNumber}
                  register={register}
                  name="orderNumber"
                  validation={{ required: 'Номер заказа обязателен' }}
                />
              )}

              <TextArea
                placeholder={getMessagePlaceholder(topic)}
                error={errors.message}
                register={register}
                name="message"
                validation={{ required: 'Необходимо ввести текст сообщения' }}
              />

              <div className="flex items-center mb-4 mt-4">
                <input
                  type="checkbox"
                  id="agree"
                  className="mr-2 cursor-pointer"
                  checked={modalState.isChecked}
                  onChange={(e) => setModalState({ ...modalState, isChecked: e.target.checked })}
                  required
                />
                <div>
                  <span className="text-sm">
                    Я прочитал и согласен с{' '}
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        setModalState({ ...modalState, isModalOpen: true });
                      }}
                      className="text-red-600 hover:underline cursor-pointer"
                    >
                      правилами на обработку персональных данных
                    </span>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white bg-black dark:bg-red-600 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 dark:hover:bg-red-700"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white dark:text-neutral-900 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Отправить сообщение'
                )}
              </button>
            </form>
          )}

          {isSubmitSuccessful && modalState.isSuccess && (
            <SuccessMessage onReset={reset} />
          )}

          {isSubmitSuccessful && !modalState.isSuccess && (
            <ErrorMessage onReset={reset} />
          )}
        </div>
      </div>
      <PrivacyPolicyModal
        isOpen={modalState.isModalOpen}
        onClose={() => setModalState({ ...modalState, isModalOpen: false })}
      />
    </div>
  );
}

const ContactInfo = ({ href, imageSrc, alt, platform, icon, hoverColor }: { href: string; imageSrc: string; alt: string; platform: string; icon: JSX.Element; hoverColor: string }) => (
  <div className="flex flex-col items-center space-y-2 mx-4">
    <div className="flex items-center space-x-2">
      {icon}
      <a
        href={href}
        target="_blank"
        className={`transition-colors duration-300 ${hoverColor}`}
        style={{ width: '90px' }}
      >
        {platform}
      </a>
    </div>
    <div>
      <a href={href} target="_blank">
        <Image
          src={imageSrc}
          alt={alt}
          className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          width={120}
          height={120}
        />
      </a>
    </div>
  </div>
);

const InputField = ({ type, placeholder, error, register, name, validation }: any) => (
  <div className="mb-4 mt-4">
    <input
      type={type}
      placeholder={placeholder}
      autoComplete="false"
      className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-500 dark:bg-neutral-900 focus:ring-4 ${
        error
          ? 'border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0'
          : 'border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0'
      }`}
      {...register(name, validation)}
    />
    {error && (
      <div className="mt-1 text-rose-500">
        <small>{error.message}</small>
      </div>
    )}
  </div>
);

const SelectField = ({ id, options, error, register, name, validation }: any) => (
  <div className="mb-4 mt-4 relative">
    <label htmlFor={id} className="sr-only">
      Тема сообщения
    </label>
    <div className="relative">
      <select
        id={id}
        autoComplete="off"
        className={`w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 bg-white appearance-none ${
          error
            ? 'border-rose-500 focus:border-rose-500 ring-rose-100 dark:border-rose-500 dark:focus:border-white dark:ring-0'
            : 'border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0'
        }`}
        {...register(name, validation)}
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-2 flex items-center justify-center pointer-events-none">
        <svg className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3.707 3.707a1 1 0 001.414 0l3.707-3.707a1 1 0 000-1.414z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    {error && (
      <div className="mt-1 text-rose-500">
        <small>{error.message}</small>
      </div>
    )}
  </div>
);

const TextArea = ({ placeholder, error, register, name, validation }: any) => (
  <div className="mb-4 mt-4">
    <textarea
      placeholder={placeholder}
      className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white dark:placeholder:text-neutral-500 dark:bg-neutral-900 rounded-md outline-none h-36 focus:ring-4 ${
        error
          ? 'border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0'
          : 'border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0'
      }`}
      {...register(name, validation)}
    />
    {error && (
      <div className="mt-1 text-rose-500">
        <small>{error.message}</small>
      </div>
    )}
  </div>
);

const SuccessMessage = ({ onReset }: any) => (
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
    <h3 className="py-5 text-2xl font-medium text-green-500">Успешно!</h3>
    <p className="text-neutral-900 dark:text-neutral-300 md:px-4">Ваше сообщение отправлено.</p>
    <button className="mt-6 py-2 px-4 bg-rose-500 rounded-full focus:outline-none text-neutral-100" onClick={onReset}>
      Вернуться
    </button>
  </div>
);

const ErrorMessage = ({ onReset }: any) => (
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
        d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.71 89.9689 72.5798 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
    <h3 className="py-5 text-2xl font-medium text-rose-500">Ошибка</h3>
    <p className="text-neutral-900 dark:text-neutral-300 md:px-4">Ваше сообщение не было отправлено. Пожалуйста, попробуйте снова позже.</p>
    <button className="mt-6 py-2 px-4 bg-rose-500 rounded-full focus:outline-none text-neutral-100" onClick={onReset}>
      Вернуться
    </button>
  </div>
);
