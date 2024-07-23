import type { Metadata } from "next";

import "./globals.css";
import { Provider } from "@/providers/Provider";

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
    description: 'Crumbleco galletas ',
    url: 'https://crumbleags.com',
    siteName: 'Crumbleco_',
    images:'/crumble.png',
    // images: [
    //   {
    //     url: 'https://crumbleco.pages.dev/',
    //     width: 800,
    //     height: 600,
    //     alt:"Crumbleco_"
    //   },
      
    // ],
    locale: 'es_MX',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crumble Co',
    description: 'Galletas Crumble',
    images:'/crumble.png', // Must be an absolute URL
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      
        <body className={''}>
          <Provider>
            {children}
          </Provider>
        </body>
    </html>
  );
}
