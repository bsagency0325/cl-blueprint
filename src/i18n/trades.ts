// Trades for the "pick your trade" chips. Picking one rewrites the example screens
// (AI call, missed-call text, Google Maps search, feed post, before/after) for that trade.
// Placeholder examples only: no real businesses or results.
import type { Lang } from './home';

type TradeCopy = {
  label: string;
  job: string; // short job name used on "Booked · ..." lines
  caller: string; // first line of the AI receptionist call
  text: string; // first customer text after a missed call
  search: string; // what the customer types into Google
  ask: string; // what the customer asks an AI assistant
  ad: string; // the post in their feed
};

export const tradeKeys = ['hvac', 'plumbing', 'roofing', 'electrical', 'landscaping', 'pressure'] as const;
export type TradeKey = (typeof tradeKeys)[number];

export const trades: Record<Lang, Record<TradeKey, TradeCopy>> = {
  en: {
    hvac: {
      label: 'HVAC',
      job: 'AC repair',
      caller: 'Hi, my AC stopped cooling. Can someone come today?',
      text: 'AC stopped cooling. Can someone come tomorrow?',
      search: 'AC repair near me',
      ask: 'Who should I call for AC repair near me?',
      ad: 'AC not cooling? We can be there this week.',
    },
    plumbing: {
      label: 'Plumbing',
      job: 'Water heater',
      caller: 'Hi, my water heater is leaking. Can someone come today?',
      text: 'Water heater is leaking. Can someone come tomorrow?',
      search: 'plumber near me',
      ask: 'Who’s a good plumber near me?',
      ad: 'Water heater acting up? We can be there this week.',
    },
    roofing: {
      label: 'Roofing',
      job: 'Roof leak',
      caller: 'Hi, my roof started leaking after the storm. Can someone look at it today?',
      text: 'Roof is leaking. Can someone come look tomorrow?',
      search: 'roof repair near me',
      ask: 'Who should I call to fix a roof leak near me?',
      ad: 'Roof leaking? We can take a look this week.',
    },
    electrical: {
      label: 'Electrical',
      job: 'Electrical repair',
      caller: 'Hi, half my outlets stopped working. Can someone come today?',
      text: 'Outlets stopped working. Can someone come tomorrow?',
      search: 'electrician near me',
      ask: 'Who’s a good electrician near me?',
      ad: 'Breaker keeps tripping? We can be there this week.',
    },
    landscaping: {
      label: 'Landscaping',
      job: 'Yard cleanup',
      caller: 'Hi, I need my yard cleaned up. Can someone come by today for a quote?',
      text: 'Need a yard cleanup. Can someone come tomorrow?',
      search: 'landscaper near me',
      ask: 'Who’s a good landscaper near me?',
      ad: 'Yard getting out of hand? We can be there this week.',
    },
    pressure: {
      label: 'Pressure washing',
      job: 'Driveway wash',
      caller: 'Hi, I want my driveway and patio pressure washed. Can someone come today?',
      text: 'Need my driveway washed. Can someone come tomorrow?',
      search: 'pressure washing near me',
      ask: 'Who does pressure washing near me?',
      ad: 'Driveway looking rough? We can be there this week.',
    },
  },
  es: {
    hvac: {
      label: 'HVAC',
      job: 'Reparación de A/C',
      caller: 'Hola, mi aire dejó de enfriar. ¿Pueden venir hoy?',
      text: 'El aire dejó de enfriar. ¿Pueden venir mañana?',
      search: 'reparación de aire acondicionado cerca de mí',
      ask: '¿A quién llamo para reparar mi aire acondicionado?',
      ad: '¿Tu aire no enfría? Podemos ir esta misma semana.',
    },
    plumbing: {
      label: 'Plomería',
      job: 'Calentador de agua',
      caller: 'Hola, mi calentador de agua está goteando. ¿Pueden venir hoy?',
      text: 'Mi calentador está goteando. ¿Pueden venir mañana?',
      search: 'plomero cerca de mí',
      ask: '¿Quién es un buen plomero cerca de mí?',
      ad: '¿Problemas con tu calentador? Podemos ir esta misma semana.',
    },
    roofing: {
      label: 'Techos',
      job: 'Gotera en el techo',
      caller: 'Hola, se me empezó a gotear el techo con la tormenta. ¿Pueden venir a verlo hoy?',
      text: 'Se está goteando el techo. ¿Pueden venir a verlo mañana?',
      search: 'reparación de techos cerca de mí',
      ask: '¿A quién llamo para arreglar una gotera en el techo?',
      ad: '¿Gotea tu techo? Podemos ir a revisarlo esta semana.',
    },
    electrical: {
      label: 'Electricidad',
      job: 'Reparación eléctrica',
      caller: 'Hola, la mitad de mis enchufes dejaron de funcionar. ¿Pueden venir hoy?',
      text: 'Se me fueron los enchufes. ¿Pueden venir mañana?',
      search: 'electricista cerca de mí',
      ask: '¿Quién es un buen electricista cerca de mí?',
      ad: '¿Se te bota el breaker? Podemos ir esta misma semana.',
    },
    landscaping: {
      label: 'Jardinería',
      job: 'Limpieza de jardín',
      caller: 'Hola, necesito limpiar mi jardín. ¿Pueden venir hoy a cotizar?',
      text: 'Necesito limpiar el jardín. ¿Pueden venir mañana?',
      search: 'jardinero cerca de mí',
      ask: '¿Quién es un buen jardinero cerca de mí?',
      ad: '¿Tu jardín se salió de control? Podemos ir esta misma semana.',
    },
    pressure: {
      label: 'Lavado a presión',
      job: 'Lavado de entrada',
      caller: 'Hola, quiero lavar a presión mi entrada y el patio. ¿Pueden venir hoy?',
      text: 'Quiero lavar mi entrada. ¿Pueden venir mañana?',
      search: 'lavado a presión cerca de mí',
      ask: '¿Quién hace lavado a presión cerca de mí?',
      ad: '¿Tu entrada se ve sucia? Podemos ir esta misma semana.',
    },
  },
};

const words = {
  en: { booked: 'Booked', today: 'Today', tomorrow: 'Tomorrow', lead: 'New lead', answered: 'answered in seconds', lost: 'Lost' },
  es: { booked: 'Agendado', today: 'Hoy', tomorrow: 'Mañana', lead: 'Nuevo cliente', answered: 'contestado en segundos', lost: 'Perdido' },
};

// Every line on the page that changes with the trade, keyed by its data-tk attribute.
export function tradeLines(lang: Lang, key: TradeKey): Record<string, string> {
  const t = trades[lang][key];
  const w = words[lang];
  return {
    caller: t.caller,
    callBooked: `${w.booked} · ${t.job} · ${w.today} 4:00 PM`,
    text: t.text,
    textBooked: `${w.booked} · ${t.job} · ${w.tomorrow} 9:00 AM`,
    search: t.search,
    ask: t.ask,
    ad: t.ad,
    lead: `${w.lead} · ${t.job} · ${w.answered}`,
    lost: `${w.lost} · ${t.job}`,
  };
}

export const pickerLabel: Record<Lang, string> = { en: 'Your trade', es: 'Tu oficio' };
