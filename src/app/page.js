"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const WHATSAPP = "https://wa.me/573003184262?text=Hola%2C%20quiero%20m%C3%A1s%20asesor%C3%ADa%2C%20vengo%20desde%20la%20web%20de%20Soluciones%20Financieras%20V%26D%20%F0%9F%92%BC";

const servicios = [
  {
    href: "/servicios/creditos",
    svg: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
    titulo: "Créditos",
    desc: "Te conectamos con las mejores opciones de financiamiento del mercado para tus proyectos personales y empresariales.",
  },
  {
    href: "/servicios/seguros",
    svg: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.5-7 10C8 19.5 5 15.5 5 11V6l7-3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/>
      </svg>
    ),
    titulo: "Seguros",
    desc: "Te acompañamos en todo el proceso para que accedas a tu seguro de forma fácil, clara y sin complicaciones.",
  },
  {
    href: "/servicios/asesoria-empresarial",
    svg: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h6"/>
      </svg>
    ),
    titulo: "Asesoría Financiera",
    desc: "Optimizamos la estructura financiera de tu empresa para mejorar la rentabilidad y reducir riesgos.",
  },
  {
    href: "/servicios/pensiones-retiro",
    svg: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    titulo: "Pensiones y Retiro",
    desc: "Planifica tu futuro con alternativas de retiro que garanticen tu tranquilidad y calidad de vida.",
  },
];

const stats = [
  { valor: "+3.000", label: "Clientes satisfechos" },
  { valor: "10+",  label: "Años de experiencia" },
  { valor: "95%",  label: "Tasa de satisfacción" },
  { valor: "$50M+",label: "En activos gestionados" },
];

const pilares = [
  "Consulta inicial 100% gratuita y sin compromiso",
  "Estamos para servirte cualquier novedad que se te ofrezca",
  "Estamos para solucionar tus problemas",
  "Equipo de asesores para acompañarte en cada etapa",
];

const oficinas = [
  {
    id: "unisur",
    nombre: "C.C. Unisur",
    detalle: "Oficina 1081",
    mapsHref: "https://www.google.com/maps/place/Soluciones+Financieras+V%26D/@4.5840316,-74.2089577,17z/data=!4m12!1m5!3m4!2zNMKwMzUnMDIuNSJOIDc0wrAxMicyMy4wIlc!8m2!3d4.5840316!4d-74.2063828!3m5!1s0x8e3f9ff307e60f05:0x553f1fce8b18afec!8m2!3d4.5847072!4d-74.2069642!16s%2Fg%2F11qvcywwyr",
    fotos: ["/oficinas/unisur/unisur1.png", "/oficinas/unisur/unisur2.png"],
  },
  {
    id: "subazar",
    nombre: "C.C. Subazar",
    detalle: "Oficina 1-87",
    mapsHref: "https://maps.app.goo.gl/4brhCiadb4vX53ak9",
    fotos: ["/oficinas/subazar/subazar1.png", "/oficinas/subazar/subazar2.png", "/oficinas/subazar/subazar3.png", "/oficinas/subazar/subazar4.png"],
  },
  {
    id: "puertolopez",
    nombre: "C.C. Puerto López",
    detalle: "",
    mapsHref: "https://maps.app.goo.gl/Aoi1SvRrYVVDWtSbA",
    fotos: ["/oficinas/puertolopez/puerto1.png", "/oficinas/puertolopez/puerto2.png", "/oficinas/puertolopez/puerto3.png", "/oficinas/puertolopez/puerto4.png", "/oficinas/puertolopez/puerto5.png"],
  },
];

// ── Agrega tus imágenes en public/galeria/ y pon los nombres aquí ──
const galeriaImagenes = [
  "/galeria/imagen-1.png",
  "/galeria/imagen-2.png",
];

