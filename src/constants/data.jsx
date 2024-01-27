const heroSection = {
  title: 'Revitalize Your Body and Mind',
  subtitle: 'Breathe, Move, Thrive',
};

const navlinks = [
  {
    link_title: 'Home',
    link_to: 'home'
  },
  {
    link_title: 'About',
    link_to: 'about'
  },
  {
    link_title: 'Gallery',
    link_to: 'gallery'
  },
  {
    link_title: 'Contact',
    link_to: 'contact'
  }
];

const contactUs = {
  title_cu: 'Contact Us',
  headline: 'Contact Us Headline',
  name_long: 'Peak Performance',
  name_short: 'Peak',
  addr: '123 Main Street',
  city: 'Gilbert',
  state_long: 'Arizona',
  state_short: 'AZ',
  postal_code: '85000',
  country: 'USA',
  phone_1: '801-111-2222',
  phone_2: '801-333-4444',
  email_1: 'peak-performance@gmail.com',
  email_2: '',
  title_wh: 'Working Hours',
  days_1: 'Monday-Friday:',
  hours_1: '08:00 am - 12:00 am',
  social_media: [
    {
      title: 'Facebook',
      //link: 'https://www.facebook.com/northbeachschutzhundclub/'
    },
    {
      title: 'Instagram',
      //link: 'https://www.instagram.com/northbeachschutzhundclub/'
    }
  ]
};

const servicesOffered = {
  headline: 'Services Offered',
  sub_headline: '',
  description: [
    `Welcome to ${contactUs.name_long}, where fitness transcends the ordinary, and your journey to peak wellness begins. At the heart of our holistic approach is our passionate owner and trainer, Faith Ekvall, who brings a wealth of expertise and dedication to every session. At Peak Performance, we don't just offer fitness classes; we curate transformative experiences tailored to your individual goals. From specialized strength training that empowers you to reach new heights to weight loss programs designed for sustainable and lifelong results, we are committed to guiding you on a path to physical and mental excellence.`,
  ],
  services: [
    {
      service: 'Strength Training',
      desc: 'Unleash your inner strength with our specialized training programs designed to build muscle, enhance endurance, and elevate your overall physical prowess.'
    },
    {
      service: 'Weight Loss Programs',
      desc: 'Embark on a sustainable journey towards a healthier weight, guided by personalized programs that prioritize long-term results and holistic well-being.'
    },
    {
      service: 'Firming and Toning',
      desc: 'Experience targeted workouts to sculpt and tone your body, promoting muscle definition and a more resilient physique.'
    },
    {
      service: 'Pilates',
      desc: 'Discover the transformative power of Pilates, a low-impact exercise method that focuses on core strength, flexibility, and improved posture.'
    },
    {
      service: 'Yoga-Trauma Specialization',
      desc: 'Find healing and renewal through our yoga-trauma specialization, providing a safe space for mindful movement and emotional well-being.'
    },
    {
      service: 'Tension Release Exercises',
      desc: 'Release physical and mental tension with specialized exercises designed to promote relaxation, reduce stress, and enhance overall balance.'
    },
    {
      service: 'Breathwork',
      desc: 'Harness the power of breath with our breathwork sessions, unlocking the potential for improved focus, stress relief, and heightened self-awareness.'
    },
    {
      service: 'Sound Therapy',
      desc: 'Indulge in the therapeutic benefits of sound, fostering relaxation and mental clarity through carefully curated sound therapy experiences.'
    },                    
  ],
  button_label: 'Gallery', 
}

const aboutUs = {
  title: 'About Us',
  infoObjs: [
    {
      topLine: 'Peak Performance Topline',
      headline: 'Peak Performance Headline',
      description: [
        `What sets ${contactUs.name_long} apart is our unique fusion of diverse modalities, including pilates, yoga-trauma specialization, tension release exercises, breathwork, and sound therapy. We understand that true wellness extends beyond the physical, and our personalized approach ensures that every aspect of your fitness journey aligns with your individual needs. Whether you're seeking firming and toning, a mindful escape through yoga, or trauma-informed healing, Peak Performance is your dedicated partner in achieving holistic well-being. Join us on this transformative adventure, where each session is an opportunity to unlock your full potential and experience the pinnacle of performance in every facet of your life.`,
      ],
      imgUrl: '',
      alt: 'alt-1',
      direction: 'fade-left',
      bg_color: 'bg-slate-100',
      reverse: 'false'
    },
  ]
};

const data = {
  heroSection,
  navlinks,
  servicesOffered,
  aboutUs,
  contactUs
};

export default data;