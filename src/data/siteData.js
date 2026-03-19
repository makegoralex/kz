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
  FiMessageCircle
} from 'react-icons/fi'

export const navLinks = [
  { label: 'О проекте', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Партнеры', href: '#partners' },
  { label: 'Контакты', href: '#contacts' }
]

export const heroBadges = ['24/7 поддержка', 'По всему Казахстану', 'IT для бизнеса и частных клиентов', 'Партнерская сеть']

export const services = [
  {
    title: 'Ремонт оргтехники',
    description: 'Диагностика, обслуживание и ремонт офисной и периферийной техники.',
    icon: FiTool
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
    title: 'Настройка оборудования',
    description: 'Подключение, настройка и оптимизация рабочих IT-систем и устройств.',
    icon: FiSettings
  },
  {
    title: 'Комплексные IT-решения',
    description: 'Подбор и реализация технических решений под конкретные задачи клиента.',
    icon: FiLayers
  }
]

export const advantages = [
  { title: 'Работаем 24/7', icon: FiClock },
  { title: 'По всему Казахстану', icon: FiGlobe },
  { title: 'Широкий спектр IT-услуг', icon: FiZap },
  { title: 'Партнерская сеть и масштабируемость', icon: FiGitBranch },
  { title: 'Современный подход к цифровым задачам', icon: FiMonitor },
  { title: 'Быстрая обратная связь', icon: FiMessageCircle }
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
