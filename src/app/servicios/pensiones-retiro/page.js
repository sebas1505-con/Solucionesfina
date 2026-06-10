import ServicioLayout from "../_components/ServicioLayout";

export const metadata = { title: "Pensiones y Retiro · Soluciones Financieras V&D" };

const secciones = [
  {
    titulo: "1. ¿Por qué planear tu retiro desde hoy?",
    contenido: "El tiempo es el activo más valioso cuando se trata de planear el retiro. Cuanto antes empieces, mayor será el capital acumulado y mejor será tu calidad de vida al jubilarte. En V&D te ayudamos a construir ese futuro desde ahora.",
  },
  {
    titulo: "2. Servicios de pensiones y retiro",
    lista: [
      ["Asesoría en traslado de fondo",     "Te orientamos sobre cuándo y a qué fondo conviene trasladarte."],
      ["Proyección pensional",               "Calculamos a qué edad y con cuánto podrás jubilarte."],
      ["Planes de ahorro para el retiro",    "Complementos voluntarios como AFC y cuentas de ahorro pensional."],
      ["Pensión anticipada",                 "Estrategias para retirarte antes de la edad legal."],
      ["BEPS y Colombia Mayor",              "Orientación para quienes no cumplen semanas de cotización."],
      ["Pensión para independientes",        "Estrategias de cotización para trabajadores por cuenta propia."],
    ],
  },
  {
    titulo: "3. Nuestro proceso",
    pasos: [
      { n: "01", titulo: "Historia pensional",        desc: "Revisamos tus semanas cotizadas, fondo actual y proyección." },
      { n: "02", titulo: "Simulación de escenarios",  desc: "Calculamos cuánto recibirías en diferentes escenarios de retiro." },
      { n: "03", titulo: "Plan complementario",       desc: "Si la pensión no es suficiente, diseñamos un ahorro voluntario." },
      { n: "04", titulo: "Seguimiento anual",         desc: "Revisamos tu plan cada año para ajustarlo a tu situación." },
    ],
  },
  {
    titulo: "4. Comparativa de regímenes",
    tabla: [
      ["Prima Media (Colpensiones)", "Pensión definida por semanas y salario",     "Bajo"],
      ["Ahorro Individual (fondos)", "Pensión según capital acumulado",            "Variable"],
      ["Ahorro voluntario (AFC)",    "Complemento con beneficio tributario",       "Tú lo controlas"],
    ],
    nota: "La elección del régimen adecuado puede significar hasta un 40% más de pensión al momento del retiro.",
  },
  {
    titulo: "5. Empieza hoy",
    contenido: "No esperes a que sea tarde. Contáctanos hoy por WhatsApp y uno de nuestros asesores revisará tu situación pensional actual y te dirá exactamente qué pasos tomar para asegurar un retiro digno.",
  },
];

export default function PensionesRetiroPage() {
  return (
    <ServicioLayout
      tag="Servicios"
      titulo="Pensiones y Retiro"
      subtitulo="Asegura tu tranquilidad financiera para el futuro"
      secciones={secciones}
      whatsappTexto="Hola, quisiera información sobre Pensiones y Retiro de Soluciones Financieras V&D"
    />
  );
}
