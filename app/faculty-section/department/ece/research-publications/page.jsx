import Link from 'next/link'
import './ece_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/ece' },
  { label: 'Vision & Mission', href: '/faculty-section/department/ece/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/ece/faculty' },
  { label: 'Staff', href: '/faculty-section/department/ece/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/ece/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/ece/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/ece/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/ece/contact' },
]

const publications = [
  {
    year: '1994',
    authors: 'Ashwani Kumar Chandel, Rajeevan Chandel and J.S. Saini',
    title: 'Enhancement of Placement Activities in Remotely Located Technical Institutes, vol. 17, no. 3, pp. 32-36, July-September, 1994.',
    journal: 'ISTE Journal of Education,',
    indexing: 'ISTE Pub.',
  },
  {
    year: '2000',
    authors: 'Rajeevan Chandel and Ashwani Kumar',
    title: 'Design and Development of Dielectric based Electrostatic Microactuators, vol.46, no. 4, pp. 261-264',
    journal: 'IETE Journal of Research Taylor & Francis',
    indexing: 'SCIE',
  },
  {
    year: '2001',
    authors: 'Rajeevan Chandel',
    title: '"VLSI Micro-fabrication Technologies and MEMS, vol. 42, nos. 1-4, pp. 33-41, January-December 2001.',
    journal: 'IETE Journal of Education',
    indexing: 'Taylor & Francis Pub.',
  },
  {
    year: '2005',
    authors: 'Rajeevan Chandel, S. Sarkar and R.P. Agarwal',
    title: 'Performance Controlling Parameters of Voltage-Scaled Repeaters for Long Interconnections, vol. 51, no. 2, pp. 107-113',
    journal: 'IETE Journal of Research, Taylor & Francis',
    indexing: 'SCIE',
  },
  {
    year: '2005',
    authors: 'Rajeevan Chandel, S. Sarkar and R.P. Agarwal',
    title: 'Transition Time Considerations in Voltage-Scaled Repeaters, vol. 22, no. 3, pp.39-40',
    journal: 'Microelectronics International, Emerald, UK.',
    indexing: 'SCI',
  },
  {
    year: '2005',
    authors: 'Rajeevan Chandel, S. Sarkar and R.P. Agarwal',
    title: 'Delay Analysis of a Single Voltage-Scaled-Repeater driven Long Interconnect, vol. 22, no. 3, pp. 28-33',
    journal: 'Microelectronics International, Emerald, UK.',
    indexing: 'SCI',
  },
]

export default function EceResearchPage() {
  return (
    <main className="ece-research-page">
      <div className="ece-research-shell">
        <aside className="ece-research-sidebar" aria-label="Department navigation">
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

        <section className="ece-research-content">
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