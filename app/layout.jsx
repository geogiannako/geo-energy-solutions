import './globals.css';

export const metadata = {
  title: 'Geo-Energy Solutions | Φωτοβολταϊκά Καλαμάτα Μεσσηνία',
  description:
    'Φωτοβολταϊκά συστήματα, Net Billing και ενεργειακές λύσεις για κατοικίες, επιχειρήσεις και αγροτικές εγκαταστάσεις.',
  keywords:
    'φωτοβολταϊκά Καλαμάτα, φωτοβολταϊκά Μεσσηνία, net billing, μπαταρίες, ενεργειακές λύσεις, φωτοβολταϊκά Πύλος, Φοινικούντα, Κορώνη, Μεθώνη, Στούπα, Μάνη, Μεσσήνη',
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
