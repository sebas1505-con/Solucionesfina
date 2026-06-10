import ServicioLayout from "../_components/ServicioLayout";

export const metadata = { title: "Seguros · Soluciones Financieras V&D" };

const secciones = [
  {
    titulo: "1. ¿Cómo te ayudamos con tu seguro?",
    contenido: "En V&D te acompañamos en todo el proceso para que puedas acceder al seguro que necesitas de forma fácil y sin complicaciones. Te explicamos cada paso con claridad, resolvemos tus dudas y estamos contigo desde el inicio hasta que tengas tu seguro activo.",
  },
  {
    titulo: "2. En qué te ayudamos",
    lista: [
      ["Orientación completa",           "Te explicamos qué tipo de seguro se adapta mejor a tu situación y necesidades."],
      ["Gestión del proceso",            "Nos encargamos de los trámites y documentación para que tú no tengas que preocuparte."],
      ["Resolución de dudas",            "Aclaramos cada detalle en un lenguaje sencillo, sin tecnicismos ni letra pequeña."],
      ["Seguimiento personalizado",      "Estamos pendientes de que todo salga bien en cada etapa del proceso."],
      ["Atención postventa",             "Una vez activo tu seguro, seguimos disponibles para cualquier novedad que se presente."],
      ["Acompañamiento total",           "No te dejamos solo — desde la primera consulta hasta que tengas todo resuelto."],
    ],
  },
  {
    titulo: "3. Así trabajamos contigo",
    pasos: [
      { n: "01", titulo: "Nos cuentas tu situación",   desc: "Escuchamos lo que necesitas y entendemos tu caso sin ningún compromiso." },
      { n: "02", titulo: "Te orientamos",              desc: "Te explicamos las opciones disponibles de forma clara y sencilla." },
      { n: "03", titulo: "Gestionamos todo por ti",    desc: "Nos encargamos del proceso para que sea rápido y sin estrés." },
      { n: "04", titulo: "Estamos siempre contigo",    desc: "Después de tener tu seguro, seguimos disponibles para lo que necesites." },
    ],
  },
  {
    titulo: "4. Consulta gratis hoy",
    contenido: "La primera consulta es completamente gratuita y sin compromiso. Escríbenos por WhatsApp y un asesor te contactará en menos de 24 horas para ayudarte con todo el proceso.",
  },
];

export default function SegurosPage() {
  return (
    <ServicioLayout
      tag="Servicios"
      titulo="Seguros"
      subtitulo="Te acompañamos en todo el proceso para que estés bien protegido"
      secciones={secciones}
      whatsappTexto="Hola, quisiera información sobre el servicio de Seguros de Soluciones Financieras V&D"
    />
  );
}
