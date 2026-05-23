import Link from 'next/link'
import './phy_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact' },
]

const laboratories = [
  'Engineering Physics Lab',
  'Solid State Physics Lab',
  'Electricity & Magnetism Lab',
  'Spectroscopy Lab',
  'Thermal Physics Lab',
  'Numerical methods & Computational Physics Lab',
  'Optics Lab',
  'Modern Physics Lab',
  'Digital Electronics Lab',
  'Laser and Photonics Lab',
  'Measurement and Instrumentation Lab',
  'Fabrication and Assembly Lab',
]

const equipment = [
  'Spectrofluorophotometer',
  'Vacuum Thermal Coating System',
  'Electron beam evaporation system',
  'Close cycle helium refrigeration system with temperature controller',
  'Dilatometer',
  'Impedance analyzer',
  'Olympus Polarizing Microscope',
  'Optical microscope',
  'Linkam Hot-stage cum Temperature controller',
  'X-Ray Apparatus',
  'Vacuum Furnace',
  'Tubular Furnace',
  'Source meter, picoammeter, electrometer, nanovoltmeter, LCZ meter',
  'Vacuum Oven',
  'Sonicator',
  'Laminar air flow Cabinet',
  'UV Visible spectrophotometer',
]

export default function phyLabsPage() {
  return (
    <main className="phy-labs-page">
      <div className="phy-labs-shell">
        <aside className="phy-labs-sidebar" aria-label="Department navigation">
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

        <section className="phy-labs-content">
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

          <h2 className="equipment-title">The major facilities available in Research and Development labs</h2>

          <table className="labs-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Equipment's Name</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item, index) => (
                <tr key={item}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}
