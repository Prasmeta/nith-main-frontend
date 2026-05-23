'use client'

import { GraduationCap, Microscope, Network } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const fallbackDepartmentData = {
  titleEn: 'Department of Physics & Photonics Science',
  titleHi: 'भौतिकी एवं फोटोनिक्स विज्ञान विभाग',
  descriptionsEn: [
    'The Department of Physics is committed to excellence in teaching and research in various branches of physics. It offers undergraduate and postgraduate courses for engineering departments, along with Ph.D. programmes in condensed matter physics, high energy physics, materials science, and theoretical nuclear physics. The department houses well-equipped laboratories for experimental physics, spectroscopy, materials characterization, and computational physics. It aims to foster scientific temper, analytical thinking, and research innovation among students, preparing them for careers in academia, industry, and research institutions.',
  ],
  descriptionsHi: [
    'भौतिकी विभाग भौतिकी की विभिन्न शाखाओं में शिक्षण और अनुसंधान में उत्कृष्टता के लिए समर्पित है। यह इंजीनियरिंग विभागों के लिए स्नातक और स्नातकोत्तर पाठ्यक्रमों के साथ-साथ संघनित पदार्थ भौतिकी, उच्च ऊर्जा भौतिकी, पदार्थ विज्ञान और सैद्धांतिक नाभिकीय भौतिकी में पीएच.डी. कार्यक्रम भी प्रदान करता है। विभाग में प्रायोगिक भौतिकी, स्पेक्ट्रोस्कोपी, पदार्थ अभिलक्षणन और संगणकीय भौतिकी के लिए सुसज्जित प्रयोगशालाएँ हैं। इसका उद्देश्य छात्रों में वैज्ञानिक दृष्टिकोण, विश्लेषणात्मक सोच और अनुसंधान नवाचार को बढ़ावा देना है।',
  ],
}

