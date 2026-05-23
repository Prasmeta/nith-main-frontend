import Link from 'next/link'
import './msc_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/msc/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        slNo: '1',
        name: 'Prof. Ravi Kumar',
        designation: 'Professor',
        interests: 'Material Science and Engineering',
        email: 'ranade65@nith.ac.in',
      },
    ],
  },
  {
    title: 'Associate Professor',
    members: [
      {
        slNo: '1',
        name: 'Dr. Vishal Singh',
        designation: 'Associate Professor',
        interests: 'Material Science and Engineering',
        email: 'vishalchib@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        slNo: '1',
        name: 'Dr. Vikram Verma',
        designation: 'Assistant Professor Grade-I',
        interests: '-',
        email: 'vikramv@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Rita Maurya',
        designation: 'Assistant Professor Grade-I',
        interests: 'Physical Metallurgy, Surface Engineering ( Coating deposition, corrosion studies and tribology), Composites ( Metal and Polymer matrix), Friction Stir Process (FSP)',
        email: 'ritam@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Raj Bahadur Singh',
        designation: 'Assistant Professor Grade-I',
        interests: 'Physical Metallurgy',
        email: 'raj@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [],
  },
]

function FacultyCard({ member, featured = false }) {
  return (
    <article className={featured ? 'faculty-card faculty-card-featured' : 'faculty-card'}>
      <div className="faculty-photo" aria-hidden="true">
        {featured && <div className="faculty-photo-crop" />}
      </div>

      <div className="faculty-hover-panel">
        <p>
          <strong>Email</strong>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>

        <p>
          <strong>Domains</strong>
          <span>{member.interests}</span>
        </p>

        <a href="#" className="faculty-read-more">
          Read more
        </a>
      </div>

      <div className="faculty-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </article>
  )
}

export default function mscFacultyPage() {
  return (
    <main className="msc-faculty-page">
      <div className="msc-faculty-shell">
        <aside className="msc-faculty-sidebar" aria-label="Department navigation">
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

        <section className="msc-faculty-content">
          {facultyGroups.map((group) => (
            <section className="faculty-group" key={group.title}>
              <h1>{group.title}</h1>

              <div className={group.featured ? 'faculty-featured-grid' : 'faculty-grid'}>
                {group.members.map((member) => (
                  <FacultyCard
                    featured={group.featured}
                    key={member.name}
                    member={member}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  )
}