const testimonios = [
  { nombre: "Carlos M.",  cargo: "Empresario",        texto: "Gracias a V&D logré estructurar mis inversiones de forma inteligente. Excelente servicio y total confianza desde el primer día." },
  { nombre: "Andrea R.",  cargo: "Emprendedora",      texto: "Me ayudaron a conseguir el crédito que necesitaba con las mejores condiciones del mercado. 100% recomendados." },
  { nombre: "Jhon P.",    cargo: "Gerente Financiero", texto: "La planeación patrimonial que diseñaron para mi familia superó todas mis expectativas. Profesionales de verdad." },
  { nombre: "María L.",   cargo: "Docente",            texto: "Me explicaron todo con claridad y paciencia. Ahora tengo mis ahorros trabajando para mí sin ningún estrés." },
];

export default function Home() {
  const [form, setForm] = useState({ nombre: "", telefono: "", interes: "", mensaje: "" });
  const [lightbox, setLightbox] = useState(null);
  const [testIdx, setTestIdx] = useState(0);

  const cerrarLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") cerrarLightbox(); };
    if (lightbox) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, cerrarLightbox]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestIdx((i) => (i + 1) % testimonios.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testIdx]);

  function enviarWhatsApp(e) {
    e.preventDefault();
    const texto = `Hola, soy ${form.nombre}${form.telefono ? `, mi teléfono es ${form.telefono}` : ""}. Me interesa: ${form.interes || "información general"}. ${form.mensaje}`.trim();
    window.open(`https://wa.me/573003184262?text=${encodeURIComponent(texto)}`, "_blank");
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0d0d", color: "#ffffff" }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: "calc(100svh - 72px)", background: "radial-gradient(ellipse at 20% 60%, rgba(201,168,76,0.07) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 45%), #0d0d0d" }}
      >
        {/* Grid decorativo */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-10" style={{ backgroundColor: "#C9A84C" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>
                  Asesoría Financiera de Élite
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold leading-[1.08] tracking-tight mb-7" style={{ fontFamily: "'Georgia', serif" }}>
                Tu Camino hacia la{" "}
                <span style={{ color: "#C9A84C" }}>Libertad</span>{" "}
                Financiera
              </h1>

              <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
                En Soluciones Financieras V&D transformamos tu relación con el dinero.
                Créditos estratégicos, seguros y aliado inmobiliario diseñados para alcanzar tus metas.
              </p>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-sm font-bold rounded-full transition-all duration-200 hover:brightness-110 hover:scale-105 shadow-lg"
                  style={{ backgroundColor: "#C9A84C", color: "#0d0d0d", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" }}
                >
                  Agendar Consulta Gratis
                </a>
                <a
                  href="#servicios"
                  className="px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 hover:border-opacity-80 hover:text-white border"
                  style={{ borderColor: "rgba(201,168,76,0.35)", color: "rgba(255,255,255,0.65)" }}
                >
                  Ver Servicios ↓
                </a>
              </div>
            </div>

            {/* Imagen hero */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}>
                <img
                  src="/galeria/imagen.png"
                  alt="Soluciones Financieras V&D"
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}
              >
                <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: "#C9A84C", fontFamily: "'Georgia', serif" }}>{s.valor}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INMOBILIARIA ── */}
      <section id="inmobiliaria" className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>Grupo V&D</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                También somos tu aliado{" "}
                <span style={{ color: "#C9A84C" }}>inmobiliario</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Más allá de las finanzas, te acompañamos en el proceso de compra de tu propiedad.
                Nuestro equipo inmobiliario te asesora para que encuentres el inmueble ideal y tomes la mejor decisión para tu patrimonio.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🏠", titulo: "Compra",         desc: "Te acompañamos en todo el proceso para que encuentres y adquieras la propiedad ideal." },
                  { icon: "📋", titulo: "Avalúos",        desc: "Valoración profesional de tu inmueble con respaldo técnico." },
                  { icon: "🏗️", titulo: "Proyectos",      desc: "Acceso a proyectos de vivienda nueva con financiación." },
                ].map((item) => (
                  <div key={item.titulo} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{item.titulo}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center sm:justify-start">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold rounded-full transition-all duration-200 hover:brightness-110 hover:scale-105"
                  style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}>
                  Consulta Con Nosotros
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                <img
                  src="/galeria/inmobiliaria.png"
                  alt="Inmobiliaria Soluciones Financieras V&D"
                  className="w-full h-full object-cover"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUESTRAS OFICINAS ── */}
      <section id="oficinas" className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Visítanos"
            title={<>Nuestras <span style={{ color: "#C9A84C" }}>Oficinas</span></>}
            sub="Contamos con puntos de atención en diferentes ubicaciones para servirte mejor."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {oficinas.map((oficina) => (
              <OficinaCard key={oficina.nombre} oficina={oficina} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NOSOTROS ── */}
      <section id="nosotros" className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>Por qué elegirnos</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                Expertos en tu <span style={{ color: "#C9A84C" }}>bienestar</span> financiero
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Con más de 10 años de experiencia en el sector financiero colombiano,
                en V&D combinamos conocimiento técnico con un trato humano y personalizado.
                Tu tranquilidad financiera es nuestra prioridad.
              </p>
              <div className="space-y-4 mb-8">
                {pilares.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-[10px] font-bold" style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}>✓</span>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center sm:justify-start">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-8 py-4 text-sm font-bold rounded-full transition-all duration-200 hover:brightness-110 hover:scale-105"
                  style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}
                >
                  Hablar con un asesor
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { valor: "3.000+", label: "Clientes satisfechos", sub: "en Colombia" },
                { valor: "10+",   label: "Años de experiencia",   sub: "en el sector" },
                { valor: "95%",   label: "Satisfacción",          sub: "de nuestros clientes" },
                { valor: "$50M+", label: "En activos",            sub: "gestionados" },
              ].map((item) => (
                <div key={item.label} className="p-6 rounded-2xl text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <p className="text-3xl font-bold mb-1" style={{ color: "#C9A84C", fontFamily: "'Georgia', serif" }}>{item.valor}</p>
                  <p className="text-sm font-semibold text-white mb-0.5">{item.label}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Lo que hacemos" title="Nuestros Servicios" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((s) => (
              <ServiceCard key={s.titulo} {...s} href={s.href} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section id="testimonios" className="py-24 px-4 sm:px-6" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader tag="Reseñas" title={<>Lo que dicen nuestros <span style={{ color: "#C9A84C" }}>clientes</span></>} />

          {/* Comilla gigante decorativa */}
          <div aria-hidden style={{ color: "#C9A84C", fontSize: "140px", lineHeight: "0.5", opacity: 0.18, fontFamily: "'Georgia', serif", marginBottom: "32px", userSelect: "none" }}>"</div>

          {/* Estrellas */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, j) => (
              <span key={j} style={{ color: "#C9A84C", fontSize: "20px" }}>★</span>
            ))}
          </div>

          {/* Texto */}
          <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.75)", fontStyle: "italic", minHeight: "80px" }}>
            "{testimonios[testIdx].texto}"
          </p>

          {/* Autor */}
          <div className="flex flex-col items-center">
            <div className="w-px mb-4" style={{ height: "32px", backgroundColor: "#C9A84C" }} />
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3" style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}>
              {testimonios[testIdx].nombre.charAt(0)}
            </div>
            <p className="text-sm font-bold text-white">{testimonios[testIdx].nombre}</p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{testimonios[testIdx].cargo}</p>
          </div>

          {/* Navegación */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={() => setTestIdx((i) => (i - 1 + testimonios.length) % testimonios.length)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:brightness-125"
              style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="flex gap-2 items-center">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ height: "8px", width: i === testIdx ? "28px" : "8px", backgroundColor: i === testIdx ? "#C9A84C" : "rgba(255,255,255,0.2)" }}
                />
              ))}
            </div>
            <button
              onClick={() => setTestIdx((i) => (i + 1) % testimonios.length)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:brightness-125"
              style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── GALERÍA / CARRUSEL ── */}
      <section className="py-16 overflow-hidden" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>Galería</span>
            <div className="h-px w-8" style={{ backgroundColor: "#C9A84C" }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>
            Momentos con nuestros <span style={{ color: "#C9A84C" }}>clientes</span>
          </h2>
        </div>

        {/* Desktop — carrusel animado */}
        <div className="hidden sm:block relative marquee-wrap" style={{ overflow: "hidden", maxWidth: "100vw" }}>
          <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0d0d0d, transparent)" }} />
          <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0d0d0d, transparent)" }} />
          <div className="flex gap-4 marquee-track" style={{ width: "max-content", paddingBottom: "4px" }}>
            {[...galeriaImagenes, ...galeriaImagenes].map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(src)}
                className="flex-shrink-0 w-72 h-52 rounded-2xl overflow-hidden group relative"
                style={{ border: "1px solid rgba(201,168,76,0.25)", cursor: "zoom-in" }}
              >
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(0,0,0,0.35)" }}>
                  <svg className="w-8 h-8" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zM11 8v6M8 11h6"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Móvil — grid 2 columnas */}
        <div className="sm:hidden px-4 grid grid-cols-2 gap-3">
          {galeriaImagenes.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className={`rounded-2xl overflow-hidden group relative${galeriaImagenes.length % 2 !== 0 && i === galeriaImagenes.length - 1 ? " col-span-2" : ""}`}
              style={{ border: "1px solid rgba(201,168,76,0.25)", cursor: "zoom-in", aspectRatio: galeriaImagenes.length % 2 !== 0 && i === galeriaImagenes.length - 1 ? "16/7" : "1/1" }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.18)" }}>
                <svg className="w-7 h-7 opacity-70" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zM11 8v6M8 11h6"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-20 px-4 sm:px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            tag="Contáctanos"
            title={<>Agenda tu consulta <span style={{ color: "#C9A84C" }}>gratis</span></>}
            sub="Cuéntanos tu situación y un asesor se comunicará contigo en menos de 24 horas."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Info */}
            <div className="p-7 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#C9A84C" }}>Información de contacto</h3>
              <div className="space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {[
                  { icon: "💬", texto: "WhatsApp: +57 300 318 4262" },
                  { icon: "📧", texto: "gerencia@solucionesfinancierasvd.com" },
                  { icon: "📍", texto: "C.C. Unisur, Oficina 1081", href: "https://www.google.com/maps/place/Soluciones+Financieras+V%26D/@4.5840316,-74.2089577,17z/data=!4m12!1m5!3m4!2zNMKwMzUnMDIuNSJOIDc0wrAxMicyMy4wIlc!8m2!3d4.5840316!4d-74.2063828!3m5!1s0x8e3f9ff307e60f05:0x553f1fce8b18afec!8m2!3d4.5847072!4d-74.2069642!16s%2Fg%2F11qvcywwyr" },
                  { icon: "📍", texto: "C.C. Subazar, Oficina 1-87", href: "https://maps.app.goo.gl/4brhCiadb4vX53ak9" },
                  { icon: "📍", texto: "C.C. Puerto López", href: "https://maps.app.goo.gl/Aoi1SvRrYVVDWtSbA" },
                  { icon: "🕐", texto: "Lun – Vie: 9am – 6pm · Sáb: 8am – 1pm" },
                ].map((item) => (
                  <div key={item.texto} className="flex items-center gap-3">
                    <span className="text-base">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white underline underline-offset-2">{item.texto}</a>
                    ) : (
                      <span>{item.texto}</span>
                    )}
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}
              >
                Escribir por WhatsApp
              </a>
            </div>

            {/* Formulario */}
            <div className="p-7 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#C9A84C" }}>Envíanos un mensaje</h3>
              <form className="space-y-3" onSubmit={enviarWhatsApp}>
                <FormInput
                  type="text"
                  placeholder="Tu nombre"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                />
                <FormInput
                  type="tel"
                  placeholder="Teléfono / WhatsApp"
                  value={form.telefono}
                  onChange={(e) => setForm((f) => ({ ...f, telefono: e.target.value }))}
                />
                <select
                  value={form.interes}
                  onChange={(e) => setForm((f) => ({ ...f, interes: e.target.value }))}
                  className="w-full px-4 py-3 text-sm rounded-xl transition-all"
                  style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(201,168,76,0.2)", color: form.interes ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                >
                  <option value="">¿Qué te interesa?</option>
                  {["Créditos", "Seguros", "Asesoría Financiera", "Pensiones y Retiro"].map((o) => (
                    <option key={o} value={o} style={{ color: "#ffffff", backgroundColor: "#1a1a1a" }}>{o}</option>
                  ))}
                </select>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos sobre tu situación..."
                  value={form.mensaje}
                  onChange={(e) => setForm((f) => ({ ...f, mensaje: e.target.value }))}
                  className="w-full px-4 py-3 text-sm rounded-xl transition-all resize-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)", color: "#ffffff" }}
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all hover:brightness-110"
                  style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
          onClick={cerrarLightbox}
        >
          <button
            onClick={cerrarLightbox}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            style={{ border: "1px solid rgba(201,168,76,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function SectionHeader({ tag, title, sub }) {
  return (
    <div className="text-center mb-14">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-10" style={{ backgroundColor: "#C9A84C" }} />
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>{tag}</span>
        <div className="h-px w-10" style={{ backgroundColor: "#C9A84C" }} />
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>{title}</h2>
      {sub && <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{sub}</p>}
    </div>
  );
}

function ServiceCard({ svg, titulo, desc, href }) {
  return (
    <a
      href={href || "#servicios"}
      className="p-7 rounded-2xl transition-all duration-300 group block"
      style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid rgba(201,168,76,0.45)";
        e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(201,168,76,0.1)";
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
      }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
        {svg}
      </div>
      <h3 className="text-base font-bold mb-2 text-white group-hover:text-[#C9A84C] transition-colors">{titulo}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{desc}</p>
      <span className="inline-block mt-3 text-xs font-semibold" style={{ color: "#C9A84C" }}>Ver más →</span>
    </a>
  );
}

