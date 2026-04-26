const problemPoints = [
  'Пространство есть, но не работает как центр.',
  'Нет событийного ядра и понятной точки встречи.',
  'Активности разрознены и не собраны в маршрут.',
  'Зимой территория почти не используется.'
]

const flow = [
  'Входы и подходы',
  'Центральная площадь воды и света',
  'Событийный навес и церемониальная площадка',
  'Тихая зеленая часть'
]

const zones = [
  'Площадь воды (фонтан)',
  'Событийный навес',
  'Тихий сад',
  'Семейная зона',
  'Спорт',
  'Ярмарка'
]

const seasons = [
  { title: 'Лето', text: 'Вода, семейные встречи, открытые мероприятия.' },
  { title: 'Осень', text: 'Ярмарки, культурные программы, школьные события.' },
  { title: 'Зима', text: 'Световой сценарий, прогулки, камерные события.' },
  { title: 'Весна', text: 'Запуск сезонных активностей и обновление маршрутов.' }
]

const users = ['Дети', 'Подростки', 'Семьи', 'Пожилые', 'Жители округа']

const effects = [
  'Центр жизни округа',
  'Рост посещаемости',
  'Место для регулярных событий',
  'Развитие малого бизнеса'
]

export default function App() {
  return (
    <div className="landing">
      <section className="screen screen-hero" id="top">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="content content-narrow">
          <p className="eyebrow">Концепция развития центральной территории</p>
          <h1>Главный сад встреч Килемарского округа</h1>
          <p className="lead">
            Не благоустройство сквера, а создание центрального общественного пространства округа.
          </p>
          <a className="btn" href="#problem">
            Смотреть концепцию ↓
          </a>
        </div>
      </section>

      <section className="screen" id="problem">
        <div className="content">
          <h2>Проблема</h2>
          <div className="grid four">
            {problemPoints.map((point) => (
              <article key={point} className="card">
                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="screen tone" id="potential">
        <div className="content content-narrow">
          <h2>Это не просто сквер.</h2>
          <h3>Это центр всего округа.</h3>
          <ul>
            <li>Сюда приезжают жители со всего района.</li>
            <li>Здесь уже проходят мероприятия.</li>
            <li>Рядом работают учреждения культуры.</li>
          </ul>
        </div>
      </section>

      <section className="screen" id="idea">
        <div className="content content-narrow">
          <h2>Идея проекта</h2>
          <p className="big">Мы создаем сад встреч округа.</p>
          <div className="chips">
            <span>🌿 Природа</span>
            <span>🎭 Культура</span>
            <span>👨‍👩‍👧 Повседневная жизнь</span>
          </div>
        </div>
      </section>

      <section className="screen" id="flow">
        <div className="content">
          <h2>Как это работает</h2>
          <div className="flow">
            {flow.map((step, index) => (
              <div key={step} className="flow-step">
                <span>{step}</span>
                {index < flow.length - 1 && <strong>→</strong>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="screen tone" id="zones">
        <div className="content">
          <h2>Функциональные зоны</h2>
          <div className="grid three">
            {zones.map((zone) => (
              <article key={zone} className="card visual">
                <p>{zone}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="screen" id="anchor">
        <div className="content content-narrow">
          <h2>Якорь проекта</h2>
          <p className="big">Сухой фонтан + событийный навес.</p>
          <div className="chips">
            <span>Летом — вода</span>
            <span>Зимой — свет</span>
            <span>Всегда — события</span>
          </div>
        </div>
      </section>

      <section className="screen" id="life">
        <div className="content">
          <h2>Сценарии жизни по сезонам</h2>
          <div className="grid four">
            {seasons.map((season) => (
              <article key={season.title} className="card">
                <h4>{season.title}</h4>
                <p>{season.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="screen tone" id="audience">
        <div className="content">
          <h2>Кто будет использовать</h2>
          <div className="chips">
            {users.map((user) => (
              <span key={user}>{user}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="screen" id="effect">
        <div className="content">
          <h2>Эффект проекта</h2>
          <div className="grid four">
            {effects.map((effect) => (
              <article key={effect} className="card">
                <p>{effect}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="screen tone" id="economy">
        <div className="content">
          <h2>Экономика проекта</h2>
          <div className="grid three">
            <article className="card stat">
              <h4>~30 млн ₽</h4>
              <p>Укрупненный бюджет реализации</p>
            </article>
            <article className="card stat">
              <h4>2–4 места</h4>
              <p>Постоянная и длинносезонная занятость</p>
            </article>
            <article className="card stat">
              <h4>Ярмарки и события</h4>
              <p>Регулярная программная активность</p>
            </article>
          </div>
        </div>
      </section>

      <section className="screen screen-final" id="final">
        <div className="content content-narrow">
          <h2>Это не просто благоустройство.</h2>
          <p className="big">Это новый центр жизни округа.</p>
        </div>
      </section>
    </div>
  )
}
