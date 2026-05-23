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

  coreValuesTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#8b0000',
    marginBottom: '16px',
    marginTop: '36px',
  },

  coreValuesTable: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },

  tableHeader: {
    backgroundColor: '#8b0000',
    color: '#fff',
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: '600',
  },

  tableCell: {
    padding: '12px 16px',
    borderBottom: '1px solid #e0e0e0',
    verticalAlign: 'top',
    lineHeight: '1.6',
  },
}

function VisionMission() {
  return (
    <div style={styles.pageWrapper}>

      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <a href="/faculty-section/department/chem" style={styles.sidebarLink}>
          About Us
        </a>

        <span style={styles.sidebarActiveItem}>Vision & Mission</span>

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

          <h2 style={styles.sectionTitle}>Vision</h2>

          <p style={styles.textBlock}>
            The department of chemistry envisages to be recognized as a department of par excellence in higher learning, mentorship of students, research in chemistry and service to the society.
          </p>

          <h2 style={{ ...styles.sectionTitle, marginTop: '36px' }}>Mission</h2>

          <p style={styles.textBlock}>
            Provide distinctive and relevant education in chemical sciences at the undergraduate, postgraduate and research levels.
          </p>
          <p style={{ ...styles.textBlock, marginBottom: '0' }}>
            Produce skillful, inventive and confident scholars for careers in academia, government and industry.
          </p>

          <h2 style={styles.coreValuesTitle}>CORE VALUES</h2>

          <p style={styles.textBlock}>
            Vision and Mission of department of chemistry are reflected in a set of core values, which define the character of our department:
          </p>

          <table style={styles.coreValuesTable}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Core Value</th>
                <th style={styles.tableHeader}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}><strong>Integrity and Values</strong></td>
                <td style={styles.tableCell}>Striving to build an understanding of moral and ethical values among undergraduate and postgraduate students</td>
              </tr>
              <tr>
                <td style={styles.tableCell}><strong>Effective Learning/Teaching Strategies</strong></td>
                <td style={styles.tableCell}>A work and learning environment where faculty and students choose to work together in a cooperative manner</td>
              </tr>
              <tr>
                <td style={styles.tableCell}><strong>Creativity and Innovation</strong></td>
                <td style={styles.tableCell}>Creativity in generating new ideas in chemical sciences and their implementation</td>
              </tr>
              <tr>
                <td style={styles.tableCell}><strong>Independence of Thought and Academic Freedom</strong></td>
                <td style={styles.tableCell}>The faculty, staff and students to have freedom to work and express their thoughts to create an academic environment, which promotes intellectual and professional development</td>
              </tr>
              <tr>
                <td style={styles.tableCell}><strong>Accountability</strong></td>
                <td style={styles.tableCell}>Accountability for policies, procedures and actions undertaken by faculty, students and staff in the department</td>
              </tr>
              <tr>
                <td style={styles.tableCell}><strong>Service to society</strong></td>
                <td style={styles.tableCell}>To educate the society and to create awareness about health and environmental issues via academic conferences/seminars and workshops</td>
              </tr>
            </tbody>
          </table>

        </div>
      </main>

    </div>
  )
}

export default VisionMission