import Link from 'next/link'
import './ece_contact.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/ece' },
  { label: 'Vision & Mission', href: '/faculty-section/department/ece/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/ece/faculty' },
  { label: 'Staff', href: '/faculty-section/department/ece/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/ece/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/ece/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/ece/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/ece/contact', active: true },
]

export default function eceContactPage() {
  return (
    <main className="ece-contact-page">
      <div className="ece-contact-shell">
        <aside className="ece-contact-sidebar" aria-label="Department navigation">
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

        <section className="ece-contact-content">
          <div className="contact-card">
            <h1>Contact Information</h1>

            <address>
              <strong>Dr. Kishan Kumar</strong>
              <span>Head of Department</span>
              <span>Electronics &amp; Communication Engineering</span>
              <span>National Institute of Technology Hamirpur</span>
              <span>Himachal Pradesh, Pin No. 177005, India.</span>
            </address>

            <div className="contact-details">
              <p>
                <strong>Phone No.:</strong> 01972 -254600
              </p>
              <p>
                <strong>HoD Email:</strong>  head.ece@nith.ac.in
              </p>
              <p>
                <strong>Office Email:</strong> office.ece@nith.ac.in
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
