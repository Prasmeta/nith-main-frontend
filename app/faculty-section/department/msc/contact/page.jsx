import Link from 'next/link'
import './msc_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programmes' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact', active: true },
]

export default function mscContactPage() {
  return (
    <main className="msc-contact-page">
      <div className="msc-contact-shell">
        <aside className="msc-contact-sidebar" aria-label="Department navigation">
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

        <section className="msc-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Vishal Singh</strong>
              <span>Head of Department</span>
              <span>Material Science &amp; Engineering</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972-254380
              </p>
              <p>
                <strong>HoD Email:</strong>  head.mse@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.mse@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
