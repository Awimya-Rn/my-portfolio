export const siteConfig = {
  seo: {
    title: 'Mokhammad Ilham | Portfolio',
    description:
      'Mokhammad Ilham Putra Wijaya — Informatics Engineering Student & ML/AI Enthusiast',
    url: 'https://mokhlhm.my.id',
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
      role: 'AI Engineer / ML Enthusiast',
      location: 'Malang, Jawa Timur, ID',
      status: 'Available for opportunities',
      college: 'Malang State Polytechnic',
      gpa: '3.64 / 4.00',
      projects: '3',
    },
    profileImage: '/images/image.png',
    cvPath: 'CV/CV.pdf',
  },

  // ===== CHANGE THIS URL TO SWAP THE HERO BACKGROUND =====
  heroBackground:
    'https://preview.redd.it/id-say-wallpaper-worthy-i-love-this-game-2nd-time-playing-v0-ia06yhm2qx3e1.jpeg?width=1080&crop=smart&auto=webp&s=d37c134429d1b0d72dfdbfb509624941109c9eea',

  about: {
    bio: `I am a fifth-semester D4 Informatics Engineering student at State Polytechnic of Malang and graduate of Dicoding’s Asah and CodingCamp programs, specializing in Machine Learning and AI. 

Strong in analytical thinking and problem-solving, with a focus on building efficient, data-driven technological solutions.

Actively expanding expertise in:`,
    expertise: [
      {
        text: 'Data Analysis & Data Science.',
        color: 'blue',
      },
      {
        text: 'Machine Learning & AI Engineering.',
        color: 'mauve',
      },
      {
        text: 'Data Engineering & Back-End Systems.',
        color: 'green',
      },
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
        subtitle: 'Python • JavaScript',
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
      endDate: 'July 2026',
      duration: '6 months',
      badge: '🏅 Distinction Graduation',
      description:
        'National Certified Independent Study organized by Dicoding powered by DBS Foundation. I completed an intensive 6-month curriculum focused on the application of artificial intelligence (AI) and machine learning. During the program, I utilized Python to process and analyze datasets and built robust data pipelines. Furthermore, I applied AI and machine learning algorithms to solve challenges based on real-world industry case studies.',
      tags: [
        'AI Engineering',
        'Machine Learning',
        'Deep Learning',
        'Python',
        'Data Pipelines',
        'Real-World Industry Case Studies',
      ],
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
        'Certified Independent Study organized by Dicoding in association with Accenture. This 6-month intensive program focused on the application of artificial intelligence (AI) and machine learning. I utilized Python to process and prepare datasets, as well as to perform predictive modeling and analysis. Furthermore, using real-world industry case studies, I built, trained, and evaluated machine learning models.',
      tags: [
        'Machine Learning',
        'AI Engineering',
        'Python',
        'Data Processing',
        'Predictive Modeling',
        'Real-World Industry Case Studies',
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
  ],

  projects: [
    {
      title: 'Predictive Maintenance',
      description:
        'This is a capstone project from a bootcamp at Asah, led by Dicoding. The project involves developing a comprehensive solution designed to monitor, analyze, and predict equipment failures before they occur. The solution utilizes machine learning models trained on sensor data to identify patterns indicative of potential malfunctions, thereby enabling proactive maintenance scheduling.',
      image: 'https://i.ibb.co.com/rf7PQNMX/image.png',
      status: 'completed',
      tags: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'Machine Learning',
        'Data Analysis',
      ],
      liveUrl: '',
      color: 'blue',
    },
    {
      title: 'Magicaffeine',
      description:
        "You were a coffee-loving barista in your previous life, but now you've been thrown into a fantasy world. Determined to bring real coffee to this strange world, you decide to open your own coffee shop. The game was aimed at GameSeed 2025; mixes the real-life experience of being a barista with the nostalgic feel of early 2000s pixel games.",
      image:
        'https://img.itch.zone/aW1hZ2UvMzc2MDU1Ny8yMjQ4MTM4My5wbmc=/794x1000/7n7tW%2B.png',
      status: 'completed',
      tags: ['Unity', 'C#', 'Game Development'],
      liveUrl:
        'https://amamiyarn.itch.io/93-si-tanpa-cahaya-student-magicaffeine',
      color: 'mauve',
    },
    {
      title: 'Monitor Water Quality Detect Anomalies Earlier',
      description:
        'This is the final project for a bootcamp organized by Coding Camp, powered by the DBS Foundation. The platform monitors water quality in estuarine zones in real-time by transforming historical data into a dynamic stream of information. It is designed for the early detection of ecological crises and for testing anomaly detection models, all without the need for physical hardware.',
      image: 'https://i.ibb.co.com/Sw5q0Bh0/Screenshot-2026-05-31-212613.png',
      status: 'completed',
      tags: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'Machine Learning',
        'Data Analysis',
      ],
      liveUrl: 'https://wq-monitoring-fe.web.app',
      color: 'green',
    },
    {
      title: 'CORDS AI / Fish Measurement',
      description:
        "Development of a computer vision-based prototype for object detection and the exploration of fish length measurement using visual references. This project focuses on utilizing image processing technology to identify objects and explore the automated estimation of fish size. The development process is currently ongoing, encompassing the testing of various approaches, refinement of the prototype, and evaluation of results to enhance the system's accuracy and reliability.",
      image:
        'https://cdn-ilamall.nitrocdn.com/QOEsVmmUwSFekSYNyTHChjbypgSaeCqv/assets/images/optimized/rev-2d271a1/fishbio.com/wp-content/uploads/2023/07/8161866318_c761b7e151_c.jpg',
      status: 'ongoing',
      tags: ['Python', 'Data Engineering', 'Computer Vision'],
      liveUrl: '',
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
        {
          name: 'PHP',
          icon: 'https://cdn.simpleicons.org/php/777BB4',
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
        {
          name: 'Antigravity',
          icon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/png/google-antigravity.png',
        },
        {
          name: 'Vs Code',
          icon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/png/visual-studio-code.png',
        },
        {
          name: 'Google Colab',
          icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/google-colab.png',
        },
      ],
    },
    frameworks: {
      label: '# frameworks',
      items: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
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
      image: 'https://i.ibb.co.com/bgcKpDc1/Screenshot-2026-10-23-151442.png',
      url: 'https://media.licdn.com/dms/image/v2/D562DAQGAJMq0iJ7xNQ/profile-treasury-document-images_1280/B56Z8OB.X8HIAg-/1/1782646828263?e=1793836800&v=beta&t=mB4bCqoLr_nJEKiqFAB7Xoi74ubmZDPSIv5slH0lfGE',
    },
    {
      title: 'AI Engineering - Distinction',
      issuer: 'Coding Camp - DBS Foundation',
      image: 'https://i.ibb.co.com/JFnJfYrs/Code-Symbol-Lightbulb-Icon.png',
      url: 'https://media.licdn.com/dms/image/v2/D562DAQGwJI_laSCGIA/profile-treasury-document-images_1280/B56aGBsrAoH0Ag-/1/1793177335541?e=1793836800&v=beta&t=cE3onOJhyFJ2ZaHTWawW7upXgwLjX4GTq8WrFm1m1cs',
    },
    {
      title: 'Building Machine Learning Systems',
      issuer: 'Dicoding',
      image:
        'https://framerusercontent.com/images/ekmXxrpNGB1Iaxax4qJwCKIFi0.png',
      url: 'https://www.dicoding.com/certificates/EYX4KN166PDL',
    },
    {
      title: 'Building Advanced-Level Deep Learning Projects',
      issuer: 'Dicoding',
      image:
        'https://framerusercontent.com/images/yoWpUvZ8B1u7G1Kfzm8Br3hSCn0.png',
      url: 'https://www.dicoding.com/certificates/N9ZONY5DRXG5',
    },
    {
      title: 'Learning Generative AI Fundamentals',
      issuer: 'Dicoding',
      image:
        'https://framerusercontent.com/images/V8CunibUEjEWr29fX2wWRwzck.png',
      url: 'https://www.dicoding.com/certificates/6RPN7E5G4X2M',
    },
  ],

  socialLinks: {
    email: 'mailto:mokhamm20@gmail.com',
    github: 'https://github.com/Awimya-Rn',
    linkedin: 'https://linkedin.com/in/hamm-ez/',
    instagram: 'https://instagram.com/mokhlhm',
  },
}

export type SiteConfig = typeof siteConfig;
