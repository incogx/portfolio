import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontSize: 11.5,
    lineHeight: 1.55,
  },
  pageHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  pageLabel: {
    fontSize: 10,
    color: '#475569',
    letterSpacing: 0.8,
  },
  pageNumberTop: {
    fontSize: 10,
    color: '#64748b',
  },

  coverName: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 6,
    color: '#0f172a',
  },
  coverSubtitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#1d4ed8',
    marginBottom: 2,
  },
  university: {
    marginTop: 10,
    marginBottom: 14,
    fontSize: 11.5,
    color: '#334155',
  },

  contactCard: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 6,
    padding: 10,
    marginBottom: 14,
    backgroundColor: '#f8fafc',
  },
  contactItem: {
    fontSize: 11,
    color: '#1e293b',
    marginBottom: 3,
  },

  projectTitle: {
    fontSize: 24,
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: 1.3,
    marginBottom: 6,
  },
  titleDivider: {
    width: 180,
    height: 3,
    backgroundColor: '#2563eb',
    marginBottom: 14,
    borderRadius: 2,
  },

  sectionBlock: {
    marginBottom: 11,
    borderLeftWidth: 2,
    borderLeftColor: '#60a5fa',
    paddingLeft: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 800,
    marginBottom: 4,
    color: '#1e293b',
    letterSpacing: 0.5,
  },
  sectionBody: {
    fontSize: 11.5,
    color: '#334155',
  },

  bulletList: {
    marginTop: 1,
  },
  bulletItem: {
    fontSize: 11.5,
    color: '#334155',
    marginBottom: 3,
  },

  coverSection: {
    marginBottom: 12,
  },
  coverSectionTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: '#1e293b',
    marginBottom: 5,
    letterSpacing: 0.4,
  },
  footerPageNumber: {
    position: 'absolute',
    right: 40,
    bottom: 20,
    fontSize: 9.5,
    color: '#64748b',
  },
})

function SectionBlock({ title, text, bullets }) {
  return (
    <View style={styles.sectionBlock}>
      <Text style={styles.sectionTitle}>{title.toUpperCase()}</Text>
      {text ? <Text style={styles.sectionBody}>{text}</Text> : null}
      {bullets ? (
        <View style={styles.bulletList}>
          {bullets.map((item) => (
            <Text key={item} style={styles.bulletItem}>• {item}</Text>
          ))}
        </View>
      ) : null}
    </View>
  )
}

function ProjectPage({ number, title, sections }) {
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.pageHeaderRow}>
        <Text style={styles.pageLabel}>ENGINEERING PROJECT PORTFOLIO</Text>
        <Text style={styles.pageNumberTop}>Page {number} / 6</Text>
      </View>

      <Text style={styles.projectTitle}>{title}</Text>
      <View style={styles.titleDivider} />

      {sections.map((section) => (
        <SectionBlock
          key={section.title}
          title={section.title}
          text={section.text}
          bullets={section.bullets}
        />
      ))}

      <Text style={styles.footerPageNumber}>Page {number}</Text>
    </Page>
  )
}

