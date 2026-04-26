const problemPoints = [
  'Отсутствует единое событийное ядро.',
  'Инфраструктура морально устарела.',
  'Функциональные зоны разрознены.',
  'Слабое освещение и сезонные подтопления.'
]

const demandPoints = [
  'Территория выбрана жителями по итогам открытого голосования.',
  'Проведен опрос по функциям будущего пространства.',
  'Зафиксирован устойчивый интерес к развитию территории.'
]

const scaleFacts = [
  'Библиотека: более 30 000 единиц фонда и около 2 300 посетителей.',
  'Дом культуры: 10 объединений, 165 участников, зал на 240 мест.',
  'Краеведческий музей как постоянный партнер программ.'
]

const flow = ['Вход', 'Центральная площадь', 'Событийная зона', 'Тихая часть']

const zones = [
  {
    title: 'Площадь воды и света',
    text: 'Центральная зона, идентичность и главный ритм пространства.'
  },
  { title: 'Событийная площадка', text: 'Мероприятия, концерты, ярмарки и окружные встречи.' },
  { title: 'Тихий сад', text: 'Ежедневный отдых и спокойные маршруты.' },
  { title: 'Семейная зона', text: 'Безопасная детская активность рядом с местами ожидания.' },
  { title: 'Спортивная зона', text: 'Точки активности для подростков и взрослых.' },
  { title: 'Ярмарочный контур', text: 'Поддержка сезонной торговли и локального бизнеса.' },
  { title: 'Экологический маршрут', text: 'Водоотвод, устойчивость и образовательные элементы.' }
]

const seasons = [
  { title: 'Лето', text: 'Прогулки, события, детская активность.' },
  { title: 'Осень', text: 'Ярмарки и культурные мероприятия.' },
  { title: 'Зима', text: 'Световые инсталляции, прогулки, праздники.' },
  { title: 'Весна', text: 'Возвращение активности и запуск нового цикла событий.' }
]

const socialEffects = [
  'Формирование центра общественной жизни округа.',
  'Рост вовлеченности жителей.',
  'Объединение разных возрастных групп.',
  'Развитие культурной активности.'
]

const economy = [
  'Бюджет проекта — ~30 млн ₽.',
  '2–4 постоянных рабочих места.',
  '8–15 временных рабочих мест в период мероприятий.',
  'Развитие сезонной торговли и ярмарок.',
  'Прогнозируемый рост посещаемости: 35–50%.'
]

const governance = ['Муниципалитет', 'Учреждения культуры', 'Локальные организаторы']

