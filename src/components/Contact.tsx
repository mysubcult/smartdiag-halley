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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const messagePlaceholders = {
    'Активация прибора':
      'Введите ваше сообщение. В зависимости от типа прибора, необходимо предоставить соответствующую информацию, такую как номер заказа, серийный номер, ACTIVATION ID и т.п.',
    'Помощь с установкой ПО':
      'Введите ваше сообщение. Уточните модель прибора и удобное для вас время, когда мы можем связаться с вами для дистанционной установки ПО.',
    'Заказ оборудования':
      'Мы рады предложить вам разнообразный ассортимент приборов, доступных как с наших складов в Москве, так и напрямую от лучших поставщиков из Китая. У нас есть всё, что вам может понадобиться, и это по лучшим ценам. Напишите нам, чтобы уточнить подробности.',
    default: 'Введите ваше сообщение',
  };

  const onSubmit = async (data: Info, e: any) => {
    console.log(data);
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
        setIsSuccess(true);
        e.target.reset();
        reset();
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      setIsSuccess(false);
      console.error(error);
    }
  };

  return (
    <div className="bg-white-50 dark:bg-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Обратная связь 📩</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Мы очень ценим ваше мнение и постоянно работаем над улучшением нашего сервиса...
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-y-8 md:gap-x-8">
        <div>
          <h2 className="text-lg font-bold text-center">📞 Наши контакты</h2>
          <p className="max-w mt-4 mb-4 dark:text-neutral-400 text-center">
            🕑 <strong>График работы технической поддержки:</strong>
            <br />
            <span className="block mt-2">Понедельник - Пятница: 10:00 - 19:00 (МСК)</span>
            <span className="block mt-2">Суббота - Воскресенье: 10:00 - 18:00 (МСК)</span>
            <br />
            💬 <strong>Мы доступны в:</strong>
          </p>

          <div className="flex justify-center mt-2 text-dark-600 dark:text-neutral-400">
            <ContactLink 
              href="https://смартдиаг-поддержка.рф/telegram" 
              icon="telegram"
              text="Telegram"
              qrImage="/images/hero/telegram-qr.svg"
            />
            <ContactLink 
              href="https://смартдиаг-поддержка.рф/whatsapp" 
              icon="whatsapp"
              text="WhatsApp"
              qrImage="/images/hero/whatsapp-qr.svg"
            />
          </div>

          <ContactInfo 
            label="Email отдела продаж:" 
            email="sales@смартдиаг.рф"
          />
          <ContactInfo 
            label="Email технической поддержки:" 
            email="support@смартдиаг.рф"
          />
          <AddressInfo 
            label="Адрес компании:" 
            address="г. Тольятти, ул. Ленинградская 68"
          />
        </div>

        <div>
          <h2 className="text-lg font-bold text-center mb-5">✍️ Обратная связь</h2>
          {!isSubmitSuccessful && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" value="c39d2187-6537-4c0b-87e1-3cff0bf0c1c3" {...register('access_key')} />
              <input type="hidden" value="Обращение через форму обратной связи на сайте SmartDiag" {...register('subject')} />
              <input type="hidden" value="SmartDiag" {...register('from_name')} />
              <input type="checkbox" id="" className="hidden" {...register('botcheck')}></input>

              <InputField 
                id="name"
                type="text"
                placeholder="Введите Ваше имя"
                errors={errors.name}
                register={register('name', { required: 'Необходимо ввести Ваше имя', maxLength: 80 })}
              />

              <InputField 
                id="email_address"
                type="email"
                placeholder="Введите Ваш Email"
                errors={errors.email}
                register={register('email', {
                  required: 'Необходимо ввести Ваш Email',
                  pattern: { value: /^\S+@\S+$/i, message: 'Введите, пожалуйста, правильный адрес электронной почты' },
                })}
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
                errors={errors.topic}
                register={register('topic', { required: 'Необходимо выбрать тему сообщения' })}
              />

              {(topic === 'Активация прибора' || topic === 'Помощь с установкой ПО') && (
                <InputField 
                  id="orderNumber"
                  type="text"
                  placeholder="Номер заказа"
                  errors={errors.orderNumber}
                  register={register('orderNumber', {
                    required: (topic === 'Активация прибора' || topic === 'Помощь с установкой ПО') && 'Номер заказа обязателен',
                  })}
                />
              )}

              <TextareaField 
                placeholder={messagePlaceholders[topic] || messagePlaceholders.default}
                errors={errors.message}
                register={register('message', { required: 'Необходимо ввести текст сообщения' })}
              />

              <div className="flex items-center mb-4 mt-4">
                <input
                  type="checkbox"
                  id="agree"
                  className="mr-2 cursor-pointer"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                />
                <span className="text-sm">
                  Я прочитал и согласен с{' '}
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      setIsModalOpen(true);
                    }}
                    className="text-red-600 hover:underline cursor-pointer"
                  >
                    правилами на обработку персональных данных
                  </span>
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white bg-black dark:bg-red-600 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 dark:hover:bg-red-700"
              >
                {isSubmitting ? <LoadingSpinner /> : 'Отправить сообщение'}
              </button>
            </form>
          )}

          {isSubmitSuccessful && (
            <SubmitResult isSuccess={isSuccess} reset={reset} />
          )}
        </div>
      </div>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

