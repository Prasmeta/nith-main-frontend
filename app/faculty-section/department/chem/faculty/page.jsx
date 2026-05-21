import Link from 'next/link'
import './chem_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        name: 'Dr. Pamita Awasthi',
        designation: 'Professor',
        interests: 'Chemistry',
        email: 'pamita@nith.ac.in',
      },
      {
        name: 'Dr. Bharti Gaur',
        designation: 'Professor',
        interests: 'Chemistry',
        email: 'bhartigaur@nith.ac.in',
      },
      {
        name: 'Dr. Kalyan Sundar Ghosh',
        designation: 'Professor',
        interests: 'Bioorganic and Biophysical Chemistry',
        email: 'kalyan@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        name: 'Dr. Raj Kaushal',
        designation: 'Assistant Professor Grade-I',
        interests: 'Inorganic Chemistry',
        email: 'rajkaushal@nith.ac.in',
      },
      {
        name: 'Dr. Jai Prakash',
        designation: 'Assistant Professor Grade-I',
        interests: 'Materials Chemistry and Physics, Functional nanomaterials for energy and environmental applications',
        email: 'jaip@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      {
        name: 'Dr. Jagannath Kuchlyan',
        designation: 'Assistant Professor Grade-II',
        interests: 'Photochemistry and Photophysics',
        email: 'jagannath@nith.ac.in',
      },
    ],
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

export default function ChemFacultyPage() {
  return (
    <main className="chem-faculty-page">
      <div className="chem-faculty-shell">
        <aside className="chem-faculty-sidebar" aria-label="Department navigation">
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

        <section className="chem-faculty-content">
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