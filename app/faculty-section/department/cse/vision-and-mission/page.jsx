'use client'

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

  sectionTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#8b0000',
    marginBottom: '16px',
    marginTop: '0',
  },

  textBlock: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.8',
    textAlign: 'justify',
    marginBottom: '28px',
  },
}

function VisionMission() {
  return (
    <div style={styles.pageWrapper}>

      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <a href="/faculty-section/department/cse" style={styles.sidebarLink}>
          About Us
        </a>

        <span style={styles.sidebarActiveItem}>Vision & Mission</span>

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

          <h2 style={styles.sectionTitle}>Our Vision</h2>

          <p style={styles.textBlock}>
            To provide excellent technical education in computer science and engineering and produce competent engineers and professionals with high ethical values prepared for life long learning.
          </p>

          <h2 style={{ ...styles.sectionTitle, marginTop: '36px' }}>Our Mission</h2>

          <p style={styles.textBlock}>
            To impart quality and value based education in computer science and engineering to solve real world problems with an inclination towards societal issues and research.
          </p>
          <p style={{ ...styles.textBlock, marginBottom: '0' }}>
            To prepare student for professional career with continuous learning.
          </p>

        </div>
      </main>

    </div>
  )
}

export default VisionMission