const ContactLink = ({ href, icon, text, qrImage }) => (
  <div className="flex flex-col items-center space-y-2 mx-4">
    <div className="flex items-center space-x-2">
      <Icon icon={icon} />
      <a href={href} target="_blank" className="hover:text-blue-500" style={{ width: '90px' }}>
        {text}
      </a>
    </div>
    <a href={href} target="_blank">
      <Image
        src={qrImage}
        alt={`QR Code ${text}`}
        className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        width={120}
        height={120}
      />
    </a>
  </div>
);

const ContactInfo = ({ label, email }) => (
  <div className="mt-4 text-center dark:text-neutral-400">
    📧 <strong>{label}</strong>
    <a href={`mailto:${email}`} className="block text-red-600 hover:underline mt-1">
      {email}
    </a>
  </div>
);

const AddressInfo = ({ label, address }) => (
  <div className="mt-4 text-center dark:text-neutral-400">
    📍 <strong>{label}</strong>
    <p className="mt-1">{address}</p>
  </div>
);

const InputField = ({ id, type, placeholder, errors, register }) => (
  <div className="mb-4 mt-4">
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:bg-neutral-900 focus:ring-4 ${
        errors ? 'border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0' : 'border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0'
      }`}
      {...register}
    />
    {errors && (
      <div className="mt-1 text-rose-500">
        <small>{errors.message}</small>
      </div>
    )}
  </div>
);

const SelectField = ({ id, options, errors, register }) => (
  <div className="mb-4 mt-4 relative">
    <div className="relative">
      <select
        id={id}
        autoComplete="off"
        className={`w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:bg-neutral-900 focus:ring-4 bg-white appearance-none ${
          errors ? 'border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0' : 'border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0'
        }`}
        {...register}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-2 flex items-center justify-center pointer-events-none">
        <svg className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3.707 3.707a1 1 0 001.414 0l3.707-3.707a1 1 0 000-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>
    {errors && (
      <div className="mt-1 text-rose-500">
        <small>{errors.message}</small>
      </div>
    )}
  </div>
);

const TextareaField = ({ placeholder, errors, register }) => (
  <div className="mb-4 mt-4">
    <textarea
      placeholder={placeholder}
      className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white dark:placeholder:text-neutral-500 dark:bg-neutral-900 rounded-md outline-none h-36 focus:ring-4 ${
        errors ? 'border-rose-500 focus:border-rose-500 ring-rose-100 dark:ring-0' : 'border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0'
      }`}
      {...register}
    />
    {errors && (
      <div className="mt-1 text-rose-500">
        <small>{errors.message}</small>
      </div>
    )}
  </div>
);

const LoadingSpinner = () => (
  <svg className="w-5 h-5 mx-auto text-white dark:text-neutral-900 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const SubmitResult = ({ isSuccess, reset }) => (
  <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
    {isSuccess ? (
      <>
        <SuccessIcon />
        <h3 className="py-5 text-2xl font-medium text-green-500">Успешно!</h3>
        <p className="text-neutral-900 dark:text-neutral-300 md:px-4">Ваше сообщение отправлено.</p>
        <button className="mt-6 py-2 px-4 bg-rose-500 rounded-full focus:outline-none text-neutral-100" onClick={() => reset()}>
          Вернуться
        </button>
      </>
    ) : (
      <>
        <ErrorIcon />
        <h3 className="py-5 text-2xl font-medium text-rose-500">Ошибка</h3>
        <p className="text-neutral-900 dark:text-neutral-300 md:px-4">Ваше сообщение не было отправлено. Пожалуйста, попробуйте снова позже.</p>
        <button className="mt-6 py-2 px-4 bg-rose-500 rounded-full focus:outline-none text-neutral-100" onClick={() => reset()}>
          Вернуться
        </button>
      </>
    )}
  </div>
);

const SuccessIcon = () => (
  <svg width="100" height="100" className="text-green-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg width="97" height="97" viewBox="0 0 97 97" className="text-rose-500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.71 89.9689 72.5798 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
      stroke="currentColor"
      strokeWidth="3"
    />
  </svg>
);
