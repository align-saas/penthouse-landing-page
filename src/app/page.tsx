import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Penthouse Visuals - Transforma la gestión de tu negocio</title>
        <meta name="description" content="Servicio de consultoría en análisis de datos." />
      </Head>

      {/* Header */}
      <header className="bg-dark-purple text-white py-16 text-center">
      <img src="/img/nmbBlanco.png" alt="Logo de Penthouse" className="mx-auto w-60 h-auto mb-4" />
        <h1 className="text-5xl font-bold">Somos un aliado estratégico para tus negocios</h1>
        <p className="text-xl mt-4">Convertimos a las empresas latinoamericanas en 100% data-driven.</p>
        <div className="text-center mt-8">
        <a href="https://docs.google.com/forms/d/1Z3BTMqA9k0zjc5kjqLkcucAt7H3W_6AzcxqAbvl7S7I/edit" className="inline-block bg-dark-purple text-white font-semibold py-3 px-6 rounded-lg mr-4 hover:bg-teal-600 transition">
            Solicita una demo →
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbUZkPthnKViwihqmyG8a9mt5PEy9nSs5Mr2ZfX5VFo5heNg/viewform?usp=sf_link" className="inline-block bg-alice-blue text-black font-semibold py-3 px-6 rounded-lg hover:bg-teal-800 transition">
            Contáctanos →
        </a>
