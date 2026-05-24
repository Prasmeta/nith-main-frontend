'use client'

import Link from 'next/link'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/ece' },
  { label: 'Vision & Mission', href: '/faculty-section/department/ece/vision-mission', active: true },
  { label: 'Faculty', href: '/faculty-section/department/ece/faculty' },
  { label: 'Staff', href: '/faculty-section/department/ece/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/ece/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/ece/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/ece/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/ece/contact' },
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
    marginBottom: '24px',
    marginTop: '0',
  },

  sectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '28px 0 16px 0',
  },

  descriptionText: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '12px',
  },

  listItem: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '8px',
    marginLeft: '20px',
  },
}

export default function EceVisionMissionPage() {
  return (
    <div style={styles.pageWrapper}>
      <aside style={styles.sidebar}>
        {menuItems.map((item) =>
          item.active ? (
            <span key={item.label} style={styles.sidebarActiveItem}>
              {item.label}
            </span>
          ) : (
            <Link key={item.label} href={item.href} style={styles.sidebarLink}>
              {item.label}
            </Link>
          )
        )}
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.contentBox}>
          <h1 style={styles.pageTitle}>Vision & Mission</h1>

          <h2 style={styles.sectionTitle}>Vision</h2>
          <p style={styles.descriptionText}>
            The vision of the Department of Electronics & Communication Engineering is to deliver quality technical education based on societal benefits & requirements and industry standards for promoting research and innovation in latest emerging areas of Electronics & Communication Engineering.
          </p>

          <h2 style={styles.sectionTitle}>Mission</h2>
          <p style={styles.descriptionText}>
            The mission of the Department of Electronics & Communication Engineering is envisaged in the following statements:
          </p>

          <ol style={{ paddingLeft: '20px', margin: '0' }}>
            <li style={styles.listItem}>
              To impart state-of-the-art teaching and learning in Electronics and Communication Engineering based on professional ethics and societal needs for nation building.
            </li>
            <li style={styles.listItem}>
              To achieve excellence in Electronics and Communication Engineering by engaging in cutting-edge research and development.
            </li>
            <li style={styles.listItem}>
              To produce globally competent engineers and professionals with an aptitude for continued learning.
            </li>
            <li style={styles.listItem}>
              To collaborate with academia, industry and R&D organizations for nurturing technical innovations.
            </li>
            <li style={styles.listItem}>
              To promote outreach activities of faculty and students for enhancing visibility and resource generation, thereby achieving self-sustenance.
            </li>
          </ol>
        </div>
      </main>
    </div>
  )
}