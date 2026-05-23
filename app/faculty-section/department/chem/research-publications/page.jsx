import Link from 'next/link'
import './chem_research.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const publications = [
  {
    year: '1992',
    authors: 'B Gaur, JSP Rai',
    title: 'Curing and decomposition behaviour of vinyl ester resins',
    journal: 'Polymer',
    indexing: 'SCI',
  },
  {
    year: '1993',
    authors: 'B Gaur, JSP Rai',
    title: 'Rheological and thermal behaviour of vinyl ester resin',
    journal: 'European polymer journal',
    indexing: 'SCI',
  },
  {
    year: '2003',
    authors: 'B Gaur, B Lochab, V Choudhary, I Varma',
    title: 'Thermal behaviour of poly (allyl azide)',
    journal: 'Journal of thermal analysis and calorimetry',
    indexing: 'SCI',
  },
  {
    year: '2003',
    authors: 'B Gaur, B Lochab, V Choudhary, IK Varma',
    title: 'Azido polymers—energetic binders for solid rocket propellants',
    journal: 'Journal of Macromolecular Science, Part C: Polymer Reviews',
    indexing: 'SCI',
  },
  {
    year: '2003',
    authors: 'B Gaur, JSP Rai',
    title: 'Rheological behavior of vinyl ester resin',
    journal: 'Polymer-Plastics Technology and Engineering',
    indexing: 'SCI',
  },
  {
    year: '2004',
    authors: 'Ghosh, K. S., Maiti, T. K., Dasgupta, S.',
    title: 'Green tea polyphenols as inhibitors of ribonuclease A',
    journal: 'Biochem. Biophys. Res. Commun. (Elsevier)',
    indexing: 'SCI',
  },
]

export default function ChemResearchPage() {
  return (
    <main className="chem-research-page">
      <div className="chem-research-shell">
        <aside className="chem-research-sidebar" aria-label="Department navigation">
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

        <section className="chem-research-content">
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