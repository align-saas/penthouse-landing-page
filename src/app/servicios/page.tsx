import Head from "next/head";

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
            <div className="rounded-3xl bg-[#131028] shadow-2xl border border-white/10 p-8 text-left min-h-[240px] flex items-center">
              <h2 className="text-xl font-semibold text-white">Data Culture &amp; Incentives Assessment</h2>
            </div>
            <div className="rounded-3xl bg-[#3B58E1] shadow-2xl border border-white/10 p-8 text-left min-h-[240px] flex items-center">
              <h2 className="text-xl font-semibold text-white">Executive Intelligence Partnership</h2>
            </div>
            <div className="rounded-3xl bg-[#5F80FB] shadow-2xl border border-white/10 p-8 text-left min-h-[240px] flex items-center">
              <h2 className="text-xl font-semibold text-white">Customized Metrics Project</h2>
            </div>
            <div className="rounded-3xl bg-[#93A9FF] shadow-2xl border border-white/10 p-8 text-left min-h-[240px] flex items-center">
              <h2 className="text-xl font-semibold text-white">Data Collection SaaS</h2>
            </div>
            <div className="rounded-3xl bg-[#131028] shadow-2xl border border-white/10 p-8 text-left min-h-[240px] flex items-center">
              <h2 className="text-xl font-semibold text-white">Machine Learning Features</h2>
            </div>
            <div className="rounded-3xl bg-[#3B58E1] shadow-2xl border border-white/10 p-8 text-left min-h-[240px] flex items-center">
              <h2 className="text-xl font-semibold text-white">AI Features</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
