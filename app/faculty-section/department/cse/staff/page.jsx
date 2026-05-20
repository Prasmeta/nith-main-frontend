import Link from 'next/link'
import './cse_staff.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff', active: true },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/cse/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Piyush Pathania',
    designation: 'Jr. Assistant',
    phone: '254402',
    email: '-',
  },
  {
    serial: '2',
    name: 'Joginder Singh',
    designation: 'Attendant',
    phone: '254402',
    email: '-',
  },
]

const technicalStaff = [
  {
    serial: '1.',
    name: 'Sh. Sanjeev Kumar',
    designation: 'Sr. Technical Assistant',
    phone: '254407',
    email: '-',
  },
  {
    serial: '2.',
    name: 'Sh. Jiwan Kumar',
    designation: 'Senior Technician',
    phone: '254405',
    email: '-',
  },
  {
    serial: '3.',
    name: 'Sh. Anurag Dhiman',
    designation: 'Technician',
    phone: '',
    email: '-',
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

export default function CseStaffPage() {
  return (
    <main className="cse-staff-page">
      <div className="cse-staff-shell">
        <aside className="cse-staff-sidebar" aria-label="Department navigation">
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

        <section className="cse-staff-content">
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
