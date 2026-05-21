import './globals.css';

export const metadata = {
  title: 'Geo-Energy Solutions | Φωτοβολταϊκά Καλαμάτα Μεσσηνία',
  description: 'Φωτοβολταϊκά συστήματα, net billing, μπαταρίες και ενεργειακές λύσεις σε Καλαμάτα και Μεσσηνία.',
  keywords: 'φωτοβολταϊκά Καλαμάτα, φωτοβολταϊκά Μεσσηνία, net billing Καλαμάτα, μπαταρίες φωτοβολταϊκών, ενεργειακές λύσεις',
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="el">
      <body>
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            ` }} />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
