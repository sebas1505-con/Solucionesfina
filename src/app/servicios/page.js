import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = { title: "Servicios · Soluciones Financieras V&D" };

const servicios = [
  { titulo: "Créditos",               href: "/servicios/creditos",               desc: "Las mejores opciones de financiamiento para tus proyectos.", icon: "🏦" },
  { titulo: "Seguros",                href: "/servicios/seguros",                desc: "Te acompañamos en todo el proceso para que accedas a tu seguro de forma fácil y sin complicaciones.", icon: "🛡️" },
  { titulo: "Asesoría Financiera",    href: "/servicios/asesoria-empresarial",   desc: "Te orientamos en créditos, finanzas personales y todo lo que necesitas para tomar las mejores decisiones.", icon: "🤝" },
  { titulo: "Pensiones y Retiro",     href: "/servicios/pensiones-retiro",       desc: "Planifica tu retiro con tranquilidad y seguridad financiera.", icon: "🎯" },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0d0d", color: "#ffffff" }}>
      <Nav />

      {/* Header */}
      <div className="py-16 px-6 text-center" style={{ background: "linear-gradient(180deg, #1a1a0d 0%, #0d0d0d 100%)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>Soluciones Financieras V&D</span>
          <div className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>Nuestros Servicios</h1>
        <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Elige el servicio que necesitas y conoce todos los detalles</p>
      </div>

      {/* Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s) => (
            <a key={s.titulo} href={s.href} className="service-card p-7 rounded-2xl block group">
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h2 className="text-base font-bold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">{s.titulo}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
              <span className="inline-block mt-4 text-xs font-semibold" style={{ color: "#C9A84C" }}>Ver más →</span>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