</div>
      </header>

      {/* Características Clave */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Primero entendemos el problema, luego diseñamos la solución</h2>
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

      {/* Productos y Áreas de Impacto */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800">Productos y áreas de impacto</h2>
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

      {/* Carruseles de Experiencias */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-dark-purple to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Implementaciones y experiencias</h2>
            <p className="text-white/80 mt-3">
              Casos reales y lo que nuestros clientes dicen sobre el impacto obtenido.
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
              <p className="text-sm text-white/70">Cliente Retail</p>
              <h3 className="text-lg font-semibold mt-2">“Ahora decidimos con datos”</h3>
              <p className="text-sm text-white/80 mt-3">
                “La visibilidad de ventas e inventario nos permitió reducir pérdidas y
                mejorar la reposición en semanas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Cliente Finanzas</p>
              <h3 className="text-lg font-semibold mt-2">“Control total del cashflow”</h3>
              <p className="text-sm text-white/80 mt-3">
                “Pasamos de reportes mensuales a decisiones diarias con proyecciones
                confiables.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Cliente Logística</p>
              <h3 className="text-lg font-semibold mt-2">“Menos quiebres, más servicio”</h3>
              <p className="text-sm text-white/80 mt-3">
                “El modelo de demanda nos dio estabilidad y evitó roturas críticas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Cliente RRHH</p>
              <h3 className="text-lg font-semibold mt-2">“Mejoramos la retención”</h3>
              <p className="text-sm text-white/80 mt-3">
                “Identificamos equipos de riesgo y actuamos antes de perder talento.”
              </p>
            </div>

            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Cliente Retail</p>
              <h3 className="text-lg font-semibold mt-2">“Ahora decidimos con datos”</h3>
              <p className="text-sm text-white/80 mt-3">
                “La visibilidad de ventas e inventario nos permitió reducir pérdidas y
                mejorar la reposición en semanas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Cliente Finanzas</p>
              <h3 className="text-lg font-semibold mt-2">“Control total del cashflow”</h3>
              <p className="text-sm text-white/80 mt-3">
                “Pasamos de reportes mensuales a decisiones diarias con proyecciones
                confiables.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Cliente Logística</p>
              <h3 className="text-lg font-semibold mt-2">“Menos quiebres, más servicio”</h3>
              <p className="text-sm text-white/80 mt-3">
                “El modelo de demanda nos dio estabilidad y evitó roturas críticas.”
              </p>
            </div>
            <div className="w-96 shrink-0 rounded-2xl bg-white/10 border border-white/10 p-6 shadow-xl">
              <p className="text-sm text-white/70">Cliente RRHH</p>
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
            <p className="text-sm uppercase tracking-[0.25em] text-blue-700/80">Demo real</p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">Explora nuestro trabajo</h2>
            <p className="text-blue-800/80 mt-3">
              Un vistazo a cómo transformamos datos en decisiones accionables.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 p-3 md:p-4">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-blue-100" style={{ paddingBottom: "45.4163%" }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.loom.com/embed/01ece08be3fb42179957b2c2f2460d4d?sid=ca013eb1-f6e9-4de1-a63b-8ac1761c7e0b"
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-blue-800/80">
            <span className="px-3 py-1 rounded-full bg-blue-100/70 text-sm">Dashboard ejecutivo</span>
            <span className="px-3 py-1 rounded-full bg-blue-100/70 text-sm">KPIs en tiempo real</span>
            <span className="px-3 py-1 rounded-full bg-blue-100/70 text-sm">Insights accionables</span>
          </div>
        </div>
      </section>
      <div className="py-4 bg-gray-100"></div>
      {/* Testimonios */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Lo que dicen nuestros clientes</h2>
        <div className="max-w-6xl mx-auto">
          <blockquote className="border-l-4 border-blue-900 pl-6 italic text-xl mb-8 text-blue-800">
            Penthouse Visuals ha revolucionado la forma en que gestionamos datos, ahora puedo ver la información que me interesa de forma rápida y ordenada – Eurocell – 
          </blockquote>
        </div>
      </section>
      <div className="py-4 bg-gray-100"></div>
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-10">
          <h2 className="text-3xl font-bold text-blue-800">Nuestra misión</h2>
          <br/>
            <h2 className="text-xl text-blue-800 font-semibold">Empoderar a las empresas de nuestro país con soluciones analíticas que transformen sus decisiones.</h2>
          </div>
          <div className="flex justify-center items-center mb-4">
            <img src="/img/hands.png" alt="Handshake" className="w-20 h-22"/>
          </div>
          <div>
            <p className="text-xl text-blue-800 italic">- Somos un aliado estratégico para tus negocios -</p>
          </div>
        </div>
      </section>
      <div className="py-4 bg-gray-100"></div>
      {/* CTA Repetido */}
      <section id="cta" className="bg-dark-purple py-16 text-center ">
        <h2 className="text-3xl font-bold text-white">¿Listo para optimizar tu empresa?</h2>
        <p  className="text-xl text-white mt-4">Solicita un análisis gratuito y descubre como podemos ayudarte a mejorar tu eficiencia.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbUZkPthnKViwihqmyG8a9mt5PEy9nSs5Mr2ZfX5VFo5heNg/viewform?usp=sf_link" className="mt-8 inline-block bg-royal-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          Contáctanos
        </a>
      </section>

      {/* Preguntas Frecuentes (opcional) */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Preguntas Frecuentes</h2>
        <div className="max-w-4xl mx-auto text-left">
          <details className="mb-4">
            <summary className="font-semibold text-lg text-blue-800">¿Cómo funciona el análisis gratuito?</summary>
            <p  className="mt-2 text-blue-800">Nuestro equipo analiza los datos clave de tu empresa para ofrecerte un informe gratuito sobre áreas de mejora.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold text-lg text-blue-800">¿Cuánto tiempo tarda el análisis?</summary>
            <p  className="mt-2 text-blue-800">Normalmente entregamos el informe en un plazo de 5 a 7 días hábiles.</p>
          </details>
          <details className="mb-4">
            <summary className="font-semibold text-lg text-blue-800">¿Qué beneficios ofrece Penthouse?</summary>
            <p  className="mt-2 text-blue-800">Ofrecemos análisis avanzados de datos, optimización de procesos y reportes claros para una mejor toma de decisiones.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark-purple text-white py-8 text-center">
        <p  className="text-lg">Contáctanos en: contacto@penthouseconsultings.com</p>
        <div className="flex justify-center mt-4">
          {/* <a href="#" className="mx-4 hover:text-yellow-500 transition">Instagram</a> */}
          <a href="https://www.linkedin.com/company/penthouse-consulting/" className="mx-4 hover:text-yellow-500 transition">LinkedIn</a>
        </div>
        <p  className="mt-4 text-sm">&copy; 2024 Penthouse. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
