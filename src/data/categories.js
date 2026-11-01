import { Briefcase, Gauge, ShoppingBasket, Users } from 'lucide-react'

export const sections = [
  {
    id: 'comunidad',
    title: 'Comunidad',
    icon: Users,
    items: ['Actividades', 'Foros', 'Voluntariado', 'Objetos Perdidos', 'Grupos', 'Clases', 'Música', 'Mascotas'],
  },
  {
    id: 'ventas',
    title: 'Ventas',
    icon: ShoppingBasket,
    items: ['Vivienda', 'Vehiculos', 'Gratis', 'Trueque', 'Electrónica', 'Muebles', 'Ropa', 'Bicicletas'],
  },
  {
    id: 'servicios',
    title: 'Servicios',
    icon: Gauge,
    items: ['Legales', 'Informatica', 'Mudanzas', 'Eventos', 'Belleza', 'Reparaciones', 'Transporte', 'Fotografía'],
  },
  {
    id: 'trabajo',
    title: 'Trabajo',
    icon: Briefcase,
    items: ['De medio tiempo', 'Curriculums', 'ONGs', 'Educacion', 'Tiempo completo', 'Remoto', 'Freelance', 'Pasantías'],
  },
]

export const helpLinks = [
  'acerca de craigslist',
  '¿Qué hay de nuevo?',
  'consejos de seguridad',
  'Evitar estafas/fraudes',
  'ayuda, preguntas, abusos',
]
