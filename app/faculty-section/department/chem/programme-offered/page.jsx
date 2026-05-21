import Link from 'next/link'
import './chem_programmes.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered', active: true },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const programmes = [
  {
    name: 'B.Tech.',
    duration: '4 Years',
    seats: 'As per institute norms',
    description:
      'The B.Tech. programme in Chemistry offers undergraduate-level courses for engineering departments, providing foundational knowledge in chemical sciences and preparing students for interdisciplinary engineering applications.',
  },
  {
    name: 'M.Tech. in Chemical Technology',
    duration: '2 Years',
    seats: 'As per institute norms',
    description:
      'The M.Tech. programme in Chemical Technology is offered in collaboration with the Chemical Engineering department. It provides advanced training in chemical technology, preparing students for careers in industry, research, and academia.',
  },
  {
    name: 'Ph.D.',
    duration: 'Min. 3 Years',
    seats: 'As per vacancy',
    description:
      'The Ph.D. programme offers research opportunities in various areas of chemistry including inorganic, organic, physical, analytical, and bioorganic chemistry. Candidates work under expert supervision and contribute to original research.',
  },
]

export default function ChemProgrammesPage() {
  return (
    <main className="chem-programmes-page">
      <div className="chem-programmes-shell">
        <aside className="chem-programmes-sidebar" aria-label="Department navigation">
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

        <section className="chem-programmes-content">
          <h1>Programmes Offered</h1>

          <div className="programmes-list">
            {programmes.map((prog) => (
              <div className="programme-card" key={prog.name}>
                <h2>{prog.name}</h2>
                <div className="programme-meta">
                  <span><strong>Duration:</strong> {prog.duration}</span>
                  <span><strong>Seats:</strong> {prog.seats}</span>
                </div>
                <p>{prog.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}