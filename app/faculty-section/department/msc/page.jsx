'use client'

import { BookOpen, GraduationCap, Microscope, Network } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const fallbackDepartmentData = {
  titleEn: 'Department of Material Science & Engineering',
  titleHi: 'पदार्थ विज्ञान एवं अभियांत्रिकी विभाग',
  descriptionsEn: [
    'Established in 2008, the Centre for Materials Science and Engineering (CMSE) focuses on interdisciplinary teaching and research in materials science, nanotechnology, biology, chemistry, and physics. The centre launched its Ph.D. programme in 2010 and M.Tech. programme in 2010, and currently houses advanced synthesis and characterization facilities with six faculty members working in frontier research areas.',
  ],
  descriptionsHi: [
    '2008 में स्थापित, सेंटर फॉर मटेरियल्स साइंस एंड इंजीनियरिंग (CMSE) पदार्थ विज्ञान, नैनोप्रौद्योगिकी, जीवविज्ञान, रसायन विज्ञान और भौतिकी में अंतर्विषयी शिक्षण और अनुसंधान पर केंद्रित है। केंद्र ने 2010 में अपना पीएच.डी. कार्यक्रम और एम.टेक. कार्यक्रम शुरू किया, और वर्तमान में उन्नत संश्लेषण एवं अभिलक्षणन सुविधाओं के साथ फ्रंटियर शोध क्षेत्रों में कार्यरत छह संकाय सदस्य हैं।',
  ],
}

const fallbackProgrammes = [
  {
    nameEn: 'B.Tech',
    nameHi: 'बी.टेक',
    Icon: GraduationCap,
    detailsEn: 'Four-year undergraduate programme providing strong foundations in materials science, engineering principles, processing techniques, and analytical problem-solving skills for modern technological applications.',
    detailsHi: 'चार वर्षीय स्नातक कार्यक्रम जो पदार्थ विज्ञान, अभियांत्रिकी सिद्धांत, प्रसंस्करण तकनीक और आधुनिक तकनीकी अनुप्रयोगों के लिए विश्लेषणात्मक समस्या-समाधान कौशल में मजबूत आधार प्रदान करता है।',
  },
  {
    nameEn: 'M.Tech',
    nameHi: 'एम.टेक',
    Icon: Microscope,
    detailsEn: 'Two-year postgraduate programme focused on advanced materials research, characterization techniques, and specialized engineering applications in emerging technologies.',
    detailsHi: 'दो वर्षीय स्नातकोत्तर कार्यक्रम जो उन्नत पदार्थ अनुसंधान, अभिलक्षणन तकनीकों और उभरती तकनीकों में विशेष अभियांत्रिकी अनुप्रयोगों पर केंद्रित है।',
  },
  {
    nameEn: 'Ph.D',
    nameHi: 'पीएच.डी.',
    Icon: Network,
    detailsEn: 'Research-intensive doctoral programme emphasizing original contributions in advanced materials science, interdisciplinary innovation, and high-impact scientific research.',
    detailsHi: 'उन्नत पदार्थ विज्ञान, अंतर्विषयी नवाचार और उच्च प्रभाव वाले वैज्ञानिक अनुसंधान में मौलिक योगदान पर केंद्रित शोध-प्रधान डॉक्टोरल कार्यक्रम।',
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

export default function MscDepartmentPage() {
  const language = useSelector((state) => state.language.value)
  const isHindi = language !== 'en'
  const [departmentData, setDepartmentData] = useState(null)
  const [programmesData, setProgrammesData] = useState(fallbackProgrammes)

  useEffect(() => {
    const loadDepartment = async () => {
      try {
        const [departmentResponse, programmesResponse] = await Promise.all([
          fetch(`${API_BASE}/v1/departments/msc?language=${language}`, { cache: 'no-store' }),
          fetch(`${API_BASE}/v1/departments/msc/programmes?language=${language}`, { cache: 'no-store' }),
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
          imageUrl: dept.dept_image_url || '/msc_dept.jpeg',
        })

        const iconByName = {
          'B.Tech': GraduationCap,
          'M.Tech': Microscope,
          'M.Sc': BookOpen,
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
          imageUrl: '/msc_dept.jpeg',
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

        <a href="/faculty-section/department/msc/faculty" style={styles.sidebarLink}>{isHindi ? 'संकाय' : 'Faculty'}</a>
        <a href="/faculty-section/department/msc/staff" style={styles.sidebarLink}>{isHindi ? 'कर्मचारी' : 'Staff'}</a>
        <a href="/faculty-section/department/msc/programme-offered" style={styles.sidebarLink}>{isHindi ? 'कार्यक्रम' : 'Programme Offered'}</a>
        <a href="/faculty-section/department/msc/labs" style={styles.sidebarLink}>{isHindi ? 'प्रयोगशालाएँ' : 'Labs'}</a>
        <a href="/faculty-section/department/msc/research-publications" style={styles.sidebarLink}>{isHindi ? 'शोध प्रकाशन' : 'Research Publications'}</a>
        <a href="/faculty-section/department/msc/contact" style={styles.sidebarLink}>{isHindi ? 'संपर्क' : 'Contact'}</a>
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>{departmentData.title}</h1>

          <img
            src={departmentData.imageUrl}
            alt="MSc Department"
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
              Established in 2008, the Centre for Materials Science and Engineering focuses on interdisciplinary teaching and research.
            </p>
          )}

          <h2 style={styles.sectionTitle}>{isHindi ? 'शैक्षणिक कार्यक्रम' : 'Academic Programmes'}</h2>

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

          <h2 style={styles.sectionTitle}>{isHindi ? 'अनुसंधान क्षेत्र' : 'Research Areas'}</h2>

          <p style={styles.descriptionText}>
            Active research areas: Functional oxides, high-temperature superconductors, colossal magnetoresistance, spintronics, ferrites, ferroelectric/multiferroic materials, polymer composites, dielectric/electrical materials, ceramic processing, powder and physical metallurgy, nanodrug delivery, microencapsulation, biomineralisation, biomimetics, self-assembly, nanophosphors, ion beam material modification, optical materials, X-ray absorption spectroscopy, semiconductor defect engineering, plasma nanoscience, metal-organic frameworks, nanoscale magnetism, and electrodeposition.
          </p>

          <p style={styles.descriptionText}>
            Faculty members have published 200+ international research papers, along with 1 Japanese patent and 9 books.
          </p>
        </div>
      </main>
    </div>
  )
}