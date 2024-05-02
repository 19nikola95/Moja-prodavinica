import "./globals.scss"; 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Moja prodavnica</title>
        <link rel="icon" type="image/x-icon"  href="Slika bara na pretrazivacu/ikonica-za-tab.png"></link>
        </head>
      <body>{children}</body>
    </html>
  );
}
