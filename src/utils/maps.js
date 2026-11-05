export const DEFAULT_LOCATION = 'Bogotá, Colombia'

export const buildMapUrl = (query) => `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=11&output=embed`
