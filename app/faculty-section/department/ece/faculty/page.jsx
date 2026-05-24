import Link from 'next/link'
import './ece_faculty.css'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/ece' },
  { label: 'Vision & Mission', href: '/faculty-section/department/ece/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/ece/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/ece/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/ece/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/ece/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/ece/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/ece/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        slNo: '1',
        name: 'Prof. (Mrs.) Rajeevan Chandel',
        designation: 'Professor',
        interests: 'Low Power VLSI Design, Modeling & Simulation',
        email: 'rchandel@nith.ac.in',
      },
    ],
  },
  {
    title: 'Associate Professor',
    members: [
      {
        slNo: '1',
        name: 'Kumar S Pandey (On-Lien)',
        designation: 'Associate Professor',
        interests: 'Embedded Systems',
        email: 'kumar@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Surender Soni',
        designation: 'Associate Professor',
        interests: 'Communication, Wireless Sensor Networks',
        email: 'soni@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Ashok kumar',
        designation: 'Associate Professor',
        interests: 'Wireless Sensor Networks, Wireless Communication and Communication Networks',
        email: 'ashok@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Dr.(Mrs.) Gargi Khanna',
        designation: 'Associate Professor',
        interests: 'Low Power VLSI Design, MEMS Design',
        email: 'gargi@nith.ac.in',
      },
      {
        slNo: '5',
        name: 'Dr. Ashwani Kumar Rana',
        designation: 'Associate Professor',
        interests: 'Low Power VLSI, Device Modeling',
        email: 'ashwani@nith.ac.in',
      },
      {
        slNo: '6',
        name: 'Dr. Krishan Kumar',
        designation: 'Associate Professor',
        interests: 'Wireless Communication and Networking [Keywords: Spectrum Sensing, Spectrum Allocation, Spectrum Sharing and Spectrum Handoff in Cognitive Radio Networks, Vehicular Networks, 5G and 6G Wireless Networks, Small Cells Networks, NOMA, IoT, Machine Learning: Deep and Reinforcement etc., Cross Layer Issue and LTE WiFi Coexistence]',
        email: 'krishan_rathod@nith.ac.in',
      },
      {
        slNo: '7',
        name: 'Dr. Manoranjan Rai Bharti',
        designation: 'Associate Professor',
        interests: 'Communication systems, Signal processing for communications, Wireless communications',
        email: 'manoranjan@nith.ac.in',
      },
      {
        slNo: '8',
        name: 'Dr. Philemon Daniel',
        designation: 'Associate Professor',
        interests: 'Deep Learning, Natural Language Processing, Embedded Systems, VLSI Front End Design and Test',
        email: 'phildani7@nith.ac.in',
      },
      {
        slNo: '9',
        name: 'Dr. Rohit Dhiman',
        designation: 'Associate Professor',
        interests: 'Electronics and Communication',
        email: 'rohitdhiman@nith.ac.in',
      },
      {
        slNo: '10',
        name: 'Dr. Mahesh Angira',
        designation: 'Associate Professor',
        interests: 'MEMS, RF-MEMS, RF-Microelectronics, IC technologies',
        email: 'mahesh_angira@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        slNo: '1',
        name: 'Dr. Saurabh Kumar',
        designation: 'Assistant Professor Grade-I',
        interests: 'Antenna Design and Analysis (Planar and Nonplanar Antennas, Microstrip antennas), RF and Microwave Components and Device Design and Analysis, Artificial Materials like Meta-materials, Microwave and THz sensors, Electromagnetic Theory, Nano-photonics and Plasmonics based component design and Analysis, Microwave and THz communication, Optical Communication, etc.',
        email: 'saurabh@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Chandra Shekhar Prasad',
        designation: 'Assistant Professor Grade-I',
        interests: 'Areas of interest include Leaky Wave antenna, Travelling wave antenna, Dielectric waveguide based antenna, THz antenna design using graphene, Reconfigurable Metamaterial/Metasurface for Compact Antenna design, MIMO and Cognitive Radio Antenna and multifunctional Filter, Frequency Reconfigurable Active Array Antenna with Beam Steering, Circularly Polarized Dielectric Resonator Antenna, Frequency Selective Surfaces (FSS), EBG and AMC structures',
        email: 'csprasad@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Abhijit Bhattacharyya',
        designation: 'Assistant Professor Grade-I',
        interests: 'Digital Signal Processing, Image Processing, Deep Learning and AI for Signal and Image Classification, Biomedical Signal Processing, Electroencephalogram (EEG) Signal Processing, Machine Learning, Multivariate Signal Processing, Time-Frequency Representations, Multivariate Signal Decomposition, Nonstationary Signal Analysis, Pattern Recognition.',
        email: 'abhijit@nith.ac.in',
      },
      {
        slNo: '4',
        name: 'Dr. Rakesh Sharma',
        designation: 'Assistant Professor Grade-I',
        interests: 'Signal Processing, Polarimetric SAR data processing, AI/Neural networks for PolSAR/SAR/Hyper-spectral satellite data processing, Biomedical Image processing.',
        email: 'rakesh.sharma@nith.ac.in',
      },
      {
        slNo: '5',
        name: 'Dr. Aman Kumar',
        designation: 'Assistant Professor Grade-I',
        interests: 'Design of FIR/IIR Filters and Cosine Modulated Filter banks, Processing of Digital Signal/Image, Biomedical Signal Analysis, Heart disease classification, ML/DNN algorithms for biomedical signal/image analysis',
        email: 'akumar@nith.ac.in',
      },
      {
        slNo: '6',
        name: 'Dr. Amit Bage',
        designation: 'Assistant Professor Grade-I',
        interests: 'RF and Microwave (Microstrip Filter, Waveguide Filter, Microstrip Antenna, Reconfigurable Microwave Devices, Metamaterial Sensor, Reconfigurable Waveguide Filter, SIW Filter, MIMO Antenna, Wearable Antenna)',
        email: 'abage@nith.ac.in',
      },
      {
        slNo: '7',
        name: 'Dr. Sandeep Kumar Singh',
        designation: 'Assistant Professor Grade-I',
        interests: 'Internet of Things, Advanced Communication System, Machine Learning, Cyber-Physical Security',
        email: 'sksingh@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      {
        slNo: '1',
        name: 'Gagnesh Kumar',
        designation: 'Assistant Professor Grade-II',
        interests: 'Nano and Microelectronic Devices, Analog VLSI, Microprocessors etc.',
        email: 'gagnesh@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Er. Vinod Kumar',
        designation: 'Assistant Professor Grade-II',
        interests: 'Semiconductor Device Modeling, VLSI Design',
        email: 'vinodsharma@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Sankalita Biswas',
        designation: 'Assistant Professor Grade-II',
        interests: 'Wireless Sensor Network, PHY, MAC and Cross layer energy modelling',
        email: 'sankalita@nith.ac.in',
      },
    ],
  },
]

function FacultyCard({ member, featured = false }) {
  return (
    <article className={featured ? 'faculty-card faculty-card-featured' : 'faculty-card'}>
      <div className="faculty-photo" aria-hidden="true">
        {featured && <div className="faculty-photo-crop" />}
      </div>

      <div className="faculty-hover-panel">
        <p>
          <strong>Email</strong>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>

        <p>
          <strong>Domains</strong>
          <span>{member.interests}</span>
        </p>

        <a href="#" className="faculty-read-more">
          Read more
        </a>
      </div>

      <div className="faculty-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </article>
  )
}

export default function EceFacultyPage() {
  return (
    <main className="ece-faculty-page">
      <div className="ece-faculty-shell">
        <aside className="ece-faculty-sidebar" aria-label="Department navigation">
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

        <section className="ece-faculty-content">
          {facultyGroups.map((group) => (
            <section className="faculty-group" key={group.title}>
              <h1>{group.title}</h1>

              <div className={group.featured ? 'faculty-featured-grid' : 'faculty-grid'}>
                {group.members.map((member) => (
                  <FacultyCard
                    featured={group.featured}
                    key={member.name}
                    member={member}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  )
}