export default function App() {
  return (
    <div className="landing">
      <section className="screen screen-hero" id="top">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="content content-narrow">
          <p className="eyebrow">Лендинг-презентация концепции проекта</p>
          <h1>Главный сад встреч Килемарского округа</h1>
          <p className="lead">
            Преобразование центрального сквера в ключевое общественное пространство для 3 500 жителей
            поселка и всего муниципального округа.
          </p>
          <p className="note">Территория выбрана жителями в рамках открытого голосования.</p>
          <a className="btn" href="#problem">
            Смотреть концепцию ↓
          </a>
        </div>
      </section>

      <section className="screen" id="problem">
        <div className="content">
          <h2>Сегодня пространство не выполняет роль центра</h2>
          <p className="section-text">
            Несмотря на центральное расположение, сквер не работает как место притяжения.
          </p>
          <div className="grid four">
            {problemPoints.map((point) => (
              <article key={point} className="card">
                <p>{point}</p>
              </article>
            ))}
          </div>
          <p className="section-text">Территория используется фрагментарно и не формирует городскую жизнь.</p>
        </div>
      </section>

      <section className="screen tone" id="demand">
        <div className="content content-narrow">
          <h2>Запрос на преобразование уже сформирован</h2>
          <ul>
            {demandPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="section-text">
            Сквер уже используется как площадка для мероприятий, но его потенциал ограничен текущим
            состоянием.
          </p>
        </div>
      </section>

      <section className="screen" id="scale">
        <div className="content content-narrow">
          <h2>Это не локальный сквер — это центр округа</h2>
          <p className="section-text">Уже сегодня в поселке работает сеть сильных операторов контента:</p>
          <ul>
            {scaleFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <p className="section-text accent-text">Не хватает не активности — не хватает пространства под неё.</p>
        </div>
      </section>

      <section className="screen tone" id="idea">
        <div className="content content-narrow">
          <h2>Ключевая концепция</h2>
          <p className="big">Создание «сада встреч округа».</p>
          <p className="section-text">
            Центральное общественное пространство объединяет природную среду, культурные события и
            повседневную жизнь, работая ежедневно и принимая мероприятия районного уровня.
          </p>
          <div className="chips">
            <span>🌿 Природная среда</span>
            <span>🎭 Культурные события</span>
            <span>👨‍👩‍👧 Повседневная жизнь</span>
          </div>
        </div>
      </section>

      <section className="screen" id="flow">
        <div className="content">
          <h2>Как устроено пространство</h2>
          <div className="flow">
            {flow.map((step, index) => (
              <div key={step} className="flow-step">
                <span>{step}</span>
                {index < flow.length - 1 && <strong>→</strong>}
              </div>
            ))}
          </div>
          <ul>
            <li>Организовать потоки людей.</li>
            <li>Разделить активные и спокойные зоны.</li>
            <li>Создать понятную навигацию.</li>
          </ul>
        </div>
      </section>

      <section className="screen tone" id="core">
        <div className="content content-narrow">
          <h2>Центральная точка притяжения</h2>
          <p className="big">Сухой фонтан + событийная площадка</p>
          <div className="chips">
            <span>Лето — водная активность и отдых</span>
            <span>Межсезонье — общественное пространство</span>
            <span>Зима — световые сценарии</span>
          </div>
          <p className="section-text accent-text">Одна точка обеспечивает круглогодичное использование.</p>
        </div>
      </section>

      <section className="screen" id="zones">
        <div className="content">
          <h2>Система пространств</h2>
          <div className="grid three">
            {zones.map((zone) => (
              <article key={zone.title} className="card visual">
                <h4>{zone.title}</h4>
                <p>{zone.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="screen tone" id="scenarios">
        <div className="content">
          <h2>Пространство работает круглый год</h2>
          <div className="grid four">
            {seasons.map((season) => (
              <article key={season.title} className="card">
                <h4>{season.title}</h4>
                <p>{season.text}</p>
              </article>
            ))}
          </div>
          <p className="section-text accent-text">Всесезонность — ключевой принцип проекта.</p>
        </div>
      </section>

      <section className="screen" id="social-effect">
        <div className="content">
          <h2>Результат для округа</h2>
          <div className="grid four">
            {socialEffects.map((effect) => (
              <article key={effect} className="card">
                <p>{effect}</p>
              </article>
            ))}
          </div>
          <p className="section-text accent-text">Пространство становится устойчивой точкой притяжения.</p>
        </div>
      </section>

      <section className="screen tone" id="economy">
        <div className="content content-narrow">
          <h2>Реалистичная модель</h2>
          <ul>
            {economy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="screen" id="management">
        <div className="content content-narrow">
          <h2>Кто будет наполнять пространство</h2>
          <p className="section-text">Модель управления основана на существующей инфраструктуре территории:</p>
          <div className="chips">
            {governance.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="section-text accent-text">Проект опирается на реальные институции и локальную команду.</p>
        </div>
      </section>

      <section className="screen screen-final" id="final">
        <div className="content content-narrow">
          <h2>Это не просто благоустройство</h2>
          <p className="big">Это создание нового центра жизни округа.</p>
          <p className="section-text">Пространства, которое работает каждый день и формирует образ территории.</p>
        </div>
      </section>
    </div>
  )
}
