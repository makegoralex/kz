const problemPoints = [
  'Отсутствует единое событийное ядро и читаемый центр.',
  'Часть инфраструктуры морально и физически устарела.',
  'Детские, спортивные и тихие сценарии разрознены.',
  'Недостаточно света и есть сезонные проблемы водоотведения.'
]

const demandPoints = [
  'Территория уже выбрана жителями по итогам открытого голосования.',
  'Проведен отдельный сбор предложений по функциям будущего пространства.',
  'Сформирован устойчивый общественный запрос на преобразование.'
]

const scaleFacts = [
  'Библиотека: более 30 000 единиц фонда и около 2 300 посетителей.',
  'Дом культуры: 10 объединений, 165 участников, зал на 240 мест.',
  'Краеведческий музей и образовательные организации готовы к совместной программе.'
]

const flow = ['Входные узлы', 'Площадь воды и света', 'Событийная зона', 'Тихий сад']

const zones = [
  {
    title: 'Входные узлы и навигация',
    text: 'Понятные подходы, освещение, связка с ежедневными маршрутами.'
  },
  {
    title: 'Площадь воды и света',
    text: 'Сухой фонтан, центральная идентичность, место встречи в любой сезон.'
  },
  {
    title: 'Событийный навес',
    text: 'Концерты, церемонии, лекции, кинопоказы, ярмарки.'
  },
  { title: 'Тихий сад', text: 'Камерный отдых, прогулки, шахматные и читательские форматы.' },
  {
    title: 'Семейная зона',
    text: 'Безопасные игровые элементы и места ожидания для родителей.'
  },
  { title: 'Спортивный карман', text: 'Компактная активность для подростков и взрослых.' },
  {
    title: 'Ярмарочный контур',
    text: 'Временные модули и ремесленные точки в дни событий.'
  },
  { title: 'Эко-маршрут и дренаж', text: 'Мостик, водоотведение, дождевые сады, природная тема.' },
  { title: 'Световой периметр', text: 'Безопасность, обзорность, работа пространства в темное время.' }
]

const seasons = [
  { title: 'Весна', text: 'Открытие сезона, экологические акции, первые ярмарки.' },
  { title: 'Лето', text: 'События, прогулки, детская активность, водная игра фонтана.' },
  { title: 'Осень', text: 'Ярмарки, культурные программы, окружные встречи.' },
  { title: 'Зима', text: 'Световые сценарии, праздничные события, семейные прогулки.' }
]

const socialEffects = [
  'Формирование центра общественной жизни округа.',
  'Рост вовлеченности жителей и межпоколенческого общения.',
  'Регулярная открытая площадка для учреждений культуры.',
  'Повышение безопасности и качества повседневной среды.'
]

const economyFacts = [
  'Общий бюджет реализации: ~30 млн ₽.',
  'Эксплуатация: ориентир 1.3–1.5 млн ₽ в год.',
  '2–4 постоянных/сезонных рабочих места.',
  '8–15 временных занятостей в периоды мероприятий.',
  'Рост посещаемости: +35–50% в обычные дни, более чем в 2 раза в дни событий.'
]

export default function App() {
  return (
    <div className="landing">
      <section className="screen screen-hero" id="top">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="content content-narrow">
          <p className="eyebrow">Проект: «Земля предков: сад встреч Килемарского округа»</p>
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
            Несмотря на центральное расположение, сквер используется фрагментарно и не формирует
            устойчивую городскую жизнь.
          </p>
          <div className="grid four">
            {problemPoints.map((point) => (
              <article key={point} className="card">
                <p>{point}</p>
              </article>
            ))}
          </div>
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
            Сквер уже работает как площадка локальных мероприятий, но текущая инфраструктура ограничивает
            масштаб и регулярность использования.
          </p>
        </div>
      </section>

      <section className="screen" id="scale">
        <div className="content content-narrow">
          <h2>Это не локальный сквер — это центр округа</h2>
          <p className="section-text">У территории уже есть сеть операторов, готовых наполнять пространство:</p>
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
          <p className="big">Создание всесезонного «сада встреч округа».</p>
          <p className="section-text">
            Пространство объединяет природу, культуру и повседневную жизнь: ежедневно работает как место
            встреч и отдыха, а в событийные дни принимает окружную программу.
          </p>
          <div className="chips">
            <span>🌿 Природная среда</span>
            <span>🎭 Культурные события</span>
            <span>👨‍👩‍👧 Повседневные сценарии</span>
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
            <li>Организует потоки и делает территорию понятной с первого шага.</li>
            <li>Разводит активные и спокойные сценарии без конфликтов.</li>
            <li>Создает читаемую навигацию для жителей и гостей округа.</li>
          </ul>
        </div>
      </section>

      <section className="screen tone" id="core">
        <div className="content content-narrow">
          <h2>Центральная точка притяжения</h2>
          <p className="big">Сухой фонтан + событийная площадка</p>
          <div className="chips">
            <span>Лето — вода и отдых</span>
            <span>Межсезонье — площадь встреч</span>
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
        </div>
      </section>

      <section className="screen tone" id="economy">
        <div className="content content-narrow">
          <h2>Экономический эффект: реалистичная модель</h2>
          <ul>
            {economyFacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="screen" id="management">
        <div className="content content-narrow">
          <h2>Кто будет наполнять пространство</h2>
          <p className="section-text">
            Управление строится на уже существующей инфраструктуре: муниципалитет отвечает за содержание и
            безопасность, учреждения культуры — за программу, локальные организаторы и бизнес — за ярмарочные
            и событийные форматы.
          </p>
          <div className="chips">
            <span>Муниципалитет</span>
            <span>Учреждения культуры</span>
            <span>Локальные организаторы</span>
          </div>
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
