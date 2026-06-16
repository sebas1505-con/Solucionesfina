import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Inmobiliaria · Soluciones Financieras V&D",
  description: "Tu aliado para comprar, avaluar y acceder a proyectos de vivienda nueva. Asesoría inmobiliaria personalizada en Colombia.",
};

const GOLD = "#C9A84C";
const WHATSAPP = "https://wa.me/573003184262?text=" + encodeURIComponent("Hola, quisiera información sobre el servicio inmobiliario de Soluciones Financieras V&D 🏠");

const servicios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
      </svg>
    ),
    titulo: "Compra de Vivienda",
    desc: "Te acompañamos en todo el proceso para encontrar y adquirir la propiedad ideal según tu presupuesto y necesidades.",
    items: ["Búsqueda personalizada de inmuebles", "Análisis de zona y valorización", "Negociación y cierre", "Acompañamiento hasta escrituración"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75a2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/>
      </svg>
    ),
    titulo: "Avalúos",
    desc: "Valoración profesional de tu inmueble con respaldo técnico y legal para tomar decisiones informadas.",
    items: ["Avalúo comercial certificado", "Estudio de títulos", "Informe técnico detallado", "Validez legal y bancaria"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    ),
    titulo: "Proyectos de Vivienda",
    desc: "Accede a los mejores proyectos de vivienda nueva con planes de financiación exclusivos y preventas.",
    items: ["Proyectos VIS y No VIS", "Preventas con descuento", "Financiación directa con constructoras", "Subsidios de vivienda"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    titulo: "Crédito Hipotecario",
    desc: "Combinamos nuestra asesoría financiera e inmobiliaria para conseguirte el crédito hipotecario ideal.",
    items: ["Comparación entre bancos", "Tasas preferenciales negociadas", "Gestión del trámite completo", "Sin costo de asesoría"],
  },
];

const pasos = [
  { n: "01", titulo: "Cuéntanos tu meta", desc: "Nos cuentas qué tipo de propiedad buscas, tu presupuesto y zona de interés." },
  { n: "02", titulo: "Análisis personalizado", desc: "Evaluamos tu capacidad de compra y las mejores opciones del mercado." },
  { n: "03", titulo: "Visitas y selección", desc: "Te acompañamos a visitar los inmuebles preseleccionados y elegimos juntos." },
  { n: "04", titulo: "Cierre y escrituración", desc: "Gestionamos toda la documentación, notaría y trámites hasta las llaves." },
];

const ventajas = [
  { titulo: "Asesoría 100% gratuita", desc: "No te cobramos nada por acompañarte en el proceso de compra." },
  { titulo: "Red de propiedades exclusivas", desc: "Acceso a inmuebles que no siempre están en portales públicos." },
  { titulo: "Financiero + Inmobiliario", desc: "Único en el mercado: te ayudamos con el crédito y la propiedad al mismo tiempo." },
  { titulo: "10+ años de experiencia", desc: "Conocemos el mercado colombiano y sus particularidades en cada zona." },
];

export default function InmobiliariaPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0d0d", color: "#ffffff" }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.09) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%), #0d0d0d",
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Grupo V&D</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Tu aliado{" "}
              <span style={{ color: GOLD }}>inmobiliario</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              Más allá de las finanzas, te acompañamos en el proceso de compra de tu propiedad.
              Combinamos asesoría financiera e inmobiliaria para que tomes la mejor decisión.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-sm font-bold rounded-full transition-all duration-200 hover:brightness-110 hover:scale-105 shadow-lg"
                style={{ backgroundColor: GOLD, color: "#0d0d0d", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" }}
              >
                Hablar con un asesor
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 text-sm font-semibold rounded-full border transition-all duration-200"
                style={{ borderColor: "rgba(201,168,76,0.35)", color: "rgba(255,255,255,0.65)" }}
              >
                Ver servicios ↓
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-lg rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
            >
              <img
                src="/galeria/inmobiliaria.png"
                alt="Inmobiliaria Soluciones Financieras V&D"
                className="w-full h-full object-cover"
                style={{ display: "block", maxHeight: "480px" }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-3xl mx-auto grid grid-cols-3 gap-4 mt-16">
          {[
            { valor: "10+", label: "Años en el mercado" },
            { valor: "500+", label: "Propiedades gestionadas" },
            { valor: "100%", label: "Asesoría gratuita" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-5 text-center" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
              <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: GOLD, fontFamily: "'Georgia', serif" }}>{s.valor}</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Lo que hacemos</span>
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
              Servicios <span style={{ color: GOLD }}>inmobiliarios</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {servicios.map((s) => (
              <div
                key={s.titulo}
                className="p-7 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(201,168,76,0.12)", color: GOLD }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>{s.titulo}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: GOLD, color: "#0d0d0d" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>El proceso</span>
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
              ¿Cómo <span style={{ color: GOLD }}>funciona</span>?
            </h2>
          </div>

          <div className="space-y-4">
            {pasos.map((paso, i) => (
              <div
                key={paso.n}
                className="flex items-start gap-5 p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.12)" }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: GOLD, color: "#0d0d0d", fontFamily: "'Georgia', serif" }}
                >
                  {paso.n}
                </div>
                <div className="pt-1">
                  <p className="font-bold text-white mb-1">{paso.titulo}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{paso.desc}</p>
                </div>
                {i < pasos.length - 1 && (
                  <div className="hidden sm:block ml-auto flex-shrink-0 self-center" style={{ color: "rgba(201,168,76,0.3)", fontSize: "20px" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>Nuestra diferencia</span>
              <div className="h-px w-10" style={{ backgroundColor: GOLD }} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ventajas.map((v, i) => (
              <div
                key={v.titulo}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "rgba(201,168,76,0.15)", color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{v.titulo}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl p-10 sm:p-14"
            style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.13) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              ¿Listo para encontrar<br />tu <span style={{ color: GOLD }}>propiedad ideal</span>?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              Consulta inicial gratuita y sin compromiso. Un asesor te contacta en menos de 24 horas.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold rounded-full transition-all hover:brightness-110 hover:scale-105"
              style={{ backgroundColor: GOLD, color: "#0d0d0d", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.428a.75.75 0 00.921.921l5.573-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.36l-.356-.214-3.685.975.99-3.604-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
