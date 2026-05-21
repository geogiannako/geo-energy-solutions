import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Geo-Energy Solutions | Φωτοβολταϊκά Καλαμάτα Μεσσηνία',
  description: 'Φωτοβολταϊκά συστήματα, Net Billing, μπαταρίες και ενεργειακές λύσεις για κατοικίες, επιχειρήσεις, ξενοδοχεία και αγροτικές εγκαταστάσεις.',
  keywords: ['φωτοβολταϊκά Καλαμάτα', 'φωτοβολταϊκά Μεσσηνία', 'net billing Μεσσηνία', 'φωτοβολταϊκά Μάνη', 'φωτοβολταϊκά Πύλος', 'φωτοβολταϊκά Κορώνη', 'φωτοβολταϊκά Μεθώνη', 'φωτοβολταϊκά Φοινικούντα'],
  openGraph: {
    title: 'Geo-Energy Solutions',
    description: 'Σύγχρονες λύσεις φωτοβολταϊκών και ενεργειακής αυτονομίας.',
    type: 'website',
    locale: 'el_GR'
  }
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="el">
      <body>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
