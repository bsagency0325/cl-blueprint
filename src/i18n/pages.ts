// Copy for the inner pages (Services, Score, About, Contact), in English and Spanish.
// The home page copy lives in home.ts; FAQ answers are reused from there so they never disagree.
import { content, type Lang } from './home';

const faqEn = content.en.faq.items;
const faqEs = content.es.faq.items;
// Picks questions from the home FAQ list by position (see home.ts).
const pick = (items: { q: string; a: string }[], idx: number[]) => idx.map((i) => items[i]);

const en = {
  services: {
    meta: {
      title: 'AI Receptionist, Google Maps & Ads for Contractors | Blueprint',
      description:
        'One system for home service businesses: an AI receptionist that answers every call in English and Spanish, Google Maps and AI search visibility, reviews and ads.',
    },
    head: {
      eyebrow: 'Services',
      title: 'Every lead answered. More jobs on your calendar.',
      sub: 'Every business gets the same Foundation. Then, depending on your stage, we add Stand Out, Scale Up, or both.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions about the system.',
      // Trade and area, AI receptionist, ad spend, how fast.
      items: pick(faqEn, [1, 8, 3, 6]),
    },
  },
  score: {
    meta: {
      title: 'Free Blueprint Score | Marketing Audit for Contractors',
      description:
        'Free audit for home service businesses: your Google Maps rank, AI search visibility, lead response speed and reviews vs. competitors. Sent within one business day.',
    },
    head: {
      eyebrow: 'Free Blueprint Score',
      title: 'Find out where your next jobs are going.',
      sub: 'We check how customers find you, how fast you answer and how you stack up against the competitors in your city. Free, and it takes 30 seconds to ask for it.',
    },
    checks: {
      eyebrow: 'What we check',
      title: 'Six things that decide who gets the call.',
      items: [
        { title: 'Google Maps', body: 'Where you show up when someone nearby searches for your trade, and what your Google Business Profile is missing.' },
        { title: 'AI search', body: 'Whether ChatGPT and Google’s AI name you when people ask who to call, and who they name instead.' },
        { title: 'Response speed', body: 'How long a new customer waits for an answer when they call, text or message you.' },
        { title: 'Reviews', body: 'How many reviews you have, how recent they are, and how they compare to the top competitors near you.' },
        { title: 'Website', body: 'Whether your site loads fast on a phone and makes it easy to call or book.' },
        { title: 'Listings', body: 'Whether your name, phone and hours match on Yelp, Angi, Nextdoor, BBB and the rest.' },
      ],
      closing: 'Plus an estimate of what it’s costing you every month.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'About your Score.',
      items: [
        faqEn[0],
        { q: 'Is it really free?', a: 'Yes. No card and no catch. You get your Score whether or not you ever work with us.' },
        { q: 'Are you going to pressure me to buy?', a: 'No. If you want, we walk you through your Score on a quick call and tell you which path fits. If we can’t help, we’ll tell you that too.' },
        { q: 'How do I get it?', a: 'Type your business name and city, then tell us where to send it. Your Score arrives by text and email within one business day.' },
        faqEn[9],
      ],
    },
  },
  contact: {
    meta: {
      title: 'Contact Blueprint Strategies | Book a Quick Call',
      description:
        'Talk to Piero at Blueprint Strategies, in English or Spanish. AI growth systems for home service businesses, based in Las Vegas and working across the U.S.',
    },
    head: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your business.',
      sub: 'Book a quick call with Piero, in English or Spanish. No pressure.',
    },
    book: 'Book a quick call',
    write: 'Prefer to write?',
    where: 'Las Vegas, NV · Working with owners across the U.S.',
    nudge: {
      title: 'Haven’t gotten your Score yet?',
      body: 'Start there, so the call is about your numbers.',
      button: 'Get my free Score',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Before you call.',
      items: faqEn,
    },
  },
};

