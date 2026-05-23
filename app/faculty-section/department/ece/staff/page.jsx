import Link from 'next/link'
import './ece_staff.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/ece' },
  { label: 'Vision & Mission', href: '/faculty-section/department/ece/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/ece/faculty' },
  { label: 'Staff', href: '/faculty-section/department/ece/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/ece/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/ece/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/ece/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/ece/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Sh. Om Prakash',
    designation: 'Office Attendant SG-II',
    phone: '254601',
    email: 'office.ece@nith.ac.in',
  },
]

const technicalStaff = [
  {
    serial: '1',
    name: 'Sh. Ashok Kumar',
    designation: 'Technical Assistant',
    phone: '254605',
    email: '-',
  },
  {
    serial: '2',
    name: 'Sh. Shiv Dyal',
    designation: 'Sr. Technician',
    phone: '254606',
    email: '-',
  },
  {
    serial: '3',
    name: 'Sh. Suresh Kumar',
    designation: 'Sr. Technician',
    phone: '254609',
    email: '-',
  },
  {
    serial: '4',
    name: 'Mr. Sanju Kumar',
    designation: 'Technician',
    phone: '-',
    email: '-',
  },
  {
    serial: '5',
    name: 'Mr. Amit Kumar',
    designation: 'Technician',
    phone: '-',
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

export default function eceStaffPage() {
  return (
    <main className="ece-staff-page">
      <div className="ece-staff-shell">
        <aside className="ece-staff-sidebar" aria-label="Department navigation">
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

        <section className="ece-staff-content">
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