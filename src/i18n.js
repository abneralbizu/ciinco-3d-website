// Language of the page (English at the site root, Spanish under /es/).
// Each page says which language it is in (<html lang>) and, for pages one folder down,
// where the shared assets live (<html data-base="../">).
const root = typeof document !== 'undefined' ? document.documentElement : null;
export const LANG = root && (root.lang || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
export const BASE = (root && root.dataset.base) || '';

// Words drawn by the scripts (map labels, form messages). Everything else is in the HTML.
const ES = {
  // offices
  'New York': 'Nueva York',
  'Commercial · 276 Fifth Ave.': 'Comercial · 276 Fifth Ave.',
  'Commercial · Residential · Winter Springs': 'Comercial · Residencial · Winter Springs',
  'New York · Commercial': 'Nueva York · Comercial',
  'Florida · Commercial & residential': 'Florida · Comercial y residencial',
  'New York · 276 Fifth Ave.': 'Nueva York · 276 Fifth Ave.',
  // property types
  Office: 'Oficinas',
  Retail: 'Comercio minorista',
  Industrial: 'Industrial',
  Multifamily: 'Multifamiliar',
  Hospitality: 'Hotelería',
  Healthcare: 'Salud',
  'Mixed use': 'Uso mixto',
  'Land development': 'Desarrollo de terrenos',
  Storage: 'Almacenamiento',
  Restaurants: 'Restaurantes',
  Churches: 'Iglesias',
  'Special purpose': 'Uso especial',
  // places
  'Financial District': 'Distrito Financiero',
  'East Orlando · UCF': 'Este de Orlando · UCF',
  'Downtown Orlando': 'Centro de Orlando',
  'International Drive': 'International Drive',
  // page
  'Previous chapter': 'Capítulo anterior',
  'Next chapter': 'Capítulo siguiente',
  'CIIN Co. commercial listings on Crexi': 'Propiedades comerciales de CIIN Co. en Crexi',
  'Please enter your name.': 'Escriba su nombre.',
  'Please enter a valid email address.': 'Escriba un correo electrónico válido.',
  'Please tell us a little about what you need.': 'Cuéntenos un poco sobre lo que necesita.',
  'Please check the highlighted fields.': 'Revise los campos marcados.',
  'Sending…': 'Enviando…',
  'Your message could not be sent. Please email': 'No pudimos enviar su mensaje. Escríbanos a',
  'or call': 'o llame al',
};

export const t = (s) => (LANG === 'es' && ES[s]) || s;
