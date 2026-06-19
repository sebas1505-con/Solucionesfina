"use client";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

const GOLD = "#C9A84C";
const WA_BASE = "https://wa.me/573003184262?text=";

const serviciosNav = [
  { label: "Créditos",               href: "/servicios/creditos" },
  { label: "Seguros",                href: "/servicios/seguros" },
  { label: "Asesoría Financiera",    href: "/servicios/asesoria-empresarial" },
  { label: "Pensiones y Retiro",     href: "/servicios/pensiones-retiro" },
  { label: "Asesoría Jurídica",      href: "/servicios/juridico" },
];

export default function ServicioLayout({ tag, titulo, subtitulo, secciones, whatsappTexto }) {
  const waUrl = WA_BASE + encodeURIComponent(whatsappTexto);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0d0d", color: "#ffffff", fontFamily: "'Arial', sans-serif" }}>
      <Nav />

      {/* Hero del servicio */}
      <div
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(180deg, #1a1a0d 0%, #0d0d0d 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>{tag}</span>
          <div className="h-px w-8" style={{ backgroundColor: GOLD }} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>{titulo}</h1>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{subtitulo}</p>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-xs mt-5" style={{ color: "rgba(255,255,255,0.35)" }}>
          <a href="/" className="hover:text-white transition-colors">Inicio</a>
          <span>/</span>
          <a href="/servicios" className="hover:text-white transition-colors">Servicios</a>
          <span>/</span>
          <span style={{ color: GOLD }}>{titulo}</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 flex flex-col lg:flex-row gap-10">

        {/* Sidebar — otros servicios */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 rounded-2xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Otros servicios</p>
            <ul className="space-y-1">
              {serviciosNav.map((s) => {
                const isActive = typeof window !== "undefined" && window.location.pathname === s.href;
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className="block px-3 py-2.5 rounded-lg text-sm transition-all"
                      style={{
                        color: s.label === titulo ? GOLD : "rgba(255,255,255,0.6)",
                        backgroundColor: s.label === titulo ? "rgba(201,168,76,0.1)" : "transparent",
                        fontWeight: s.label === titulo ? "600" : "400",
                      }}
                      onMouseEnter={(e) => { if (s.label !== titulo) e.currentTarget.style.color = "#ffffff"; }}
                      onMouseLeave={(e) => { if (s.label !== titulo) e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                    >
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full block py-3 text-center text-xs font-bold rounded-xl transition-all hover:brightness-110"
              style={{ backgroundColor: GOLD, color: "#0d0d0d" }}
            >
              Agendar consulta
            </a>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 space-y-10 min-w-0">
          {secciones.map((sec, i) => (
            <section key={i} className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(201,168,76,0.1)" }}>
              <h2 className="text-lg font-bold mb-4" style={{ fontFamily: "'Georgia', serif", color: "#ffffff" }}>{sec.titulo}</h2>

              {sec.contenido && (
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{sec.contenido}</p>
              )}

              {sec.lista && (
                <ul className="space-y-3">
                  {sec.lista.map(([nombre, desc]) => (
                    <li key={nombre} className="flex items-start gap-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5" style={{ backgroundColor: GOLD, color: "#0d0d0d" }}>✓</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{nombre}</p>
                        <p className="text-xs leading-relaxed mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {sec.pasos && (
                <div className="space-y-5">
                  {sec.pasos.map((paso) => (
                    <div key={paso.n} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: GOLD, color: "#0d0d0d" }}>
                        {paso.n}
                      </div>
                      <div className="pt-1">
                        <p className="text-sm font-bold text-white mb-0.5">{paso.titulo}</p>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{paso.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {sec.tabla && (
                <>
                  <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <table className="w-full text-sm">
                      <tbody>
                        {sec.tabla.map((fila, fi) => (
                          <tr key={fi} style={{ borderBottom: fi < sec.tabla.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                            {fila.map((celda, ci) => (
                              <td key={ci} className="px-5 py-3.5" style={{ color: ci === 0 ? "#ffffff" : ci === 1 ? GOLD : "rgba(255,255,255,0.6)", fontWeight: ci === 0 ? "600" : "400" }}>
                                {celda}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {sec.nota && <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>* {sec.nota}</p>}
                </>
              )}
            </section>
          ))}

          {/* CTA final */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Georgia', serif" }}>¿Listo para dar el primer paso?</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Agenda tu consulta gratuita hoy. Sin costo, sin compromiso.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-full transition-all hover:brightness-110 hover:scale-105"
              style={{ backgroundColor: GOLD, color: "#0d0d0d", boxShadow: "0 6px 24px rgba(201,168,76,0.25)" }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.428a.75.75 0 00.921.921l5.573-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.36l-.356-.214-3.685.975.99-3.604-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
