import Link from 'next/link'
import './phy_staff.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Sh. Kehar Singh',
    designation: 'Office Attendant SG-I',
    phone: '254380',
    email: '-',
  },
]

const technicalStaff = [
  {
    serial: '1',
    name: 'Sh. Surinder Singh',
    designation: 'Sr. Technician',
    phone: '254115',
    email: '-',
  },
  {
    serial: '2',
    name: 'Sh. Gurjeet Singh',
    designation: 'Technician',
    phone: '--',
    email: '--',
  },
]

function StaffRows({ rows }) {
  return rows.map((member) => (
    <tr key={`${member.serial}-${member.name}`}>
      <td>{member.serial}</td>
      <td>{member.name}</td>
      <td>{member.designation}</td>
      <td>{member.phone}</td>
      <td>{member.email}</td>
    </tr>
  ))
}

export default function PhyStaffPage() {
  return (
    <main className="phy-staff-page">
      <div className="phy-staff-shell">
        <aside className="phy-staff-sidebar" aria-label="Department navigation">
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

        <section className="phy-staff-content">
          <div className="staff-table-wrap">
            <table className="staff-table">
              <caption>Office Staff</caption>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <StaffRows rows={officeStaff} />

                <tr className="staff-section-row">
                  <td colSpan="5">Technical Staff</td>
                </tr>

                <StaffRows rows={technicalStaff} />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}