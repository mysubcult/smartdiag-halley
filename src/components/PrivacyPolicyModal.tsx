import React from 'react';

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Закрытие только при нажатии на затемненную область, но не на содержимое модального окна
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleOverlayClick}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Затемнение фона */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-3xl mx-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-600">
          ×
        </button>
        <h4 className="text-xl font-semibold mb-4">Политика в отношении обработки персональных данных</h4>
        <div className="overflow-y-auto max-h-96">
          <p><strong>Условия ОПД</strong></p>
          <div className="row mb-4" style={{ fontFamily: 'TildaSans, Arial, sans-serif', boxSizing: 'content-box', color: 'rgb(33, 37, 41)', display: 'flex', flexWrap: 'wrap', fontSize: '16px', backgroundColor: 'rgb(254, 254, 254)', marginBottom: '24px !important' }}>
            <div className="col" style={{ position: 'relative', width: '1028px', minHeight: '1px', paddingRight: '15px', paddingLeft: '15px', flexBasis: '0px', flexGrow: '1', maxWidth: '100%' }}>
              <h4 style={{ boxSizing: 'content-box', marginBottom: '8px', color: 'rgb(33, 37, 41)', fontSize: '24px', fontFamily: 'TildaSans, Arial, sans-serif !important' }}><span style={{ boxSizing: 'content-box', fontWeight: 600 }}>Политика в&nbsp;отношении обработки персональных данных</span></h4>
            </div>
          </div>
          <div className="row mb-4" style={{ fontFamily: 'TildaSans, Arial, sans-serif', boxSizing: 'content-box', color: 'rgb(33, 37, 41)', display: 'flex', flexWrap: 'wrap', fontSize: '16px', backgroundColor: 'rgb(254, 254, 254)', marginBottom: '24px !important' }}>
            <div className="col" style={{ position: 'relative', width: '1028px', minHeight: '1px', paddingRight: '15px', paddingLeft: '15px', flexBasis: '0px', flexGrow: '1', maxWidth: '100%' }}>
              <h5 style={{ boxSizing: 'content-box', color: 'rgb(33, 37, 41)', fontSize: '20px', marginBottom: '24px', fontFamily: 'TildaSans, Arial, sans-serif !important' }}>1. Общие положения</h5>
              <div className="descr" style={{ boxSizing: 'content-box', marginBottom: '24px' }}>Настоящая политика обработки персональных данных составлена в&nbsp;соответствии с&nbsp;требованиями Федерального закона от&nbsp;27.07.2006. №&nbsp;152-ФЗ «О&nbsp;персональных данных» (далее&nbsp;— Закон о&nbsp;персональных данных) и&nbsp;определяет порядок обработки персональных данных и&nbsp;меры по&nbsp;обеспечению безопасности персональных данных, предпринимаемые&nbsp;<span className="link mark owner-name-field" id="owner-name-value" data-scroll-to="#owner-name-field" style={{ boxSizing: 'content-box', display: 'inline', padding: '0.05em', backgroundColor: 'rgb(252, 248, 227)', overflowWrap: 'break-word', cursor: 'pointer', borderBottom: '1.5px dotted rgb(250, 134, 105)' }}>SmartDiag</span>&nbsp;(далее&nbsp;— Оператор).</div>
              <div className="ol" style={{ boxSizing: 'content-box', marginBottom: '16px', paddingLeft: '40px', overflowY: 'auto' }}>
                <div className="li" style={{ boxSizing: 'content-box' }}>1.1. Оператор ставит своей важнейшей целью и&nbsp;условием осуществления своей деятельности соблюдение прав и&nbsp;свобод человека и&nbsp;гражданина при обработке его персональных данных, в&nbsp;том числе защиты прав на&nbsp;неприкосновенность частной жизни, личную и&nbsp;семейную тайну.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>1.2. Настоящая политика Оператора в&nbsp;отношении обработки персональных данных (далее&nbsp;— Политика) применяется ко&nbsp;всей информации, которую Оператор может получить о&nbsp;посетителях веб-сайта&nbsp;<span className="link mark owner-site-url-field" data-scroll-to="#owner-site-url-field" style={{ boxSizing: 'content-box', display: 'inline', padding: '0.05em', backgroundColor: 'rgb(252, 248, 227)', overflowWrap: 'break-word', cursor: 'pointer', borderBottom: '1.5px dotted rgb(250, 134, 105)' }}>https://смартдиаг.рф</span>.</div>
              </div>
            </div>
          </div>
          <div className="row mb-4" style={{ fontFamily: 'TildaSans, Arial, sans-serif', boxSizing: 'content-box', color: 'rgb(33, 37, 41)', display: 'flex', flexWrap: 'wrap', fontSize: '16px', backgroundColor: 'rgb(254, 254, 254)', marginBottom: '24px !important' }}>
            <div className="col" style={{ position: 'relative', width: '1028px', minHeight: '1px', paddingRight: '15px', paddingLeft: '15px', flexBasis: '0px', flexGrow: '1', maxWidth: '100%' }}>
              <h5 style={{ boxSizing: 'content-box', color: 'rgb(33, 37, 41)', fontSize: '20px', marginBottom: '24px', fontFamily: 'TildaSans, Arial, sans-serif !important' }}>2. Основные понятия, используемые в&nbsp;Политике</h5>
              <div className="ol" style={{ boxSizing: 'content-box', marginBottom: '16px', paddingLeft: '40px', overflowY: 'auto' }}>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.1. Автоматизированная обработка персональных данных&nbsp;— обработка персональных данных с&nbsp;помощью средств вычислительной техники.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.2. Блокирование персональных данных&nbsp;— временное прекращение обработки персональных данных (за&nbsp;исключением случаев, если обработка необходима для уточнения персональных данных).</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.3. Веб-сайт&nbsp;— совокупность графических и&nbsp;информационных материалов, а&nbsp;также программ для ЭВМ и&nbsp;баз данных, обеспечивающих их&nbsp;доступность в&nbsp;сети интернет по&nbsp;сетевому адресу&nbsp;<span className="link mark owner-site-url-field" data-scroll-to="#owner-site-url-field" style={{ boxSizing: 'content-box', display: 'inline', padding: '0.05em', backgroundColor: 'rgb(252, 248, 227)', overflowWrap: 'break-word', cursor: 'pointer', borderBottom: '1.5px dotted rgb(250, 134, 105)' }}>https://смартдиаг.рф</span>.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.4. Информационная система персональных данных&nbsp;— совокупность содержащихся в&nbsp;базах данных персональных данных и&nbsp;обеспечивающих их&nbsp;обработку информационных технологий и&nbsp;технических средств.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.5. Обезличивание персональных данных&nbsp;— действия, в&nbsp;результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.6. Обработка персональных данных&nbsp;— любое действие (операция) или совокупность действий (операций), совершаемых с&nbsp;использованием средств автоматизации или без использования таких средств с&nbsp;персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.7. Оператор&nbsp;— государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с&nbsp;другими лицами организующие и/или&nbsp;осуществляющие обработку персональных данных, а&nbsp;также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с&nbsp;персональными данными.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.8. Персональные данные&nbsp;— любая информация, относящаяся прямо или косвенно к&nbsp;определенному или определяемому Пользователю веб-сайта&nbsp;<span className="link mark owner-site-url-field" data-scroll-to="#owner-site-url-field" style={{ boxSizing: 'content-box', display: 'inline', padding: '0.05em', backgroundColor: 'rgb(252, 248, 227)', overflowWrap: 'break-word', cursor: 'pointer', borderBottom: '1.5px dotted rgb(250, 134, 105)' }}>https://смартдиаг.рф</span>.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.9. Персональные данные, разрешенные субъектом персональных данных для распространения,&nbsp;— персональные данные, доступ неограниченного круга лиц к&nbsp;которым предоставлен субъектом персональных данных путем дачи согласия на&nbsp;обработку персональных данных, разрешенных субъектом персональных данных для распространения в&nbsp;порядке, предусмотренном Законом о&nbsp;персональных данных (далее&nbsp;— персональные данные, разрешенные для распространения).</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.10. Пользователь&nbsp;— любой посетитель веб-сайта&nbsp;<span className="link mark owner-site-url-field" data-scroll-to="#owner-site-url-field" style={{ boxSizing: 'content-box', display: 'inline', padding: '0.05em', backgroundColor: 'rgb(252, 248, 227)', overflowWrap: 'break-word', cursor: 'pointer', borderBottom: '1.5px dotted rgb(250, 134, 105)' }}>https://смартдиаг.рф</span>.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.11. Предоставление персональных данных&nbsp;— действия, направленные на&nbsp;раскрытие персональных данных определенному лицу или определенному кругу лиц.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.12. Распространение персональных данных&nbsp;— любые действия, направленные на&nbsp;раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на&nbsp;ознакомление с&nbsp;персональными данными неограниченного круга лиц, в&nbsp;том числе обнародование персональных данных в&nbsp;средствах массовой информации, размещение в&nbsp;информационно-телекоммуникационных сетях или предоставление доступа к&nbsp;персональным данным каким-либо иным способом.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.13. Трансграничная передача персональных данных&nbsp;— передача персональных данных на&nbsp;территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>2.14. Уничтожение персональных данных&nbsp;— любые действия, в&nbsp;результате которых персональные данные уничтожаются безвозвратно с&nbsp;невозможностью дальнейшего восстановления содержания персональных данных в&nbsp;информационной системе персональных данных и/или&nbsp;уничтожаются материальные носители персональных данных.</div>
              </div>
            </div>
          </div>
          <div className="row mb-4" style={{ fontFamily: 'TildaSans, Arial, sans-serif', boxSizing: 'content-box', color: 'rgb(33, 37, 41)', display: 'flex', flexWrap: 'wrap', fontSize: '16px', backgroundColor: 'rgb(254, 254, 254)', marginBottom: '24px !important' }}>
            <div className="col" style={{ position: 'relative', width: '1028px', minHeight: '1px', paddingRight: '15px', paddingLeft: '15px', flexBasis: '0px', flexGrow: '1', maxWidth: '100%' }}>
              <h5 style={{ boxSizing: 'content-box', color: 'rgb(33, 37, 41)', fontSize: '20px', marginBottom: '24px', fontFamily: 'TildaSans, Arial, sans-serif !important' }}>3. Основные права и&nbsp;обязанности Оператора</h5>
              <div className="ol" style={{ boxSizing: 'content-box', marginBottom: '16px', paddingLeft: '40px', overflowY: 'auto' }}>
                <div className="li" style={{ boxSizing: 'content-box' }}>3.1. Оператор имеет право:</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;получать от&nbsp;субъекта персональных данных достоверные информацию и/или&nbsp;документы, содержащие персональные данные;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;в&nbsp;случае отзыва субъектом персональных данных согласия на&nbsp;обработку персональных данных, а&nbsp;также, направления обращения с&nbsp;требованием о&nbsp;прекращении обработки персональных данных, Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в&nbsp;Законе о&nbsp;персональных данных;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;самостоятельно определять состав и&nbsp;перечень мер, необходимых и&nbsp;достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о&nbsp;персональных данных и&nbsp;принятыми в&nbsp;соответствии с&nbsp;ним нормативными правовыми актами, если иное не&nbsp;предусмотрено Законом о&nbsp;персональных данных или другими федеральными законами.</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>3.2. Оператор обязан:</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;предоставлять субъекту персональных данных по&nbsp;его просьбе информацию, касающуюся обработки его персональных данных;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;организовывать обработку персональных данных в&nbsp;порядке, установленном действующим законодательством&nbsp;РФ;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;отвечать на&nbsp;обращения и&nbsp;запросы субъектов персональных данных и&nbsp;их&nbsp;законных представителей в&nbsp;соответствии с&nbsp;требованиями Закона о&nbsp;персональных данных;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;сообщать в&nbsp;уполномоченный орган по&nbsp;защите прав субъектов персональных данных по&nbsp;запросу этого органа необходимую информацию в&nbsp;течение 10&nbsp;дней с&nbsp;даты получения такого запроса;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;публиковать или иным образом обеспечивать неограниченный доступ к&nbsp;настоящей Политике в&nbsp;отношении обработки персональных данных;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;принимать правовые, организационные и&nbsp;технические меры для защиты персональных данных от&nbsp;неправомерного или случайного доступа к&nbsp;ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а&nbsp;также от&nbsp;иных неправомерных действий в&nbsp;отношении персональных данных;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и&nbsp;уничтожить персональные данные в&nbsp;порядке и&nbsp;случаях, предусмотренных Законом о&nbsp;персональных данных;</div>
                <div className="li" style={{ boxSizing: 'content-box' }}>—&nbsp;исполнять иные обязанности, предусмотренные Законом о&nbsp;персональных данных.</div>
              </div>
            </div>
          </div>
          {/* Остальная часть текста */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
