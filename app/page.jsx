const services = [
  {
    title: 'Φωτοβολταϊκά Συστήματα',
    text: 'Ολοκληρωμένες λύσεις για κατοικίες, επιχειρήσεις, ξενοδοχεία και αγροτικές εγκαταστάσεις.',
  },
  {
    title: 'Net Billing',
    text: 'Μείωση κόστους ρεύματος μέσω παραγωγής και κατανάλωσης ενέργειας από φωτοβολταϊκά.',
    more:
      'Το Net Billing είναι σύστημα ταυτοχρονισμένου ενεργειακού συμψηφισμού. Η ενέργεια που παράγεται καταναλώνεται άμεσα και η πλεονάζουσα ενέργεια διοχετεύεται στο δίκτυο. Με σωστή μελέτη, επιλογή εξοπλισμού και κατάλληλη διαστασιολόγηση, μπορεί να επιτευχθεί σημαντική εξοικονόμηση και ταχύτερη απόσβεση της επένδυσης.',
  },
  {
    title: 'Μπαταρίες & Αυτονομία',
    text: 'Συστήματα αποθήκευσης ενέργειας για μεγαλύτερη ανεξαρτησία και ασφάλεια.',
  },
  {
    title: 'Ενεργειακές Μελέτες',
    text: 'Τεχνική μελέτη, υπολογισμός ισχύος, επιλογή εξοπλισμού και υποστήριξη έργου.',
  },
];

