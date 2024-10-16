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
      <img src="/img/nmbBlanco.png" alt="Logo de Penthouse" className="mx-auto w-63 h-auto mb-6" />
        <h1 className="text-5xl font-bold">ELEVATED VISUAL ANALYTICS</h1>
        <p className="text-xl mt-4">Optimiza tu tiempo, reduce costos y toma las decisiones correctas con nuestros innovadores dashboards.</p>
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
        <h2 className="text-3xl font-bold mb-8 text-blue-800">¿Por qué elegir Penthouse Visuals?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/img/Azul.svg" alt="Análisis profundo" className="h-12 mx-auto mb-4 text-blue-800" />
            <h3 className="text-2xl font-semibold mb-2 text-blue-800 mb-2">Personalización</h3>
            <p className="text-blue-800">Diseñamos soluciones a lamedida que te lleven a la toma de decisiones acertada.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/img/Azul.svg" alt="Optimización" className="h-12 mx-auto mb-4 text-blue-800" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Automatización</h3>
            <p className="text-blue-800">Automatizamos tus tareas y maximizamos tu tiempo</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="/img/Azul.svg" alt="Reportes Claros" className="h-12 mx-auto mb-4 text-blue-800" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Velocidad</h3>
            <p className="text-blue-800">Entregamos soluciones de alto nivel en tiempos record.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Explora nuestro trabajo</h2>
          <div className="relative" style={{ paddingBottom: "45.4163%" }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src="https://www.loom.com/embed/01ece08be3fb42179957b2c2f2460d4d?sid=ca013eb1-f6e9-4de1-a63b-8ac1761c7e0b"
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <div className="py-4 bg-gray-100"></div>
      {/* Testimonios */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">Lo que dicen nuestros clientes</h2>
        <div className="max-w-6xl mx-auto">
          <blockquote className="border-l-4 border-blue-900 pl-6 italic text-xl mb-8 text-blue-800">
            Penthouse Visuals ha revolucionado la forma en que gestionamos datos, ahora puedo ver la información que me interesa de forma rapida y ordenada – Eurocell – 
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
        <p  className="text-xl text-white mt-4">Solicita un análisis gratuito y descubre cómo podemos ayudarte a mejorar tu eficiencia.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbUZkPthnKViwihqmyG8a9mt5PEy9nSs5Mr2ZfX5VFo5heNg/viewform?usp=sf_link" className="mt-8 inline-block bg-royal-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
          Contactanos
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

