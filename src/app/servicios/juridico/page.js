import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import ServicioLayout from "../_components/ServicioLayout";

export const metadata = { title: "Asesoría Jurídica · Soluciones Financieras V&D" };

const secciones = [
  {
    titulo: "1. ¿Cómo te ayudamos en el área jurídica?",
    contenido: "En V&D contamos con un equipo de asesores jurídicos especializados en derecho financiero, comercial e inmobiliario. Te acompañamos desde la revisión de contratos hasta la representación en procesos legales, garantizando que tus intereses estén siempre protegidos.",
  },
  {
    titulo: "2. Áreas de atención jurídica",
    lista: [
      ["Derecho Financiero", "Revisión y estructuración de contratos de crédito, leasing y productos bancarios."],
      ["Derecho Inmobiliario", "Compraventa de inmuebles, escrituración, estudio de títulos y promesas de compraventa."],
      ["Derecho Comercial", "Constitución de empresas, contratos mercantiles y asesoría a pymes."],
      ["Cobro Jurídico de Cartera", "Gestión extrajudicial y judicial para recuperar deudas de manera efectiva."],
      ["Sucesiones y Herencias", "Trámites de sucesión, liquidación de sociedades conyugales y adjudicación de bienes."],
      ["Derecho del Consumidor", "Defensa ante entidades financieras, centrales de riesgo y reclamaciones ante la SFC."],
    ],
  },
  {
    titulo: "3. Proceso de atención",
    pasos: [
      { n: "01", titulo: "Consulta inicial gratuita", desc: "Analizamos tu caso, identificamos los riesgos y te explicamos las opciones disponibles." },
      { n: "02", titulo: "Diagnóstico jurídico", desc: "Revisamos documentos, contratos o antecedentes para darte un concepto claro y preciso." },
      { n: "03", titulo: "Estrategia legal", desc: "Diseñamos la ruta jurídica más eficiente para proteger tus intereses." },
      { n: "04", titulo: "Acompañamiento y seguimiento", desc: "Te acompañamos en cada etapa del proceso hasta llegar a la solución." },
    ],
  },
  {
    titulo: "4. ¿Por qué confiar en nosotros?",
    lista: [
      ["Experiencia en el sector financiero e inmobiliario", "Conocemos las normas y prácticas del mercado colombiano."],
      ["Atención personalizada", "Tu caso no es un número: lo analizamos con detalle y compromiso."],
      ["Red de aliados legales", "Contamos con abogados especialistas en cada área del derecho."],
      ["Tarifas claras y transparentes", "Sin cobros ocultos ni sorpresas: te informamos el costo antes de iniciar."],
    ],
  },
  {
    titulo: "5. Consulta inicial sin costo",
    contenido: "La primera consulta es completamente gratuita. Cuéntanos tu situación y un asesor jurídico te orientará sobre los pasos a seguir, sin ningún compromiso de tu parte.",
  },
];

export default function JuridicoPage() {
  return (
    <ServicioLayout
      tag="Servicios"
      titulo="Asesoría Jurídica"
      subtitulo="Protegemos tus intereses con experiencia y compromiso"
      secciones={secciones}
      whatsappTexto="Hola, quisiera información sobre el servicio de Asesoría Jurídica de Soluciones Financieras V&D"
    />
  );
}
