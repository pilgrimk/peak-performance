import images from './images'

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
  title: 'Contact Us',
  headline: 'Call for a free consultation!',
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
      topLine: `${contactUs.name_long}`,
      headline: 'Peak Performance Headline',
      description: [
        `What sets ${contactUs.name_long} apart is our unique fusion of diverse modalities, including pilates, yoga-trauma specialization, tension release exercises, breathwork, and sound therapy. We understand that true wellness extends beyond the physical, and our personalized approach ensures that every aspect of your fitness journey aligns with your individual needs. Whether you're seeking firming and toning, a mindful escape through yoga, or trauma-informed healing, Peak Performance is your dedicated partner in achieving holistic well-being. Join us on this transformative adventure, where each session is an opportunity to unlock your full potential and experience the pinnacle of performance in every facet of your life.`,
      ],
      imgUrl: `${images.yoga_pose}`,
      alt: 'info-1',
      direction: 'fade-left',
      bg_color: 'bg-slate-100',
      reverse: 'false'
    },
    {
      topLine: 'Strength Training',
      headline: 'Elevate, Strengthen, Conquer',
      description: [
        `Embarking on a strength training journey at ${contactUs.name_long} is not just about lifting weights; it's a holistic transformation that extends to every facet of your well-being. Our specialized strength training programs are meticulously crafted to empower you both physically and mentally. By engaging in strength training, you not only build lean muscle mass, but you also enhance your endurance, boost metabolism, and fortify your bones and joints.`,
        `Beyond the physical benefits, strength training contributes to improved posture, increased energy levels, and a heightened sense of confidence. Whether you're a seasoned athlete or new to the fitness journey, our owner-trainer ensures that each session is personalized, fostering a supportive environment where you can challenge yourself, break limits, and uncover the powerful version of yourself waiting to emerge. Welcome to a strength training experience that transcends the ordinary, where every lift is a step towards a more robust and resilient you.`,
      ],
      imgUrl: `${images.strength_training}`,
      alt: 'strength-training',
      direction: 'fade-right',
      bg_color: 'bg-slate-100',
      reverse: 'true'
    },
    {
      topLine: 'Firming and Toning',
      headline: 'Firm, Tone, Flourish',
      description: [
        `Indulge in the transformative experience of firming and toning at ${contactUs.name_long}, where each session is a delicate balance of sculpting your body and enhancing your overall well-being. Beyond the aesthetic benefits of a more toned physique, our specialized training promotes increased muscle definition, improved flexibility, and enhanced posture. Engaging in firming and toning exercises not only refines your physical appearance but also boosts your confidence and instills a sense of vitality. Join us to redefine your strength and embrace the elegant journey towards a more toned and radiant you.`,
      ],
      imgUrl: `${images.firming_toning}`,
      alt: 'firming-toning',
      direction: 'fade-left',
      bg_color: 'bg-slate-100',
      reverse: 'false'
    },
    {
      topLine: 'Sound Therapy & Tension Release',
      headline: 'Restore Balance, Relax Unwind',
      description: [
        `Immerse yourself in the therapeutic embrace of sound therapy and tension release at ${contactUs.name_long}, where each session is a symphony of relaxation and rejuvenation. Sound therapy utilizes carefully curated sounds to create an environment of tranquility, alleviating stress and promoting mental clarity.`,
        `Paired with tension release exercises, this combination provides a holistic approach to releasing physical and mental stress, allowing your body and mind to harmonize. Engaging in these practices not only fosters a deep sense of relaxation but also contributes to improved sleep, heightened focus, and an overall sense of well-being. Welcome to a sanctuary where the soothing power of sound and tension release techniques liberate you from the stresses of daily life.`,
      ],
      imgUrl: `${images.sound_bowls}`,
      alt: 'sound-bowls',
      direction: 'fade-right',
      bg_color: 'bg-slate-100',
      reverse: 'true'
    },    
  ]
};

const galleryInfo = {
  title: 'Gallery',
  description: 'Explore our gallery for a down-to-earth perspective on fitness. No glam, just real people engaging in real workouts. These images provide an authentic look at the dedication and diversity of wellness journeys.',
  gallery_images: images.gallery_pics,
};

const contactUsPage = {
  title: 'Contact Us Today!',
  description: `Embark on your journey to a healthier future by taking the first step today. Call us now, and let's begin crafting a personalized fitness and wellness plan tailored to your unique goals. ${contactUs.name_long} is ready to guide you through every step, ensuring a supportive and empowering experience. Whether you're aiming for strength, weight loss, or overall well-being, we're here to make your vision a reality. Call today and start your transformative journey toward a healthier, more vibrant you. Your future self will thank you for the decision to prioritize your well-being today!`,
}

const data = {
  contactUs,
  heroSection,
  navlinks,
  servicesOffered,
  aboutUs,
  galleryInfo,
  contactUsPage,
};

export default data;