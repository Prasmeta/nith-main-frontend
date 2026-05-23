import Link from 'next/link'
import './phy_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programmes' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact', active: true },
]

export default function phyContactPage() {
  return (
    <main className="phy-contact-page">
      <div className="phy-contact-shell">
        <aside className="phy-contact-sidebar" aria-label="Department navigation">
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

        <section className="phy-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Subhash Chand</strong>
              <span>Head of Department</span>
              <span>Physics &amp; Photonics Science</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972 -254146
              </p>
              <p>
                <strong>HoD Email:</strong>  head.pps@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.pps@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
