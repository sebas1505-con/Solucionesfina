"use client";
import { useState, useEffect } from "react";

const WHATSAPP = "https://wa.me/573003184262?text=Hola%2C%20quiero%20m%C3%A1s%20asesor%C3%ADa%2C%20vengo%20desde%20la%20web%20de%20Soluciones%20Financieras%20V%26D%20%F0%9F%92%BC";
const INSTAGRAM = "https://www.instagram.com/solucionesfinancierasvyd/";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="group fixed bottom-28 right-5 md:bottom-24 md:right-6 z-40 w-11 h-11 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: "rgba(201,168,76,0.15)",
          border: "1px solid rgba(201,168,76,0.4)",
          backdropFilter: "blur(8px)",
          opacity: showScroll ? 1 : 0,
          pointerEvents: showScroll ? "auto" : "none",
          transform: showScroll ? "translateY(0) scale(1)" : "translateY(12px) scale(0.9)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        <svg className="w-4 h-4" fill="none" stroke="#C9A84C" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Instagram flotante */}
      <div className="fixed bottom-24 right-5 md:right-6 z-40">
        <span className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-40 pointer-events-none" />
        <span className="absolute inset-[-5px] rounded-full bg-pink-300 animate-ping opacity-20 pointer-events-none" style={{ animationDelay: "0.5s" }} />
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Síguenos en Instagram"
          className="relative w-14 h-14 flex items-center justify-center rounded-full text-white hover:scale-110 active:scale-95 transition-all duration-300"
          style={{
            background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            boxShadow: "0 4px 20px rgba(220,39,67,0.4), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
            <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.8" fill="none"/>
            <circle cx="17" cy="7" r="1" fill="white"/>
          </svg>
        </a>

        {/* Tooltip */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none select-none hidden md:block"
          style={{ backgroundColor: "#0d0d0d", color: "#ffffff", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        >
          Síguenos en Instagram
          <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45" style={{ backgroundColor: "#0d0d0d", borderRight: "1px solid rgba(255,255,255,0.1)", borderTop: "1px solid rgba(255,255,255,0.1)" }} />
        </div>
      </div>

      {/* WhatsApp flotante */}
      <div className="fixed bottom-6 right-5 md:right-6 z-40">
        {/* Anillos de pulso */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40 pointer-events-none" />
        <span className="absolute inset-[-5px] rounded-full bg-green-300 animate-ping opacity-20 pointer-events-none" style={{ animationDelay: "0.5s" }} />

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos por WhatsApp"
          className="relative w-14 h-14 flex items-center justify-center rounded-full text-white hover:scale-110 active:scale-95 transition-all duration-300"
          style={{
            background: "linear-gradient(145deg, #25d366, #128c4e)",
            boxShadow: "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.428a.75.75 0 00.921.921l5.573-1.475A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.36l-.356-.214-3.685.975.99-3.604-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
        </a>

        {/* Tooltip */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none select-none hidden md:block"
          style={{ backgroundColor: "#0d0d0d", color: "#ffffff", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        >
          ¿Necesitas asesoría?
          <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45" style={{ backgroundColor: "#0d0d0d", borderRight: "1px solid rgba(255,255,255,0.1)", borderTop: "1px solid rgba(255,255,255,0.1)" }} />
        </div>
      </div>
    </>
  );
}
