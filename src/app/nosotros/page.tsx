import Head from 'next/head';

export default function NosotrosPage() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Penthouse</title>
        <meta
          name="description"
          content="Conoce la historia, el equipo y la misión de Penthouse."
        />
      </Head>

      <main className="bg-gradient-to-b from-white via-blue-50 to-white">
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-700/80">
              Sobre Nosotros
            </p>
            <div className="mt-6 flex justify-center">
              <img
                src="/img/04azul.png"
                alt="Penthouse"
                className="h-28 md:h-32 w-auto"
              />
            </div>
             <div className="mt-6 flex justify-center">
              <img
                src="/img/penth.png"
                alt="Servicios Penthouse"
                className="h-100 md:h-100 w-auto rounded-3xl"
              />
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white shadow-lg border border-blue-100 p-6 text-left">
              <h2 className="text-xl font-semibold text-blue-800">Nuestra Historia</h2>
              <p className="mt-3 text-blue-800/80">
                Nuestra firma nace de una convicción que compartimos desde la universidad: las organizaciones 
                pueden tomar mejores decisiones cuando la tecnología, los datos y las personas trabajan en conjunto. 
              </p>
            </div>
            <div className="rounded-3xl bg-white shadow-lg border border-blue-100 p-6 text-left">
              <h2 className="text-xl font-semibold text-blue-800">Nuestra Misión</h2>
              <p className="mt-3 text-blue-800/80">
                Empoderar a las empresas latinoamericanas a través de alianzas estratégicas que transformen sus decisiones y sus resultados.
              </p>
            </div>
            <div className="rounded-3xl bg-white shadow-lg border border-blue-100 p-6 text-left">
              <h2 className="text-xl font-semibold text-blue-800">Nuestro Equipo</h2>
              <p className="mt-3 text-blue-800/80">
              Somos un equipo de profesionales que se complementa a la perfección. 
              Combinamos perfiles analíticos, tecnológicos y estratégicos, trabajando 
              de forma coordinada para convertir información compleja en decisiones claras.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
