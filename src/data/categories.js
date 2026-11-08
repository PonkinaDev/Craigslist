import { Briefcase, Gauge, ShoppingBasket, Users } from 'lucide-react'

const LISTINGS_PATH = '/anuncios'
const SALES_PATH = '/en-venta'
const FORUMS_PATH = '/foros'

export const itemLinks = {
  Foros: FORUMS_PATH,
}

export const sections = [
  {
    id: 'comunidad',
    title: 'Comunidad',
    icon: Users,
    to: LISTINGS_PATH,
    items: ['Actividades', 'Foros', 'Voluntariado', 'Objetos Perdidos', 'Grupos', 'Clases', 'Música', 'Mascotas'],
  },
  {
    id: 'ventas',
    title: 'Ventas',
    icon: ShoppingBasket,
    to: SALES_PATH,
    items: ['Vivienda', 'Vehiculos', 'Gratis', 'Trueque', 'Electrónica', 'Muebles', 'Ropa', 'Bicicletas'],
  },
  {
    id: 'servicios',
    title: 'Servicios',
    icon: Gauge,
    to: LISTINGS_PATH,
    items: ['Legales', 'Informatica', 'Mudanzas', 'Eventos', 'Belleza', 'Reparaciones', 'Transporte', 'Fotografía'],
  },
  {
    id: 'trabajo',
    title: 'Trabajo',
    icon: Briefcase,
    to: LISTINGS_PATH,
    items: ['De medio tiempo', 'Curriculums', 'ONGs', 'Educacion', 'Tiempo completo', 'Remoto', 'Freelance', 'Pasantías'],
  },
]

export const topicQueries = {
  Actividades: 'community event',
  Foros: 'group discussion',
  Voluntariado: 'volunteers',
  'Objetos Perdidos': 'lost keys',
  Grupos: 'friends together',
  Clases: 'classroom',
  Música: 'live concert',
  Mascotas: 'dog and cat',
  Vivienda: 'apartment building',
  Vehiculos: 'cars parked',
  Gratis: 'free gift box',
  Trueque: 'swap exchange',
  Electrónica: 'electronics',
  Muebles: 'furniture',
  Ropa: 'clothes rack',
  Bicicletas: 'bicycle',
  Legales: 'lawyer',
  Informatica: 'computer repair',
  Mudanzas: 'moving boxes',
  Eventos: 'party event',
  Belleza: 'hair salon',
  Reparaciones: 'repair tools',
  Transporte: 'delivery van',
  Fotografía: 'photographer camera',
  TV: 'television',
  Legal: 'law books gavel',
  Ecologia: 'ecology forest',
  Casamiento: 'wedding couple',
  Gaming: 'video games controller',
  Religion: 'church',
  Fotografia: 'photography camera',
  Bromas: 'laughing friends',
  'De medio tiempo': 'cafe worker',
  Curriculums: 'resume',
  ONGs: 'charity donation',
  Educacion: 'teacher students',
  'Tiempo completo': 'office work',
  Remoto: 'work from home',
  Freelance: 'freelancer laptop',
  Pasantías: 'intern office',
}

export const helpLinks = [
  'acerca de craigslist',
  '¿Qué hay de nuevo?',
  'consejos de seguridad',
  'Evitar estafas/fraudes',
  'ayuda, preguntas, abusos',
]
