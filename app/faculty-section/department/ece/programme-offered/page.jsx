import Link from 'next/link'
import './ece_programmes.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/ece' },
  { label: 'Vision & Mission', href: '/faculty-section/department/ece/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/ece/faculty' },
  { label: 'Staff', href: '/faculty-section/department/ece/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/ece/programme-offered', active: true },
  { label: 'Labs', href: '/faculty-section/department/ece/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/ece/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/ece/contact' },
]

const programmes = [
  {
    name: 'Bachelor Programmes Offered',
    description: 'Four-year undergraduate programme covering core and elective courses in electronics, communication, signal processing, VLSI, and embedded systems.',
  },
  {
    name: 'Dual Degree Programmes Offered',
    description: 'Integrated five-year programme combining undergraduate and postgraduate studies with advanced specialization in electronics and communication engineering.',
  },
  {
    name: 'Master Programmes Offered',
    description: 'Two-year postgraduate programme focused on advanced research and specialized study in areas such as communication, VLSI, signal processing, and microelectronics.',
  },
  {
    name: 'Doctoral Programmes Offered',
    description: 'Research-intensive doctoral programme emphasizing original contributions in frontier areas of electronics, communication, and interdisciplinary fields.',
  },
]

export default function EceProgrammesPage() {
  return (
    <main className="ece-programmes-page">
      <div className="ece-programmes-shell">
        <aside className="ece-programmes-sidebar" aria-label="Department navigation">
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

        <section className="ece-programmes-content">
          <h1>Programmes Offered</h1>

          <div className="programmes-table-wrapper">
            <table className="programmes-table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Programmes Offered</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((prog, index) => (
                  <tr key={prog.name}>
                    <td>{index + 1}</td>
                    <td>
                      <strong>{prog.name}</strong>
                      <p className="programme-summary">{prog.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}