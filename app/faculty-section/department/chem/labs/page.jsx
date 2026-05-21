import Link from 'next/link'
import './chem_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const laboratories = [
  
]

export default function ChemLabsPage() {
  return (
    <main className="chem-labs-page">
      <div className="chem-labs-shell">
        <aside className="chem-labs-sidebar" aria-label="Department navigation">
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

        <section className="chem-labs-content">
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
