import Link from 'next/link'
import './cse_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff' },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/cse/contact' },
]

const laboratories = [
  'Objected Oriented Paradigm Lab',
  'Microprocessor and Interfacing Lab',
  'Data Structure Lab',
  'Operating System Lab',
  'Computer Organization and Architecture Lab',
  'Data Base Management System Lab',
  'Compiler Design Lab',
  'Computer Graphic Lab',
  'Digital Image Processing Lab',
  'Computer Network Lab',
  'Artificial Intelligence and Robotics Lab',
]

export default function CseLabsPage() {
  return (
    <main className="cse-labs-page">
      <div className="cse-labs-shell">
        <aside className="cse-labs-sidebar" aria-label="Department navigation">
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

        <section className="cse-labs-content">
          <h1>List of Laboratories</h1>

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
