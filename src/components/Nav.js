"use client";

const WHATSAPP = "https://wa.me/573003184262?text=Hola%2C%20quiero%20m%C3%A1s%20asesor%C3%ADa%2C%20vengo%20desde%20la%20web%20de%20Soluciones%20Financieras%20V%26D%20%F0%9F%92%BC";

const links = [
  { label: "Inicio",        href: "/" },
  { label: "Inmobiliaria",  href: "/#inmobiliaria" },
  { label: "Nosotros",      href: "/#nosotros" },
  { label: "Contacto",      href: "/#contacto" },
];

const serviciosDropdown = [
  { label: "Créditos",               href: "/servicios/creditos" },
  { label: "Seguros",                href: "/servicios/seguros" },
  { label: "Asesoría Financiera",    href: "/servicios/asesoria-empresarial" },
  { label: "Pensiones y Retiro",     href: "/servicios/pensiones-retiro" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: "#0d0d0d", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>

      {/* Checkbox oculto — controla el menú móvil sin JavaScript */}
      <input type="checkbox" id="nav-cb" className="peer sr-only" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative flex items-center h-[72px] gap-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0">
            <svg width="38" height="38" viewBox="0 0 48 44" fill="none" style={{ color: "#C9A84C" }}>
              <rect x="2" y="30" width="8" height="13" rx="1.5" fill="currentColor"/>
              <rect x="13" y="21" width="8" height="22" rx="1.5" fill="currentColor"/>
              <rect x="27" y="13" width="8" height="30" rx="1.5" fill="currentColor"/>
              <path d="M4 28 Q16 14 32 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
              <path d="M28 4 L36 3 L35 11" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span style={{ color: "#ffffff", fontFamily: "'Georgia', serif", fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Soluciones Financieras
              </span>
              <span style={{ color: "#C9A84C", fontFamily: "'Georgia', serif", fontSize: "18px", fontWeight: "700", letterSpacing: "0.05em", lineHeight: "1.1" }}>
                V&amp;D
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "8px", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                Asesoría Financiera
              </span>
            </div>
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}

            {/* Dropdown Servicios desktop */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
              >
                Servicios
                <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                style={{ backgroundColor: "#161616", border: "1px solid rgba(201,168,76,0.2)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
                <a href="/servicios" className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors hover:text-white" style={{ color: "#C9A84C", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  Ver todos los servicios
                </a>
                {serviciosDropdown.map((s) => (
                  <a key={s.href} href={s.href}
                    className="block px-4 py-2.5 text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA desktop */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex ml-auto items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-200 hover:brightness-110"
            style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.428a.75.75 0 00.921.921l5.573-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.36l-.356-.214-3.685.975.99-3.604-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Agendar Consulta
          </a>

          {/* Hamburguesa — label que activa el checkbox, sin JavaScript */}
          <label
            htmlFor="nav-cb"
            className="md:hidden flex items-center justify-center rounded-xl"
            style={{ color: "#C9A84C", width: "56px", height: "56px", cursor: "pointer", flexShrink: 0 }}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </label>
        </div>
      </div>

      {/* Menú móvil — se muestra con CSS cuando el checkbox está marcado */}
      <div
        className="hidden peer-checked:block"
        style={{ backgroundColor: "#111111", borderTop: "1px solid rgba(201,168,76,0.12)" }}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 px-4 rounded-xl text-sm font-medium transition-all duration-150"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {link.label}
            </a>
          ))}

          {/* Servicios en móvil */}
          <div className="px-4 pt-2 pb-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C9A84C" }}>Servicios</p>
            <div className="flex flex-col gap-0.5 pl-2" style={{ borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
              {serviciosDropdown.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="py-2 px-3 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 py-4 text-center text-sm font-bold rounded-xl transition-all hover:brightness-110"
            style={{ backgroundColor: "#C9A84C", color: "#0d0d0d" }}
          >
            Agendar Consulta Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:text-white"
      style={{ color: "rgba(255,255,255,0.6)" }}
      onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
    >
      {children}
    </a>
  );
}
