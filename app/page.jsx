const services = [
  { title: 'Φωτοβολταϊκά Συστήματα', desc: 'Ολοκληρωμένες λύσεις για κατοικίες και επιχειρήσεις με μέγιστη ενεργειακή απόδοση.' },
  { title: 'Net Billing', desc: 'Μειώστε δραστικά το κόστος ρεύματος μέσω σύγχρονων ενεργειακών λύσεων.', more: 'Το Net Billing είναι σύστημα ταυτοχρονισμένου ενεργειακού συμψηφισμού για φωτοβολταϊκά. Η παραγόμενη ενέργεια καταναλώνεται άμεσα και η πλεονάζουσα ενέργεια διοχετεύεται στο δίκτυο. Με σωστή μελέτη επιτυγχάνεται σημαντική μείωση λογαριασμών και γρήγορη απόσβεση της επένδυσης.' },
  { title: 'Συστήματα Αποθήκευσης', desc: 'Μπαταρίες τελευταίας τεχνολογίας για αυτονομία και ενεργειακή ασφάλεια.' },
  { title: 'Ενεργειακές Μελέτες', desc: 'Εξειδικευμένες μελέτες και τεχνική υποστήριξη για κάθε έργο.' },
];

const projects = [
  { title: 'Οικιακό φωτοβολταϊκό', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=900&auto=format&fit=crop' },
  { title: 'Επαγγελματική εγκατάσταση', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=900&auto=format&fit=crop' },
  { title: 'Σύστημα με μπαταρίες', img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=900&auto=format&fit=crop' },
];

export default function Page() {
  return (
    <main>
      <header className="header">
        <div className="nav">
          <div className="logo">Geo-Energy Solutions</div>
          <nav className="navlinks">
            <a href="#services">Υπηρεσίες</a>
            <a href="#projects">Έργα</a>
            <a href="#about">Η Εταιρεία</a>
            <a href="#contact">Επικοινωνία</a>
          </nav>
          <a href="#offer" className="btn btn-green">Ζητήστε Προσφορά</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-box">
            <div className="badge">Σύγχρονες Ενεργειακές Λύσεις</div>
            <h1>Επενδύστε στην πράσινη ενέργεια</h1>
            <p>Η Geo-Energy Solutions προσφέρει ολοκληρωμένες ενεργειακές λύσεις και φωτοβολταϊκά συστήματα υψηλής απόδοσης για κατοικίες, επιχειρήσεις, ξενοδοχεία και αγροτικές εγκαταστάσεις.</p>
            <div className="actions">
              <a href="#study" className="btn btn-green">Δωρεάν Μελέτη</a>
              <a href="#projects" className="btn btn-outline">Δείτε τα έργα μας</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container grid4">
          <div><div className="statnum">15+</div><div>Χρόνια Εμπειρίας</div></div>
          <div><div className="statnum">500+</div><div>Ολοκληρωμένα Έργα</div></div>
          <div><div className="statnum">98%</div><div>Ικανοποίηση Πελατών</div></div>
          <div><div className="statnum">24/7</div><div>Τεχνική Υποστήριξη</div></div>
        </div>
      </section>

      <section id="about" className="section gray">
        <div className="container grid2">
          <img className="image" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop" alt="Φωτοβολταϊκά" />
          <div>
            <p><strong>Η Εταιρεία</strong></p>
            <h2>Εξειδίκευση στην καθαρή ενέργεια</h2>
            <p>Παρέχουμε ολοκληρωμένες λύσεις φωτοβολταϊκών με στόχο τη μέγιστη εξοικονόμηση ενέργειας και τη βιώσιμη ανάπτυξη. Αναλαμβάνουμε μελέτη, εγκατάσταση και συντήρηση φωτοβολταϊκών συστημάτων με επαγγελματισμό και αξιοπιστία.</p>
            <div className="grid2">
              <div className="card"><h3>100%</h3><p>Πιστοποιημένος εξοπλισμός</p></div>
              <div className="card"><h3>ISO</h3><p>Πρότυπα ποιότητας</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <h2>Ολοκληρωμένες λύσεις ενέργειας</h2>
          <p>Υπηρεσίες φωτοβολταϊκών και ενεργειακών λύσεων με στόχο την ενεργειακή αυτονομία, τη μείωση κόστους ρεύματος και τη μέγιστη απόδοση επένδυσης.</p>
          <div className="grid4cards">
            {services.map((service) => (
              <div className="card soft green-hover" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                {service.more ? (
                  <details>
                    <summary>Περισσότερα...</summary>
                    <p>{service.more}</p>
                  </details>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section gray">
        <div className="container">
          <h2>Πρόσφατες εγκαταστάσεις</h2>
          <div className="grid3">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <img className="project-img" src={project.img} alt={project.title} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>Σύγχρονη εγκατάσταση με έμφαση στην απόδοση, την αξιοπιστία και την εξοικονόμηση ενέργειας.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="container">
          <h2>Ξεκινήστε σήμερα τη μετάβαση στην πράσινη ενέργεια</h2>
          <p>Επικοινωνήστε μαζί μας για δωρεάν τεχνική μελέτη και εξατομικευμένη προσφορά.</p>
          <a href="#offer" className="btn btn-white">Ζητήστε Προσφορά</a>
        </div>
      </section>

      <section id="offer" className="section gray">
        <div className="container">
          <h2>Ζητήστε Προσφορά</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Νέα προσφορά από Geo-Energy Solutions" />
            <div className="form-grid">
              <div className="form-row"><label>Ονοματεπώνυμο</label><input className="input" name="name" required /></div>
              <div className="form-row"><label>Τηλέφωνο</label><input className="input" name="phone" required /></div>
            </div>
            <div className="form-row"><label>Email</label><input className="input" type="email" name="email" required /></div>
            <div className="form-row"><label>Πόσα kW σύστημα θέλετε;</label><input className="input" type="number" name="kw" placeholder="π.χ. 10" /></div>
            <div className="form-row"><label>Θέλετε μπαταρίες;</label><div className="radio-row"><span><input type="radio" name="battery" value="Ναι" /> Ναι</span><span><input type="radio" name="battery" value="Όχι" /> Όχι</span></div></div>
            <div className="form-row"><label>Περιγραφή έργου</label><textarea name="message" rows={6} /></div>
            <button type="submit" className="btn btn-green">Αποστολή Προσφοράς</button>
          </form>
        </div>
      </section>

      <section id="study" className="section">
        <div className="container">
          <h2>Δωρεάν Μελέτη</h2>
          <form action="https://formsubmit.co/geoenergysol@gmail.com" method="POST" className="form">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Νέο αίτημα μελέτης από Geo-Energy Solutions" />
            <div className="form-grid">
              <div className="form-row"><label>Ονοματεπώνυμο</label><input className="input" name="name" required /></div>
              <div className="form-row"><label>Τηλέφωνο</label><input className="input" name="phone" required /></div>
            </div>
            <div className="form-row"><label>Email</label><input className="input" type="email" name="email" required /></div>
            <div className="form-row"><label>Τι χρειάζεστε;</label><textarea name="message" rows={6} required /></div>
            <button type="submit" className="btn btn-green">Αποστολή Αιτήματος</button>
          </form>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand"><h3>Geo-Energy Solutions</h3></div>
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
          </div>
          <div>
            <h3>Χάρτης</h3>
            <iframe title="map" src="https://www.google.com/maps?q=Kalamata%20Maizonos%2088&output=embed" className="map" loading="lazy"></iframe>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Geo-Energy Solutions. All rights reserved.</div>
      </footer>

      <a href="https://wa.me/306944450594" target="_blank" rel="noopener noreferrer" className="whatsapp">💬</a>
    </main>
  );
}
