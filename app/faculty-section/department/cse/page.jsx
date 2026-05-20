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
    name: 'Dual Degree',
    Icon: BookOpen,
    details:
      'Integrated five-year B.Tech & M.Tech programme for accelerated specialization in CSE.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Postgraduate excellence in Computer Science and Information Security domains.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Advanced doctoral research programs pushing the boundaries of computing science.',
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

  bottomSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginTop: '28px',
  },

  missionTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#8b0000',
    lineHeight: '1.2',
    marginBottom: '16px',
    marginTop: '0',
  },

  missionText: {
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.7',
    textAlign: 'justify',
    marginBottom: '14px',
  },

  missionList: {
    paddingLeft: '20px',
    margin: '0',
  },

  missionListItem: {
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.8',
  },

  researchBox: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '4px',
  },

  researchTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#3a5a9b',
    lineHeight: '1.2',
    marginBottom: '16px',
    marginTop: '0',
  },

  researchGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginBottom: '20px',
  },

  researchCategory: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#3a5a9b',
    marginBottom: '4px',
    display: 'block',
  },

  researchDesc: {
    fontSize: '12px',
    color: '#555',
    lineHeight: '1.5',
    margin: '0',
  },

  exploreBtn: {
    backgroundColor: '#8b0000',
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
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

        <a href="/faculty-section/department/cse/vision-and-mission" style={styles.sidebarLink}>
          Vision & Mission
        </a>

        <a href="/faculty-section/department/cse/faculty" style={styles.sidebarLink}>
          Faculty
        </a>

        <a href="/faculty-section/department/cse/staff" style={styles.sidebarLink}>
          Staff
        </a>

        <a href="#" style={styles.sidebarLink}>
          Programme Offered
        </a>

        <a href="/faculty-section/department/cse/labs" style={styles.sidebarLink}>
          Labs
        </a>

        <a href="/faculty-section/department/cse/research-publications" style={styles.sidebarLink}>
          Research Publications
        </a>

        <a href="/faculty-section/department/cse/contact" style={styles.sidebarLink}>
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>

          <h1 style={styles.pageTitle}>
            {departmentData.title}
          </h1>

          {/* Image Placeholder */}
          <div style={styles.imagePlaceholder}>
            🏛 College Campus Photo
          </div>

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

          {/* Bottom Section */}
          <div style={styles.bottomSection}>

            {/* Mission */}
            <div>
              <h2 style={styles.missionTitle}>
                Mission &amp;
                <br />
                Cognitive
                <br />
                Development
              </h2>

              <p style={styles.missionText}>
                Our programs are designed to transcend mere technical instruction.
                We focus on the holistic development of our students, nurturing cognitive
                abilities that allow for complex problem-solving and ethical decision-making
                in the digital age.
              </p>

              <ul style={styles.missionList}>
                <li style={styles.missionListItem}>
                  Critical thinking and analytical reasoning skills.
                </li>

                <li style={styles.missionListItem}>
                  Interdisciplinary research opportunities.
                </li>

                <li style={styles.missionListItem}>
                  Industry-aligned curriculum with regular updates.
                </li>
              </ul>
            </div>

            {/* Research */}
            <div style={styles.researchBox}>

              <h2 style={styles.researchTitle}>
                Explore Research
                <br />
                Publications
              </h2>

              <div style={styles.researchGrid}>

                <div>
                  <span style={styles.researchCategory}>
                    AI &amp; ML
                  </span>

                  <p style={styles.researchDesc}>
                    Research in machine learning and intelligent systems.
                  </p>
                </div>

                <div>
                  <span style={styles.researchCategory}>
                    Cyber Security
                  </span>

                  <p style={styles.researchDesc}>
                    Advanced security protocols and privacy systems.
                  </p>
                </div>

                <div>
                  <span style={styles.researchCategory}>
                    Cloud Computing
                  </span>

                  <p style={styles.researchDesc}>
                    Distributed systems and scalable computing research.
                  </p>
                </div>

                <div>
                  <span style={styles.researchCategory}>
                    IoT &amp; Robotics
                  </span>

                  <p style={styles.researchDesc}>
                    Smart devices and hardware-software integration.
                  </p>
                </div>

              </div>

              <button style={styles.exploreBtn}>
                Explore →
              </button>

            </div>

          </div>

        </div>
      </main>

    </div>
  )
}

export default App
