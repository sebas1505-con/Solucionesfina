"use client";
import { usePathname } from "next/navigation";

const WHATSAPP = "https://wa.me/573003184262?text=Hola%2C%20quiero%20m%C3%A1s%20asesor%C3%ADa%2C%20vengo%20desde%20la%20web%20de%20Soluciones%20Financieras%20V%26D%20%F0%9F%92%BC";

const menuLinks = [
  { label: "Inicio",      href: "/" },
  { label: "Servicios",   href: "/#servicios" },
  { label: "Nosotros",    href: "/#nosotros" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Contacto",    href: "/#contacto" },
];

const serviciosLinks = [
  { label: "Créditos",               href: "/servicios/creditos" },
  { label: "Seguros",                href: "/servicios/seguros" },
  { label: "Asesoría Financiera",    href: "/servicios/asesoria-empresarial" },
  { label: "Pensiones y Retiro",     href: "/servicios/pensiones-retiro" },
];

const secciones = [
  { titulo: "Servicios", links: serviciosLinks },
];

export default function Footer() {
  const pathname = usePathname();

  function isActive(href) {
    const path = href.split("#")[0] || "/";
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  }

  return (
    <footer style={{ backgroundColor: "#090909", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ── DESKTOP ── */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-10">

          {/* Marca */}
          <div>
            <Marca />
          </div>

          {/* Menú */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>
              Menú
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>
              Servicios
            </h4>
            <ul className="space-y-2">
              {serviciosLinks.map((l) => {
                const active = isActive(l.href);
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="flex items-center gap-2 text-sm py-1 transition-all duration-200"
                      style={{ color: active ? "#C9A84C" : "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "#ffffff"; }}
                      onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                      )}
                      <span style={{ fontWeight: active ? "600" : "400" }}>{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ── MÓVIL ── */}
        <div className="sm:hidden text-center">

          {/* Marca centrada */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="30" height="30" viewBox="0 0 48 44" fill="none" style={{ color: "#C9A84C" }}>
                <rect x="2" y="30" width="8" height="13" rx="1.5" fill="currentColor"/>
                <rect x="13" y="21" width="8" height="22" rx="1.5" fill="currentColor"/>
                <rect x="27" y="13" width="8" height="30" rx="1.5" fill="currentColor"/>
                <path d="M4 28 Q16 14 32 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
                <path d="M28 4 L36 3 L35 11" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="flex flex-col leading-tight text-left">
                <span style={{ color: "#ffffff", fontFamily: "'Georgia', serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Soluciones Financieras
                </span>
                <span style={{ color: "#C9A84C", fontFamily: "'Georgia', serif", fontSize: "17px", fontWeight: "700", letterSpacing: "0.05em", lineHeight: "1.15" }}>
                  V&amp;D
                </span>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "8px", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                  Asesoría Financiera
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)", lineHeight: "1.7", maxWidth: "280px" }}>
              Expertos en asesoría financiera e inmobiliaria. Tu aliado para invertir, obtener créditos y encontrar la propiedad ideal.
            </p>
            <div className="flex gap-3 justify-center">
              <SocialIcon href={WHATSAPP} label="WhatsApp">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.428a.75.75 0 00.921.921l5.573-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.36l-.356-.214-3.685.975.99-3.604-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/solucionesfinancierasvyd/" label="Instagram">
                <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                <circle cx="17" cy="7" r="1" fill="currentColor"/>
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/solucionesfinancierasvyd" label="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@solucionesvyd" label="TikTok">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
              </SocialIcon>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <a
                href="https://www.google.com/maps/place/Soluciones+Financieras+V%26D/@4.5840316,-74.2089577,17z/data=!4m12!1m5!3m4!2zNMKwMzUnMDIuNSJOIDc0wrAxMicyMy4wIlc!8m2!3d4.5840316!4d-74.2063828!3m5!1s0x8e3f9ff307e60f05:0x553f1fce8b18afec!8m2!3d4.5847072!4d-74.2069642!16s%2Fg%2F11qvcywwyr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                </svg>
                C.C. Unisur, Oficina 1081
              </a>
              <a
                href="https://maps.app.goo.gl/4brhCiadb4vX53ak9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                </svg>
                C.C. Subazar, Oficina 1-87
              </a>
              <a
                href="https://maps.app.goo.gl/Aoi1SvRrYVVDWtSbA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                </svg>
                C.C. Puerto López
              </a>
            </div>
          </div>

          {/* Menú — links horizontales centrados */}
          <div className="py-5" style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#C9A84C" }}>Menú</p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2.5">
              {menuLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios — acordeón nativo (details/summary, funciona en iOS sin JS) */}
          <div>
            {secciones.map((sec) => (
              <details key={sec.titulo} style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
                <summary
                  className="flex items-center justify-between py-4 cursor-pointer list-none"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#C9A84C" }}>
                    {sec.titulo}
                  </span>
                  <svg className="w-4 h-4 flex-shrink-0 accordion-arrow" fill="none" stroke="#C9A84C" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="pb-4 space-y-1">
                  {sec.links.map((l) => {
                    const active = isActive(l.href);
                    return (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="flex items-center justify-center gap-2 py-2 text-sm transition-colors hover:text-white"
                          style={{ color: active ? "#C9A84C" : "rgba(255,255,255,0.5)", fontWeight: active ? "600" : "400" }}
                        >
                          {active && <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A84C" }} />}
                          {l.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-5 px-6 text-center text-xs" style={{ borderColor: "rgba(201,168,76,0.1)", color: "rgba(255,255,255,0.3)" }}>
        © {new Date().getFullYear()} Soluciones Financieras V&D · Todos los derechos reservados
      </div>
    </footer>
  );
}

function Marca() {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <svg width="30" height="30" viewBox="0 0 48 44" fill="none" style={{ color: "#C9A84C" }}>
          <rect x="2" y="30" width="8" height="13" rx="1.5" fill="currentColor"/>
          <rect x="13" y="21" width="8" height="22" rx="1.5" fill="currentColor"/>
          <rect x="27" y="13" width="8" height="30" rx="1.5" fill="currentColor"/>
          <path d="M4 28 Q16 14 32 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
          <path d="M28 4 L36 3 L35 11" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div className="flex flex-col leading-tight">
          <span style={{ color: "#ffffff", fontFamily: "'Georgia', serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Soluciones Financieras
          </span>
          <span style={{ color: "#C9A84C", fontFamily: "'Georgia', serif", fontSize: "17px", fontWeight: "700", letterSpacing: "0.05em", lineHeight: "1.15" }}>
            V&amp;D
          </span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "8px", letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Asesoría Financiera
          </span>
        </div>
      </div>
      <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "rgba(255,255,255,0.45)", lineHeight: "1.7" }}>
        Expertos en asesoría financiera e inmobiliaria. Tu aliado para invertir, obtener créditos y encontrar la propiedad ideal. Estamos para servirte en cada paso.
      </p>
      <div className="flex gap-3" style={{ marginBottom: "16px" }}>
        <SocialIcon href={WHATSAPP} label="WhatsApp">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.428a.75.75 0 00.921.921l5.573-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.36l-.356-.214-3.685.975.99-3.604-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/solucionesfinancierasvyd/" label="Instagram">
          <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
          <circle cx="17" cy="7" r="1" fill="currentColor"/>
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com/solucionesfinancierasvyd" label="Facebook">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </SocialIcon>
        <SocialIcon href="https://www.tiktok.com/@solucionesvyd" label="TikTok">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
        </SocialIcon>
      </div>
      <div className="space-y-2 mt-0">
        <a
          href="https://www.google.com/maps/place/Soluciones+Financieras+V%26D/@4.5840316,-74.2089577,17z/data=!4m12!1m5!3m4!2zNMKwMzUnMDIuNSJOIDc0wrAxMicyMy4wIlc!8m2!3d4.5840316!4d-74.2063828!3m5!1s0x8e3f9ff307e60f05:0x553f1fce8b18afec!8m2!3d4.5847072!4d-74.2069642!16s%2Fg%2F11qvcywwyr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
          </svg>
          C.C. Unisur, Oficina 1081
        </a>
        <a
          href="https://maps.app.goo.gl/4brhCiadb4vX53ak9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
          </svg>
          C.C. Subazar, Oficina 1-87
        </a>
        <a
          href="https://maps.app.goo.gl/Aoi1SvRrYVVDWtSbA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
          </svg>
          C.C. Puerto López
        </a>
      </div>
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:brightness-125 hover:scale-110"
      style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">{children}</svg>
    </a>
  );
}
