import Link from 'next/link'
import './msc_labs.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/msc/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const laboratories = []

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

export default function mscLabsPage() {
  return (
    <main className="msc-labs-page">
      <div className="msc-labs-shell">
        <aside className="msc-labs-sidebar" aria-label="Department navigation">
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

        <section className="msc-labs-content">
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