const projectPages = [
  {
    number: 2,
    title: 'BioLoop – Circular Waste Intelligence System',
    sections: [
      {
        title: 'Problem',
        text: 'Organic waste management produces environmental damage and inefficiency.',
      },
      {
        title: 'Solution',
        text: 'Circular bio-economy system converting organic waste into useful biological resources using Black Soldier Fly larvae and mushroom cultivation.',
      },
      {
        title: 'Architecture',
        text: 'Organic Waste → BSF Larvae Processing → Mushroom Cultivation → Bioplastic Production → Circular Output',
      },
      {
        title: 'Technologies',
        bullets: ['Python', 'IoT Sensors', 'Environmental Monitoring', 'AI Optimization'],
      },
      {
        title: 'Impact',
        bullets: ['Supports sustainable resource cycles and waste reduction.'],
      },
    ],
  },
  {
    number: 3,
    title: 'Hair & Scalp Disease Detection AI',
    sections: [
      {
        title: 'Problem',
        text: 'Hair and scalp diseases require expert diagnosis and are difficult to detect early.',
      },
      {
        title: 'Solution',
        text: 'AI computer vision system that detects scalp diseases from images.',
      },
      {
        title: 'Architecture',
        text: 'Image Input → Segmentation Model → Classification Model → Disease Prediction',
      },
      {
        title: 'Technologies',
        bullets: ['Python', 'TensorFlow', 'TensorFlow Lite', 'Android App'],
      },
      {
        title: 'Features',
        bullets: ['Real-time diagnosis', 'Explainable AI visualization', 'Mobile deployment'],
      },
    ],
  },
  {
    number: 4,
    title: 'Secure QR + Biometric Attendance System',
    sections: [
      {
        title: 'Problem',
        text: 'Traditional attendance systems allow proxy attendance.',
      },
      {
        title: 'Solution',
        text: 'QR code scanning combined with biometric verification.',
      },
      {
        title: 'Architecture',
        text: 'Teacher generates QR → Student scans QR → Biometric authentication → Attendance recorded → Faculty approval',
      },
      {
        title: 'Technologies',
        bullets: ['React', 'Backend APIs', 'Biometric Verification', 'Database Systems'],
      },
      {
        title: 'Impact',
        bullets: ['Prevents proxy attendance with multi-factor verification.'],
      },
    ],
  },
  {
    number: 5,
    title: 'Gesture Controlled Robot Car',
    sections: [
      {
        title: 'Problem',
        text: 'Traditional robotic control requires manual controllers.',
      },
      {
        title: 'Solution',
        text: 'Robot vehicle controlled using hand gesture recognition.',
      },
      {
        title: 'Architecture',
        text: 'Hand Gesture → MPU6050 Sensor → Arduino Nano → Bluetooth Communication → Arduino UNO → Motor Driver',
      },
      {
        title: 'Technologies',
        bullets: ['Arduino', 'Embedded Systems', 'Sensors', 'Bluetooth Communication'],
      },
      {
        title: 'Applications',
        bullets: ['Assistive mobility', 'Educational robotics', 'Human-machine interaction'],
      },
    ],
  },
  {
    number: 6,
    title: 'Learning Management System',
    sections: [
      {
        title: 'Description',
        text: 'Full learning management system developed during internship at Tecknots.',
      },
      {
        title: 'Features',
        bullets: ['User authentication', 'Course management', 'Student dashboards', 'Analytics'],
      },
      {
        title: 'Technologies',
        bullets: ['React', 'FastAPI', 'REST APIs', 'Database systems'],
      },
      {
        title: 'Impact',
        bullets: ['Delivered as a practical production-oriented full-stack education platform.'],
      },
    ],
  },
]

export default function PortfolioPDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeaderRow}>
          <Text style={styles.pageLabel}>ENGINEERING PORTFOLIO</Text>
          <Text style={styles.pageNumberTop}>Page 1 / 6</Text>
        </View>

        <Text style={styles.coverName}>Abdul Kaif J</Text>
        <Text style={styles.coverSubtitle}>AI Systems Builder</Text>
        <Text style={styles.coverSubtitle}>AI & Robotics Student</Text>

        <Text style={styles.university}>Sathyabama University – CSE (AI & Robotics)</Text>

        <View style={styles.contactCard}>
          <Text style={styles.contactItem}>Email: abdulsist23@gmail.com</Text>
          <Text style={styles.contactItem}>GitHub: github.com/incogx</Text>
          <Text style={styles.contactItem}>LinkedIn: linkedin.com/in/abdul-kaif-j-770268288</Text>
        </View>

        <View style={styles.coverSection}>
          <Text style={styles.coverSectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={styles.sectionBody}>
            AI & Robotics student building intelligent systems using AI-assisted development,
            computer vision, robotics integration and full-stack technologies. Focused on system
            architecture, integration and real-world problem solving.
          </Text>
        </View>

        <View style={styles.coverSection}>
          <Text style={styles.coverSectionTitle}>CORE SKILLS</Text>
          <Text style={styles.bulletItem}>• AI / Machine Learning</Text>
          <Text style={styles.bulletItem}>• Computer Vision</Text>
          <Text style={styles.bulletItem}>• Robotics & Embedded Systems</Text>
          <Text style={styles.bulletItem}>• Full Stack Development</Text>
          <Text style={styles.bulletItem}>• IoT Systems</Text>
          <Text style={styles.bulletItem}>• Systems Integration</Text>
        </View>

        <Text style={styles.footerPageNumber}>Page 1</Text>
      </Page>

      {projectPages.map((project) => (
        <ProjectPage
          key={project.number}
          number={project.number}
          title={project.title}
          sections={project.sections}
        />
      ))}
    </Document>
  )
}
