import React from 'react';

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-full w-full sm:max-w-3xl mx-4 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-3xl transform transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{ fontSize: '2rem' }}
        >
          ×
        </button>
        <h4 className="text-2xl font-semibold mb-4">
          Политика в отношении обработки персональных данных
        </h4>
        <div className="overflow-y-auto max-h-96" style={{ padding: '0 16px', marginBottom: '16px' }}>
          <div className="ol">
            <div className="li">1. Общие положения</div>
            <div className="li">
              Настоящая политика обработки персональных данных составлена в
              соответствии с требованиями Федерального закона от 27.07.2006.
              №152-ФЗ «О персональных данных» и определяет порядок обработки
              персональных данных и меры по обеспечению безопасности
              персональных данных, предпринимаемые ООО «СмартДиаг» (далее – Оператор).
            </div>
            <div className="li">2. Основные понятия, используемые в настоящей политике:</div>
            <div className="li">2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;</div>
            <div className="li">2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</div>
            <div className="li">2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://смартдиаг.рф.</div>
            <div className="li">2.4. Информационная система персональных данных – совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.</div>
            <div className="li">2.5. Обезличивание персональных данных – действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.</div>
            <div className="li">2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</div>
            <div className="li">2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и/или осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.</div>
            <div className="li">2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://смартдиаг.рф.</div>
            <div className="li">2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, – персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее – персональные данные, разрешенные для распространения).</div>
            <div className="li">2.10. Пользователь – любой посетитель веб-сайта https://смартдиаг.рф.</div>
            <div className="li">2.11. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.</div>
            <div className="li">2.12. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.</div>
            <div className="li">2.13. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.</div>
            <div className="li">2.14. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.</div>
            <div className="li">3. Основные права и обязанности Оператора</div>
            <div className="li">3.1. Оператор вправе:</div>
            <div className="li">— самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.</div>
            <div className="li">3.2. Оператор обязан:</div>
            <div className="li">— предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;</div>
            <div className="li">— организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;</div>
            <div className="li">— отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;</div>
            <div className="li">— сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 10 дней с даты получения такого запроса;</div>
            <div className="li">— публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных;</div>
            <div className="li">— принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;</div>
            <div className="li">— прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и в случаях, предусмотренных Законом о персональных данных;</div>
            <div className="li">— исполнять иные обязанности, предусмотренные Законом о персональных данных.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;