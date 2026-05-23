'use client'

import {
  BookOpen,
  GraduationCap,
  Network,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const academicProgrammes = [
  {
    name: 'B.Tech.',
    Icon: GraduationCap,
    details:
      'Undergraduate programme combining mathematics and computing.',
  },
  {
    name: 'M.Sc.',
    Icon: BookOpen,
    details:
      'Postgraduate programme in advanced mathematics and applications.',
  },
  {
    name: 'Ph.D.',
    Icon: Network,
    details:
      'Research in Mathematics and Statistics.',
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
    minHeight: '220px',
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
  const [programmesData, setProgrammesData] = useState(academicProgrammes)
  const language = useSelector((state) => state.language.value)
  const isHindi = language !== 'en'

  useEffect(() => {
    const loadFromXmlFallback = () => {
      fetch('/faculty-section/department/mnc/department.xml')
        .then((response) => response.text())
        .then((xmlText) => {
          const parser = new DOMParser()
          const xml = parser.parseFromString(xmlText, 'text/xml')

          const title = xml.querySelector('title')?.textContent || ''

          const descriptions = [...xml.querySelectorAll('info description')]
            .map((item) => item.textContent)

          setDepartmentData({
            title,
            descriptions,
          })
        })
        .catch(() => {
          setDepartmentData({
            title: 'Department of Mathematics & Scientific Computing',
            descriptions: [],
          })
        })
    }

    Promise.all([
      fetch(`${API_BASE}/v1/departments/mnc?language=${language}`, { cache: 'no-store' }),
      fetch(`${API_BASE}/v1/departments/mnc/programmes?language=${language}`, { cache: 'no-store' }),
    ])
      .then(async ([deptRes, programmeRes]) => {
        if (!deptRes.ok || !programmeRes.ok) {
          throw new Error('Backend response not OK')
        }

        const deptJson = await deptRes.json()
        const programmeJson = await programmeRes.json()

        const dept = deptJson?.data || {}
        setDepartmentData({
          title: isHindi
            ? dept.intro_heading_hi || dept.intro_heading_en || 'Department of Mathematics & Scientific Computing'
            : dept.intro_heading_en || dept.intro_heading_hi || 'Department of Mathematics & Scientific Computing',
          descriptions: [
            isHindi ? dept.intro_description_hi : dept.intro_description_en,
          ].filter(Boolean),
        })

        const iconByName = {
          'B.Tech': GraduationCap,
          'M.Tech': BookOpen,
          'M.Sc': BookOpen,
          'Ph.D': Network,
        }

        const mapped = (programmeJson?.data || []).map((item) => ({
          name: isHindi
            ? item.title_hi || item.title_en || item.programme_type || 'Programme'
            : item.title_en || item.title_hi || item.programme_type || 'Programme',
          Icon: iconByName[item.title_en || item.title_hi || item.programme_type] || Network,
          details: isHindi ? item.description_hi || '' : item.description_en || '',
        }))

        if (mapped.length > 0) {
          setProgrammesData(mapped)
        }
      })
      .catch(() => {
        loadFromXmlFallback()
      })
  }, [language])

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
        <span style={styles.sidebarActiveItem}>{isHindi ? 'हमारे बारे में' : 'About Us'}</span>

        <a href="/faculty-section/department/mnc/vision-and-mission" style={styles.sidebarLink}>
          {isHindi ? 'दृष्टि और मिशन' : 'Vision & Mission'}
        </a>

        <a href="/faculty-section/department/mnc/faculty" style={styles.sidebarLink}>
          {isHindi ? 'शिक्षक' : 'Faculty'}
        </a>

        <a href="/faculty-section/department/mnc/staff" style={styles.sidebarLink}>
          {isHindi ? 'कर्मचारी' : 'Staff'}
        </a>

        <a href="/faculty-section/department/mnc/programmes-offered" style={styles.sidebarLink}>
          {isHindi ? 'कार्यक्रम' : 'Programme Offered'}
        </a>

        <a href="/faculty-section/department/mnc/labs" style={styles.sidebarLink}>
          {isHindi ? 'प्रयोगशालाएं' : 'Labs'}
        </a>

        <a href="/faculty-section/department/mnc/research-publications" style={styles.sidebarLink}>
          {isHindi ? 'शोध प्रकाशन' : 'Research Publications'}
        </a>

        <a href="/faculty-section/department/mnc/contact" style={styles.sidebarLink}>
          {isHindi ? 'संपर्क' : 'Contact'}
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>

          <h1 style={styles.pageTitle}>
            {departmentData.title}
          </h1>

          {/* Department Image */}
          <div style={styles.imagePlaceholder}>
            <img
              src="/faculty-section/department/mnc/mnc_dept.png"
              alt="MNC Department"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
          </div>

          {/* Academic Programmes */}
          <h2 style={styles.sectionTitle}>
            {isHindi ? 'शैक्षणिक कार्यक्रम' : 'Academic Programmes'}
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
            {programmesData.map((programme) => (
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

          <p style={styles.descriptionText}>
            {isHindi
              ? 'ये कार्यक्रम छात्रों को अनुसंधान, उद्योग और प्रौद्योगिकी में करियर के लिए तैयार करते हैं और नवाचार, अंतर्विषयी शिक्षा और शैक्षणिक उत्कृष्टता को बढ़ावा देते हैं।'
              : 'These programmes prepare students for careers in research, industry, and technology while promoting innovation, interdisciplinary learning, and academic excellence.'}
          </p>

          <h2 style={styles.sectionTitle}>
            {isHindi ? 'कैरियर संभावनाएं और उद्योग प्रासंगिकता' : 'Career Prospects and Industry Relevance'}
          </h2>

          <p style={styles.descriptionText}>
            {isHindi
              ? 'गणित और वैज्ञानिक संगणना के स्नातकों के लिए अनुसंधान, शिक्षण, आईटी, बैंकिंग, डेटा विश्लेषण और आर एंड डी में मजबूत करियर अवसर उपलब्ध हैं।'
              : 'Mathematics and Scientific Computing graduates have strong career opportunities in research, academia, IT, banking, data analytics, and R&D, supported by solid analytical and computational training.'}
          </p>

          {/* Stats Highlight Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              marginBottom: '30px',
            }}
          >
            {[
              { value: '85.37%', label: 'Placement Rate' },
              { value: '₹53 LPA', label: 'Highest Package' },
              { value: '₹14.78 LPA', label: 'Average Package' },
              { value: '25+', label: 'Top Recruiters' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: '#8b0000',
                  color: '#fff',
                  borderRadius: '8px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    marginBottom: '6px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    opacity: '0.9',
                    fontWeight: '500',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Top Recruiters Section */}
          <h2 style={styles.sectionTitle}>
            {isHindi ? 'शीर्ष नियोजक' : 'Top Recruiters'}
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '20px 32px',
              marginTop: '8px',
              marginBottom: '10px',
            }}
          >
            {[
              'Google', 'Amazon', 'Adobe', 'Walmart',
              'Oracle', 'Samsung', 'Accenture', 'Deloitte',
            ].map((company) => (
              <div
                key={company}
                style={{
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#333',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '120px',
                }}
              >
                {company}
              </div>
            ))}
          </div>

          {/* Read More - Placement PDFs */}
          <h2 style={styles.sectionTitle}>
            Read More
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              marginTop: '8px',
              marginBottom: '10px',
            }}
          >
            <a
              href="/PH-Maths-24-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#8b0000',
                color: '#fff',
                borderRadius: '6px',
                padding: '16px 32px',
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                minWidth: '200px',
                transition: 'opacity 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              📄 Placement Report 2024-25
            </a>

            <a
              href="/PH-Maths-23-24.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#8b0000',
                color: '#fff',
                borderRadius: '6px',
                padding: '16px 32px',
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                minWidth: '200px',
                transition: 'opacity 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              📄 Placement Report 2023-24
            </a>
          </div>

        </div>
      </main>

    </div>
  )
}

export default App