function OficinaCard({ oficina }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + oficina.fotos.length) % oficina.fotos.length);
  const next = () => setIdx((i) => (i + 1) % oficina.fotos.length);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
      <div className="relative" style={{ height: "220px" }}>
        <a href={`/oficinas/${oficina.id}`} className="absolute inset-0 block" style={{ WebkitTapHighlightColor: "transparent" }}>
          <img
            src={oficina.fotos[idx]}
            alt={oficina.nombre}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </a>
        {oficina.fotos.length > 1 && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full items-center justify-center"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#C9A84C", zIndex: 10 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full items-center justify-center"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#C9A84C", zIndex: 10 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 10 }}>
              {oficina.fotos.map((_, i) => (
                <span key={i} style={{ width: "7px", height: "7px", borderRadius: "50%", display: "inline-block", backgroundColor: i === idx ? "#C9A84C" : "rgba(255,255,255,0.4)" }} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-base mb-0.5" style={{ color: "#ffffff", fontFamily: "'Georgia', serif" }}>{oficina.nombre}</h3>
        {oficina.detalle && <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>{oficina.detalle}</p>}
        {!oficina.detalle && <div className="mb-3" />}
        <div className="flex items-center justify-between">
          <a
            href={oficina.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
            style={{ color: "#C9A84C" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
            </svg>
            Ver en mapa
          </a>
          <a
            href={`/oficinas/${oficina.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-75"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Ver fotos
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function FormInput({ type, placeholder, value, onChange, required }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 text-sm rounded-xl transition-all"
      style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)", color: "#ffffff" }}
    />
  );
}
