export const siteConfig = {
  seo: {
    title: 'Mokhammad Ilham | Portfolio',
    description:
      'Mokhammad Ilham Putra Wijaya — Informatics Engineering Student & ML/AI Enthusiast',
    url: 'https://mokhlhm.vercel.app',
  },

  personal: {
    name: 'Mokhammad Ilham Putra Wijaya',
    alias: 'Rn@Awimya',
    aliasUser: 'Rn',
    aliasHost: 'Awimya',
    role: 'AI Engineer / ML Enthusiast',
    taglines: [
      'Informatics Engineering Student at Malang State Polytechnic',
      'Machine Learning & AI Enthusiast',
      'Distinction Graduation — AI Engineer Cohort at Coding Camp 2026',
      'Distinction Graduation — ML Cohort at Asah × Accenture 2025',
    ],
    neofetch: {
      os: 'Windows 11',
      shell: 'zsh 5.9',
      role: 'AI Engineer / ML Enthusiast',
      location: 'Malang, Jawa Timur, ID',
      status: 'Available for opportunities',
      college: 'Malang State Polytechnic',
      gpa: '3.64 / 4.00',
      projects: '4',
    },
    profileImage: '/images/image.png',
    cvPath: '/CV.pdf',
  },

  // ===== CHANGE THIS URL TO SWAP THE HERO BACKGROUND =====
  heroBackground: 'https://images6.alphacoders.com/933/thumb-1920-933824.png',

  about: {
    bio: `I am a fifth semester undergraduate student of the D4 Informatics
Engineering program at Malang State Polytechnic, driven by a strong
ambition to grow and excel in the field of technology.

Currently enrolled in Asah by Dicoding — focus: Machine Learning,
strengthening my analytical and problem-solving skills.

Actively expanding expertise in:`,
    expertise: [
      { text: 'Back-End Development (JavaScript & Python)', color: 'blue' },
      { text: 'Machine Learning & AI Systems', color: 'mauve' },
      { text: 'Data-driven problem solving', color: 'green' },
    ],
    bioClosing: `Passionate about building efficient, reliable systems and applying
logical, data-driven approaches to create impactful solutions.`,
    cards: [
      {
        label: 'education',
        title: 'D4 Informatics Engineering',
        subtitle: 'Malang State Polytechnic • Semester 5',
        color: 'blue',
        icon: 'GraduationCap',
      },
      {
        label: 'location',
        title: 'Malang, East Java',
        subtitle: 'Indonesia 🇮🇩',
        color: 'yellow',
        icon: 'MapPin',
      },
      {
        label: 'focus',
        title: 'Machine Learning & AI Engineering',
        subtitle: 'Back-End Dev • Python • JavaScript',
        color: 'mauve',
        icon: 'Bot',
      },
      {
        label: 'status',
        title: 'Open to opportunities',
        subtitle: 'Internship / Project Collaboration',
        color: 'green',
        icon: 'CircleCheck',
      },
    ],
  },

  experiences: [
    {
      title: 'AI Engineer',
      type: 'Cohort',
      organization: 'Coding Camp powered by DBS Foundation',
      location: '',
      startDate: 'February 2026',
      endDate: 'Present',
      duration: '4 months',
      badge: '🏅 Distinction Graduation',
      description:
        'National Certified Independent Study organized by Dicoding powered by DBS Foundation. Over five months, I studied about main concepts and applications of Artificial Engineering, data processing with Python, and the application of AI algorithms to technology-based industries.',
      tags: ['AI Engineering', 'Machine Learning', 'Deep Learning'],
      color: 'blue',
      icon: 'Bot',
    },
    {
      title: 'Machine Learning Cohort',
      type: 'Cohort',
      organization: 'Asah led by Dicoding × Accenture',
      location: '',
      startDate: 'August 2025',
      endDate: 'January 2026',
      duration: '6 months',
      badge: '🏅 Distinction Graduation',
      description:
        'Experience building unsupervised learning (Clustering) models to segment and discover hidden patterns in datasets. Successfully developed end-to-end Sentiment Analysis projects, applying Natural Language Processing (NLP) techniques to classify text data. Proficient in data preprocessing, feature engineering, and model evaluation using tools such as Python, Scikit-learn, and Pandas.',
      tags: [
        'Python',
        'Machine Learning',
        'Scikit-learn',
        'NLP',
        'Pandas',
        'TensorFlow',
      ],
      color: 'mauve',
      icon: 'Brain',
    },
    {
      title: 'Mentor',
      type: 'Mentor',
      organization: 'Workshop Riset Informatika',
      location: 'Malang, East Java',
      startDate: 'September 2025',
      endDate: 'June 2026',
      duration: '10 Months',
      badge: '',
      description:
        'Actively guided mentees in understanding informatics fundamentals. Provided Java and OOP concepts to prepare mentees for academic challenges. Shared practical tips and tricks to hone programming logic and problem-solving skills.',
      tags: ['Java', 'OOP', 'Mentoring', 'Back-End', 'PHP', 'Laravel'],
      color: 'green',
      icon: 'Users',
    },
    {
      title: 'Mentee',
      type: 'Mentee',
      organization: 'Workshop Riset Informatika',
      location: 'Malang, East Java',
      startDate: 'September 2024',
      endDate: 'June 2025',
      duration: '10 Months',
      badge: '',
      description:
        'Deepened understanding of Java and OOP concepts as a strong foundation for informatics studies. Learned fundamentals of back-end development using PHP for server logic and SQL for database management.',
      tags: ['Java', 'OOP', 'PHP', 'SQL', 'Back-End'],
      color: 'yellow',
      icon: 'UserCheck',
    },
  ],

  projects: [
    {
      title: 'Predictive Maintenance',
      description:
        'A comprehensive solution designed to monitor, analyze, and predict equipment failures before they occur. Uses machine learning models trained on sensor data to identify patterns that indicate potential breakdowns, enabling proactive maintenance scheduling.',
      image: 'https://i.ibb.co.com/rf7PQNMX/image.png',
      status: 'completed',
      tags: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'Machine Learning',
        'Data Analysis',
      ],
      liveUrl: 'https://github.com/mokhlhm',
      color: 'blue',
    },
    {
      title: 'Magicaffeine',
      description:
        'A 2D action-adventure game built with Unity and C#. Features procedurally generated dungeons, pixel art graphics, enemy AI with pathfinding, and an inventory system. Developed as a passion project to explore game development fundamentals.',
      image:
        'https://img.itch.zone/aW1hZ2UvMzc2MDU1Ny8yMjQ4MTM4My5wbmc=/794x1000/7n7tW%2B.png',
      status: 'completed',
      tags: ['Unity', 'C#', 'Game Development', '2D', 'Pixel Art'],
      liveUrl: 'https://github.com/mokhlhm',
      color: 'green',
    },
    {
      title: 'Monitor Water Quality Detect Anomalies Earlier',
      description:
        'A full-stack web application for managing academic records, course scheduling, and student data. Built with Laravel and MySQL, featuring role-based authentication, RESTful API, and a responsive admin dashboard.',
      image: 'https://i.ibb.co.com/Sw5q0Bh0/Screenshot-2026-05-31-212613.png',
      status: 'completed',
      tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST API'],
      liveUrl: 'https://wq-monitoring-fe.web.app',
      color: 'red',
    },
  ],

  skills: {
    languages: {
      label: '# languages',
      items: [
        {
          name: 'HTML5',
          icon: 'https://cdn.simpleicons.org/html5/E34F26',
        },
        {
          name: 'CSS3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
        },
        {
          name: 'TypeScript',
          icon: 'https://cdn.simpleicons.org/typescript/3178C6',
        },
        {
          name: 'Python',
          icon: 'https://cdn.simpleicons.org/python/3776AB',
        },
        { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
        { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
        {
          name: 'C#',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        },
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
      ],
    },
    mlDataScience: {
      label: '# ml-data-science',
      items: [
        {
          name: 'Jupyter',
          icon: 'https://cdn.simpleicons.org/jupyter/F37626',
        },
        {
          name: 'Grafana',
          icon: 'https://cdn.simpleicons.org/grafana/F46800',
        },
        {
          name: 'Scikit-learn',
          icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E',
        },
        {
          name: 'Pandas',
          icon: 'https://cdn.simpleicons.org/pandas/FFFFFF',
        },
        {
          name: 'TensorFlow',
          icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
        },
        { name: 'Keras', icon: 'https://cdn.simpleicons.org/keras/D00000' },
      ],
    },
    devTools: {
      label: '# dev-tools',
      items: [
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
        {
          name: 'GitHub',
          icon: 'https://cdn.simpleicons.org/github/FFFFFF',
        },
        {
          name: 'Docker',
          icon: 'https://cdn.simpleicons.org/docker/2496ED',
        },
        {
          name: 'Postman',
          icon: 'https://cdn.simpleicons.org/postman/FF6C37',
        },
      ],
    },
    frameworks: {
      label: '# frameworks',
      items: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.simpleicons.org/bootstrap/7952B3',
        },
        {
          name: 'Laravel',
          icon: 'https://cdn.simpleicons.org/laravel/FF2D20',
        },
        {
          name: 'Node.js',
          icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
        },
        {
          name: 'Next.js',
          icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
        },
        {
          name: 'FastAPI',
          icon: 'https://cdn.simpleicons.org/fastapi/009688',
        },
        { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask/FFFFFF' },
        { name: 'Unity', icon: 'https://cdn.simpleicons.org/unity/FFFFFF' },
      ],
    },
    databases: {
      label: '# databases',
      items: [
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
        {
          name: 'PostgreSQL',
          icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
        },
      ],
    },
  },

  certifications: [
    {
      title: 'Machine Learning - Distinction',
      issuer: 'Asah by Dicoding × Accenture',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/brain-icon-svg-download-png-15211047.png',
    },
    {
      title: 'AI Engineering - Distinction',
      issuer: 'Coding Camp - DBS Foundation',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/ai-brain-icon-svg-download-png-15211058.png',
    },
    {
      title: 'Learning Generative AI Fundamentals',
      issuer: 'Dicoding',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/video-rendering-engine-icon-svg-download-png-15158145.png',
    },
    {
      title: 'Building Advanced-Level Deep Learning Projects',
      issuer: 'Dicoding',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/ai-neural-network-icon-svg-download-png-15211049.png',
    },
    {
      title: 'Learning Generative AI Fundamentals',
      issuer: 'Dicoding',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/video-rendering-engine-icon-svg-download-png-15158145.png',
    },
    {
      title: 'Learning Generative AI Fundamentals',
      issuer: 'Dicoding',
      image:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/video-rendering-engine-icon-svg-download-png-15158145.png',
    },
  ],

  socialLinks: {
    email: 'mailto:mokhlhm@gmail.com',
    github: 'https://github.com/mokhlhm',
    linkedin: 'https://www.linkedin.com/in/hamm-ez/',
    instagram: 'https://instagram.com/mokhlhm',
  },
}

export type SiteConfig = typeof siteConfig;
