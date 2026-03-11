export const projects = [
  {
    id: 'bioloop',
    title: 'BioLoop',
    subtitle: 'Circular Waste Intelligence System',
    shortDesc:
      'A circular bioeconomy innovation converting agricultural and organic waste into high-value biological resources using IoT monitoring, BSFL larvae processing, and bioplastic production.',
    tags: ['IoT', 'Circular Economy', 'Sustainability', 'Python', 'Sensor Systems'],
    color: '#00C851',
    accentColor: '#00FF66',
    icon: '♻️',
    category: 'IoT / Sustainability',
    year: '2025',
    github: 'https://github.com/incogx',

    overview:
      'BioLoop is a closed-loop bioeconomy system designed to address the growing challenge of organic waste in agricultural communities. By integrating Black Soldier Fly Larvae (BSFL) composting, mushroom mycelium cultivation, and bioplastic synthesis, BioLoop creates a self-sustaining circular output that generates economic value while eliminating waste.',

    problem:
      'Millions of tons of agricultural and organic waste are generated globally each year. This waste, if left untreated, contributes to greenhouse gas emissions, soil degradation, and economic losses for farmers who lack the tools or knowledge to repurpose it.',

    solution:
      'BioLoop processes organic waste through a multi-stage biological pipeline: BSFL larvae consume raw waste and produce protein-rich frass; spent substrate is then used for mushroom cultivation; post-harvest mushroom substrate feeds bioplastic synthesis. IoT sensors monitor environmental conditions at every stage in real time.',

    architecture: [
      { step: '01', title: 'Organic Waste Input', desc: 'Agricultural waste collected from farms and sorted by type.' },
      { step: '02', title: 'BSFL Processing', desc: 'Black Soldier Fly Larvae consume organic waste, producing protein biomass and frass fertilizer.' },
      { step: '03', title: 'Mushroom Cultivation', desc: 'Spent BSFL substrate becomes growing medium for edible and medicinal mushrooms.' },
      { step: '04', title: 'Bioplastic Production', desc: 'Mycelium and organic polymers are processed into biodegradable plastic prototypes.' },
      { step: '05', title: 'Circular Output', desc: 'All outputs feed back as agricultural inputs — zero-waste closed loop.' },
    ],

    technologies: ['Python', 'Arduino', 'IoT Sensors (DHT22, pH, CO2)', 'MQTT Protocol', 'Raspberry Pi', 'React Dashboard', 'FastAPI'],

    impact: [
      'Reduces organic waste volume by up to 80%',
      'Creates new farmer income streams through protein biomass products',
      'Supports circular economy and SDG 12 (Responsible Consumption)',
      'Low-cost deployment for rural farming communities',
    ],

    hasBioLoopDiagram: true,
  },

  {
    id: 'hair-detection',
    title: 'Hair & Scalp AI',
    subtitle: 'Disease Detection System',
    shortDesc:
      'AI-powered mobile system detecting hair and scalp diseases using computer vision. Includes image segmentation, classification, explainable AI visualization, and TF-Lite mobile deployment.',
    tags: ['Computer Vision', 'TensorFlow', 'Android', 'TF-Lite', 'Python'],
    color: '#8b5cf6',
    accentColor: '#a78bfa',
    icon: '🧠',
    category: 'AI / Healthcare',
    year: '2025',
    github: 'https://github.com/incogx',

    overview:
      'A mobile-first AI diagnostic tool that empowers users and clinicians to identify common hair and scalp conditions using a smartphone camera. The system uses a two-stage deep learning pipeline: a segmentation model to isolate affected regions, followed by a classification model to identify the condition.',

    problem:
      'Dermatological conditions affecting the scalp often go undiagnosed in communities with limited access to dermatologists. Early detection of conditions like seborrheic dermatitis, alopecia areata, and fungal infections dramatically improves treatment outcomes.',

    solution:
      'The system captures an image via Android app, runs it through on-device TF-Lite segmentation and classification models, and returns a diagnosis with confidence score and an explainable AI heatmap overlay — all without requiring internet connectivity.',

    architecture: [
      { step: '01', title: 'Image Capture', desc: 'User captures scalp image through native Android camera API.' },
      { step: '02', title: 'Preprocessing', desc: 'Image normalization, resizing, and noise reduction pipeline.' },
      { step: '03', title: 'Segmentation Model', desc: 'U-Net based segmentation model isolates affected scalp regions.' },
      { step: '04', title: 'Classification Model', desc: 'MobileNetV3 classifier categorizes disease type with confidence score.' },
      { step: '05', title: 'XAI Visualization', desc: 'Grad-CAM heatmap overlaid on original image for explainability.' },
    ],

    technologies: ['Python', 'TensorFlow', 'TensorFlow Lite', 'OpenCV', 'Android (Java/Kotlin)', 'Grad-CAM', 'U-Net', 'MobileNetV3'],

    impact: [
      'Enables offline AI diagnostics for low-connectivity regions',
      'Reduces time to diagnosis from weeks to seconds',
      'Explainable AI builds clinician trust in AI recommendations',
      'Supports telemedicine and remote healthcare workflows',
    ],
  },

  {
    id: 'attendance-system',
    title: 'QR + Biometric Attendance',
    subtitle: 'Secure Anti-Proxy System',
    shortDesc:
      'Secure multi-layer attendance system combining real-time QR code generation with biometric fingerprint authentication, eliminating proxy attendance in academic and corporate environments.',
    tags: ['FastAPI', 'React', 'Biometrics', 'QR Code', 'Security'],
    color: '#f59e0b',
    accentColor: '#fbbf24',
    icon: '🔐',
    category: 'Full Stack / Security',
    year: '2024',
    github: 'https://github.com/incogx',

    overview:
      'A tamper-proof attendance infrastructure combining time-limited QR codes with biometric fingerprint verification. The two-factor verification model ensures that presence is confirmed by both physical location (QR scan) and biological identity (fingerprint), completely eliminating proxy attendance.',

    problem:
      'Proxy attendance fraud is endemic in academic and corporate settings, undermining the integrity of attendance records and wasting institutional resources. Existing systems rely on single-factor verification (RFID cards or manual signs) that are trivially circumvented.',

    solution:
      'Teachers generate one-time QR codes with configurable expiry times. Students scan the code within the valid window; the system then triggers biometric fingerprint verification on enrolled devices. The backend records verified attendance and routes it through a faculty-HOD approval workflow.',

    architecture: [
      { step: '01', title: 'Teacher Initiates Session', desc: 'Teacher generates time-limited QR code with class metadata via web dashboard.' },
      { step: '02', title: 'Student Scans QR', desc: 'Student scans QR with mobile app; location metadata optionally validated.' },
      { step: '03', title: 'Biometric Verification', desc: 'Fingerprint sensor triggers on enrolled device — identity confirmed.' },
      { step: '04', title: 'Attendance Recorded', desc: 'Verified record written to database with timestamp and device fingerprint.' },
      { step: '05', title: 'Approval Workflow', desc: 'Faculty reviews records; HOD signs off on consolidated reports.' },
    ],

    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'WebSockets', 'QR Generation Library', 'Biometric SDK', 'JWT Authentication'],

    impact: [
      'Reduces proxy attendance to near-zero',
      'Automates manual attendance workflows saving 30+ minutes per class',
      'Provides auditable attendance records for compliance',
      'Role-based access control for student, faculty, and HOD tiers',
    ],
  },

  {
    id: 'gyrodrive',
    title: 'GyroDrive',
    subtitle: 'Gesture Controlled Robot',
    shortDesc:
      'Robotic vehicle controlled through natural hand gestures using MPU6050 gyroscope sensors, Arduino Nano, and Bluetooth communication — enabling intuitive human-machine interaction.',
    tags: ['Arduino', 'Robotics', 'Bluetooth', 'Embedded C', 'MPU6050'],
    color: '#0066FF',
    accentColor: '#00FFFF',
    icon: '🤖',
    category: 'Robotics / Embedded',
    year: '2023',
    github: 'https://github.com/incogx',

    overview:
      'GyroDrive is a gesture-controlled robotic vehicle that translates natural wrist movements into precise motor commands. The controller glove reads 6-axis motion data from an MPU6050 sensor, encodes directional commands via Arduino Nano, and transmits them wirelessly over Bluetooth to the robot chassis.',

    problem:
      'Traditional remote controls for robots require physical buttons and joysticks — limiting accessibility for individuals with motor disabilities and creating steep learning curves. A gesture interface allows natural, intuitive control.',

    solution:
      'A wrist-mounted controller glove houses an MPU6050 IMU and HC-05 Bluetooth module. Orientation thresholds are mapped to direction commands (forward, reverse, left, right, stop). The receiver Arduino UNO decodes commands and drives DC motors through an L298N motor driver.',

    architecture: [
      { step: '01', title: 'Hand Gesture', desc: 'User tilts wrist in desired direction of movement.' },
      { step: '02', title: 'MPU6050 IMU', desc: 'Gyroscope and accelerometer capture 6-axis motion data at 100Hz.' },
      { step: '03', title: 'Arduino Nano (TX)', desc: 'Processes sensor data, applies threshold logic, encodes movement command.' },
      { step: '04', title: 'Bluetooth (HC-05)', desc: 'Wireless command transmission at 9600 baud over 10m range.' },
      { step: '05', title: 'Arduino UNO (RX)', desc: 'Receives command and drives motor outputs via L298N driver.' },
    ],

    technologies: ['Arduino Nano', 'Arduino UNO', 'MPU6050', 'HC-05 Bluetooth', 'L298N Motor Driver', 'Embedded C', 'I2C Protocol'],

    impact: [
      'Demonstrates accessible human-machine interface design',
      'Applicable to assistive mobility and rehabilitation robotics',
      'Educational robotics platform for gesture-based control research',
      'Foundation for gesture-controlled drone and industrial arm systems',
    ],
  },

  {
    id: 'lms-platform',
    title: 'LMS Platform',
    subtitle: 'Learning Management System',
    shortDesc:
      'Full-stack LMS built during a software engineering internship at Tecknots featuring user authentication, course management, student dashboards, and learning analytics.',
    tags: ['React', 'FastAPI', 'Python', 'REST API', 'Dashboard'],
    color: '#00FFFF',
    accentColor: '#7dd3fc',
    icon: '📚',
    category: 'Full Stack / EdTech',
    year: '2026',
    github: 'https://github.com/incogx',

    overview:
      'A comprehensive Learning Management System developed as the primary deliverable during a Software Engineering internship at Tecknots. The platform handles the full lifecycle of digital education — from course creation to student progress tracking — built on a React frontend and FastAPI backend.',

    problem:
      'Educational institutions and online course providers need scalable, feature-rich LMS platforms that are fast to deploy, easy to customize, and capable of supporting analytics-driven instruction.',

    solution:
      'The LMS was architected as a decoupled full-stack application: React handles the interactive SPA frontend with role-based views, while FastAPI serves a RESTful backend with JWT authentication, course CRUD operations, and progress tracking endpoints.',

    architecture: [
      { step: '01', title: 'Authentication Layer', desc: 'JWT-based login and role assignment for students, instructors, and admins.' },
      { step: '02', title: 'Course Management', desc: 'Instructor-facing tools for creating modules, uploading content, and setting assessments.' },
      { step: '03', title: 'Student Dashboard', desc: 'Personalized learning dashboard with enrollment status, progress bars, and deadlines.' },
      { step: '04', title: 'Assessment Engine', desc: 'Quiz and assignment submission with automated grading for objective questions.' },
      { step: '05', title: 'Analytics Module', desc: 'Engagement metrics, completion rates, and cohort-level analytics for instructors.' },
    ],

    technologies: ['React 18', 'FastAPI', 'Python', 'PostgreSQL', 'JWT', 'REST API', 'Tailwind CSS', 'Chart.js'],

    impact: [
      'Deployed as internal LMS for Tecknots client delivery',
      'Reduced course content management overhead by 40%',
      'Supports multi-tenant course delivery with role-based access',
      'Data-driven instruction through real-time analytics',
    ],
  },
]

