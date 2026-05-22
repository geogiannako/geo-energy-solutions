import './globals.css';

export const metadata = {
  title: 'Geo-Energy Solutions | Φωτοβολταϊκά & Ενεργειακές Λύσεις',
  description: 'Geo-Energy Solutions - Φωτοβολταϊκά συστήματα, Net Billing, μπαταρίες και ενεργειακές λύσεις.',
  keywords: 'Geo-Energy Solutions, φωτοβολταϊκά, net billing, μπαταρίες, ενεργειακές λύσεις, Καλαμάτα, Μεσσηνία',
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
