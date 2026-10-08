export type Lang = 'en' | 'es';

const en = {
  meta: {
    title: 'Blueprint Strategies | AI Growth Systems for Home Service Businesses',
    description:
      'Every call answered, every lead followed up, every job reviewed. AI growth systems for HVAC, plumbing, roofing, electrical and more. 10+ booked appointments in 30 days, guaranteed.',
  },
  ids: { system: 'system', how: 'how-it-works', guarantee: 'guarantee', pricing: 'pricing', score: 'score', faq: 'faq' },
  hero: {
    eyebrow: 'AI growth systems for home services',
    title: 'Stop losing jobs to whoever answers first.',
    sub: 'We install the AI system that answers every call, follows up on every lead and turns past jobs into five-star reviews. Built for HVAC, plumbing, roofing, electrical and more.',
    primary: 'Get your free Blueprint Score',
    secondary: 'See how it works',
    guarantee: '10+ booked appointments in your first 30 days, or we keep working free.',
    card: {
      label: 'Blueprint Score · example',
      metrics: ['Google Maps ranking', 'AI search visibility', 'Lead response speed', 'Reviews vs. competitors'],
      lost: 'Est. revenue lost / month',
    },
  },
  leaks: {
    eyebrow: 'Where the money leaks',
    title: 'Your work is good. Your system is leaking jobs.',
    sub: 'Most home service businesses don’t have a lead problem. They have four leaks between the lead and the booked job.',
    items: [
      { title: 'Invisible where people look', body: 'Not in the Google Maps top 3, and not the company ChatGPT or Google AI recommends in your area.' },
      { title: 'Calls go to voicemail', body: 'You’re on a job, the phone rings, and the customer calls the next company on the list.' },
      { title: 'Past customers forgotten', body: 'Happy customers never asked for a review, a referral or their next service.' },
      { title: 'Quotes that die quietly', body: 'Estimates sent, no follow-up. Thousands in work that was already half sold.' },
    ],
  },
  system: {
    eyebrow: 'The Blueprint system',
    title: 'Six layers. One system that books jobs.',
    sub: 'Built on GoHighLevel and AI, installed and run for you. We start with what pays fastest and build from there.',
    layers: [
      { title: 'AI search visibility', body: 'Show up on Google Maps and when people ask AI who to call. SEO, GEO and Google Business, done for you.' },
      { title: 'Speed-to-lead', body: 'AI voice receptionist, missed-call text-back and web chat. Every lead answered in seconds, 24/7.' },
      { title: 'Reputation & recovery', body: 'Reviews from past jobs, referrals, and follow-up on open estimates that never closed.' },
      { title: 'Paid ads', body: 'Meta campaigns built for your trade, your area and your best-paying jobs.' },
      { title: 'Lead quality', body: 'AI scores every lead by job type, urgency and value, so your team calls the best ones first.' },
      { title: 'Close-rate system', body: 'Follow-up automation, call grading and coaching. More booked jobs from the same leads.' },
    ],
  },
  how: {
    eyebrow: 'How it works',
    title: 'Results in weeks, not months.',
    steps: [
      { label: 'Day 0', title: 'Get your Blueprint Score', body: 'A free audit of your rankings, AI visibility, response speed and reviews, plus what it’s costing you every month.' },
      { label: 'Week 1–2', title: 'We install the system', body: 'Speed-to-lead goes live, past customers get review requests, open estimates get followed up, and ads launch.' },
      { label: 'Day 30', title: 'You get booked', body: '10+ booked appointments, a weekly results report, and a clear plan for what we build next.' },
    ],
  },
  guarantee: {
    eyebrow: 'The guarantee',
    title: '10+ booked appointments in 30 days. Or we work free.',
    body: 'If we don’t book you at least 10 qualified appointments in your first 30 days after ads go live, we keep working for free until we do.',
    conditions: [
      'Minimum ad budget for your trade and area',
      'Your team answers or calls back leads quickly',
      'Qualified = booked, in your service area, for a service you offer',
    ],
    note: 'Conditions are agreed in writing before we start. Ad spend is paid directly to Meta.',
  },
  trades: {
    title: 'Built for the trades',
    list: ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Pressure washing', 'Landscaping', 'And more home services'],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple, month-to-month.',
    sub: 'No long contracts. 30-day notice to cancel. Ad spend is separate and paid directly to Meta.',
    plans: [
      {
        name: 'Blueprint Score',
        price: 'Free',
        unit: '',
        body: 'See exactly where you’re losing jobs and money.',
        features: ['Google Maps ranking', 'AI search visibility check', 'Website and response-speed review', 'Reviews vs. competitors'],
        cta: 'Get your Score',
        featured: false,
      },
      {
        name: 'Blueprint Launch',
        price: '$1,497',
        unit: '/mo',
        body: 'The full system to get you booked, with the 30-day guarantee.',
        features: ['Speed-to-lead: AI voice, text-back, chat', 'Review Blitz on past customers', 'Estimate recovery', 'Meta ads management', 'Weekly results report', '$997 one-time setup'],
        cta: 'Start with your Score',
        featured: true,
      },
      {
        name: 'Founding client',
        price: '$997',
        unit: '/mo',
        body: 'Launch at a founding rate, setup waived, in exchange for a case study.',
        features: ['Everything in Launch', 'Setup fee waived', 'Rate locked while you stay', 'Limited to 3 businesses'],
        cta: 'Ask about a spot',
        featured: false,
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers.',
    items: [
      { q: 'Do I have to sign a long contract?', a: 'No. Month-to-month with 30 days’ notice. We earn the next month by showing results every week.' },
      { q: 'How fast will I see results?', a: 'Speed-to-lead and review requests work in the first week. Ads start booking appointments in weeks two to four. Rankings and AI visibility build over two to three months.' },
      { q: 'Is ad spend included?', a: 'No. You pay Meta directly for ads, so you always own the account and see every dollar. Our fee covers the system and the management.' },
      { q: 'What happens if you don’t hit 10 appointments?', a: 'We keep working for free until we do, as long as the written conditions are met.' },
      { q: 'Do I need to be good with technology?', a: 'No. We set everything up and run it. You answer the booked appointments and do the work you’re great at.' },
      { q: '¿Atienden en español?', a: 'Sí. Trabajamos en inglés y en español, y podemos atender a tus clientes en ambos idiomas.' },
    ],
  },
  score: {
    eyebrow: 'Free Blueprint Score',
    title: 'Find out what you’re losing every month.',
    sub: 'Tell us about your business. We’ll send your Blueprint Score with your rankings, AI visibility, response speed and the revenue you’re leaving on the table.',
    fields: { name: 'Your name', business: 'Business name', trade: 'Trade', city: 'City', phone: 'Mobile phone', email: 'Email' },
    tradePlaceholder: 'Select your trade',
    consent:
      'I agree to receive text messages from Blueprint Strategies about my Score and services. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase.',
    consentLinks: { privacy: 'Privacy Policy', terms: 'Terms' },
    submit: 'Get my free Score',
    note: 'No spam. We’ll only contact you about your Score.',
  },
};

const es: typeof en = {
  meta: {
    title: 'Blueprint Strategies | Sistemas de crecimiento con IA para negocios del hogar',
    description:
      'Cada llamada contestada, cada cliente atendido, cada trabajo con reseña. Sistemas de crecimiento con IA para HVAC, plomería, techos, electricidad y más. 10+ citas en 30 días, garantizado.',
  },
  ids: { system: 'sistema', how: 'como-funciona', guarantee: 'garantia', pricing: 'precios', score: 'score', faq: 'preguntas' },
  hero: {
    eyebrow: 'Sistemas de crecimiento con IA para servicios del hogar',
    title: 'Deja de perder trabajos por no contestar primero.',
    sub: 'Instalamos el sistema con IA que contesta cada llamada, le da seguimiento a cada cliente y convierte tus trabajos pasados en reseñas de cinco estrellas. Hecho para HVAC, plomería, techos, electricidad y más.',
    primary: 'Obtén tu Blueprint Score gratis',
    secondary: 'Mira cómo funciona',
    guarantee: '10+ citas agendadas en tus primeros 30 días, o seguimos trabajando gratis.',
    card: {
      label: 'Blueprint Score · ejemplo',
      metrics: ['Posición en Google Maps', 'Visibilidad en la IA', 'Velocidad de respuesta', 'Reseñas vs. competencia'],
      lost: 'Ingresos perdidos / mes (est.)',
    },
  },
  leaks: {
    eyebrow: 'Dónde se te escapa el dinero',
    title: 'Tu trabajo es bueno. Tu sistema está perdiendo clientes.',
    sub: 'La mayoría de los negocios de servicios no tiene un problema de clientes. Tiene cuatro fugas entre el cliente y el trabajo agendado.',
    items: [
      { title: 'Invisible donde te buscan', body: 'No apareces en el top 3 de Google Maps, ni eres la empresa que ChatGPT o la IA de Google recomiendan en tu zona.' },
      { title: 'Llamadas al buzón de voz', body: 'Estás en un trabajo, suena el teléfono y el cliente llama a la siguiente empresa de la lista.' },
      { title: 'Clientes pasados olvidados', body: 'Nunca le pediste una reseña, una referencia ni su próximo servicio a tus clientes contentos.' },
      { title: 'Cotizaciones que mueren en silencio', body: 'Enviaste el presupuesto y nadie dio seguimiento. Miles de dólares que ya estaban medio vendidos.' },
    ],
  },
  system: {
    eyebrow: 'El sistema Blueprint',
    title: 'Seis capas. Un sistema que agenda trabajos.',
    sub: 'Construido con GoHighLevel e IA, instalado y operado por nosotros. Empezamos por lo que paga más rápido y construimos desde ahí.',
    layers: [
      { title: 'Visibilidad en búsquedas con IA', body: 'Aparece en Google Maps y cuando la gente le pregunta a la IA a quién llamar. SEO, GEO y Google Business, hecho por nosotros.' },
      { title: 'Respuesta inmediata', body: 'Recepcionista de voz con IA, mensaje automático por llamada perdida y chat web. Cada cliente atendido en segundos, 24/7.' },
      { title: 'Reputación y recuperación', body: 'Reseñas de trabajos pasados, referencias y seguimiento a cotizaciones que nunca se cerraron.' },
      { title: 'Anuncios pagados', body: 'Campañas en Meta hechas para tu oficio, tu zona y tus trabajos que mejor pagan.' },
      { title: 'Calidad de clientes', body: 'La IA califica cada cliente por tipo de trabajo, urgencia y valor, para que tu equipo llame primero a los mejores.' },
      { title: 'Sistema de cierre', body: 'Seguimiento automático, evaluación de llamadas y coaching. Más trabajos cerrados con los mismos clientes.' },
    ],
  },
  how: {
    eyebrow: 'Cómo funciona',
    title: 'Resultados en semanas, no en meses.',
    steps: [
      { label: 'Día 0', title: 'Recibe tu Blueprint Score', body: 'Una auditoría gratis de tu posición, visibilidad en la IA, velocidad de respuesta y reseñas, y cuánto te está costando cada mes.' },
      { label: 'Semana 1–2', title: 'Instalamos el sistema', body: 'Se activa la respuesta inmediata, tus clientes pasados reciben solicitudes de reseña, se da seguimiento a cotizaciones y lanzamos los anuncios.' },
      { label: 'Día 30', title: 'Tu agenda se llena', body: '10+ citas agendadas, un reporte semanal de resultados y un plan claro de lo que construimos después.' },
    ],
  },
  guarantee: {
    eyebrow: 'La garantía',
    title: '10+ citas agendadas en 30 días. O trabajamos gratis.',
    body: 'Si no te agendamos al menos 10 citas calificadas en tus primeros 30 días desde que salen los anuncios, seguimos trabajando gratis hasta lograrlo.',
    conditions: [
      'Presupuesto mínimo de anuncios para tu oficio y zona',
      'Tu equipo contesta o devuelve las llamadas rápido',
      'Calificada = agendada, en tu zona de servicio, para un servicio que ofreces',
    ],
    note: 'Las condiciones se acuerdan por escrito antes de empezar. La inversión en anuncios se paga directo a Meta.',
  },
  trades: {
    title: 'Hecho para los oficios',
    list: ['HVAC', 'Plomería', 'Techos', 'Electricidad', 'Lavado a presión', 'Jardinería', 'Y más servicios del hogar'],
  },
  pricing: {
    eyebrow: 'Precios',
    title: 'Simple, mes a mes.',
    sub: 'Sin contratos largos. 30 días de aviso para cancelar. La inversión en anuncios va aparte y se paga directo a Meta.',
    plans: [
      {
        name: 'Blueprint Score',
        price: 'Gratis',
        unit: '',
        body: 'Mira exactamente dónde estás perdiendo trabajos y dinero.',
        features: ['Posición en Google Maps', 'Revisión de visibilidad en la IA', 'Revisión de sitio web y velocidad de respuesta', 'Reseñas vs. competencia'],
        cta: 'Obtén tu Score',
        featured: false,
      },
      {
        name: 'Blueprint Launch',
        price: '$1,497',
        unit: '/mes',
        body: 'El sistema completo para llenar tu agenda, con la garantía de 30 días.',
        features: ['Respuesta inmediata: voz con IA, mensajes y chat', 'Review Blitz con clientes pasados', 'Recuperación de cotizaciones', 'Manejo de anuncios en Meta', 'Reporte semanal de resultados', 'Instalación única de $997'],
        cta: 'Empieza con tu Score',
        featured: true,
      },
      {
        name: 'Cliente fundador',
        price: '$997',
        unit: '/mes',
        body: 'Launch con tarifa de fundador y sin costo de instalación, a cambio de un caso de éxito.',
        features: ['Todo lo de Launch', 'Sin costo de instalación', 'Tarifa fija mientras sigas con nosotros', 'Solo 3 negocios'],
        cta: 'Pregunta por un lugar',
        featured: false,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Respuestas directas.',
    items: [
      { q: '¿Tengo que firmar un contrato largo?', a: 'No. Es mes a mes con 30 días de aviso. Nos ganamos el siguiente mes mostrando resultados cada semana.' },
      { q: '¿Qué tan rápido veo resultados?', a: 'La respuesta inmediata y las solicitudes de reseña funcionan desde la primera semana. Los anuncios empiezan a agendar citas entre la semana dos y la cuatro. La posición en Google y en la IA se construye en dos a tres meses.' },
      { q: '¿Los anuncios están incluidos?', a: 'No. Le pagas a Meta directamente, así siempre eres dueño de la cuenta y ves cada dólar. Nuestra tarifa cubre el sistema y el manejo.' },
      { q: '¿Qué pasa si no llegan las 10 citas?', a: 'Seguimos trabajando gratis hasta lograrlo, siempre que se cumplan las condiciones acordadas por escrito.' },
      { q: '¿Tengo que saber de tecnología?', a: 'No. Nosotros instalamos y operamos todo. Tú atiendes las citas y haces el trabajo que mejor sabes hacer.' },
      { q: 'Do you work in English?', a: 'Yes. We work in English and Spanish, and can serve your customers in both languages.' },
    ],
  },
  score: {
    eyebrow: 'Blueprint Score gratis',
    title: 'Descubre cuánto estás perdiendo cada mes.',
    sub: 'Cuéntanos de tu negocio. Te enviamos tu Blueprint Score con tu posición, visibilidad en la IA, velocidad de respuesta y el dinero que se te está escapando.',
    fields: { name: 'Tu nombre', business: 'Nombre del negocio', trade: 'Oficio', city: 'Ciudad', phone: 'Celular', email: 'Correo electrónico' },
    tradePlaceholder: 'Elige tu oficio',
    consent:
      'Acepto recibir mensajes de texto de Blueprint Strategies sobre mi Score y servicios. La frecuencia varía. Pueden aplicar cargos por mensajes y datos. Responde STOP para cancelar, HELP para ayuda. El consentimiento no es condición de compra.',
    consentLinks: { privacy: 'Política de privacidad', terms: 'Términos' },
    submit: 'Quiero mi Score gratis',
    note: 'Sin spam. Solo te contactamos sobre tu Score.',
  },
};

export const content = { en, es };
