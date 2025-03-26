import { title } from "process";

export const data = {
  about: {
    title: 'Who we are and what you get from our spaces',
    description: `Welcome to LEVEL learning center! We are a cutting-edge learning center founded to provide everyone with high-quality and affordable education, as well as opportunities to study abroad. Our team comprises individuals who have studied abroad and are eager to apply their invaluable experience and methodologies for your benefit. The concept of a hybrid learning center that combines learning with assistance in selecting and applying to universities is not new and is widely practiced globally. However, we are currently the first of its kind in Uzbekistan, with no equivalents. Furthermore, we make education accessible to all and offer unlimited opportunities by providing modern teaching methods and top-notch service. If you are ready to acquire new knowledge and study at prestigious universities worldwide, we are here to help you achieve your goals. `,
    topText: 'About Us',
    motto: 'Divided by language, united by thoughts',
    why: 'Why you should study at LEVEL learning center',
  },
  header: {
    header_logo1: 'Study',
    tabs: {
      courses: 'Courses',
      studyAbroad: 'Study Abroad',
      about: 'About Us',
      contact: 'Contact',
      careers: 'Careers',
      merch: 'Merch',
    },
    langs: {
      uzb: 'Uzbek',
      rus: 'Russian',
      eng: 'English',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    logoSideText: 'Study',
    accessibility: {
      title: 'Accessibility',
      enlargeText: 'Enlarge Text',
      reduceText: 'Reduce Text',
      grayscale: 'Grayscale',
      highContrast: 'High Contrast',
      negativeContrast: 'Negative Contrast',
      reset: 'Reset',
      themeToggle: 'Change theme',
    },
  },

  landingAdd: {
    mainTitle: ['Registration is', 'open now'],
    subTitle:
      'SIGN UP IN TIME TO THE GROUP AND GET THE OPPORTUNITY TO STUDY ABROAD',
    buttonText: 'Fill the form',
    topPic: ['NEW', 'STUDY', 'YEAR'],
    bottomPic: ['NEW', 'TARGETS'],
  },
  reasons: [
    {
      question:
        'For our students with excellent academic performance, we submit applications to foreign universities for free, both on a scholarship and paid basis',
      answer:
        'You no longer need to search for universities yourself. Our specialists will do it for you: they will select a university that suits your skills and achievements, and help prepare the entire package of documents for university application and visa processing. Please note that to apply to a university on a scholarship basis, your previous grades must be above average, and you need a language proficiency certificate at a certain level',
    },
    {
      question:
        'Free education or discounts on courses for students of our learning center',
      answer: `Free education is possible! Our learning center is the only one of its kind in Uzbekistan. Students of our learning center can study for free if they meet the following requirements:  a) Show excellent academic performance.        b) Achieve the highest scores of 99+ on exams and tests.We also offer discounts on education in our learning center (corporate, friend referral, and others)`,
    },
    {
      question:
        'All our teachers are certified and either students or graduates of world-renowned universities.',
      answer:
        'Members of our team hold official certificates that confirm their level of foreign language proficiency, issued by government institutions and consulates. The knowledge they gained abroad is applied in their teaching methods, which positively impacts the quality of education',
    },
    {
      question: 'Offering online classes',
      answer:
        'Online classes are more relevant than ever. Their advantage is the flexibility that adapts to your schedule. Teachers located abroad effectively use this method regardless of their geographic location, allowing them to convey the latest trends and up-to-date knowledge',
    },
  ],
  news: 'News',
  blogs: [
    {
      id: 1,
      img: '/coming-soon.jpg',
      title: 'Something you want to know about us',
      comingSoon: true,
    },
    {
      id: 2,
      img: '/coming-soon.jpg',
      title: 'Something you want to know about us',
      comingSoon: true,
    },
    {
      id: 3,
      img: '/coming-soon.jpg',
      title: 'Something you want to know about us',
      comingSoon: true,
    },
    {
      id: 4,
      img: '/coming-soon.jpg',
      title: 'Something you want to know about us ',
      comingSoon: true,
    },
  ],
  classPage: {
    homeContent: {
      title: 'Classes available in our centers',
      subtitle: 'Choose your favourite class and start learning with us!',
    },
    mainContent: {
      video: '',
      title:
        'Discover advanced learning opportunities at Level Learning Center!',
      description: [
        'At our learning center, you can enroll in a wide range of courses aimed at enhancing your skills and knowledge.',
        'Choose from various courses, including:',
        [
          'Advanced language training for professional and personal development',
          'IELTS, TOEFL and CEFR preparation courses',
          'TOPIK preparation courses',
          'Corporate language training programs',
        ],
        'Our curriculum also includes renowned language programs and specialized training in English, IELTS, TOEFL, CEFR, TOPIK,  and corporate courses.',
      ],
      button: 'All Courses',
    },

    classList: [
      {
        title: 'English Language',
        list: [
          {
            href: 'General English',
            name: 'General English',
            img: '/general-english.jpg',
            description:
              'This comprehensive course offers a robust foundation in English, covering key language skills such as reading, writing, listening, and speaking. The course emphasizes practical usage and communication, providing a solid basis for everyday and professional interactions.',
            video:
              'https://player.vimeo.com/video/753901222?autoplay=1&title=0&byline=0&portrait=0',
            forWhom: [
              'Individuals seeking to improve their overall English proficiency.',
              'Beginners looking to build confidence in using English in various contexts.',
              'Non-native speakers who need to enhance their communication skills for personal or professional purposes.',
            ],
            cost: '500.000 uzs',
            duration: '18 months',
            intensity: 3 / 5,
            purpose:
              'To develop a strong foundation in English, enabling learners to communicate effectively in both personal and professional settings.',
            effects: [
              'Improved fluency in English.',
              'Enhanced ability to understand and produce spoken and written English.',
              'Increased confidence in using English in daily interactions.',
            ],
            lengthOfClasses: '1 hour 30 minutes',
            frequency: '3 times a week',
            materials: 'included',
            group: 'up to 10 people',
          },
          {
            href: 'English Individual Classes',
            name: 'English Individual Classes',
            img: '/individual-courses.jpg',
            description:
              'These personalized lessons are tailored to address your specific needs and learning goals. Whether you need to focus on business English, academic writing, or conversational skills, these one-on-one sessions provide targeted instruction and feedback.',
            video:
              'https://player.vimeo.com/video/753901222?autoplay=1&title=0&byline=0&portrait=0',
            forWhom: [
              'Learners seeking customized instruction based on their unique needs and goals.',
              'Professionals needing to improve specific English skills relevant to their work.',
              'Students requiring focused support to excel in their studies or exams.',
            ],
            cost: '2.500.000 uzs',
            duration: '9 months',
            intensity: 5 / 5,
            purpose:
              'To offer individualized support and instruction, allowing learners to achieve their specific English language goals more efficiently.',
            effects: [
              'Personalized feedback and tailored lessons to meet specific needs.',
              'Rapid improvement in targeted areas of English.',
              'Increased proficiency and confidence in using English.',
            ],
            lengthOfClasses: '1 hour',
            frequency: '3 times a week (flexible)',
            materials: 'included',
          },
          {
            href: 'English for Kids',
            name: 'English for Kids',
            img: '/english-for-kids.jpg',
            description:
              'For very young children, English for Kids courses introduce the language in a fun and engaging manner. At this stage, the focus is on basic vocabulary and simple phrases through interactive play, songs, and activities. These early experiences with English are crucial as they lay the groundwork for future language learning and help develop essential communication skills.',
            video:
              'https://player.vimeo.com/video/753901222?autoplay=1&title=0&byline=0&portrait=0',
            forWhom: [
              'Children aged 7-12 years who are beginning to learn English.',
              'Parents seeking a high-quality English education for their children.',
              'Young learners who enjoy interactive and playful learning environments.',
            ],
            cost: '450.000 uzs',
            duration: 'flexible',
            intensity: 2 / 5,
            purpose:
              'Course serves multiple purposes, tailored to the developmental stages and needs of young learners. Understanding the goals of these courses helps in appreciating their value in a child’s education',
            effects: [
              'Enhanced Communication Skills',
              'Improved Academic Performance',
              'Increased Confidence',
              'Long-Term Benefits',
            ],
            lengthOfClasses: '1 hour',
            frequency: '2 times a week',
            materials: 'included',
            group: 'up to 6 people',
            ageLimit: '7 - 12',
          },
          {
            href: 'Corporate Courses',
            name: 'Corporate Courses',
            img: '/corporative-courses.jpg',
            description:
              'These specialized courses cater to the language needs of professionals in corporate environments. The curriculum focuses on business communication, including writing reports, conducting meetings, and engaging in professional discussions.',
            video:
              'https://player.vimeo.com/video/753901222?autoplay=1&title=0&byline=0&portrait=0',
            forWhom: [
              'Corporate teams and individuals looking to improve their business English.',
              'Professionals who need to enhance their communication skills for international business.',
              'Companies seeking to upskill their employees in effective business communication.',
            ],
            cost: '$ N/A',
            duration: 'Varies based on company needs and program structure',
            intensity: 4 / 5,
            purpose:
              'To enhance business communication skills, enabling employees to effectively interact in professional settings and contribute to the company’s success.',
            effects: [
              'Improved ability to communicate effectively in business contexts.',
              'Enhanced professional writing and speaking skills.',
              'Better preparation for global business interactions.',
            ],
            lengthOfClasses: '1 hour 30 minutes',
            frequency: '3 times a week',
            materials: 'included',
            group: 'up to 10 people',
            comingSoon: true,
          },
          {
            href: 'IELTS CEFR TOEFL',
            name: 'IELTS CEFR TOEFL',
            img: '/ielts-toefl-cefr.jpg',
            description:
              'Our comprehensive language preparation courses are designed to equip learners with the skills and strategies needed to excel in the IELTS, CEFR, and TOEFL exams. Each course focuses on developing all core language skills: reading, writing, listening, and speaking, with tailored content and strategies for each specific exam format.',
            video:
              'https://player.vimeo.com/video/753901222?autoplay=1&title=0&byline=0&portrait=0',
            forWhom: [
              'Courses are tailored for individuals who need to demonstrate their English proficiency for various purposes.',
              'Individuals needing a high score in IELTS, CEFR, or TOEFL for academic or professional purposes.',
              'These courses are beneficial for a range of learners, each with distinct goals and needs.',
              'For those who need English proficiency certificates to study abroad at many universities and for local institutions.',
            ],
            cost: '700.000 uzs',
            duration: '4 months',
            intensity: 4 / 5,
            purpose:
              'courses are designed to help learners prepare effectively for the test, which measures English proficiency across four key areas: Listening, Reading, Writing, and Speaking. The purpose of these courses extends beyond just test preparation to include several key objectives.',
            effects: [
              'Improved test scores in IELTS, TOEFL, and accurate CEFR level assessment.',
              'Enhanced proficiency in academic and general English.',
              'Increased confidence in language use and test-taking strategies across different formats.',
            ],
            lengthOfClasses: '2 hours',
            frequency: '3 times a week',
            materials: 'included',
            group: 'up to 10 people',
          },
          {
            href: 'Intensive Course',
            name: 'Intensive Course',
            img: '/intensive-course.jpeg',
            description:
              'Course is designed for learners who need to achieve rapid progress in their English skills. These courses offer an immersive and focused approach, which is particularly beneficial for specific groups of people.',
            video:
              'https://player.vimeo.com/video/753901222?autoplay=1&title=0&byline=0&portrait=0',
            forWhom: [
              'Individuals seeking rapid improvement in their English language skills.',
              'Students preparing for imminent exams or professional challenges requiring advanced language proficiency.',
              'Learners who prefer a condensed, intensive format for fast-tracking their language development.',
            ],
            cost: '1.000.000 uzs',
            duration: '12 months',
            intensity: 4 / 5,
            purpose:
              'Course is structured to deliver rapid and effective language learning through an immersive and focused approach. These courses are designed to meet specific needs and achieve particular goals',
            effects: [
              'Significant Improvement in Language Proficiency',
              'Increased Confidence and Communication Skills',
              'Efficient Learning Experience',
            ],
            lengthOfClasses: '1 hour 30 minutes',
            frequency: '6 times a week',
            materials: 'included',
            group: 'up to 10 people',
          },
        ],
      },
      
    ],

    classContainer: {
      cost: 'Cost',
      enrollBtn: 'Enroll in the course',
      forWhom: 'For whom',
      duration: 'Duration',
      intensity: 'Intensity',
      purpose: 'The purpose of the course',
      effects: 'Effects ',
      lengthOfClassesTitle: 'Length of classes',
      frequencyTitle: 'Frequency of classes',
      materialsTitle: 'Books and study materials',
      groupTitle: 'Group size',
      ageLimit: 'Age',
    },
  },
  schedule: {
    title: 'Places',
    map: 'Map',
    list: 'List',
    getDirections: 'Get directions with ',
    places: [
      {
        cityName: 'Chirchik',
        clubs: [
          {
            name: 'LEVEL learning center',
            address:
              'Sharof Rashidov street 4 house Chirchik 111700 Tashkent region Uzbekistan',
            latitude: 41.4725,
            longitude: 69.5906,
            image: '/logo.svg',
            benefits: [
              'English',
              'Chinese',
              'Software Development',
              'Hardware Development',
              'Frontend Development',
              ' Backend Development',
              'Mathematics',
            ],
          },
        ],
      },
    ],
  },
  yes2MoveCourses: [
    {
      video:
        'https://player.vimeo.com/video/399707077?autoplay=1&title=0&byline=0&portrait=0',
      img: '/offer5.webp',
      title: 'TURBO COMBUSTION',
      trainers: 'Maria and Kamil Mańko',
      duration: '30',
      desc: 'short',
    },
    {
      video:
        'https://player.vimeo.com/video/399716434?autoplay=1&title=0&byline=0&portrait=0',
      img: '/offer2.webp',
      title: 'GOOD MORNING YOGA',
      trainers: 'Adrian Matecki',
      duration: '15',
      desc: 'short',
    },
    {
      video:
        'https://player.vimeo.com/video/399692892?autoplay=1&title=0&byline=0&portrait=0',
      img: '/offer3.webp',
      title: 'STRETCHING FOR WARM-UP',
      trainers: 'Agnieszka Dolniak',
      duration: '15',
      desc: 'short',
    },
    {
      video:
        'https://player.vimeo.com/video/399716434?autoplay=1&title=0&byline=0&portrait=0',
      img: '/offer4.webp',
      title: 'CORE PILATES',
      trainers: 'atrick Tomaszewski',
      duration: '15',
      desc: 'short',
    },
  ],
  offers: {
    title: 'Offer',
    forYou: {
      title: 'for you',
      desc: 'Choose a course and start your adventure with us!',
      btn: 'Choose  course',
    },
    forCompanies: {
      title: 'for companies',
      desc: ['Check out our offers for', 'your teams and employees'],
      btn: 'Find out more',
      managerContact: {
        title: 'Directly contact with manager',
        description:
          'Please contact with manager for more information about our services and offers from 08:00 till 20:00.',
        tel: '+998 99 005 37 47',
        email: 'level.edu.uz.@gmail.com',
        link: 'Phone',
        phone: 'Phone me',
        mail: 'Email',
        closeBtn: 'Close',
      },
    },
    packages: {
      ielts: {
        title: 'IELTS',
        desc: 'Online training ',
      },
     
      kids: {
        title: 'Kids club ',
        desc: 'Online training ',
      },
    },
  },
  footer: {
    about: {
      title: "About Level Education Center",
      desc: "We are dedicated to providing high-quality educational services and helping students achieve their academic goals through personalized learning experiences.",
      contact: "Contact Us",
      whyChooseLevel: "Why Choosesdfsdf Level",
      expertTeachers: "Expert Teachers",
      modernCurriculum: "Modern Curriculum",
      smallClassSizes: "Small Class Sizes",
      internationalStandards: "International Standards",
      learnAboutUs: "Learn more about us",
    },
    information: {
      title: 'Information',
      links: [
        {
          title: 'Careers',
          href: '/careers',
        },
        {
          title: 'News',
          href: '/#news-section',
        },
        {
          title: 'Classes',
          href: '/classes',
        },
      ],
    },
    services: {
      title: 'Services',
      links: [
        {
          title: 'Offer for companies',
          href: '/#offersComp',
        },
        {
          title: 'For you',
          href: '/#forYou',
        },
        {
          title: 'Study Abroad',
          href: '/study-abroad',
        },
        {
          title: 'Find your center',
          href: '/contact#map',
        },
      ],
    },
    contact: {
      title: 'Get in touch',
      links: [
        {
          title: 'Contact',
          href: '/contact',
        },
      ],
    },
    copyright: {
      name: 'LEVEL learning center',
    },
  },
  contactForm: {
    title: 'Fill the form',
    description: 'Leave your details and we will contact you',
    email: 'E-mail',
    name: 'First name and last name',
    phone: 'Telephone',
    message: 'Message',
    emailPlaceholder: 'example@domain.com',
    namePlaceholder: 'Eshmatov Toshmat',
    phonePlaceholder: '+998 99 999 99 99',
    messagePlaceholder: 'Your message here...',
    button: 'Send a message',
    required: 'required fields',
  },
  toastMessages: {
    pending: 'Sending your message...',
    success:
      'Your message has been sent successfully, please wait for our response!',
    error:
      'Error submitting form better to send an email: level.edu.uz.@gmail.com',
  },
  hero: {
    title: 'Join Our Waitlist: Be Among the First to Explore the World!',
    description:
      'Our study abroad programs are designed to offer you a unique educational experience that combines academic excellence with cultural immersion. Prepare to discover new cultures, meet diverse communities, and expand your global perspective while pursuing your studies. This landing page is specially crafted to save you time and help you find the perfect international program before you embark on this exciting journey. Join our waitlist today and be the first to receive updates on our upcoming programs, scholarships, and exclusive opportunities!',
    button: 'Join the Waitlist',
    checkUs: 'Check us out on social media',
    thankYou: {
      title: 'Thank You for Joining!',
      description:
        'We appreciate your interest in our programs. You will be among the first to receive updates on our new study abroad opportunities.',
      stayTuned:
        'Stay tuned for more information. Follow us on our social media channels for the latest news and updates.',
    },
  },
  popularActivities: {
    title: 'Popular Classes',
    classes: [
      {
        topText: 'Enlish Language',
        title: 'General English',
        description:
          'This comprehensive course offers a robust foundation in English, covering key language skills such as reading, writing, listening, and speaking. The course emphasizes practical usage and communication, providing a solid basis for everyday and professional interactions.',
        icons: ['/popularicon1.svg', '/popularicon2.svg', '/popularicon3.svg'],
        href: '/classess/general%20english',
      },
      {
        topText: 'Certificate Preparation',
        title: 'IELTS CEFR TOEFL',
        description:
          'Our comprehensive language preparation courses are designed to equip learners with the skills and strategies needed to excel in the IELTS, CEFR, and TOEFL exams. Each course focuses on developing all core language skills: reading, writing, listening, and speaking, with tailored content and strategies for each specific exam format.',
        icons: ['/popularicon4.svg'],
        href: '/classess/ielts%20cefr%20toefl',
      },
      {
        topText: 'Fast paced learning',
        title: 'Intensive Course',
        description:
          'Course is designed for learners who need to achieve rapid progress in their English skills. These courses offer an immersive and focused approach, which is particularly beneficial for specific groups of people.',
        icons: ['/popularicon5.svg'],
        href: '/classess/intensive%20course',
      },
    ],
  },
  careers: {
    header: 'Careers',
    imgGallery: [
      '/gallery/image-1.png',
      '/gallery/image-2.png',
      '/gallery/image-3.png',
      '/gallery/image-4.png',
      '/gallery/image-5.png',
      '/gallery/image-6.png',
      '/gallery/image-7.png',
    ],
    navSection: {
      title: 'Contents',
      links: [
        {
          name: 'Open positions',
          href: '#open-positions',
        },
        {
          name: 'Benefits',
          href: '#benefits',
        },
        {
          name: 'Recruitment process',
          href: '#recruitment-process',
        },
        {
          name: 'Values',
          href: '#values',
        },
      ],
      description:
        'If you’re as obsessed with teaching as we are, you’ve come to the right place.',
    },
    openPositions: {
      title: 'Open Positions',
      positions: [
        {
          title: 'Instructor (English Language)',
          location: 'Chirchik / On-site',
        },
        {
          title: 'Front-desk receptionist',
          location: 'Chirchik / On-site',
        },
        
      ],
    },
    optionalRequision: {
      title: 'Got other ideas?',
      description: 'Send us your portfolio and CV to ',
      cultureBook: 'Grab our Culture Book and learn more!',
      button: 'Download',
      buttonHref: '/careers',
      bgImage: '/careers-img.webp',
    },
    benefits: {
      title: 'Benefits',
      cards: [
        {
          icon: '/flexible_hours.svg',
          image: '',
          title: 'Flexible working hours',
        },
        {
          icon: '/Career_development.svg',
          image: '',
          title: 'Career Development',
        },
        {
          icon: '/collaborative_environment.svg',
          image: '',
          title: 'Collaborative environment',
        },
        {
          icon: '/high-competetive-offers.svg',
          image: '',
          title: 'High competetive salary',
        },
      ],
    },
    recruitmentProcess: {
      title: 'Recruitment process',
      process: [
        {
          stepIndex: 1,
          stepTitle: "Review applications and CV's",
          stepDescription:
            'Send us your portfolio (please make it relevant) and a CV (please make it 1 page only). You can apply for one of the open positions or send us your application anyway.',
          stepVideo: '/video/rec-1.mp4',
        },
        {
          stepIndex: 2,
          stepTitle: 'Interview invitation',
          stepDescription:
            'If you get invited for an interview, just bring your best energy and ideas! You will be interviewed by the people you will be working with: the CEO and your future project manager.',
          stepVideo: '/video/rec-2.mp4',
        },
        {
          stepIndex: 3,
          stepTitle: 'The interview',
          stepDescription:
            'Send us your portfolio (please make it relevant) and a CV (please make it 1 page only). You can apply for one of the open positions or send us your application anyway.',
          stepVideo: '/video/rec-3.mp4',
        },
        {
          stepIndex: 4,
          stepTitle: 'The Offer',
          stepDescription:
            'After successfully completing the interview process, we carefully review your application and interview performance. If we believe you’re a great fit for our team, we’ll extend an offer to you. This offer will include all the details you need to make an informed decision about joining us. We look forward to welcoming passionate and talented individuals to our company. Please watch the video to learn more about the next steps.',
          stepVideo: '/video/rec-4.mp4',
        },
      ],
    },
    values: {
      title: 'We’re big on Values',
      description:
        'An aligned team is the cornerstone of amazing company culture. It helps us do the work well and keep the precious work-life balance.',
      valueList: [
        {
          id: 1,
          title: 'Entrepreneurship',
          description:
            'Be bold, be willing to take risks, have conviction in your ideas, use your strengths. Creativity is often a solitary pursuit. Being entrepreneurial about your work means owning your tasks and projects and driving them forward with or without oversight. It’s also about knowing when to call on the team for support, and when to take time to expand your skillset. If a new plug-in is calling out to you, there’s a new tech you want to learn, or a whole new direction you want to take, we’ve got you covered. Skills > roles.',
        },
        {
          id: 2,
          title: 'Respect',
          description:
            'Trust comes from relationships – starting with yourself and your work, all the way to the teammates you count on for support and the trust clients have in us when they put their precious ideas in our hands. Trust is built and cultivated; it’s part of the work we do at TBD. If work needs doing, we pick it up. And we thank each other for doing so.',
        },
        {
          id: 3,
          title: 'Trust',
          description:
            'Communication with empathy and emotional intelligence can be a tough exercise, but we believe it’s the only way to truly grow. Accommodating differences of opinion can be even harder, but we pride ourselves on how varied and multidisciplinary our team is. We have no time for “brilliant jerks” - we are a community and we are protective of it. We recognize each other’s value and celebrate each other’s wins.',
        },
        {
          id: 4,
          title: 'Efficiency',
          description:
            'We create in a world of budgets and deadlines. Understanding the limitations and picking the right tools to work with is as much a part of the art as creative flow. It’s also why we value the time spent pursuing new skills and tools, which in turn help us have more time for artistic flair. Developing a career is important to all of us. Grow along one of our predefined tracks or pick your own path.',
        },
        {
          id: 5,
          title: 'Integrity',
          description:
            'We create in a world of budgets and deadlines. Understanding the limitations and picking the right tools to work with is as much a part of the art as creative flow. It’s also why we value the time spent pursuing new skills and tools, which in turn help us have more time for artistic flair. Developing a career is important to all of us. Grow along one of our predefined tracks or pick your own path.',
        },
      ],
    },
  },
  merch: {
      "header": {
        "title": "Welcome to LEVEL Learning Center Merch Store!",
        "description": "Earn exclusive merchandise through your academic performance and achievements. Our merch isn't for sale - it's earned through your hard work and dedication!",
        "viewMerchButton": "View Merchandise"
      },
      "howItWorks": {
        "desc": "Our merit-based system rewards your academic achievements with points you can redeem for exclusive merchandise.",
        "details": [
          {
            "key": "earnPoints",
            "title": "Earn Points",
            "description": "Accumulate points through academic excellence, attendance, and participation in LEVEL programs."
          },
          {
            "key": "meritBasedSystem",
            "title": "Merit-Based System",
            "description": "Items can't be purchased with money - they must be earned through your performance and dedication."
          },
          {
            "key": "redeemRewards",
            "title": "Redeem Rewards",
            "description": "Exchange your hard-earned points for exclusive LEVEL merchandise that showcases your achievements."
          }
        ]
      },
      "pointCalculator": {
        "title": "Point Calculator",
        "description": "Learn how to earn points through your academic achievements and participation.",
        "howto": "How to Earn Points",
        "button": "Check Your Points",
        "rewards": [
          {
            "key": "highGrades",
            "title": "High Grades",
            "description": "For tests, exams, and quizzes:",
            "points": "90-100% → 10 points"
          },
          {
            "key": "perfectAttendance",
            "title": "Perfect Attendance",
            "description": "Attend all classes in a month:",
            "points": "100% → 5 points"
          },
          {
            "key": "participation",
            "title": "Participation in Center Events",
            "description": "Join and participate in LEVEL events:",
            "points": "Active participation → 5 points"
          },
          {
            "key": "promoting",
            "title": "Promoting the Educational Center",
            "description": "Reviews, reposts on social media, etc.:",
            "points": "Promotion → 5 points"
          }
        ]
      },
      "redeem": {
        "title": "Redeem Your Points",
        "description": "Check out the exclusive merchandise available for redemption with your earned points.",
        "button": "Redeem",
        "points": "points",
        "cap": "LEVEL Cap",
        "tshirt": "LEVEL Sweatshirt",
        "hoodie": "LEVEL Hoodie"
      },
      "howToRedeem": {
        "title": "How to Redeem",
        "desc": "Follow these simple steps to redeem your points for exclusive LEVEL merchandise.",
        "steps": [
          {
            "key": "step1",
            "title": "Check Your Points",
            "description": 'Click the "Check Your Points" button below the Point Calculator on this page, then enter your unique student ID to view your current point balance.'
          },
          {
            "key": "step2",
            "title": "Browse Merchandise",
            "description": "Explore the available merchandise and their point requirements."
          },
          {
            "key": "step3",
            "title": "Select Your Item",
            "description": "Choose the item you want to redeem and click the \"Redeem\" button."
          },
          {
            "key": "step4",
            "title": "Confirm Redemption",
            "description": "Review your selection and confirm the redemption."
          },
          {
            "key": "step5",
            "title": "Collect Your Merchandise",
            "description": "Pick up your merchandise from the LEVEL Learning Center during designated distribution times."
          }
        ]
      },
      "whyChooseMerch": {
        "title": "Why Choose LEVEL Merch?",
        "description": "Our merchandise represents more than just clothing - it's a symbol of your achievements.",
        "features": [
          {
            "key": "qualityMaterials",
            "title": "Quality Materials",
            "description": "All LEVEL merchandise is made with premium materials for comfort and durability."
          },
          {
            "key": "exclusiveDesigns",
            "title": "Exclusive Designs",
            "description": "Our designs are exclusive to LEVEL students and cannot be purchased elsewhere."
          },
          {
            "key": "symbolOfAchievement",
            "title": "Symbol of Achievement",
            "description": "Wearing LEVEL merchandise showcases your academic excellence and dedication to learning."
          },
          {
            "key": "community",
            "title": "Community Recognition",
            "description": "Be recognized as part of the LEVEL community of high-achieving students."
          }
        ]
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "desc": "Find answers to common questions about the LEVEL Learning Center Merch Store.",
        "questions": [
          {
            "question": "How can I earn points?",
            "answer": "Points are earned through academic performance, attendance, participation in LEVEL programs, and other achievements recognized by your instructors."
          },
          {
            "question": "Can I purchase merchandise with money?",
            "answer": "No, LEVEL merchandise is exclusively available through our points-based redemption system. It cannot be purchased with money."
          },
          {
            "question": "How often are new items added?",
            "answer": "We regularly update our merchandise collection with new items each semester. Keep an eye on announcements for new additions!"
          }
        ]
      },
      "modals": {
        "redemptionSuccess": {
          "title": "Redemption Successful!",
          "description": "You have successfully redeemed your points for the {item}.",
          "collectMessage": "You may collect your {item} at the reception.",
          "idMessage": "Please bring your student ID for verification.",
          "closeButton": "Close"
        },
        "studentId": {
          "title": "Enter Your Student ID",
          "description": "Please enter your student ID to check your points balance.",
          "label": "Student ID",
          "placeholder": "e.g., 2025EN0001",
          "cancelButton": "Cancel",
          "submitButton": "Check Points",
          "checking": "Checking..."
        },
        "pointsCheck": {
          "title": "Student Profile & Points",
          "availableTitle": "Available for Redemption",
          "notEnoughPoints": "You need at least {minPoints} points to redeem our lowest-priced item.",
          "closeButton": "Close"
        }
      },
      "errors": {
        "fetchFailed": "Failed to load student data. Please try again later.",
        "studentIdNotFound": "Student ID not found. Please try again or contact reception.",
        "serverError": "Error connecting to the server. Please try again later."
      }
  },
  contactPage: {
    workInfo: {
      customerServiceDepartment: 'Customer Service Department',
      manager: 'Manager',
      workdays: 'Every day',
      start: 'from 8:00',
      end: 'to 20:00',
    },
    readMore: {
      title: 'read more',
      processingPurposes: {
        title: 'Processing purposes: ',
        description:
          'We will process your personal data in order to provide you with the service of maintaining an account on our website; for tax and accounting purposes; to pursue, determine or defend against claims; to facilitate the use of our website; for direct marketing, including profiling, and to conduct analyses and statistics for marketing purposes and to survey satisfaction with the services offered.',
      },
      processingOfPersonalData: {
        title:
          'Your rights in connection with the processing of personal data: ',
        description:
          'The right to request access to personal data; the right to request the rectification of personal data; the right to request the deletion of personal data; the right to request the restriction of the processing of personal data, the right to object to the processing of personal data; the right to transfer personal data; the right to withdraw consent to the processing of personal data; and the right to lodge a complaint with the President of the Personal Data Protection Office.',
      },
    },
  },

  userPreferencesModule: {
    title: 'Choose your preferences',
    description: 'Please choose given options to see the page as you like',
    theme: {
      title: 'Choose theme mode',
      light: 'Light',
      dark: 'Dark',
    },
    language: {
      title: 'Choose your language',
      uzb: 'O‘zbek',
      rus: 'Русский',
      eng: 'English',
    },
    button: 'Save',
  },
  testMode: 'The website is operating in test mode.',
};
