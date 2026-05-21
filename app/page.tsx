export default function HomePage() {
  const services = [
    {
      title: "Φωτοβολταϊκά Συστήματα",
      desc: "Ολοκληρωμένες λύσεις για κατοικίες και επιχειρήσεις με μέγιστη ενεργειακή απόδοση.",
    },
    {
      title: "Net Billing",
      desc: "Μειώστε δραστικά το κόστος ρεύματος μέσω σύγχρονων ενεργειακών λύσεων.",
      more:
        "Το Net Billing είναι σύστημα ενεργειακού συμψηφισμού για φωτοβολταϊκά. Η παραγόμενη ενέργεια καταναλώνεται άμεσα και η πλεονάζουσα ενέργεια διοχετεύεται στο δίκτυο, προσφέροντας σημαντική μείωση στους λογαριασμούς ρεύματος.",
    },
    {
      title: "Συστήματα Αποθήκευσης",
      desc: "Μπαταρίες τελευταίας τεχνολογίας για αυτονομία και ενεργειακή ασφάλεια.",
    },
    {
      title: "Ενεργειακές Μελέτες",
      desc: "Εξειδικευμένες μελέτες και τεχνική υποστήριξη για κάθε έργο.",
    },
  ];

  const projects = [
    "Βιομηχανικό πάρκο 500kW",
    "Ξενοδοχειακή μονάδα 120kW",
    "Οικιακά φωτοβολταϊκά συστήματα",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold text-green-700">
            Geo-Energy Solutions
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-green-700 transition">Υπηρεσίες</a>
            <a href="#projects" className="hover:text-green-700 transition">Έργα</a>
            <a href="#about" className="hover:text-green-700 transition">Η Εταιρεία</a>
            <a href="#contact" className="hover:text-green-700 transition">Επικοινωνία</a>
          </nav>

          <a
            href="#offer-form"
            className="bg-green-700 hover:bg-green-800 text-white px-4 md:px-5 py-2 rounded-xl transition shadow-lg inline-block"
          >
            Ζητήστε Προσφορά
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block bg-green-700/20 border border-green-400 px-4 py-2 rounded-full text-sm backdrop-blur">
              Σύγχρονες Ενεργειακές Λύσεις
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Επενδύστε στην
              <span className="text-green-400"> πράσινη ενέργεια</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Η Geo-Energy Solutions προσφέρει ολοκληρωμένες ενεργειακές λύσεις και φωτοβολταϊκά συστήματα υψηλής απόδοσης για κατοικίες, επιχειρήσεις, ξενοδοχεία και αγροτικές εγκαταστάσεις.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact-form"
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl transition inline-block"
              >
                Δωρεάν Μελέτη
              </a>

              <a
                href="#projects"
                className="border border-white/40 hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg transition inline-block"
              >
                Δείτε τα έργα μας
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div><div className="text-5xl font-bold">15+</div><div className="mt-2 text-green-100">Χρόνια Εμπειρίας</div></div>
          <div><div className="text-5xl font-bold">500+</div><div className="mt-2 text-green-100">Ολοκληρωμένα Έργα</div></div>
          <div><div className="text-5xl font-bold">98%</div><div className="mt-2 text-green-100">Ικανοποίηση Πελατών</div></div>
          <div><div className="text-5xl font-bold">24/7</div><div className="mt-2 text-green-100">Τεχνική Υποστήριξη</div></div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
            alt="Solar installation"
            className="rounded-3xl shadow-2xl"
          />

          <div className="space-y-6">
            <div className="text-green-700 font-semibold uppercase tracking-widest">Η Εταιρεία</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Εξειδίκευση στην καθαρή ενέργεια</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Παρέχουμε ολοκληρωμένες λύσεις φωτοβολταϊκών με στόχο τη μέγιστη εξοικονόμηση ενέργειας και τη βιώσιμη ανάπτυξη. Αναλαμβάνουμε μελέτη, εγκατάσταση και συντήρηση φωτοβολταϊκών συστημάτων με επαγγελματισμό και αξιοπιστία.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-700">100%</div>
                <div className="mt-2 text-gray-600">Πιστοποιημένος Εξοπλισμός</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-700">ISO</div>
                <div className="mt-2 text-gray-600">Πρότυπα Ποιότητας</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-green-700 font-semibold uppercase tracking-widest mb-4">Υπηρεσίες</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ολοκληρωμένες λύσεις ενέργειας</h2>
            <p className="text-lg text-gray-600">
              Υπηρεσίες φωτοβολταϊκών και ενεργειακών λύσεων με στόχο την ενεργειακή αυτονομία, τη μείωση κόστους ρεύματος και τη μέγιστη απόδοση επένδυσης.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 hover:bg-green-700 hover:text-white transition-all duration-300 rounded-3xl p-8 shadow-lg group">
                <div className="w-14 h-14 rounded-2xl bg-green-100 group-hover:bg-white/20 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="leading-relaxed opacity-80 mb-5">{service.desc}</p>
                {service.more && (
                  <details>
                    <summary className="cursor-pointer font-semibold text-sm hover:underline">Περισσότερα...</summary>
                    <p className="mt-4 text-sm leading-relaxed opacity-90">{service.more}</p>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <div className="text-green-700 font-semibold uppercase tracking-widest mb-4">Έργα</div>
              <h2 className="text-4xl md:text-5xl font-bold">Πρόσφατες εγκαταστάσεις</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <img src={`https://picsum.photos/600/40${index}`} alt={project} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <div className="text-sm text-green-700 font-semibold mb-3">Φωτοβολταϊκό Έργο</div>
                  <h3 className="text-2xl font-bold mb-4">{project}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Σύγχρονη εγκατάσταση με έμφαση στην απόδοση, την αξιοπιστία και την εξοικονόμηση ενέργειας.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">Ξεκινήστε σήμερα τη μετάβαση στην πράσινη ενέργεια</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Επικοινωνήστε μαζί μας για δωρεάν τεχνική μελέτη και εξατομικευμένη προσφορά.
          </p>
          <a href="#offer-form" className="bg-white text-green-700 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold transition shadow-2xl inline-block">
            Ζητήστε Προσφορά
          </a>
        </div>
      </section>

      <section id="offer-form" className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-green-700 font-semibold uppercase tracking-widest mb-4">Ζητήστε Προσφορά</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Λάβετε εξατομικευμένη προσφορά</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Συμπληρώστε τα στοιχεία σας και τις ανάγκες του συστήματος που θέλετε.</p>
          </div>

          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="bg-white p-10 rounded-3xl shadow-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέα προσφορά από Geo-Energy Solutions" />
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Ονοματεπώνυμο" />
              <input type="tel" name="phone" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Τηλέφωνο" />
            </div>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Email" />
            <input type="number" name="kw" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Πόσα kW σύστημα θέλετε; π.χ. 10" />
            <div>
              <label className="block mb-4 font-semibold text-gray-700">Θέλετε μπαταρίες;</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 text-lg"><input type="radio" name="battery" value="Ναι" required />Ναι</label>
                <label className="flex items-center gap-3 text-lg"><input type="radio" name="battery" value="Όχι" required />Όχι</label>
              </div>
            </div>
            <textarea name="message" rows={6} className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Περιγράψτε το έργο ή τις ανάγκες σας" />
            <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl text-xl font-bold transition">Αποστολή Προσφοράς</button>
          </form>
        </div>
      </section>

      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-green-700 font-semibold uppercase tracking-widest mb-4">Δωρεάν Μελέτη</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Στείλτε το αίτημά σας</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο δυνατό.</p>
          </div>

          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="bg-gray-50 p-10 rounded-3xl shadow-2xl space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέο αίτημα από Geo-Energy Solutions" />
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Ονοματεπώνυμο" />
              <input type="tel" name="phone" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Τηλέφωνο" />
            </div>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Email" />
            <textarea name="message" rows={6} required className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600" placeholder="Περιγράψτε το έργο ή την υπηρεσία που σας ενδιαφέρει" />
            <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-2xl text-xl font-bold transition">Αποστολή Αιτήματος</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="bg-black text-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <div className="text-3xl font-bold text-white mb-6">Geo-Energy Solutions</div>
            <p className="leading-relaxed text-gray-400">Σύγχρονες ενεργειακές λύσεις με αξιοπιστία, τεχνογνωσία και υψηλή ποιότητα υπηρεσιών.</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Υπηρεσίες</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Φωτοβολταϊκά</li>
              <li>Net Billing</li>
              <li>Μπαταρίες</li>
              <li>Συντήρηση</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Επικοινωνία</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Υπεύθυνος Επικοινωνίας:</li>
              <li className="text-white font-semibold">Γεώργιος Γιαννακόπουλος</li>
              <li>Διπλωματούχος Ηλεκτρολόγος Μηχανικός, MSc</li>
              <li>geoenergysol@gmail.com</li>
              <li>+30 6944450594</li>
              <li>Καλαμάτα, Μαιζώνος 88, Ελλάδα</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <div className="space-y-4">
              <input type="email" placeholder="Το email σας" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-green-500" />
              <button className="w-full bg-green-700 hover:bg-green-800 py-3 rounded-xl font-semibold transition">Εγγραφή</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 Geo-Energy Solutions. All rights reserved.
        </div>
      </footer>

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
