import Link from 'next/link'
import './phy_programmes.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programme-offered', active: true },
  { label: 'Labs', href: '/faculty-section/department/phy/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact' },
]

const programmes = [
  {
    name: 'B.Tech.',
    duration: '4 Years',
    seats: 'As per institute norms',
    description:
      'The B.Tech. programme in Physics offers undergraduate-level courses for engineering departments, providing foundational knowledge in physics principles, experimental techniques, and analytical problem-solving skills essential for interdisciplinary engineering applications.',
  },
  {
    name: 'M.Tech.',
    duration: '2 Years',
    seats: 'As per institute norms',
    description:
      'The M.Tech. programme in Materials Science provides advanced training in the physics of materials, including condensed matter physics, nanotechnology, and characterization techniques. It prepares students for careers in industry, research laboratories, and academia.',
  },
  {
    name: 'Ph.D.',
    duration: 'Min. 3 Years',
    seats: 'As per vacancy',
    description:
      'The Ph.D. programme offers research opportunities in various areas of physics including condensed matter physics, high energy physics, materials physics, spectroscopy, and theoretical nuclear physics. Candidates work under expert supervision and contribute to original research.',
  },
]

export default function PhyProgrammesPage() {
  return (
    <main className="phy-programmes-page">
      <div className="phy-programmes-shell">
        <aside className="phy-programmes-sidebar" aria-label="Department navigation">
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

        <section className="phy-programmes-content">
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