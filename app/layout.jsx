import './globals.css';

export const metadata = {
  title: 'Geo-Energy Solutions | Φωτοβολταϊκά Καλαμάτα Μεσσηνία',
  description: 'Φωτοβολταϊκά συστήματα, Net Billing, μπαταρίες και ενεργειακές λύσεις από τη Geo-Energy Solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
