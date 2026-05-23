import Link from 'next/link'
import './msc_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/msc/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const publications = [
  {
    year: '1990',
    authors: 'Ravi Kumar, A.K. Grover, P. Chaddah, C.K. Subramanian and V. Shankaranarayanan',
    title: 'Measurements of higher multipole moments of an inhomogeneous magnetic state of a superconductor',
    journal: 'Solid State Communications , Vol. 76',
    indexing: 'SCI',
  },
  {
    year: '1990',
    authors: 'A.K. Grover, Ravi Kumar, P. Chaddah, C.K. Subramanian and V. Shankaranarayanan',
    title: 'A reappraisal of irreversible behaviour in the intermediate state of type-I superconductor',
    journal: 'Physica C , Vol. 170',
    indexing: 'SCI',
  },
  {
    year: '1990',
    authors: 'Ravi Kumar, K. Singh and T. Singh',
    title: 'Growth and stabilization of laser ripples on laser beam in a collision less unmagnetized plasma',
    journal: 'Nuovo Cimento D , Vol. 12',
    indexing: 'SCI',
  },
  {
    year: '1991',
    authors: 'A.K. Grover, Ravi Kumar, S.K. Malik and P. Chaddah',
    title: 'Quasi-irreversibility temperature in type-I superconductor". A.K. Grover, Ravi Kumar',
    journal: 'Phys. Rev. B , Vol. 43',
    indexing: 'SCI',
  },
  {
    year: '1991',
    authors: 'A.K. Grover, Ravi Kumar, S.K. Malik and P. Chaddah',
    title: 'An exposition of inhomogeneous magnetic states in type-I and type-II superconductors',
    journal: 'Solid State Communications , Vol. 77',
    indexing: 'SCI',
  },
]

export default function MscResearchPage() {
  return (
    <main className="msc-research-page">
      <div className="msc-research-shell">
        <aside className="msc-research-sidebar" aria-label="Department navigation">
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

        <section className="msc-research-content">
          <h1>Research Publications</h1>

          <div className="research-table-wrapper">
            <table className="research-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Author(s)</th>
                  <th>Title & Vol. No.</th>
                  <th>Journal Name</th>
                  <th>
                    Indexing (SCI) Web of<br />Science/Scopus
                  </th>
                </tr>
              </thead>
              <tbody>
                {publications.map((pub, index) => (
                  <tr key={index}>
                    <td>{pub.year}</td>
                    <td>{pub.authors}</td>
                    <td>{pub.title}</td>
                    <td>{pub.journal}</td>
                    <td>{pub.indexing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}