import "./globals.css";

export const metadata = {
  title: "Geo-Energy Solutions | Φωτοβολταϊκά Καλαμάτα Μεσσηνία",
  description:
    "Φωτοβολταϊκά συστήματα, net billing και ενεργειακές λύσεις σε Καλαμάτα, Μεσσηνία και Πελοπόννησο.",
  keywords:
    "φωτοβολταϊκά Καλαμάτα, φωτοβολταϊκά Μεσσηνία, net billing Μεσσηνία, μπαταρίες φωτοβολταϊκών, ενεργειακές λύσεις",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
