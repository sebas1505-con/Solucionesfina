import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import ServicioLayout from "../_components/ServicioLayout";

export const metadata = { title: "Créditos · Soluciones Financieras V&D" };

const secciones = [
  {
    titulo: "1. ¿Cómo te ayudamos con tu crédito?",
    contenido: "En V&D analizamos tu perfil financiero y te conectamos con las entidades bancarias y financieras que ofrecen las mejores condiciones para tu necesidad específica. Negociamos en tu nombre para obtener las tasas más competitivas.",
  },
  {
    titulo: "2. Tipos de crédito",
    lista: [
      ["Crédito de libre inversión", "Para gastos personales, viajes, estudio o lo que necesites."],
      ["Crédito hipotecario",        "Financiamiento para compra o construcción de vivienda."],
      ["Crédito empresarial",        "Capital de trabajo, maquinaria, expansión de negocio."],
      ["Leasing",                    "Arrendamiento financiero para vehículos y equipos."],
      ["Consolidación de deudas",    "Unifica tus deudas en una sola cuota con mejor tasa."],
    ],
  },
  {
    titulo: "3. Proceso de solicitud",
    pasos: [
      { n: "01", titulo: "Consulta inicial",    desc: "Analizamos tu historial crediticio y capacidad de pago." },
      { n: "02", titulo: "Búsqueda de opciones", desc: "Comparamos ofertas de múltiples entidades financieras." },
      { n: "03", titulo: "Presentación",         desc: "Te explicamos las opciones y elegimos juntos la mejor." },
      { n: "04", titulo: "Gestión y aprobación", desc: "Tramitamos todo el proceso hasta el desembolso." },
    ],
  },
  {
    titulo: "4. Tasas referenciales actuales",
    tabla: [
      ["Libre inversión",  "1.5% – 2.5% M.V.",  "Hasta 60 meses"],
      ["Hipotecario",      "1.0% – 1.5% M.V.",  "Hasta 240 meses"],
      ["Empresarial",      "1.2% – 2.0% M.V.",  "Hasta 84 meses"],
    ],
    nota: "Tasas de referencia. Las condiciones finales dependen del perfil del solicitante y la entidad aprobada.",
  },
  {
    titulo: "5. Sin costo de asesoría",
    contenido: "Nuestra asesoría en créditos no tiene costo para ti. Somos remunerados por las entidades financieras, lo que garantiza que siempre buscamos la mejor opción para el cliente.",
  },
];

export default function CreditosPage() {
  return (
    <ServicioLayout
      tag="Servicios"
      titulo="Créditos"
      subtitulo="El financiamiento que necesitas, en las mejores condiciones"
      secciones={secciones}
      whatsappTexto="Hola, quisiera información sobre el servicio de Créditos de Soluciones Financieras V&D"
    />
  );
}