const projects = [
  'Οικιακό φωτοβολταϊκό σύστημα',
  'Επαγγελματική εγκατάσταση Net Billing',
  'Σύστημα με μπαταρίες αποθήκευσης',
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="container nav">
          <a className="logo" href="#home">Geo-Energy Solutions</a>
          <nav className="menu">
            <a href="#services">Υπηρεσίες</a>
            <a href="#projects">Έργα</a>
            <a href="#offer">Προσφορά</a>
            <a href="#contact">Επικοινωνία</a>
          </nav>
          <a className="navCta" href="#offer">Ζητήστε Προσφορά</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="heroOverlay" />
        <div className="container heroContent">
          <p className="eyebrow">Σύγχρονες Ενεργειακές Λύσεις</p>
          <h1>Επενδύστε στην πράσινη ενέργεια</h1>
          <p className="heroText">
            Η Geo-Energy Solutions προσφέρει ολοκληρωμένες λύσεις φωτοβολταϊκών, Net Billing,
            συστημάτων αποθήκευσης και ενεργειακής αυτονομίας.
          </p>
          <div className="heroButtons">
            <a className="primaryBtn" href="#study">Δωρεάν Μελέτη</a>
            <a className="secondaryBtn" href="#projects">Δείτε έργα</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container statsGrid">
          <div><strong>15+</strong><span>Χρόνια εμπειρίας</span></div>
          <div><strong>500+</strong><span>Έργα & εφαρμογές</span></div>
          <div><strong>98%</strong><span>Ικανοποίηση πελατών</span></div>
          <div><strong>24/7</strong><span>Υποστήριξη</span></div>
        </div>
      </section>

      <section className="section about">
        <div className="container twoCols">
          <div className="imageCard" />
          <div>
            <p className="sectionLabel">Η εταιρεία</p>
            <h2>Εξειδίκευση στην καθαρή ενέργεια</h2>
            <p>
              Αναλαμβάνουμε τη μελέτη, την εγκατάσταση και την τεχνική υποστήριξη
              φωτοβολταϊκών συστημάτων με επαγγελματισμό, αξιοπιστία και έμφαση στη σωστή απόδοση της επένδυσης.
            </p>
            <div className="miniCards">
              <div><strong>100%</strong><span>Πιστοποιημένος εξοπλισμός</span></div>
              <div><strong>ISO</strong><span>Πρότυπα ποιότητας</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="sectionLabel">Υπηρεσίες</p>
          <h2>Ολοκληρωμένες λύσεις ενέργειας</h2>
          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <div className="icon" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                {service.more && (
                  <details>
                    <summary>Περισσότερα...</summary>
                    <p>{service.more}</p>
                  </details>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="container">
          <p className="sectionLabel">Έργα</p>
          <h2>Πρόσφατες εγκαταστάσεις</h2>
          <div className="projectGrid">
            {projects.map((project, index) => (
              <article className="project" key={project}>
                <div className={`projectImg img${index + 1}`} />
                <div className="projectBody">
                  <p>Φωτοβολταϊκό έργο</p>
                  <h3>{project}</h3>
                  <span>Σχεδιασμός με έμφαση στην απόδοση, την αξιοπιστία και την εξοικονόμηση.</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ξεκινήστε σήμερα τη μετάβαση στην πράσινη ενέργεια</h2>
          <p>Στείλτε μας τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας για τεχνική μελέτη ή προσφορά.</p>
          <a className="whiteBtn" href="#offer">Ζητήστε Προσφορά</a>
        </div>
      </section>

      <section id="offer" className="section formSection">
        <div className="container formWrap">
          <p className="sectionLabel">Ζητήστε Προσφορά</p>
          <h2>Λάβετε εξατομικευμένη προσφορά</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέα προσφορά από Geo-Energy Solutions" />
            <div className="formGrid">
              <input name="name" required placeholder="Ονοματεπώνυμο" />
              <input name="phone" required placeholder="Τηλέφωνο" />
            </div>
            <input type="email" name="email" required placeholder="Email" />
            <input type="number" name="kw" placeholder="Πόσα kW σύστημα θέλετε; π.χ. 10" />
            <div className="radioBox">
              <span>Θέλετε μπαταρίες;</span>
              <label><input type="radio" name="battery" value="Ναι" /> Ναι</label>
              <label><input type="radio" name="battery" value="Όχι" /> Όχι</label>
            </div>
            <textarea name="message" rows={6} placeholder="Περιγράψτε το έργο ή τις ανάγκες σας" />
            <button type="submit">Αποστολή Προσφοράς</button>
          </form>
        </div>
      </section>

      <section id="study" className="section studySection">
        <div className="container formWrap">
          <p className="sectionLabel">Δωρεάν Μελέτη</p>
          <h2>Στείλτε το αίτημά σας</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form light">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέο αίτημα δωρεάν μελέτης από Geo-Energy Solutions" />
            <div className="formGrid">
              <input name="name" required placeholder="Ονοματεπώνυμο" />
              <input name="phone" required placeholder="Τηλέφωνο" />
            </div>
            <input type="email" name="email" required placeholder="Email" />
            <textarea name="message" rows={6} required placeholder="Τι χρειάζεστε;" />
            <button type="submit">Αποστολή Αιτήματος</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footerGrid">
          <div>
            <h3>Geo-Energy Solutions</h3>
            <p>Σύγχρονες ενεργειακές λύσεις με αξιοπιστία, τεχνογνωσία και υψηλή ποιότητα υπηρεσιών.</p>
          </div>
          <div>
            <h4>Υπηρεσίες</h4>
            <p>Φωτοβολταϊκά</p>
            <p>Net Billing</p>
            <p>Μπαταρίες</p>
            <p>Συντήρηση</p>
          </div>
          <div>
            <h4>Επικοινωνία</h4>
            <p>Υπεύθυνος Επικοινωνίας:</p>
            <p><strong>Γεώργιος Γιαννακόπουλος</strong></p>
            <p>Διπλωματούχος Ηλεκτρολόγος Μηχανικός, MSc</p>
            <p>geoenergysol@gmail.com</p>
            <p>+30 6944450594</p>
            <p>Καλαμάτα, Μαιζώνος 88, Ελλάδα</p>
          </div>
        </div>
        <div className="copyright">© 2026 Geo-Energy Solutions. All rights reserved.</div>
      </footer>

      <a className="whatsapp" href="https://wa.me/306944450594" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        💬
      </a>
    </main>
  );
}
