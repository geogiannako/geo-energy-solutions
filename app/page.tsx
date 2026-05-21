export default function HomePage() {
  const services = [
    {
      title: 'Φωτοβολταϊκά Συστήματα',
      desc: 'Ολοκληρωμένες λύσεις για κατοικίες και επιχειρήσεις με μέγιστη ενεργειακή απόδοση.',
    },
    {
      title: 'Net Billing',
      desc: 'Μειώστε δραστικά το κόστος ρεύματος μέσω σύγχρονων ενεργειακών λύσεων.',
      more:
        'Το Net Billing είναι σύστημα ταυτοχρονισμένου ενεργειακού συμψηφισμού για φωτοβολταϊκά. Η παραγόμενη ενέργεια καταναλώνεται άμεσα από την κατοικία ή την επιχείρηση, ενώ η πλεονάζουσα ενέργεια διοχετεύεται στο δίκτυο με δυνατότητα αποζημίωσης. Με σωστή μελέτη και επιλογή εξοπλισμού επιτυγχάνεται σημαντική μείωση στους λογαριασμούς ρεύματος και γρήγορη απόσβεση της επένδυσης.',
    },
    {
      title: 'Συστήματα Αποθήκευσης',
      desc: 'Μπαταρίες τελευταίας τεχνολογίας για αυτονομία και ενεργειακή ασφάλεια.',
    },
    {
      title: 'Ενεργειακές Μελέτες',
      desc: 'Εξειδικευμένες μελέτες και τεχνική υποστήριξη για κάθε έργο.',
    },
  ];

  const projects = [
    'Βιομηχανικό πάρκο 500kW',
    'Ξενοδοχειακή μονάδα 120kW',
    'Οικιακά φωτοβολταϊκά συστήματα',
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-green-700 md:text-2xl">Geo-Energy Solutions</div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-green-700">Υπηρεσίες</a>
            <a href="#projects" className="transition hover:text-green-700">Έργα</a>
            <a href="#about" className="transition hover:text-green-700">Η Εταιρεία</a>
            <a href="#contact" className="transition hover:text-green-700">Επικοινωνία</a>
          </nav>

          <a
            href="#offer-form"
            className="inline-block rounded-xl bg-green-700 px-5 py-2 text-white shadow-lg transition hover:bg-green-800"
          >
            Ζητήστε Προσφορά
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block rounded-full border border-green-400 bg-green-700/20 px-4 py-2 text-sm backdrop-blur">
              Σύγχρονες Ενεργειακές Λύσεις
            </div>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Επενδύστε στην <span className="text-green-400">πράσινη ενέργεια</span>
            </h1>

            <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
              Η Geo-Energy Solutions προσφέρει ολοκληρωμένες ενεργειακές λύσεις και φωτοβολταϊκά συστήματα υψηλής απόδοσης για κατοικίες, επιχειρήσεις, ξενοδοχεία και αγροτικές εγκαταστάσεις.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact-form"
                className="inline-block rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold shadow-2xl transition hover:bg-green-700"
              >
                Δωρεάν Μελέτη
              </a>

              <a
                href="#projects"
                className="rounded-2xl border border-white/40 px-8 py-4 text-lg transition hover:bg-white hover:text-black"
              >
                Δείτε τα έργα μας
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 text-center md:grid-cols-4">
          <div><div className="text-5xl font-bold">15+</div><div className="mt-2 text-green-100">Χρόνια Εμπειρίας</div></div>
          <div><div className="text-5xl font-bold">500+</div><div className="mt-2 text-green-100">Ολοκληρωμένα Έργα</div></div>
          <div><div className="text-5xl font-bold">98%</div><div className="mt-2 text-green-100">Ικανοποίηση Πελατών</div></div>
          <div><div className="text-5xl font-bold">24/7</div><div className="mt-2 text-green-100">Τεχνική Υποστήριξη</div></div>
        </div>
      </section>

      <section id="about" className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
            alt="Φωτοβολταϊκά πάνελ"
            className="rounded-3xl shadow-2xl"
          />

          <div className="space-y-6">
            <div className="font-semibold uppercase tracking-widest text-green-700">Η Εταιρεία</div>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">Εξειδίκευση στην καθαρή ενέργεια</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Παρέχουμε ολοκληρωμένες λύσεις φωτοβολταϊκών με στόχο τη μέγιστη εξοικονόμηση ενέργειας και τη βιώσιμη ανάπτυξη. Αναλαμβάνουμε μελέτη, εγκατάσταση και συντήρηση φωτοβολταϊκών συστημάτων με επαγγελματισμό και αξιοπιστία.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="rounded-2xl bg-white p-6 shadow-lg"><div className="text-3xl font-bold text-green-700">100%</div><div className="mt-2 text-gray-600">Πιστοποιημένος Εξοπλισμός</div></div>
              <div className="rounded-2xl bg-white p-6 shadow-lg"><div className="text-3xl font-bold text-green-700">ISO</div><div className="mt-2 text-gray-600">Πρότυπα Ποιότητας</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 font-semibold uppercase tracking-widest text-green-700">Υπηρεσίες</div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ολοκληρωμένες λύσεις ενέργειας</h2>
            <p className="text-lg text-gray-600">Υπηρεσίες φωτοβολταϊκών και ενεργειακών λύσεων με στόχο την ενεργειακή αυτονομία, τη μείωση κόστους ρεύματος και τη μέγιστη απόδοση επένδυσης.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="group rounded-3xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:bg-green-700 hover:text-white">
                <div className="mb-6 h-14 w-14 rounded-2xl bg-green-100 group-hover:bg-white/20" />
                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                <p className="mb-5 leading-relaxed opacity-80">{service.desc}</p>

                {service.more && (
                  <details>
                    <summary className="cursor-pointer text-sm font-semibold hover:underline">Περισσότερα...</summary>
                    <p className="mt-4 text-sm leading-relaxed opacity-90">{service.more}</p>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 font-semibold uppercase tracking-widest text-green-700">Έργα</div>
              <h2 className="text-4xl font-bold md:text-5xl">Πρόσφατες εγκαταστάσεις</h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project} className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <img src={`https://picsum.photos/600/40${index}`} alt={project} className="h-64 w-full object-cover" />
                <div className="p-8">
                  <div className="mb-3 text-sm font-semibold text-green-700">Φωτοβολταϊκό Έργο</div>
                  <h3 className="mb-4 text-2xl font-bold">{project}</h3>
                  <p className="leading-relaxed text-gray-600">Σύγχρονη εγκατάσταση με έμφαση στην απόδοση, την αξιοπιστία και την εξοικονόμηση ενέργειας.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-4 font-semibold uppercase tracking-widest text-green-700">Testimonials</div>
          <h2 className="mb-12 text-4xl font-bold md:text-5xl">Τι λένε οι πελάτες μας</h2>
          <div className="rounded-3xl bg-gray-50 p-10 shadow-xl">
            <p className="text-2xl italic leading-relaxed text-gray-700">“Άψογη εξυπηρέτηση, επαγγελματισμός και σημαντική μείωση του ενεργειακού κόστους από τον πρώτο μήνα λειτουργίας.”</p>
            <div className="mt-8 text-xl font-bold">Γιώργος Παπαδόπουλος</div>
            <div className="mt-2 text-gray-500">Ιδιοκτήτης Ξενοδοχειακής Μονάδας</div>
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">Ξεκινήστε σήμερα τη μετάβαση στην πράσινη ενέργεια</h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-green-100">Επικοινωνήστε μαζί μας για δωρεάν τεχνική μελέτη και εξατομικευμένη προσφορά.</p>
          <a href="#offer-form" className="inline-block rounded-2xl bg-white px-10 py-5 text-xl font-bold text-green-700 shadow-2xl transition hover:bg-gray-100">Ζητήστε Προσφορά</a>
        </div>
      </section>

      <section id="offer-form" className="bg-gray-100 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <div className="mb-4 font-semibold uppercase tracking-widest text-green-700">Ζητήστε Προσφορά</div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Λάβετε εξατομικευμένη προσφορά</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">Συμπληρώστε τα στοιχεία σας και τις ανάγκες του συστήματος που θέλετε.</p>
          </div>

          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="space-y-6 rounded-3xl bg-white p-10 shadow-2xl">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέα προσφορά από Geo-Energy Solutions" />

            <div className="grid gap-6 md:grid-cols-2">
              <FormInput label="Ονοματεπώνυμο" name="name" placeholder="Το όνομά σας" required />
              <FormInput label="Τηλέφωνο" name="phone" type="tel" placeholder="Το τηλέφωνό σας" required />
            </div>

            <FormInput label="Email" name="email" type="email" placeholder="Το email σας" required />
            <FormInput label="Πόσα kW σύστημα θέλετε;" name="kw" type="number" placeholder="π.χ. 10" required />

            <div>
              <label className="mb-4 block font-semibold text-gray-700">Θέλετε μπαταρίες;</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-3 text-lg"><input type="radio" name="battery" value="Ναι" required /> Ναι</label>
                <label className="flex items-center gap-3 text-lg"><input type="radio" name="battery" value="Όχι" required /> Όχι</label>
              </div>
            </div>

            <FormTextarea label="Περιγραφή έργου" name="message" placeholder="Περιγράψτε το έργο ή τις ανάγκες σας" />

            <button type="submit" className="w-full rounded-2xl bg-green-700 py-5 text-xl font-bold text-white transition hover:bg-green-800">Αποστολή Προσφοράς</button>
          </form>
        </div>
      </section>

      <section id="contact-form" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center">
            <div className="mb-4 font-semibold uppercase tracking-widest text-green-700">Δωρεάν Μελέτη</div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Στείλτε το αίτημά σας</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο δυνατό.</p>
          </div>

          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="space-y-6 rounded-3xl bg-gray-50 p-10 shadow-2xl">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέο αίτημα από Geo-Energy Solutions" />

            <div className="grid gap-6 md:grid-cols-2">
              <FormInput label="Ονοματεπώνυμο" name="name" placeholder="Το όνομά σας" required />
              <FormInput label="Τηλέφωνο" name="phone" type="tel" placeholder="Το τηλέφωνό σας" required />
            </div>
            <FormInput label="Email" name="email" type="email" placeholder="Το email σας" required />
            <FormTextarea label="Τι χρειάζεστε;" name="message" placeholder="Περιγράψτε το έργο ή την υπηρεσία που σας ενδιαφέρει" required />
            <button type="submit" className="w-full rounded-2xl bg-green-700 py-5 text-xl font-bold text-white transition hover:bg-green-800">Αποστολή Αιτήματος</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="bg-black py-20 text-gray-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          <div>
            <div className="mb-6 text-3xl font-bold text-white">Geo-Energy Solutions</div>
            <p className="leading-relaxed text-gray-400">Σύγχρονες ενεργειακές λύσεις με αξιοπιστία, τεχνογνωσία και υψηλή ποιότητα υπηρεσιών.</p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Υπηρεσίες</h3>
            <ul className="space-y-3 text-gray-400"><li>Φωτοβολταϊκά</li><li>Net Billing</li><li>Μπαταρίες</li><li>Συντήρηση</li></ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Επικοινωνία</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Υπεύθυνος Επικοινωνίας:</li>
              <li className="font-semibold text-white">Γεώργιος Γιαννακόπουλος</li>
              <li>Διπλωματούχος Ηλεκτρολόγος Μηχανικός, MSc</li>
              <li>geoenergysol@gmail.com</li>
              <li>+30 6944450594</li>
              <li>Καλαμάτα, Μαιζώνος 88, Ελλάδα</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Newsletter</h3>
            <div className="space-y-4">
              <input type="email" placeholder="Το email σας" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-green-500" />
              <button className="w-full rounded-xl bg-green-700 py-3 font-semibold transition hover:bg-green-800">Εγγραφή</button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">© 2026 Geo-Energy Solutions. All rights reserved.</div>
      </footer>

      <a
        href="https://wa.me/306944450594"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:bg-green-600"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </main>
  );
}

function FormInput({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
        placeholder={placeholder}
      />
    </div>
  );
}

function FormTextarea({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-gray-700">{label}</label>
      <textarea
        name={name}
        rows={6}
        required={required}
        className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
        placeholder={placeholder}
      />
    </div>
  );
}
