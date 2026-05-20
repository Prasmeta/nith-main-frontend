import Link from 'next/link'
import './cse_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff' },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/cse/contact', active: true },
]

export default function CseContactPage() {
  return (
    <main className="cse-contact-page">
      <div className="cse-contact-shell">
        <aside className="cse-contact-sidebar" aria-label="Department navigation">
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

        <section className="cse-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Siddhartha Chauhan</strong>
              <span>Head of Department</span>
              <span>Computer Science & Engineering</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> +91-1972 -254400
              </p>
              <p>
                <strong>HoD Email:</strong> head.cse@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.cse@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
