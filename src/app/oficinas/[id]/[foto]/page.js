const GOLD = "#C9A84C";

const oficinas = [
  {
    id: "unisur",
    nombre: "C.C. Unisur",
    fotos: ["/oficinas/unisur/unisur1.png", "/oficinas/unisur/unisur2.png"],
  },
  {
    id: "subazar",
    nombre: "C.C. Subazar",
    fotos: ["/oficinas/subazar/subazar1.png", "/oficinas/subazar/subazar2.png", "/oficinas/subazar/subazar3.png", "/oficinas/subazar/subazar4.png"],
  },
  {
    id: "puertolopez",
    nombre: "C.C. Puerto López",
    fotos: ["/oficinas/puertolopez/puerto1.png", "/oficinas/puertolopez/puerto2.png", "/oficinas/puertolopez/puerto3.png", "/oficinas/puertolopez/puerto4.png", "/oficinas/puertolopez/puerto5.png"],
  },
];

const btnStyle = {
  display: "flex", alignItems: "center", justifyContent: "center",
  width: "48px", height: "48px", borderRadius: "50%",
  background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.45)",
  color: GOLD, textDecoration: "none", WebkitTapHighlightColor: "transparent",
  flexShrink: 0,
};

export default async function FotoPage({ params }) {
  const { id, foto } = await params;
  const oficina = oficinas.find((o) => o.id === id);
  const idx = parseInt(foto, 10);

  if (!oficina || isNaN(idx) || idx < 0 || idx >= oficina.fotos.length) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0d0d0d", color: "#fff" }}>
        <a href={`/oficinas/${id}`} style={{ color: GOLD }}>Volver</a>
      </div>
    );
  }

  const n = oficina.fotos.length;
  const src = oficina.fotos[idx];

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "rgba(0,0,0,0.97)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: "20px",
    }}>

      {/* X cerrar */}
      <a href={`/oficinas/${id}`} style={{ ...btnStyle, position: "absolute", top: "16px", right: "16px" }}>
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </a>

      {/* Foto */}
      <img
        src={src}
        alt={`${oficina.nombre} ${idx + 1}`}
        style={{
          maxWidth: "calc(100vw - 32px)",
          maxHeight: "calc(100svh - 160px)",
          objectFit: "contain",
          borderRadius: "14px",
          border: "1px solid rgba(201,168,76,0.2)",
          display: "block",
        }}
      />

      {/* Navegación */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        {idx > 0 ? (
          <a href={`/oficinas/${id}/${idx - 1}`} style={btnStyle}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </a>
        ) : <div style={{ width: "48px" }} />}

        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{idx + 1} / {n}</span>

        {idx < n - 1 ? (
          <a href={`/oficinas/${id}/${idx + 1}`} style={btnStyle}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        ) : <div style={{ width: "48px" }} />}
      </div>
    </div>
  );
}
