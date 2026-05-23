import Link from 'next/link'
import './chem_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programmes' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact', active: true },
]

export default function ChemContactPage() {
  return (
    <main className="chem-contact-page">
      <div className="chem-contact-shell">
        <aside className="chem-contact-sidebar" aria-label="Department navigation">
          <nav>
            {menuItems.map((item) => (
              <Link
                className={item.active ? 'active' : ''}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="chem-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Bharti Gaur</strong>
              <span>Head of Department</span>
              <span>Chemistry</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972 -254102
              </p>
              <p>
                <strong>HoD Email:</strong>  head.chy@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.chy@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