const fallbackProgrammes = [
  {
    nameEn: 'B.Tech',
    nameHi: 'बी.टेक',
    Icon: GraduationCap,
    detailsEn: 'Four-year undergraduate programme providing foundational knowledge in physics, experimental techniques, and analytical problem-solving skills for engineering applications.',
    detailsHi: 'चार वर्षीय स्नातक कार्यक्रम जो भौतिकी, प्रायोगिक तकनीकों और इंजीनियरिंग अनुप्रयोगों के लिए विश्लेषणात्मक समस्या-समाधान कौशल की आधारभूत समझ प्रदान करता है।',
  },
  {
    nameEn: 'M.Tech',
    nameHi: 'एम.टेक',
    Icon: Microscope,
    detailsEn: 'Postgraduate programme in Materials Science focusing on condensed matter physics, nanotechnology, and advanced materials characterization techniques.',
    detailsHi: 'पदार्थ विज्ञान में स्नातकोत्तर कार्यक्रम, जो संघनित पदार्थ भौतिकी, नैनोप्रौद्योगिकी और उन्नत पदार्थ अभिलक्षणन तकनीकों पर केंद्रित है।',
  },
  {
    nameEn: 'Ph.D',
    nameHi: 'पीएच.डी.',
    Icon: Network,
    detailsEn: 'Advanced doctoral research programmes in condensed matter physics, high energy physics, materials physics, spectroscopy, and theoretical nuclear physics.',
    detailsHi: 'संघनित पदार्थ भौतिकी, उच्च ऊर्जा भौतिकी, पदार्थ भौतिकी, स्पेक्ट्रोस्कोपी और सैद्धांतिक नाभिकीय भौतिकी में उन्नत शोध कार्यक्रम।',
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

export default function PhyDepartmentPage() {
  const language = useSelector((state) => state.language.value)
  const isHindi = language !== 'en'
  const [departmentData, setDepartmentData] = useState(null)
  const [programmesData, setProgrammesData] = useState(fallbackProgrammes)

  useEffect(() => {
    const loadDepartment = async () => {
      try {
        const [departmentResponse, programmesResponse] = await Promise.all([
          fetch(`${API_BASE}/v1/departments/phy?language=${language}`, { cache: 'no-store' }),
          fetch(`${API_BASE}/v1/departments/phy/programmes?language=${language}`, { cache: 'no-store' }),
        ])

        if (!departmentResponse.ok || !programmesResponse.ok) {
          throw new Error('Backend response not OK')
        }

        const departmentJson = await departmentResponse.json()
        const programmesJson = await programmesResponse.json()
        const dept = departmentJson?.data || {}

        setDepartmentData({
          title: isHindi
            ? dept.intro_heading_hi || dept.intro_heading || fallbackDepartmentData.titleHi
            : dept.intro_heading_en || dept.intro_heading || fallbackDepartmentData.titleEn,
          descriptions: isHindi
            ? [dept.intro_description_hi || dept.intro_description].filter(Boolean)
            : [dept.intro_description_en || dept.intro_description].filter(Boolean),
          imageUrl: dept.dept_image_url || '/faculty-section/department/phy/phy_dept.jpg',
        })

        const iconByName = {
          'B.Tech': GraduationCap,
          'M.Tech': Microscope,
          'Ph.D': Network,
        }

        const mappedProgrammes = (programmesJson?.data || []).map((item) => ({
          name: isHindi
            ? item.title_hi || item.title || item.programme_type || 'कार्यक्रम'
            : item.title_en || item.title || item.programme_type || 'Programme',
          Icon: iconByName[item.programme_type || item.title_en || item.title || item.title_hi] || Network,
          details: isHindi
            ? item.description_hi || item.description || ''
            : item.description_en || item.description || '',
        }))

        if (mappedProgrammes.length > 0) {
          setProgrammesData(mappedProgrammes)
        }
      } catch {
        setDepartmentData({
          title: isHindi ? fallbackDepartmentData.titleHi : fallbackDepartmentData.titleEn,
          descriptions: isHindi ? fallbackDepartmentData.descriptionsHi : fallbackDepartmentData.descriptionsEn,
          imageUrl: '/faculty-section/department/phy/phy_dept.jpg',
        })
      }
    }

    loadDepartment()
  }, [language])

  if (!departmentData) {
    return <h2 style={{ padding: '2rem', color: '#333' }}>Loading...</h2>
  }

  return (
    <div style={styles.pageWrapper}>
      <aside style={styles.sidebar}>
        <span style={styles.sidebarActiveItem}>{isHindi ? 'हमारे बारे में' : 'About Us'}</span>

        <a href="/faculty-section/department/phy/faculty" style={styles.sidebarLink}>{isHindi ? 'संकाय' : 'Faculty'}</a>
        <a href="/faculty-section/department/phy/staff" style={styles.sidebarLink}>{isHindi ? 'कर्मचारी' : 'Staff'}</a>
        <a href="/faculty-section/department/phy/programme-offered" style={styles.sidebarLink}>{isHindi ? 'कार्यक्रम' : 'Programme Offered'}</a>
        <a href="/faculty-section/department/phy/labs" style={styles.sidebarLink}>{isHindi ? 'प्रयोगशालाएँ' : 'Labs'}</a>
        <a href="/faculty-section/department/phy/research-publications" style={styles.sidebarLink}>{isHindi ? 'शोध प्रकाशन' : 'Research Publications'}</a>
        <a href="/faculty-section/department/phy/contact" style={styles.sidebarLink}>{isHindi ? 'संपर्क' : 'Contact'}</a>
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>{departmentData.title}</h1>

          <img
            src={departmentData.imageUrl}
            alt="Physics Department"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
              marginBottom: '20px',
              display: 'block',
            }}
          />

          {departmentData.descriptions.length > 0 ? (
            departmentData.descriptions.map((text, index) => (
              <p key={index} style={styles.descriptionText}>{text}</p>
            ))
          ) : (
            <p style={styles.descriptionText}>
              The Department of Physics is committed to excellence in teaching and research in various branches of physics.
            </p>
          )}

          <h2 style={styles.sectionTitle}>Academic Programmes</h2>

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
              <div key={programme.name || programme.nameEn || programme.nameHi} style={styles.programmeCard}>
                <span style={styles.programmeIcon}>
                  <programme.Icon size={24} strokeWidth={1.8} />
                </span>
                <h3 style={styles.programmeName}>{programme.name || (isHindi ? programme.nameHi : programme.nameEn)}</h3>
                <p style={styles.programmeDetails}>{programme.details || (isHindi ? programme.detailsHi : programme.detailsEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}