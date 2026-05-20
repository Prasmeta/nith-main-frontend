import Link from 'next/link'
import './cse_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff' },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/cse/contact' },
]

const publications = [
  {
    year: '2005',
    authors: 'Lalit Kumar, Parveen Kumar, RK Chauhan',
    title:
      'Logging based coordinated check pointing in mobile distributed computing systems Vol. 51, pp. 485-490. DOI: https://doi.org/10.1080/03772063.2005.11416429',
    journal: 'ACCST Journal of research',
    indexing: '-',
  },
  {
    year: '2005',
    authors: 'Parveen Kumar, Lalit Kumar, RK Chauhan',
    title:
      'A low overhead Non-intrusive Hybrid Synchronous check pointing protocol for mobile systems Vol. 52, pp. 247-254.',
    journal: 'Journal of Multidisciplinary Engineering Technologies',
    indexing: '-',
  },
  {
    year: '2005',
    authors: 'Parveen Kumar, Lalit Kumar, RK Chauhan',
    title:
      'Synchronous Check pointing Protocols for Mobile Distributed Systems: A Comparative Study Vol. 1, pp. 298-314.',
    journal: 'International Journal of information and computing science',
    indexing: '-',
  },
]

export default function CseResearchPage() {
  return (
    <main className="cse-research-page">
      <div className="cse-research-shell">
        <aside className="cse-research-sidebar" aria-label="Department navigation">
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

        <section className="cse-research-content">
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
                    <td>
                      {pub.title.includes('DOI:') ? (
                        <>
                          {pub.title.split('DOI:')[0]}
                          DOI:{' '}
                          <a
                            href={pub.title.split('DOI:')[1].trim()}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {pub.title.split('DOI:')[1].trim()}
                          </a>
                        </>
                      ) : (
                        pub.title
                      )}
                    </td>
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