import Link from 'next/link'
import './ece_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/ece' },
  { label: 'Vision & Mission', href: '/faculty-section/department/ece/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/ece/faculty' },
  { label: 'Staff', href: '/faculty-section/department/ece/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/ece/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/ece/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/ece/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/ece/contact' },
]

const laboratories = [
  'Basic Electronics Lab',
  'Analog Communication Lab',
  'Optical Fiber Lab',
  'Analog Electronics Lab',
  'Instrumentation Lab',
  'Digital Electronics Lab',
  'Linear Integrated Lab',
  'Microwave Engineering Lab',
  'Digital Signal Processing Lab',
  'Microprocessor Lab',
  'MEMS Design Lab',
  'Computer Lab',
  'VLSI & Nano Lab',
  'Embedded Systems Lab',
  'Industrial Electronics Lab',
  'Digital Communication Lab',
  'Communication Networking Lab',
]

export default function EceLabsPage() {
  return (
    <main className="ece-labs-page">
      <div className="ece-labs-shell">
        <aside className="ece-labs-sidebar" aria-label="Department navigation">
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

        <section className="ece-labs-content">
          <h1>Department of Electronics and Communication Engineering List of Laboratories</h1>

          <table className="labs-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Laboratory Name</th>
              </tr>
            </thead>
            <tbody>
              {laboratories.map((lab, index) => (
                <tr key={lab}>
                  <td>{index + 1}</td>
                  <td>{lab}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}