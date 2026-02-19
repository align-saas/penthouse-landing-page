import Head from "next/head";

const services = [
  {
    title: "Data Culture & Incentives Assessment",
    description:
      "Evaluamos la cultura de datos de tu organización y alineamos los sistemas de incentivos con métricas estratégicas. Identificamos brechas, comportamientos no deseados y oportunidades para fortalecer una toma de decisiones basada en datos en todos los niveles.",
    color: "bg-[#131028]",
  },
  {
    title: "Executive Intelligence Partnership",
    description:
      "Te ayudamos a tomar las mejores decisiones para tu negocio, actuando como tu socio estratégico en inteligencia ejecutiva. Diseñamos sistemas de métricas y análisis que transforman información compleja en claridad, dirección y ventaja competitiva sostenible.",
    color: "bg-[#3B58E1]",
  },
  {
    title: "Customized Metrics Project",
    description:
      "Desarrollamos proyectos a medida para definir, estructurar y automatizar métricas clave del negocio. Desde la arquitectura de datos hasta su implementación operativa, construimos soluciones alineadas directamente con tus objetivos estratégicos.",
    color: "bg-[#5F80FB]",
  },
  {
    title: "Data Collection SaaS",
    description:
      "Implementamos plataformas digitales para recolectar información interna y externa de forma estructurada, segura y escalable. Automatizamos flujos de datos para garantizar calidad, trazabilidad y disponibilidad en tiempo real.",
    color: "bg-[#93A9FF]",
  },
  {
    title: "Machine Learning Features",
    description:
      "Integramos modelos predictivos y algoritmos avanzados que convierten datos en ventajas competitivas: segmentación inteligente, predicción de demanda, optimización operativa y sistemas de scoring adaptados a tu negocio.",
    color: "bg-[#131028]",
  },
  {
    title: "AI Features",
    description:
      "Incorporamos capacidades de inteligencia artificial para potenciar el análisis, automatizar procesos y generar insights estratégicos. Aplicamos IA de forma práctica y orientada a resultados medibles.",
    color: "bg-[#3B58E1]",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Head>
        <title>Servicios - Penthouse</title>
        <meta
          name="description"
          content="Servicios analíticos y consultoría en datos para potenciar tu negocio."
        />
      </Head>

      <main className="bg-gradient-to-b from-white via-blue-50 to-white">
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-700/80">
              Servicios
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-blue-800">
              Soluciones analíticas hechas para crecer contigo.
            </h1>
            <div className="mt-6 flex justify-center">
              <img
                src="/img/suits.png"
                alt="Servicios Penthouse"
                className="h-100 md:h-100 w-auto rounded-3xl"
              />
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <article key={service.title} className="group [perspective:1200px]">
                <div className="relative min-h-[290px] md:min-h-[320px] rounded-3xl transition-transform duration-700 motion-reduce:transition-none [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div
                    className={`absolute inset-0 ${service.color} shadow-2xl border border-white/10 p-9 md:p-10 text-left rounded-3xl flex items-center [backface-visibility:hidden]`}
                  >
                    <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  </div>
                  <div className="absolute inset-0 bg-[#0E0B22] shadow-2xl border border-white/20 p-9 md:p-10 text-left rounded-3xl flex items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-sm md:text-base leading-relaxed text-white/90 text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
