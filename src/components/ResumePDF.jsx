import React from 'react'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import { resumeData } from '../data/resumeData'

const styles = StyleSheet.create({
  page: {
    padding: 24,
    backgroundColor: '#ffffff',
    fontSize: 9.6,
    color: '#1e293b',
    lineHeight: 1.35,
  },

  header: {
    marginBottom: 12,
    borderBottomWidth: 1.2,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 800,
    color: '#0f172a',
    letterSpacing: 0.3,
  },
  title: {
    marginTop: 3,
    fontSize: 10.5,
    fontWeight: 700,
    color: '#1d4ed8',
  },
  subtitle: {
    fontSize: 10,
    color: '#334155',
    marginTop: 1,
  },

  columns: {
    flexDirection: 'row',
    gap: 12,
  },
  leftCol: {
    width: '30%',
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 5,
    padding: 9,
  },
  rightCol: {
    width: '70%',
    paddingRight: 2,
  },

  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontSize: 10.3,
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  divider: {
    height: 1,
    backgroundColor: '#dbeafe',
    marginBottom: 4,
  },

  textLine: {
    fontSize: 9.4,
    color: '#334155',
    marginBottom: 2.4,
  },
  bulletLine: {
    fontSize: 9.3,
    color: '#334155',
    marginBottom: 2,
  },

  eduBlock: {
    marginBottom: 6,
    paddingBottom: 5,
    borderBottomWidth: 0.8,
    borderBottomColor: '#e2e8f0',
  },
  eduDegree: {
    fontSize: 9.8,
    fontWeight: 700,
    color: '#0f172a',
  },
  eduMeta: {
    fontSize: 9.2,
    color: '#475569',
    marginTop: 1,
  },

  projectItem: {
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 9.8,
    fontWeight: 700,
    color: '#0f172a',
  },
  projectDesc: {
    fontSize: 9.2,
    color: '#475569',
    marginTop: 1,
  },
})

function ResumeSection({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.divider} />
      {children}
    </View>
  )
}

export default function ResumePDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.header.name}</Text>
          <Text style={styles.title}>{resumeData.header.title}</Text>
          <Text style={styles.subtitle}>{resumeData.header.specialization}</Text>
        </View>

        <View style={styles.columns}>
          <View style={styles.leftCol}>
            <ResumeSection title="Personal Details">
              <Text style={styles.textLine}>Location: {resumeData.personalDetails.location}</Text>
              <Text style={styles.textLine}>Phone: {resumeData.personalDetails.phone}</Text>
              <Text style={styles.textLine}>Email: {resumeData.personalDetails.email}</Text>
            </ResumeSection>

            <ResumeSection title="Links">
              <Text style={styles.textLine}>LinkedIn: {resumeData.links.linkedin}</Text>
              <Text style={styles.textLine}>GitHub: {resumeData.links.github}</Text>
            </ResumeSection>

            <ResumeSection title="Skills">
              {resumeData.skills.map((item) => (
                <Text key={item} style={styles.bulletLine}>• {item}</Text>
              ))}
            </ResumeSection>

            <ResumeSection title="Languages">
              {resumeData.languages.map((item) => (
                <Text key={item} style={styles.bulletLine}>• {item}</Text>
              ))}
            </ResumeSection>

            <ResumeSection title="Hobbies">
              {resumeData.hobbies.map((item) => (
                <Text key={item} style={styles.bulletLine}>• {item}</Text>
              ))}
            </ResumeSection>
          </View>

          <View style={styles.rightCol}>
            <ResumeSection title="Professional Summary">
              <Text style={styles.textLine}>{resumeData.summary}</Text>
            </ResumeSection>

            <ResumeSection title="Education">
              {resumeData.education.map((item) => (
                <View key={`${item.degree}-${item.duration}`} style={styles.eduBlock}>
                  <Text style={styles.eduDegree}>{item.degree}</Text>
                  <Text style={styles.eduMeta}>{item.institute}</Text>
                  <Text style={styles.eduMeta}>{item.duration}</Text>
                </View>
              ))}
            </ResumeSection>

            <ResumeSection title="Courses">
              {resumeData.courses.map((course) => (
                <View key={course.name} style={styles.eduBlock}>
                  <Text style={styles.eduDegree}>{course.name}</Text>
                  <Text style={styles.eduMeta}>{course.institute}</Text>
                  <Text style={styles.eduMeta}>{course.year}</Text>
                </View>
              ))}
            </ResumeSection>

            <ResumeSection title="Projects">
              {resumeData.projects.map((project) => (
                <View key={project.title} style={styles.projectItem}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.projectDesc}>{project.description}</Text>
                </View>
              ))}
            </ResumeSection>
          </View>
        </View>
      </Page>
    </Document>
  )
}
