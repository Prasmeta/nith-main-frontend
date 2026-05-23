import Link from 'next/link'
import './msc_programmes.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered', active: true },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const programmes = [
  {
    name: 'B.Tech.',
    duration: '4 Years',
    seats: 'As per institute norms',
    description:
      'Offers undergraduate education in material properties, processing, and engineering applications.',
  },
  {
    name: 'M.Tech.',
    duration: '2 Years',
    seats: 'As per institute norms',
    description:
      'The M.Tech. programme in Materials Science provides advanced training in modern materials and research techniques.',
  },
  {
    name: 'Ph.D.',
    duration: 'Min. 3 Years',
    seats: 'As per vacancy',
    description:
      'The Ph.D. programme focuses on innovative research in advanced materials and technologies.',
  },
]

export default function MscProgrammesPage() {
  return (
    <main className="msc-programmes-page">
      <div className="msc-programmes-shell">
        <aside className="msc-programmes-sidebar" aria-label="Department navigation">
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

        <section className="msc-programmes-content">
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