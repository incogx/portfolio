import { projects, skills } from './projects'

const skillSeed = [
  'Python',
  'React',
  'Tailwind CSS',
  'React Native',
  'Firebase',
  'Arduino IDE',
  'Sensor Integration',
  'Git',
  'GitHub',
  'VS Code',
  'Prompt Engineering',
]

const projectTitleOverrides = {
  bioloop: 'BioLoop – Smart Agro-Waste Circular System',
  'hair-detection': 'Hair & Scalp Disease Detection AI',
  'attendance-system': 'Biometric Attendance System',
  gyrodrive: 'Gesture Controlled Robot',
  'lms-platform': 'QR Attendance System',
}

const projectDescriptionOverrides = {
  bioloop: 'Circular system converting organic agro-waste into reusable bio-resources.',
  'hair-detection': 'Computer vision pipeline for fast scalp disease detection from images.',
  'attendance-system': 'Two-factor attendance with QR scanning and biometric verification.',
  gyrodrive: 'Hand-gesture robot navigation using sensors, Arduino, and Bluetooth.',
  'lms-platform': 'Smart attendance and dashboard workflow for academic tracking.',
}

const dynamicSkills = skills
  .flatMap((category) => category.items)
  .filter(Boolean)

const mergedSkills = Array.from(new Set([...skillSeed, ...dynamicSkills])).slice(0, 11)

const projectList = projects.slice(0, 5).map((project) => ({
  title: projectTitleOverrides[project.id] || project.title,
  description:
    projectDescriptionOverrides[project.id] ||
    project.shortDesc?.split('. ')[0]?.trim() + '.',
}))

export const resumeData = {
  header: {
    name: 'Abdul Kaif',
    title: 'Aspiring Computer Science Student',
    specialization: 'Specialization in Artificial Intelligence & Robotics',
  },

  personalDetails: {
    location: 'Chennai, India',
    phone: '9150463252',
    email: 'abdulsist23@gmail.com',
  },

  links: {
    linkedin: 'linkedin.com/in/abdul-kaif-j-770268288',
    github: 'github.com/incogx',
  },

  summary:
    'Aspiring computer science student specializing in Artificial Intelligence and Robotics, passionate about building intelligent systems and collaborating with teams to create scalable software solutions.',

  skills: mergedSkills,

  languages: ['English', 'Tamil', 'Urdu', 'Hindi'],

  hobbies: ['Photography', 'Cooking', 'Video Editing', 'Football'],

  education: [
    {
      degree: 'B.E. Computer Science and Engineering (AI & Robotics)',
      institute: 'Sathyabama Institute of Science and Technology',
      duration: '2023 – Present',
    },
    {
      degree: 'Higher Secondary (12th)',
      institute: 'Doveton Boys Higher Secondary School',
      duration: '2022 – 2023',
    },
    {
      degree: 'SSLC (10th)',
      institute: 'Doveton Boys Higher Secondary School',
      duration: '2010 – 2021',
    },
  ],

  courses: [
    {
      name: 'Robotics Immersion Camp',
      institute: 'USIM University, Malaysia',
      year: '2024',
    },
  ],

  projects: projectList,
}
