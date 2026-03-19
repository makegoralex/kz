import {
  FiHeadphones,
  FiTool,
  FiMonitor,
  FiSmartphone,
  FiSettings,
  FiLayers,
  FiClock,
  FiGlobe,
  FiZap,
  FiGitBranch,
  FiMessageCircle,
  FiShoppingBag,
  FiDatabase
} from 'react-icons/fi'

export const navLinks = [
  { label: 'О проекте', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Партнеры', href: '#partners' },
  { label: 'Контакты', href: '#contacts' }
]

export const heroBadges = ['Ремонт и обслуживание 24/7', 'Продажа оргтехники', 'Установка и настройка ПО', 'IT для бизнеса и частных клиентов']

export const services = [
  {
    title: 'Ремонт оргтехники',
    description:
      'Ремонт ноутбуков, компьютеров, принтеров и МФУ. Проводим диагностику неисправностей, обслуживание офисной техники, настройку и восстановление стабильной работы оборудования.',
    icon: FiTool
  },
  {
    title: 'Установка и настройка программ',
    description:
      'Установка Windows и другого ПО, офисных программ и драйверов. Настраиваем рабочие программы на ПК, обновляем и подготавливаем программную среду под задачи бизнеса.',
    icon: FiSettings
  },
  {
    title: 'Бухгалтерские программы',
    description:
      'Устанавливаем и настраиваем бухгалтерское ПО, помогаем с подключением и базовой конфигурацией программ для учета и ежедневной работы бизнеса.',
    icon: FiDatabase
  },
  {
    title: 'Продажа оргтехники',
    description:
      'Подбираем и поставляем оргтехнику для офиса и бизнеса: принтеры, МФУ, компьютеры и сопутствующее оборудование с учетом задач и бюджета клиента.',
    icon: FiShoppingBag
  },
  {
    title: 'Разработка сайтов',
    description: 'Создание современных сайтов, лендингов и веб-решений под задачи бизнеса.',
    icon: FiMonitor
  },
  {
    title: 'Разработка приложений',
    description: 'Проектирование и разработка мобильных и веб-приложений.',
    icon: FiSmartphone
  },
  {
    title: 'IT-поддержка',
    description: 'Настройка, сопровождение и помощь в решении технических вопросов.',
    icon: FiHeadphones
  },
  {
    title: 'Комплексные IT-решения',
    description: 'Объединяем ремонт, поставку техники, настройку ПО и цифровую разработку в единую систему IT-поддержки компании.',
    icon: FiLayers
  }
]

export const advantages = [
  { title: 'Полный спектр услуг в одном месте', icon: FiLayers },
  { title: 'Ремонт и обслуживание техники 24/7', icon: FiClock },
  { title: 'Продажа и подбор оргтехники под задачи', icon: FiShoppingBag },
  { title: 'Установка ПО и настройка рабочих ПК', icon: FiSettings },
  { title: 'Цифровые решения для бизнеса', icon: FiZap },
  { title: 'Оперативная обратная связь и сопровождение', icon: FiMessageCircle },
  { title: 'Работаем по всему Казахстану', icon: FiGlobe },
  { title: 'Партнерская сеть для масштабирования', icon: FiGitBranch },
  { title: 'Экспертиза в ремонте и IT-разработке', icon: FiMonitor }
]

export const processSteps = [
  'Вы оставляете заявку или звоните',
  'Мы уточняем задачу и подбираем решение',
  'Подключаем специалиста или партнера в вашем регионе',
  'Выполняем работу и сопровождаем результат'
]

export const partners = [
  {
    id: 'internet-g-room',
    name: 'Internet G Room',
    status: 'Официальный партнер AGGREGATOR 24/7',
    description:
      'Партнер оказывает услуги в своем регионе, работает в общей системе AGGREGATOR 24/7 и поддерживает стандарты качества проекта.'
  }
]

export const contacts = {
  phones: ['8-775-403-37-68', '8-775-767-12-15'],
  telLinks: ['tel:+77754033768', 'tel:+77757671215'],
  waLinks: ['https://wa.me/77754033768', 'https://wa.me/77757671215']
}
