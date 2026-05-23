import Link from 'next/link'
import './msc_staff.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Sh. Parvesh Kumar',
    designation: 'Private Secretary',
    phone: '254380',
    email: 'office.mse@nith.ac.in\nparvesh@nith.ac.in',
  },
  {
    serial: '2',
    name: 'Sh. Bhupinder Singh',
    designation: 'Office Attendant SG-I',
    phone: '254380',
    email: 'bhupinder@nith.ac.in',
  },
]

const technicalStaff = [
  {
    serial: '1',
    name: 'Sh. Shivam',
    designation: 'Sr. Technician',
    phone: '-',
    email: '-',
  },
  {
    serial: '2',
    name: 'Sh. Debashish Behera',
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

export default function MscStaffPage() {
  return (
    <main className="msc-staff-page">
      <div className="msc-staff-shell">
        <aside className="msc-staff-sidebar" aria-label="Department navigation">
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

        <section className="msc-staff-content">
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