import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

const GOLD = "#C9A84C";

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

export default async function OficinaPage({ params }) {
  const { id } = await params;
  const oficina = oficinas.find((o) => o.id === id);

  if (!oficina) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0d0d0d", color: "#fff" }}>
      <p>Oficina no encontrada.</p>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#0d0d0d", color: "#ffffff" }}>
      <Nav />
      <main style={{ flex: 1, maxWidth: "900px", margin: "0 auto", width: "100%", padding: "40px 16px" }}>

        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: GOLD, fontSize: "14px", fontWeight: 600, textDecoration: "none", marginBottom: "32px" }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          Volver
        </a>

        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(24px,5vw,36px)", fontWeight: 700, marginBottom: "4px" }}>{oficina.nombre}</h1>
          {oficina.detalle && <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "12px" }}>{oficina.detalle}</p>}
          <a href={oficina.mapsHref} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: GOLD, fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
            </svg>
            Ver en mapa
          </a>
        </div>

        {/* Grid — cada foto es un link a su propia página */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
          {oficina.fotos.map((src, i) => (
            <a
              key={i}
              href={`/oficinas/${id}/${i}`}
              style={{
                display: "block",
                position: "relative",
                paddingBottom: "75%",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.2)",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <img
                src={src}
                alt={`${oficina.nombre} ${i + 1}`}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
