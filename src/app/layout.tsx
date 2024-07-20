import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Crumbleco_",
  description: "Crumbleco galletas y postres",
  generator: 'Next.js',
  authors:[{name:'Luis Mariano Lopez Lena Valdivieso',url:'https://lumava.site'}],
  category:'galletas',
  keywords:["galletas","aguascalientes","postres","negocio"],
  metadataBase:new URL("https://crumbleags.com"),
  alternates:{
    canonical: '/',
    languages: {
      'es-MX': '/es-MX',
    },
  },
  openGraph: {
    title: 'Crumbleco_',
    description: 'Crumbleco galletas y postres',
    url: 'https://crumbleags.com',
    siteName: 'Crumbleco_',
    images: [
      {
        url: '/crumbleco.webp',
        width: 800,
        height: 800,
        alt:"Crumbleco_"
      },
      
    ],
    locale: 'es_MX',
    type: 'website'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      
      <body className={''}>{children}</body>
    </html>
  );
}
