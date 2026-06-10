import ServicioLayout from "../_components/ServicioLayout";

export const metadata = { title: "Asesoría Financiera · Soluciones Financieras V&D" };

const secciones = [
  {
    titulo: "1. ¿En qué te ayudamos?",
    contenido: "En V&D te acompañamos en cada paso de tu proceso financiero. Te orientamos para que puedas acceder a créditos, entender tus opciones de financiamiento y tomar decisiones inteligentes con tu dinero. No importa tu situación, estamos para escucharte y encontrar la mejor solución.",
  },
  {
    titulo: "2. Nuestros servicios de asesoría",
    lista: [
      ["Orientación para créditos",         "Te ayudamos a identificar el crédito ideal según tu perfil y necesidad."],
      ["Análisis de tu situación financiera","Revisamos tu caso y te explicamos todas las opciones disponibles."],
      ["Gestión de documentación",           "Te guiamos en el proceso de solicitud para que sea más fácil y rápido."],
      ["Asesoría en seguros personales",     "Te orientamos para proteger lo que más te importa con las mejores pólizas."],
      ["Planeación de deudas",               "Estrategias para organizar y reducir tus compromisos financieros."],
      ["Acompañamiento personalizado",       "Un asesor dedicado que resuelve tus dudas en cada etapa del proceso."],
    ],
  },
  {
    titulo: "3. Cómo trabajamos contigo",
    pasos: [
      { n: "01", titulo: "Escuchamos tu caso",          desc: "Nos cuentas tu situación y lo que necesitas sin ningún compromiso." },
      { n: "02", titulo: "Analizamos tus opciones",     desc: "Buscamos las mejores alternativas del mercado para tu perfil." },
      { n: "03", titulo: "Te explicamos todo",          desc: "Te presentamos las opciones de forma clara y sin tecnicismos." },
      { n: "04", titulo: "Te acompañamos hasta el final", desc: "Estamos contigo en todo el proceso hasta que logres tu objetivo." },
    ],
  },
  {
    titulo: "4. Agenda tu asesoría gratuita",
    contenido: "La primera consulta es completamente gratuita y sin compromiso. Escríbenos por WhatsApp y un asesor se comunicará contigo en menos de 24 horas.",
  },
];

export default function AsesoriaFinancieraPage() {
  return (
    <ServicioLayout
      tag="Servicios"
      titulo="Asesoría Financiera"
      subtitulo="Te orientamos para tomar las mejores decisiones con tu dinero"
      secciones={secciones}
      whatsappTexto="Hola, quisiera información sobre Asesoría Financiera de Soluciones Financieras V&D"
    />
  );
}
