const services = [
  {
    title: 'Φωτοβολταϊκά Συστήματα',
    desc: 'Μελέτη και εγκατάσταση φωτοβολταϊκών συστημάτων υψηλής απόδοσης για κατοικίες, επιχειρήσεις και αγροτικές εγκαταστάσεις.',
  },
  {
    title: 'Net Billing',
    desc: 'Μείωση κόστους ρεύματος με σύγχρονο ενεργειακό συμψηφισμό.',
    more: 'Το Net Billing επιτρέπει την άμεση κατανάλωση της παραγόμενης ενέργειας και τη διοχέτευση της περίσσειας στο δίκτυο. Με σωστή διαστασιολόγηση φωτοβολταϊκού και πιθανή προσθήκη μπαταριών, επιτυγχάνεται υψηλή εξοικονόμηση και γρήγορη απόσβεση.',
  },
  {
    title: 'Συστήματα Αποθήκευσης',
    desc: 'Μπαταρίες τελευταίας τεχνολογίας για αυτονομία, ασφάλεια και καλύτερη αξιοποίηση της παραγωγής.',
  },
  {
    title: 'Ενεργειακές Μελέτες',
    desc: 'Τεχνική μελέτη, επιλογή εξοπλισμού, αδειοδοτήσεις και ολοκληρωμένη υποστήριξη έργου.',
  },
];

