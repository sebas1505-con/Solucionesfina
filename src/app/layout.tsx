import type { Metadata } from "next";
import { Geist } from "next/font/google";
import FloatingButtons from "../components/FloatingButtons";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solucionesfinancierasvyd.com"),
  title: "Soluciones Financieras V&D · Asesoría Financiera",
  description: "Créditos, seguros y planeación patrimonial. Consulta inicial gratuita. Más de 3.000 clientes satisfechos. Te asesoramos desde cualquier lugar de Colombia.",
  openGraph: {
    title: "Soluciones Financieras V&D · Asesoría Financiera",
    description: "Créditos, seguros y planeación patrimonial. Consulta inicial gratuita. Más de 3.000 clientes satisfechos. Te asesoramos desde cualquier lugar de Colombia.",
    url: "https://solucionesfinancierasvyd.com",
    type: "website",
    locale: "es_CO",
    siteName: "Soluciones Financieras V&D",
    images: [{ url: "/galeria/imagen.png", width: 1200, height: 630, alt: "Soluciones Financieras V&D" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones Financieras V&D · Asesoría Financiera",
    description: "Créditos, seguros y planeación patrimonial. Consulta inicial gratuita. Más de 3.000 clientes satisfechos. Te asesoramos desde cualquier lugar de Colombia.",
    images: ["/galeria/imagen.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#0d0d0d" }}>
        <GoogleTagManager gtmId="GTM-5CTJZMV6" />
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
