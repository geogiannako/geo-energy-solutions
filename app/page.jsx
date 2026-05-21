export default function HomePage() {
  const services = [
    { title: 'Φωτοβολταϊκά Συστήματα', desc: 'Ολοκληρωμένες λύσεις για κατοικίες και επιχειρήσεις με μέγιστη ενεργειακή απόδοση.' },
    { title: 'Net Billing', desc: 'Μειώστε δραστικά το κόστος ρεύματος μέσω σύγχρονων ενεργειακών λύσεων.', more: 'Το Net Billing είναι σύστημα ενεργειακού συμψηφισμού για φωτοβολταϊκά. Η παραγόμενη ενέργεια καταναλώνεται άμεσα και η περίσσεια διοχετεύεται στο δίκτυο με οικονομικό όφελος. Με σωστή μελέτη, επιλογή εξοπλισμού και κατάλληλη διαστασιολόγηση επιτυγχάνεται σημαντική μείωση λογαριασμών και γρήγορη απόσβεση.' },
    { title: 'Συστήματα Αποθήκευσης', desc: 'Μπαταρίες τελευταίας τεχνολογίας για αυτονομία και ενεργειακή ασφάλεια.' },
    { title: 'Ενεργειακές Μελέτες', desc: 'Εξειδικευμένες μελέτες και τεχνική υποστήριξη για κάθε έργο.' }
  ];

  const projects = [
    { title: 'Φωτοβολταϊκό έργο κατοικίας', img: '/projects/project1.jpg' },
    { title: 'Επαγγελματική εγκατάσταση', img: '/projects/project2.jpg' },
    { title: 'Σύστημα με μπαταρίες', img: '/projects/project3.jpg' }
  ];

  return (
    <div>
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand">Geo-Energy Solutions</div>
          <nav className="nav-links">
            <a href="#services">Υπηρεσίες</a>
            <a href="#projects">Έργα</a>
            <a href="#about">Η Εταιρεία</a>
            <a href="#contact">Επικοινωνία</a>
          </nav>
          <a href="#offer-form" className="btn btn-green">Ζητήστε Προσφορά</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <span className="badge">Σύγχρονες Ενεργειακές Λύσεις</span>
          <h1>Επενδύστε στην <span style={{ color: '#4ade80' }}>πράσινη ενέργεια</span></h1>
          <p>Η Geo-Energy Solutions προσφέρει ολοκληρωμένες λύσεις φωτοβολταϊκών, Net Billing, συστημάτων αποθήκευσης και ενεργειακής αυτονομίας.</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
            <a href="#contact-form" className="btn btn-green">Δωρεάν Μελέτη</a>
            <a href="#projects" className="btn btn-outline">Δείτε τα έργα μας</a>
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

      <section id="about" className="section bg-gray">
        <div className="container grid-2">
          <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop" alt="Φωτοβολταϊκό πάρκο" className="image-rounded" />
          <div>
            <div className="text-green" style={{ fontWeight: 800, letterSpacing: 2 }}>Η ΕΤΑΙΡΕΙΑ</div>
            <h2>Εξειδίκευση στην καθαρή ενέργεια</h2>
            <p>Παρέχουμε ολοκληρωμένες λύσεις φωτοβολταϊκών με στόχο τη μέγιστη εξοικονόμηση ενέργειας και τη βιώσιμη ανάπτυξη. Αναλαμβάνουμε μελέτη, εγκατάσταση και συντήρηση με επαγγελματισμό και αξιοπιστία.</p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 42 }}>
            <div className="text-green" style={{ fontWeight: 800, letterSpacing: 2 }}>ΥΠΗΡΕΣΙΕΣ</div>
            <h2>Ολοκληρωμένες λύσεις ενέργειας</h2>
            <p>Υπηρεσίες φωτοβολταϊκών και ενεργειακών λύσεων με στόχο την ενεργειακή αυτονομία, τη μείωση κόστους ρεύματος και τη μέγιστη απόδοση επένδυσης.</p>
          </div>
          <div className="grid-4">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                {service.more ? (
                  <details>
                    <summary style={{ cursor: 'pointer', fontWeight: 800, color: '#15803d' }}>Περισσότερα...</summary>
                    <p>{service.more}</p>
                  </details>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section bg-gray">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'end', marginBottom: 38, flexWrap: 'wrap' }}>
            <div><div className="text-green" style={{ fontWeight: 800, letterSpacing: 2 }}>ΕΡΓΑ</div><h2>Πρόσφατες εγκαταστάσεις</h2></div>
            <a href="#offer-form" className="btn btn-green">Ζητήστε προσφορά</a>
          </div>
          <div className="grid-3">
            {projects.map((project, index) => (
              <div className="card project-card" key={project.title}>
                <img src={project.img} alt={project.title} className="project-img" onError={(e) => { e.currentTarget.src = `https://picsum.photos/600/40${index}`; }} />
                <div className="project-content">
                  <div className="text-green" style={{ fontWeight: 800, fontSize: 14 }}>Φωτοβολταϊκό Έργο</div>
                  <h3>{project.title}</h3>
                  <p>Σύγχρονη εγκατάσταση με έμφαση στην απόδοση, την αξιοπιστία και την εξοικονόμηση ενέργειας.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container" style={{ maxWidth: 880 }}>
          <h2>Ξεκινήστε σήμερα τη μετάβαση στην πράσινη ενέργεια</h2>
          <p>Επικοινωνήστε μαζί μας για δωρεάν τεχνική μελέτη και εξατομικευμένη προσφορά.</p>
          <a href="#offer-form" className="btn" style={{ background: 'white', color: '#15803d', marginTop: 20 }}>Ζητήστε Προσφορά</a>
        </div>
      </section>

      <section id="offer-form" className="section bg-gray">
        <div className="container" style={{ maxWidth: 850 }}>
          <h2 style={{ textAlign: 'center' }}>Ζητήστε Προσφορά</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέα προσφορά από Geo-Energy Solutions" />
            <div className="form-row">
              <div><label>Ονοματεπώνυμο</label><input name="name" required placeholder="Το όνομά σας" /></div>
              <div><label>Τηλέφωνο</label><input name="phone" required placeholder="Το τηλέφωνό σας" /></div>
            </div>
            <div style={{ marginTop: 18 }}><label>Email</label><input type="email" name="email" required placeholder="Το email σας" /></div>
            <div style={{ marginTop: 18 }}><label>Πόσα kW σύστημα θέλετε;</label><input type="number" name="kw" placeholder="π.χ. 10" /></div>
            <div style={{ marginTop: 18 }}><label>Θέλετε μπαταρίες;</label><div className="radio-row"><span><input type="radio" name="battery" value="Ναι" /> Ναι</span><span><input type="radio" name="battery" value="Όχι" /> Όχι</span></div></div>
            <div style={{ marginTop: 18 }}><label>Περιγραφή έργου</label><textarea name="message" rows={6} placeholder="Περιγράψτε το έργο ή τις ανάγκες σας" /></div>
            <button className="btn btn-green" style={{ width: '100%', marginTop: 20 }} type="submit">Αποστολή Προσφοράς</button>
          </form>
        </div>
      </section>

      <section id="contact-form" className="section">
        <div className="container" style={{ maxWidth: 850 }}>
          <h2 style={{ textAlign: 'center' }}>Δωρεάν Μελέτη</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Νέο αίτημα από Geo-Energy Solutions" />
            <div className="form-row">
              <div><label>Ονοματεπώνυμο</label><input name="name" required placeholder="Το όνομά σας" /></div>
              <div><label>Τηλέφωνο</label><input name="phone" required placeholder="Το τηλέφωνό σας" /></div>
            </div>
            <div style={{ marginTop: 18 }}><label>Email</label><input type="email" name="email" required placeholder="Το email σας" /></div>
            <div style={{ marginTop: 18 }}><label>Τι χρειάζεστε;</label><textarea name="message" rows={6} required placeholder="Περιγράψτε το έργο ή την υπηρεσία που σας ενδιαφέρει" /></div>
            <button className="btn btn-green" style={{ width: '100%', marginTop: 20 }} type="submit">Αποστολή Αιτήματος</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand" style={{ fontSize: 28, fontWeight: 900 }}>Geo-Energy Solutions</div>
            <p>Σύγχρονες ενεργειακές λύσεις με αξιοπιστία, τεχνογνωσία και υψηλή ποιότητα υπηρεσιών.</p>
          </div>
          <div>
            <h3>Υπηρεσίες</h3>
            <ul><li>Φωτοβολταϊκά</li><li>Net Billing</li><li>Μπαταρίες</li><li>Συντήρηση</li></ul>
          </div>
          <div>
            <h3>Επικοινωνία</h3>
            <ul><li>Υπεύθυνος Επικοινωνίας:</li><li><strong style={{ color: 'white' }}>Γεώργιος Γιαννακόπουλος</strong></li><li>Διπλωματούχος Ηλεκτρολόγος Μηχανικός, MSc</li><li>geoenergysol@gmail.com</li><li>+30 6944450594</li><li>Καλαμάτα, Μαιζώνος 88, Ελλάδα</li></ul>
            <iframe title="Χάρτης Geo-Energy Solutions" src="https://www.google.com/maps?q=Kalamata%20Maizonos%2088&output=embed" className="map" loading="lazy" />
          </div>
          <div>
            <h3>Newsletter</h3>
            <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="newsletter">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Νέα εγγραφή newsletter" />
              <input type="email" name="email" placeholder="Το email σας" required />
              <button className="btn btn-green" style={{ width: '100%', marginTop: 12 }} type="submit">Εγγραφή</button>
            </form>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Geo-Energy Solutions. All rights reserved.</div>
      </footer>

      <a href="https://wa.me/306944450594" target="_blank" rel="noopener noreferrer" className="whatsapp" aria-label="WhatsApp">💬</a>
    </div>
  );
}
