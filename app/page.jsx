const services = [
  {
    title: 'Φωτοβολταϊκά Συστήματα',
    desc: 'Ολοκληρωμένες λύσεις για κατοικίες και επιχειρήσεις με μέγιστη ενεργειακή απόδοση.',
  },
  {
    title: 'Net Billing',
    desc: 'Μειώστε δραστικά το κόστος ρεύματος μέσω σύγχρονων ενεργειακών λύσεων.',
    more: 'Το Net Billing είναι σύστημα ενεργειακού συμψηφισμού για φωτοβολταϊκά. Η παραγόμενη ενέργεια καταναλώνεται άμεσα και η πλεονάζουσα ενέργεια διοχετεύεται στο δίκτυο, συμβάλλοντας στη μείωση των λογαριασμών ρεύματος.',
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
  {
    title: 'Φωτοβολταϊκό 10kW',
    location: 'Καλαμάτα',
    description: 'Εγκατάσταση φωτοβολταϊκού συστήματος net billing με δυνατότητα μελλοντικής αποθήκευσης.',
    image: '/projects/project1.jpg',
  },
  {
    title: 'Ξενοδοχειακή μονάδα 50kW',
    location: 'Πύλος',
    description: 'Σύστημα ενεργειακού συμψηφισμού υψηλής απόδοσης για μείωση λειτουργικού κόστους.',
    image: '/projects/project2.jpg',
  },
  {
    title: 'Αγροτική εγκατάσταση 20kW',
    location: 'Μεσσήνη',
    description: 'Φωτοβολταϊκό για γεωργική χρήση με στόχο σταθερότητα και εξοικονόμηση ενέργειας.',
    image: '/projects/project3.jpg',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo">Geo-Energy Solutions</div>
          <nav className="nav-links">
            <a href="#services">Υπηρεσίες</a>
            <a href="#projects">Έργα</a>
            <a href="#about">Η Εταιρεία</a>
            <a href="#contact">Επικοινωνία</a>
          </nav>
          <a className="btn btn-green" href="#offer-form">Ζητήστε Προσφορά</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">Σύγχρονες Ενεργειακές Λύσεις</div>
            <h1>Επενδύστε στην <span>πράσινη ενέργεια</span></h1>
            <p>
              Η Geo-Energy Solutions προσφέρει ολοκληρωμένες ενεργειακές λύσεις και φωτοβολταϊκά συστήματα υψηλής απόδοσης για κατοικίες, επιχειρήσεις, ξενοδοχεία και αγροτικές εγκαταστάσεις.
            </p>
            <div className="hero-actions">
              <a href="#contact-form" className="btn btn-green">Δωρεάν Μελέτη</a>
              <a href="#projects" className="btn btn-outline">Δείτε τα έργα μας</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><div className="stat-number">15+</div><div>Χρόνια Εμπειρίας</div></div>
          <div><div className="stat-number">500+</div><div>Ολοκληρωμένα Έργα</div></div>
          <div><div className="stat-number">98%</div><div>Ικανοποίηση Πελατών</div></div>
          <div><div className="stat-number">24/7</div><div>Τεχνική Υποστήριξη</div></div>
        </div>
      </section>

      <section id="about" className="section section-gray">
        <div className="container two-col">
          <img className="about-img" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop" alt="Φωτοβολταϊκή εγκατάσταση" />
          <div>
            <div className="section-title">Η Εταιρεία</div>
            <h2>Εξειδίκευση στην καθαρή ενέργεια</h2>
            <p className="lead">
              Παρέχουμε ολοκληρωμένες λύσεις φωτοβολταϊκών με στόχο τη μέγιστη εξοικονόμηση ενέργειας και τη βιώσιμη ανάπτυξη. Αναλαμβάνουμε μελέτη, εγκατάσταση και συντήρηση φωτοβολταϊκών συστημάτων με επαγγελματισμό και αξιοπιστία.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-title">Υπηρεσίες</div>
          <h2>Ολοκληρωμένες λύσεις ενέργειας</h2>
          <p className="lead">Υπηρεσίες φωτοβολταϊκών και ενεργειακών λύσεων με στόχο την ενεργειακή αυτονομία, τη μείωση κόστους ρεύματος και τη μέγιστη απόδοση επένδυσης.</p>

          <div className="cards-grid">
            {services.map((service, index) => (
              <div className="card service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                {service.more && (
                  <details>
                    <summary>Περισσότερα...</summary>
                    <p>{service.more}</p>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section section-gray">
        <div className="container">
          <div className="projects-head">
            <div>
              <div className="section-title">Έργα</div>
              <h2>Πρόσφατες εγκαταστάσεις</h2>
              <p className="lead">Επιλεγμένα έργα φωτοβολταϊκών συστημάτων με σταθερό μέγεθος φωτογραφιών, σωστό crop και καθαρή παρουσίαση.</p>
            </div>
            <a href="#contact-form" className="btn btn-green">Ζητήστε Μελέτη</a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="card project-card" key={index}>
                <div className="project-img-wrap">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <div className="project-location">{project.location}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container testimonial">
          <div className="section-title">Testimonials</div>
          <h2>Τι λένε οι πελάτες μας</h2>
          <div className="quote-box">
            <p>“Άψογη εξυπηρέτηση, επαγγελματισμός και σημαντική μείωση του ενεργειακού κόστους από τον πρώτο μήνα λειτουργίας.”</p>
            <strong>Γιώργος Παπαδόπουλος</strong>
            <div>Ιδιοκτήτης Ξενοδοχειακής Μονάδας</div>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <h2>Ξεκινήστε σήμερα τη μετάβαση στην πράσινη ενέργεια</h2>
          <p>Επικοινωνήστε μαζί μας για δωρεάν τεχνική μελέτη και εξατομικευμένη προσφορά.</p>
          <a href="#offer-form" className="btn btn-white">Ζητήστε Προσφορά</a>
        </div>
      </section>

      <section id="offer-form" className="section section-gray">
        <div className="container">
          <div className="testimonial">
            <div className="section-title">Ζητήστε Προσφορά</div>
            <h2>Λάβετε εξατομικευμένη προσφορά</h2>
            <p className="lead">Συμπληρώστε τα στοιχεία σας και τις ανάγκες του συστήματος που θέλετε.</p>
          </div>
          <form className="form-box" action="https://formsubmit.co/geoenergysol@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέα προσφορά από Geo-Energy Solutions" />

            <div className="form-grid">
              <div className="form-row"><label>Ονοματεπώνυμο</label><input type="text" name="name" required placeholder="Το όνομά σας" /></div>
              <div className="form-row"><label>Τηλέφωνο</label><input type="tel" name="phone" required placeholder="Το τηλέφωνό σας" /></div>
            </div>
            <div className="form-row"><label>Email</label><input type="email" name="email" required placeholder="Το email σας" /></div>
            <div className="form-row"><label>Πόσα kW σύστημα θέλετε;</label><input type="number" name="kw" required placeholder="π.χ. 10" /></div>
            <div className="form-row">
              <label>Θέλετε μπαταρίες;</label>
              <div className="radio-row">
                <label><input type="radio" name="battery" value="Ναι" required /> Ναι</label>
                <label><input type="radio" name="battery" value="Όχι" required /> Όχι</label>
              </div>
            </div>
            <div className="form-row"><label>Περιγραφή έργου</label><textarea name="message" rows={6} placeholder="Περιγράψτε το έργο ή τις ανάγκες σας" /></div>
            <button className="btn btn-green" type="submit">Αποστολή Προσφοράς</button>
          </form>
        </div>
      </section>

      <section id="contact-form" className="section">
        <div className="container">
          <div className="testimonial">
            <div className="section-title">Δωρεάν Μελέτη</div>
            <h2>Στείλτε το αίτημά σας</h2>
            <p className="lead">Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο δυνατό.</p>
          </div>
          <form className="form-box" action="https://formsubmit.co/geoenergysol@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέο αίτημα από Geo-Energy Solutions" />
            <div className="form-grid">
              <div className="form-row"><label>Ονοματεπώνυμο</label><input type="text" name="name" required placeholder="Το όνομά σας" /></div>
              <div className="form-row"><label>Τηλέφωνο</label><input type="tel" name="phone" required placeholder="Το τηλέφωνό σας" /></div>
            </div>
            <div className="form-row"><label>Email</label><input type="email" name="email" required placeholder="Το email σας" /></div>
            <div className="form-row"><label>Τι χρειάζεστε;</label><textarea name="message" rows={6} required placeholder="Περιγράψτε το έργο ή την υπηρεσία που σας ενδιαφέρει" /></div>
            <button className="btn btn-green" type="submit">Αποστολή Αιτήματος</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">Geo-Energy Solutions</div>
            <p>Σύγχρονες ενεργειακές λύσεις με αξιοπιστία, τεχνογνωσία και υψηλή ποιότητα υπηρεσιών.</p>
          </div>
          <div>
            <h3>Υπηρεσίες</h3>
            <ul>
              <li>Φωτοβολταϊκά</li>
              <li>Net Billing</li>
              <li>Μπαταρίες</li>
              <li>Συντήρηση</li>
            </ul>
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
          </div>
          <div>
            <h3>Τοποθεσία</h3>
            <iframe className="map" title="Geo-Energy Solutions map" src="https://www.google.com/maps?q=Kalamata%20Maizonos%2088&output=embed" loading="lazy"></iframe>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Geo-Energy Solutions. All rights reserved.</div>
      </footer>

      <a className="whatsapp" href="https://wa.me/306944450594" target="_blank" rel="noopener noreferrer">💬</a>
    </main>
  );
}
