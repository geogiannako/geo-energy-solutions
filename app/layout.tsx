import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geo-Energy Solutions | Φωτοβολταϊκά Καλαμάτα Μεσσηνία',
  description:
    'Φωτοβολταϊκά συστήματα, Net Billing και ενεργειακές λύσεις για κατοικίες, επιχειρήσεις, ξενοδοχεία και αγροτικές εγκαταστάσεις.',
  keywords: [
    'φωτοβολταϊκά Καλαμάτα',
    'φωτοβολταϊκά Μεσσηνία',
    'Net Billing Μεσσηνία',
    'φωτοβολταϊκά Μάνη',
    'φωτοβολταϊκά Πύλος',
    'φωτοβολταϊκά Κορώνη',
    'φωτοβολταϊκά Μεθώνη',
    'φωτοβολταϊκά Φοινικούντα',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