export const skills = [
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    color: '#0066FF',
    items: ['Python', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'Pandas', 'NumPy'],
  },
  {
    category: 'Computer Vision',
    icon: '👁️',
    color: '#8b5cf6',
    items: ['Image Processing', 'Object Detection', 'Segmentation Models', 'Grad-CAM', 'TF-Lite'],
  },
  {
    category: 'Robotics & Embedded',
    icon: '⚙️',
    color: '#f59e0b',
    items: ['Arduino', 'Sensor Integration', 'Motor Control', 'I2C/SPI', 'Embedded C'],
  },
  {
    category: 'Full Stack Dev',
    icon: '💻',
    color: '#00FFFF',
    items: ['React', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Systems & Networking',
    icon: '🌐',
    color: '#00C851',
    items: ['Linux', 'Git', 'CCNA Networking', 'TCP/IP', 'Docker Basics'],
  },
]

export const timeline = [
  {
    year: '2023',
    title: 'GyroDrive – Gesture Controlled Robot',
    desc: 'Built a gesture-controlled robotic vehicle using MPU6050 IMU, Arduino Nano, and Bluetooth communication.',
    color: '#0066FF',
  },
  {
    year: '2024',
    title: 'Biometric Attendance System',
    desc: 'Engineered a secure two-factor attendance system combining real-time QR codes with biometric fingerprint verification.',
    color: '#f59e0b',
  },
  {
    year: '2025',
    title: 'Hair Disease Detection AI',
    desc: 'Developed a mobile AI diagnostics app using TensorFlow, MobileNetV3, and Grad-CAM explainability.',
    color: '#8b5cf6',
  },
  {
    year: '2026',
    title: 'Software Engineer Intern – Tecknots',
    desc: 'Delivered a full-stack LMS platform for production deployment; gained industry-grade React and FastAPI experience.',
    color: '#00FFFF',
  },
]
