export const metadata = {
  title: "Geo-Energy Solutions",
  description: "Φωτοβολταϊκά & ενεργειακές λύσεις",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-6 max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Geo-Energy Solutions
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Σύγχρονες λύσεις φωτοβολταϊκών και ενεργειακής αυτονομίας
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#offer"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Ζητήστε Προσφορά
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
            >
              Επικοινωνία
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Υπηρεσίες
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Φωτοβολταϊκά
              </h3>

              <p className="text-gray-600">
                Μελέτη και εγκατάσταση φωτοβολταϊκών συστημάτων
                υψηλής απόδοσης.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Net Billing
              </h3>

              <p className="text-gray-600 mb-4">
                Μειώστε δραστικά το κόστος ρεύματος.
              </p>

              <details>
                <summary className="cursor-pointer font-semibold text-green-700">
                  Περισσότερα...
                </summary>

                <p className="mt-4 text-gray-600">
                  Το Net Billing είναι σύστημα ενεργειακού συμψηφισμού
                  που επιτρέπει την παραγωγή και κατανάλωση ηλεκτρικής
                  ενέργειας από φωτοβολταϊκά με σημαντική εξοικονόμηση.
                </p>
              </details>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Μπαταρίες
              </h3>

              <p className="text-gray-600">
                Συστήματα αποθήκευσης ενέργειας τελευταίας τεχνολογίας.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OFFER FORM */}
      <section id="offer" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Ζητήστε Προσφορά
          </h2>

          <form
            action="https://formsubmit.co/geoenergysol@gmail.com"
            method="POST"
            className="bg-gray-50 rounded-3xl shadow-2xl p-10 space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                placeholder="Ονοματεπώνυμο"
                required
                className="border rounded-2xl px-5 py-4"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Τηλέφωνο"
                required
                className="border rounded-2xl px-5 py-4"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full border rounded-2xl px-5 py-4"
            />

            <input
              type="number"
              name="kw"
              placeholder="Πόσα kW σύστημα θέλετε;"
              className="w-full border rounded-2xl px-5 py-4"
            />

            <div>
              <p className="font-semibold mb-4">
                Θέλετε μπαταρίες;
              </p>

              <div className="flex gap-8">

                <label className="flex items-center gap-2">
                  <input type="radio" name="battery" value="Ναι" />
                  Ναι
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="battery" value="Όχι" />
                  Όχι
                </label>

              </div>
            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Περιγραφή έργου"
              className="w-full border rounded-2xl px-5 py-4"
            />

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl text-xl font-bold transition"
            >
              Αποστολή
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="bg-black text-white py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-3xl font-bold mb-6">
              Geo-Energy Solutions
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Φωτοβολταϊκά συστήματα και ενεργειακές λύσεις
              υψηλής ποιότητας.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Επικοινωνία
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>Γεώργιος Γιαννακόπουλος</strong>
              </li>

              <li>
                Διπλωματούχος Ηλεκτρολόγος Μηχανικός MSc
              </li>

              <li>
                Καλαμάτα, Μαιζώνος 88
              </li>

              <li>
                📞 6944450594
              </li>

              <li>
                📧 geoenergysol@gmail.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 Geo-Energy Solutions
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/306944450594"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 transition"
      >
        💬
      </a>

    </div>
  );
}