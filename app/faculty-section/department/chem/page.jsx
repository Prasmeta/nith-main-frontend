'use client'

import {
  BookOpen,
  GraduationCap,
  Microscope,
  Network,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const academicProgrammes = [
  {
    name: 'B.Tech',
    Icon: GraduationCap,
    details:
      'Four-year undergraduate programme focusing on core foundations and emerging tech trends.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Postgraduate programme in Chemical Technology in collaboration with the Chemical Engineering department.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Advanced doctoral research programs in various areas of chemistry.',
  },
]

const styles = {
  pageWrapper: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
  },

  sidebar: {
    width: '200px',
    minWidth: '200px',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    paddingTop: '0',
  },

  sidebarActiveItem: {
    backgroundColor: '#8b0000',
    color: '#fff',
    padding: '10px 16px',
    fontWeight: '600',
    fontSize: '14px',
    display: 'block',
  },

  sidebarLink: {
    display: 'block',
    padding: '8px 16px',
    fontSize: '14px',
    color: '#c0392b',
    textDecoration: 'none',
    borderBottom: '1px solid #f0f0f0',
  },

  mainContent: {
    flex: 1,
    padding: '24px 32px',
    backgroundColor: '#f5f5f5',
  },

  contentBox: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
  },

  pageTitle: {
    fontSize: '20px',
    fontWeight: '400',
    textAlign: 'center',
    color: '#333',
    marginBottom: '16px',
    marginTop: '0',
  },

  imagePlaceholder: {
    width: '100%',
    height: '220px',
    backgroundColor: '#d0e0d0',
    borderRadius: '4px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '14px',
  },

  descriptionText: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '12px',
  },

  sectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '28px 0 16px 0',
  },

  programmeCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '28px 24px',
    backgroundColor: '#fff',
    minHeight: '260px',
  },

  programmeIcon: {
    width: '48px',
    height: '48px',
    marginBottom: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff7f7',
    color: '#8b0000',
  },

  programmeName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#8b0000',
    marginBottom: '12px',
    marginTop: '0',
  },

  programmeDetails: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.75',
    margin: '0',
  },
}

function App() {
  const [departmentData, setDepartmentData] = useState(null)

  useEffect(() => {
    fetch('/department.xml')
      .then((response) => response.text())
      .then((xmlText) => {
        const parser = new DOMParser()
        const xml = parser.parseFromString(xmlText, 'text/xml')

        const title = xml.querySelector('title')?.textContent || ''

        const descriptions = [...xml.querySelectorAll('info description')]
          .map((item) => item.textContent)

        const programmes = [...xml.querySelectorAll('programme')].map((item) => ({
          name: item.querySelector('name')?.textContent || '',
          icon: item.querySelector('icon')?.textContent || '',
          details: item.querySelector('details')?.textContent || '',
        }))

        setDepartmentData({
          title,
          descriptions,
          programmes,
        })
      })
  }, [])

  if (!departmentData) {
    return (
      <h2 style={{ padding: '2rem', color: '#333' }}>
        Loading...
      </h2>
    )
  }

  return (
    <div style={styles.pageWrapper}>

      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <span style={styles.sidebarActiveItem}>About Us</span>

        <a href="/faculty-section/department/chem/vision-mission" style={styles.sidebarLink}>
          Vision & Mission
        </a>

        <a href="/faculty-section/department/chem/faculty" style={styles.sidebarLink}>
          Faculty
        </a>

        <a href="/faculty-section/department/chem/staff" style={styles.sidebarLink}>
          Staff
        </a>

        <a href="/faculty-section/department/chem/programme-offered" style={styles.sidebarLink}>
          Programme Offered
        </a>

        <a href="/faculty-section/department/chem/labs" style={styles.sidebarLink}>
          Labs
        </a>

        <a href="/faculty-section/department/chem/research-publications" style={styles.sidebarLink}>
          Research Publications
        </a>

        <a href="/faculty-section/department/chem/contact" style={styles.sidebarLink}>
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>

          <h1 style={styles.pageTitle}>
            {departmentData.title}
          </h1>

          {/* Image */}
          <img
            src="/faculty-section/department/chem/chem_dept.jpg"
            alt="Chemistry Department"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
              marginBottom: '20px',
              display: 'block',
            }}
          />

          {/* Description */}
          <p style={styles.descriptionText}>
            The Department of Chemistry became an independent department in August 2009. It offers UG and PG courses for engineering departments, along with Ph.D. programs in various areas of chemistry. Since 2016–17, the department has offered an M.Tech. in Chemical Technology in collaboration with the Chemical Engineering department, and since 2017–18, an M.Sc. in Chemistry. The department aims to expand and upgrade its PG programs to meet current industrial needs and encourages active industry participation in curriculum development and training.
          </p>

          {/* Academic Programmes */}
          <h2 style={styles.sectionTitle}>
            Academic Programmes
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              width: '100%',
              marginBottom: '30px',
            }}
          >
            {academicProgrammes.map((programme) => (
              <div
                key={programme.name}
                style={styles.programmeCard}
              >
                <span style={styles.programmeIcon}>
                  <programme.Icon size={24} strokeWidth={1.8} />
                </span>

                <h3 style={styles.programmeName}>
                  {programme.name}
                </h3>

                <p style={styles.programmeDetails}>
                  {programme.details}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          {departmentData.descriptions.map((text, index) => (
            <p key={index} style={styles.descriptionText}>
              {text}
            </p>
          ))}

        </div>
      </main>

    </div>
  )
}

export default App