const projects = [
  { title: 'Οικιακό φωτοβολταϊκό', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop' },
  { title: 'Επαγγελματική εγκατάσταση', img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=900&auto=format&fit=crop' },
  { title: 'Σύστημα με μπαταρίες', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=900&auto=format&fit=crop' },
];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#top" className="brand">Geo-Energy Solutions</a>
          <nav className="nav-links">
            <a href="#services">Υπηρεσίες</a>
            <a href="#projects">Έργα</a>
            <a href="#about">Η Εταιρεία</a>
            <a href="#contact">Επικοινωνία</a>
          </nav>
          <a href="#offer" className="btn btn-green">Ζητήστε Προσφορά</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Σύγχρονες Ενεργειακές Λύσεις</span>
            <h1>Επενδύστε στην πράσινη ενέργεια</h1>
            <p className="lead">Η Geo-Energy Solutions προσφέρει ολοκληρωμένες λύσεις φωτοβολταϊκών, Net Billing, συστημάτων αποθήκευσης και ενεργειακής αυτονομίας.</p>
            <div className="actions">
              <a href="#contact-form" className="btn btn-green">Δωρεάν Μελέτη</a>
              <a href="#projects" className="btn btn-outline">Δείτε έργα</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container grid-4">
          <div><div className="stat-number">15+</div><div>Χρόνια Εμπειρίας</div></div>
          <div><div className="stat-number">500+</div><div>Ολοκληρωμένα Έργα</div></div>
          <div><div className="stat-number">98%</div><div>Ικανοποίηση Πελατών</div></div>
          <div><div className="stat-number">24/7</div><div>Τεχνική Υποστήριξη</div></div>
        </div>
      </section>

      <section id="about" className="bg-light">
        <div className="container two-col">
          <img className="about-img" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop" alt="Φωτοβολταϊκή εγκατάσταση" />
          <div>
            <p className="badge">Η Εταιρεία</p>
            <h2>Εξειδίκευση στην καθαρή ενέργεια</h2>
            <p className="muted">Αναλαμβάνουμε ολοκληρωμένα έργα φωτοβολταϊκών από τη μελέτη έως την εγκατάσταση και την τεχνική υποστήριξη, με έμφαση στην αξιοπιστία, την απόδοση και τη σωστή επιλογή εξοπλισμού.</p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2>Ολοκληρωμένες λύσεις ενέργειας</h2>
          <p className="muted">Υπηρεσίες για εξοικονόμηση, αυτονομία και μείωση κόστους ρεύματος.</p>
          <div className="card-grid" style={{ marginTop: 32 }}>
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p className="muted">{service.desc}</p>
                {service.more ? (
                  <details>
                    <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Περισσότερα...</summary>
                    <p>{service.more}</p>
                  </details>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-light">
        <div className="container">
          <h2>Πρόσφατες εγκαταστάσεις</h2>
          <p className="muted">Ενδεικτικές κατηγορίες έργων. Μπορείτε να αντικαταστήσετε τις εικόνες με δικές σας φωτογραφίες.</p>
          <div className="project-grid" style={{ marginTop: 32 }}>
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <img src={project.img} alt={project.title} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="muted">Σύγχρονη εγκατάσταση με έμφαση στην απόδοση και την αξιοπιστία.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offer">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Ζητήστε Προσφορά</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form-box">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέα προσφορά από Geo-Energy Solutions" />
            <div className="form-grid">
              <div className="field"><label>Ονοματεπώνυμο</label><input name="name" required placeholder="Το όνομά σας" /></div>
              <div className="field"><label>Τηλέφωνο</label><input name="phone" required placeholder="Το τηλέφωνό σας" /></div>
            </div>
            <div className="field"><label>Email</label><input type="email" name="email" required placeholder="Το email σας" /></div>
            <div className="field"><label>Πόσα kW σύστημα θέλετε;</label><input type="number" name="kw" placeholder="π.χ. 10" /></div>
            <div className="field"><label>Θέλετε μπαταρίες;</label><div className="radio-row"><span><input type="radio" name="battery" value="Ναι" /> Ναι</span><span><input type="radio" name="battery" value="Όχι" /> Όχι</span></div></div>
            <div className="field"><label>Περιγραφή έργου</label><textarea name="message" rows={6} placeholder="Περιγράψτε το έργο ή τις ανάγκες σας" /></div>
            <button className="btn btn-green" type="submit" style={{ width: '100%' }}>Αποστολή Προσφοράς</button>
          </form>
        </div>
      </section>

      <section id="contact-form" className="bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Δωρεάν Μελέτη</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form-box">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέο αίτημα από Geo-Energy Solutions" />
            <div className="form-grid">
              <div className="field"><label>Ονοματεπώνυμο</label><input name="name" required placeholder="Το όνομά σας" /></div>
              <div className="field"><label>Τηλέφωνο</label><input name="phone" required placeholder="Το τηλέφωνό σας" /></div>
            </div>
            <div className="field"><label>Email</label><input type="email" name="email" required placeholder="Το email σας" /></div>
            <div className="field"><label>Τι χρειάζεστε;</label><textarea name="message" rows={6} required placeholder="Περιγράψτε το έργο ή την υπηρεσία που σας ενδιαφέρει" /></div>
            <button className="btn btn-green" type="submit" style={{ width: '100%' }}>Αποστολή Αιτήματος</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Geo-Energy Solutions</h3>
            <p>Σύγχρονες ενεργειακές λύσεις με αξιοπιστία, τεχνογνωσία και υψηλή ποιότητα υπηρεσιών.</p>
          </div>
          <div>
            <h3>Υπηρεσίες</h3>
            <ul><li>Φωτοβολταϊκά</li><li>Net Billing</li><li>Μπαταρίες</li><li>Συντήρηση</li></ul>
          </div>
          <div>
            <h3>Επικοινωνία</h3>
            <ul>
              <li>Υπεύθυνος Επικοινωνίας:</li>
              <li><strong>Γεώργιος Γιαννακόπουλος</strong></li>
              <li>Διπλωματούχος Ηλεκτρολόγος Μηχανικός, MSc</li>
              <li>geoenergysol@gmail.com</li>
              <li>+30 6944450594</li>
              <li>Καλαμάτα, Μαιζώνος 88, Ελλάδα</li>
            </ul>
            <iframe title="Χάρτης Geo-Energy Solutions" src="https://www.google.com/maps?q=Kalamata%20Maizonos%2088&output=embed" className="map" loading="lazy"></iframe>
          </div>
        </div>
        <div className="container copyright">© 2026 Geo-Energy Solutions. All rights reserved.</div>
      </footer>

      <a href="https://wa.me/306944450594" target="_blank" rel="noopener noreferrer" className="whatsapp">💬</a>
    </main>
  );
}