const es: typeof en = {
  services: {
    meta: {
      title: 'Recepcionista con IA, Google Maps y anuncios | Blueprint',
      description:
        'Un solo sistema para contratistas: recepcionista con IA que contesta cada llamada en español e inglés, Google Maps, búsquedas con IA, reseñas y anuncios.',
    },
    head: {
      eyebrow: 'Servicios',
      title: 'Cada cliente atendido. Más trabajos en tu agenda.',
      sub: 'Todos los negocios llevan La Base. Luego, según tu etapa, sumamos Destaca, Acelera o las dos.',
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Preguntas sobre el sistema.',
      items: pick(faqEs, [1, 8, 3, 6]),
    },
  },
  score: {
    meta: {
      title: 'Blueprint Score gratis | Auditoría para contratistas',
      description:
        'Auditoría gratis para contratistas: tu lugar en Google Maps, si la IA te recomienda, qué tan rápido contestas y tus reseñas. Te llega en un día hábil.',
    },
    head: {
      eyebrow: 'Blueprint Score gratis',
      title: 'Descubre a dónde se están yendo tus próximos trabajos.',
      sub: 'Revisamos cómo te encuentran, qué tan rápido contestas y cómo estás frente a la competencia de tu ciudad. Es gratis y pedirlo toma 30 segundos.',
    },
    checks: {
      eyebrow: 'Qué revisamos',
      title: 'Seis cosas que deciden a quién llaman.',
      items: [
        { title: 'Google Maps', body: 'Dónde sales cuando alguien cerca busca tu oficio, y qué le falta a tu perfil de Google.' },
        { title: 'Búsqueda con IA', body: 'Si ChatGPT y la IA de Google te nombran cuando preguntan a quién llamar, y a quién nombran en tu lugar.' },
        { title: 'Velocidad de respuesta', body: 'Cuánto espera un cliente nuevo cuando te llama, te escribe o te manda mensaje.' },
        { title: 'Reseñas', body: 'Cuántas tienes, qué tan recientes son y cómo te comparas con los mejores de tu zona.' },
        { title: 'Sitio web', body: 'Si tu página carga rápido en el celular y hace fácil que te llamen o agenden.' },
        { title: 'Directorios', body: 'Si tu nombre, teléfono y horario coinciden en Yelp, Angi, Nextdoor, BBB y los demás.' },
      ],
      closing: 'Y un estimado de lo que te está costando cada mes.',
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Sobre tu Score.',
      items: [
        faqEs[0],
        { q: '¿De verdad es gratis?', a: 'Sí. Sin tarjeta y sin letra chiquita. Recibes tu Score trabajes o no con nosotros.' },
        { q: '¿Me van a presionar para comprar?', a: 'No. Si quieres, te explicamos tu Score en una llamada corta y te decimos qué camino te conviene. Si no te podemos ayudar, también te lo decimos.' },
        { q: '¿Cómo me llega?', a: 'Pones el nombre de tu negocio y tu ciudad, y luego a dónde te lo mandamos. Te llega por mensaje y correo dentro de un día hábil.' },
        faqEs[9],
      ],
    },
  },
  contact: {
    meta: {
      title: 'Contacto | Habla con Blueprint Strategies',
      description:
        'Habla con Piero de Blueprint Strategies, en español o en inglés. Sistemas de crecimiento con IA para contratistas, desde Las Vegas para todo EE. UU.',
    },
    head: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu negocio.',
      sub: 'Agenda una llamada corta con Piero, en español o en inglés. Sin presión.',
    },
    book: 'Agenda una llamada corta',
    write: '¿Prefieres escribir?',
    where: 'Las Vegas, NV · Trabajamos con dueños de todo EE. UU.',
    nudge: {
      title: '¿Todavía no tienes tu Score?',
      body: 'Empieza por ahí, así la llamada es sobre tus números.',
      button: 'Quiero mi Score gratis',
    },
    faq: {
      eyebrow: 'Preguntas',
      title: 'Antes de llamar.',
      items: faqEs,
    },
  },
};

export const pages: Record<Lang, typeof en> = { en, es };
