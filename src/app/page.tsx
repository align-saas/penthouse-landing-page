import Head from 'next/head';

const partnerLogos = [
  { name: "Euro", src: "/img/clients/euro_washed.png" },
  { name: "Eco", src: "/img/clients/eco_washed.png" },
  { name: "Sporta", src: "/img/clients/SPORTA_washed.png" },
  { name: "Palma", src: "/img/clients/palma_washed.png" },
  { name: "Transp", src: "/img/clients/transp_washed.png" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Penthouse Visuals - Transforma la gestión de tu negocio</title>
        <meta name="description" content="Servicio de consultoría en análisis de datos." />
      </Head>

      {/* Header */}
      <header className="bg-dark-purple text-white py-16 text-center">
      <img src="/img/nmbBlanco.png" alt="Logo de Penthouse" className="mx-auto w-80 h-auto mb-4" />
        <h1 className="text-5xl font-bold">Somos un aliado estratégico para tus negocios</h1>
        <p className="text-xl mt-4">Minimizamos costos, maximizamos ventas, satisfacción y
precisión.</p>
        <div className="text-center mt-8">
        <a href="https://docs.google.com/forms/d/1Z3BTMqA9k0zjc5kjqLkcucAt7H3W_6AzcxqAbvl7S7I/edit" className="inline-block bg-dark-purple text-white font-semibold py-3 px-6 rounded-lg mr-4 hover:bg-teal-600 transition">
            Conversemos →
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbUZkPthnKViwihqmyG8a9mt5PEy9nSs5Mr2ZfX5VFo5heNg/viewform?usp=sf_link" className="inline-block bg-alice-blue text-black font-semibold py-3 px-6 rounded-lg hover:bg-teal-800 transition">
            Contáctanos →
        </a>
</div>
      </header>


      {/* Características Clave */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Primero entendemos tu negocio, luego diseñamos la solución</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/img/Azul.svg" alt="Análisis profundo" className="h-12 mx-auto mb-4 text-blue-800" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-800 mb-2">Estrategia</h3>
            <p className="text-blue-800 text-justify">Entendemos la arquitectura de tu negocio, asociamos los puntos clave hacia una solución integral.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/img/Azul.svg" alt="Optimización" className="h-12 mx-auto mb-4 text-blue-800" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Desarrollo</h3>
            <p className="text-blue-800 text-justify">Conectamos tu sistema con nuestras métricas y modelos analíticos.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/img/Azul.svg" alt="Reportes Claros" className="h-12 mx-auto mb-4 text-blue-800" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Suscripción</h3>
            <p className="text-blue-800 text-justify">Ofrecemos hosting y soporte técnico mensual que te permite tomar las decisiones correctas.</p>
          </div>
        </div>
      </section>
      {/* Penthouse Metrics */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-[36px] shadow-xl ring-1 ring-[#3858E1]/15 transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#3858E1]/40 hover:-translate-y-1">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#3858E1]/60 via-[#3858E1]/45 to-[#3858E1]/30"></div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/25 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#3858E1]/45 blur-3xl"></div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-8 px-8 py-12 md:px-12">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  EMPECEMOS POR MEDIR LO QUE NO PUEDES MEDIR.
                </h2>
                <p className="mt-6 text-2xl md:text-3xl font-semibold text-white/90 max-w-xl">
                  LO QUE SE PUEDE MEDIR, SE PUEDE MEJORAR.
                </p>
                <p className="mt-8 text-sm md:text-base font-semibold text-white/80 uppercase tracking-[0.2em]">
                  PARA ESO ESTA PENTHOUSE METRICS
                </p>
              </div>
              <div className="flex md:justify-end justify-center">
                  <img src="/img/1.jpeg" alt="Penthouse Metrics" className="w-full h-full object-contain rounded-[48px] rotate-[6deg]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Empresas */}
      <section className="bg-[#131028] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-white/65">
              Empresas
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Empresas que han confiado en nosotros
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/75">
              Logos temporales de referencia. Puedes reemplazarlos cuando quieras.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {partnerLogos.map((logo) => (
              <article
                key={logo.name}
                className="min-h-[110px] rounded-2xl border border-white/15 bg-white/[0.04] p-5 md:p-6 flex items-center justify-center shadow-[0_18px_36px_-26px_rgba(0,0,0,0.8)] transition duration-300 hover:bg-white/[0.09] hover:-translate-y-1"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Productos y Áreas de Impacto */}
      <section className="py-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800">Áreas de Impacto</h2>
            <p className="text-lg text-blue-800 mt-3">
              Soluciones analíticas enfocadas en resultados, diseñadas para cada área clave del negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img src="/img/Azul.svg" alt="Marketing Analytics" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Marketing Analytics</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Atribución, CAC y LTV para campañas con impacto medible.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img src="/img/Azul.svg" alt="Supply Chain Analytics" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Supply Chain Analytics</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Inventario, tiempos y eficiencia operativa en tiempo real.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img src="/img/Azul.svg" alt="Financial Analytics" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Financial Analytics</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Proyecciones, rentabilidad y control financiero preciso.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <img src="/img/Azul.svg" alt="HR Analytics" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">HR Analytics</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Retención, desempeño y planificación de talento.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Carruseles de Experiencias  run pipeline */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-dark-purple to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">¿Cómo generamos valor?</h2>
            <p className="text-white/80 mt-3">
              "Tenemos una cualidad escaza: entendemos tanto los negocios como los datos"
            </p>
          </div>
        </div>

        <div className="marquee mb-8">
          <div className="marquee__track px-4">
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Marketing Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Atribución multicanal</h3>
              <p className="text-sm text-white/80 mt-3">
                ROI por campaña y redistribución de presupuesto con foco en LTV.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Supply Chain Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Inventario predictivo</h3>
              <p className="text-sm text-white/80 mt-3">
                Reducción de quiebres y optimización de rotación por categoría.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Financial Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Cashflow en tiempo real</h3>
              <p className="text-sm text-white/80 mt-3">
                Alertas de liquidez y proyecciones por escenario.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">HR Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Retención de talento</h3>
              <p className="text-sm text-white/80 mt-3">
                Modelos de rotación y planes de intervención por equipo.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Operaciones</p>
              <h3 className="text-lg font-semibold mt-2">Tableros ejecutivos</h3>
              <p className="text-sm text-white/80 mt-3">
                KPIs críticos en un solo panel para toma de decisiones rápida.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Comercial</p>
              <h3 className="text-lg font-semibold mt-2">Forecast de ventas</h3>
              <p className="text-sm text-white/80 mt-3">
                Predicción por región, canal y rep para mejorar el cierre.
              </p>
            </div>

            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Marketing Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Atribución multicanal</h3>
              <p className="text-sm text-white/80 mt-3">
                ROI por campaña y redistribución de presupuesto con foco en LTV.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Supply Chain Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Inventario predictivo</h3>
              <p className="text-sm text-white/80 mt-3">
                Reducción de quiebres y optimización de rotación por categoría.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Financial Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Cashflow en tiempo real</h3>
              <p className="text-sm text-white/80 mt-3">
                Alertas de liquidez y proyecciones por escenario.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">HR Analytics</p>
              <h3 className="text-lg font-semibold mt-2">Retención de talento</h3>
              <p className="text-sm text-white/80 mt-3">
                Modelos de rotación y planes de intervención por equipo.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Operaciones</p>
              <h3 className="text-lg font-semibold mt-2">Tableros ejecutivos</h3>
              <p className="text-sm text-white/80 mt-3">
                KPIs críticos en un solo panel para toma de decisiones rápida.
              </p>
            </div>
            <div className="w-80 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Comercial</p>
              <h3 className="text-lg font-semibold mt-2">Forecast de ventas</h3>
              <p className="text-sm text-white/80 mt-3">
                Predicción por región, canal y rep para mejorar el cierre.
              </p>
            </div>
          </div>
        </div>

        <div className="marquee marquee--reverse">
          <div className="marquee__track px-4">
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo Retail</p>
              <h3 className="text-lg font-semibold mt-2">“Ahora decidimos con datos”</h3>
              <p className="text-sm text-white/80 mt-3">
                “La visibilidad de ventas e inventario nos permitió reducir pérdidas y
                mejorar la reposición en semanas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo Finanzas</p>
              <h3 className="text-lg font-semibold mt-2">“Control total del cashflow”</h3>
              <p className="text-sm text-white/80 mt-3">
                “Pasamos de reportes mensuales a decisiones diarias con proyecciones
                confiables.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo Logística</p>
              <h3 className="text-lg font-semibold mt-2">“Menos quiebres, más servicio”</h3>
              <p className="text-sm text-white/80 mt-3">
                “El modelo de demanda nos dio estabilidad y evitó roturas críticas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo RRHH</p>
              <h3 className="text-lg font-semibold mt-2">“Mejoramos la retención”</h3>
              <p className="text-sm text-white/80 mt-3">
                “Identificamos equipos de riesgo y actuamos antes de perder talento.”
              </p>
            </div>

            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo Retail</p>
              <h3 className="text-lg font-semibold mt-2">“Ahora decidimos con datos”</h3>
              <p className="text-sm text-white/80 mt-3">
                “La visibilidad de ventas e inventario nos permitió reducir pérdidas y
                mejorar la reposición en semanas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo Finanzas</p>
              <h3 className="text-lg font-semibold mt-2">“Control total del cashflow”</h3>
              <p className="text-sm text-white/80 mt-3">
                “Pasamos de reportes mensuales a decisiones diarias con proyecciones
                confiables.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo Logística</p>
              <h3 className="text-lg font-semibold mt-2">“Menos quiebres, más servicio”</h3>
              <p className="text-sm text-white/80 mt-3">
                “El modelo de demanda nos dio estabilidad y evitó roturas críticas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Objetivo RRHH</p>
              <h3 className="text-lg font-semibold mt-2">“Mejoramos la retención”</h3>
              <p className="text-sm text-white/80 mt-3">
                “Identificamos equipos de riesgo y actuamos antes de perder talento.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-700/80">Real time analytics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">Tu negocio en la palma de tu mano</h2>
            <p className="text-blue-800/80 mt-3">
              Un vistazo a cómo transformamos datos en decisiones accionables.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-3 md:p-4">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-blue-100">
              <img
                src="/img/22.png"
                alt="Explora nuestro trabajo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="py-4 bg-gray-100"></div>
      {/* Testimonios */}
      {/* CTA Repetido */}
      <section id="cta" className="bg-dark-purple py-16 text-center ">
        <h2 className="text-3xl font-bold text-white">¿Listo para optimizar tu empresa?</h2>
        <p  className="text-xl text-white mt-4">Agenda una reunion y descubre como podemos mejorar tu eficiencia.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbUZkPthnKViwihqmyG8a9mt5PEy9nSs5Mr2ZfX5VFo5heNg/viewform?usp=sf_link" className="mt-8 inline-block bg-royal-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          Contáctanos
        </a>
      </section>


      {/* Footer */}
       <footer id="contact" className="bg-white text-[#3B58E1] py-8 text-center">
        <p  className="text-lg">Contáctanos en: contacto@penthouseconsultings.com</p>
        <div className="flex justify-center mt-4">
          {/* <a href="#" className="mx-4 hover:text-yellow-500 transition">Instagram</a> */}
          <a href="https://www.linkedin.com/company/penthouse-consulting/" className="mx-4 hover:text-yellow-500 transition">LinkedIn</a>
        </div>
        <p  className="mt-4 text-sm">&copy; 2026 Penthouse. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
