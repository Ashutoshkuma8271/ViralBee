// Vyral Bee Content & Configuration Constants
// Real copy and configuration - edit placeholders before production deployment

export const BRAND = {
  name: "VYRAL BEE",
  shortName: "Viral Bee",
  tagline: "CREATE • CONNECT • CONVERT",
  positioning: "We Make Brands Visible.",
  subheadline:
    "Viral Bee is a creative digital marketing agency helping businesses build a strong online presence, attract the right audience, and generate measurable growth.",
  aboutHeading: "Who Is Viral Bee",
  aboutCopy:
    "We work as an extension of your team — combining strategy, design, and performance marketing under one roof, so you don't have to manage five different freelancers to get consistent results.",
  
  // Contact & Social placeholders (customizable by client)
  contact: {
    phone: "+1 (555) 897-2523", // Editable placeholder
    phoneDisplay: "+1 (555) VYRAL-BEE",
    email: "hello@vyralbee.com", // Editable placeholder
    website: "https://vyralbee.com",
    whatsapp: "https://wa.me/15558972523?text=Hello%20Vyral%20Bee%2C%20I%20would%20like%20to%20grow%20my%20brand%21",
    location: "Global Digital Agency & Creative Studio",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  },

  socials: {
    instagram: "https://instagram.com/vyralbee",
    facebook: "https://facebook.com/vyralbee",
    linkedin: "https://linkedin.com/company/vyralbee",
    whatsapp: "https://wa.me/15558972523",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Deep-Dive", href: "#deep-dive" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "6-Step", label: "Proven Process", detail: "End-to-end execution system" },
  { value: "8+", label: "Industries Served", detail: "Multi-sector expertise" },
  { value: "100%", label: "Full-Funnel Marketing", detail: "Strategy, Design & Performance" },
  { value: "1", label: "Unified Agency", detail: "Zero freelancer management hassle" },
];

export const SERVICES = [
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Strategy, content, and community management across platforms that turn casual scrollers into engaged brand advocates.",
    icon: "Share2",
    badge: "Growth Engine",
    color: "#F5B90F",
  },
  {
    id: "creative-design",
    title: "Creative & Graphic Design",
    description: "Distinctive brand identity, design templates, and promotional creatives that demand attention and set you apart.",
    icon: "Palette",
    badge: "Brand Identity",
    color: "#FFD966",
  },
  {
    id: "reels-video",
    title: "Reels & Video Content",
    description: "High-impact short-form video crafted purposefully for maximum organic reach, viewer retention, and engagement.",
    icon: "Video",
    badge: "Viral Reach",
    color: "#F5B90F",
  },
  {
    id: "website-dev",
    title: "Website Design & Development",
    description: "High-converting, mobile-responsive business and corporate websites built to turn visitors into paying clients.",
    icon: "Globe",
    badge: "Conversion Hub",
    color: "#FFD966",
  },
  {
    id: "meta-google-ads",
    title: "Meta & Google Ads",
    description: "Data-driven performance campaigns meticulously built to capture high-intent enquiries and maximize ROAS.",
    icon: "TrendingUp",
    badge: "High ROAS",
    color: "#F5B90F",
  },
  {
    id: "lead-gen",
    title: "Digital Marketing & Lead Gen",
    description: "Full-funnel digital marketing strategies explicitly tied to tangible business revenue and customer acquisition.",
    icon: "Target",
    badge: "Revenue Scale",
    color: "#FFD966",
  },
];

export const SOCIAL_MEDIA_DEEP_DIVE = {
  brandingCreative: [
    "Logo design & visual brand guides",
    "Comprehensive brand identity systems",
    "Custom social media templates (Canva/Figma)",
    "Brochures & sales deck collateral",
    "Professional company profiles",
    "High-converting promotional creatives",
    "Product packaging & label creatives",
  ],
  contentManagement: [
    "Omnichannel content strategy & positioning",
    "Monthly strategic content calendars",
    "Custom post & high-engagement carousel design",
    "High-impact Reels & Shorts production",
    "Data-backed captions & hashtag research",
    "Scheduled posting & prime-time distribution",
    "Active audience & community management",
    "Monthly analytics, KPI breakdown & reporting",
  ],
};

export const WEBSITES_AND_ADS_DEEP_DIVE = {
  websites: [
    "Modern business websites & corporate portals",
    "Dedicated high-converting landing pages",
    "100% mobile-responsive, ultra-fast layouts",
    "Instant WhatsApp click-to-chat integration",
    "Custom contact & lead capture forms",
    "Basic on-page SEO & speed optimization",
  ],
  paidAdvertising: {
    tagline: "Reach the right audience. Generate enquiries. Scale what works.",
    features: [
      "Meta Ads (Facebook & Instagram feed/stories/reels)",
      "Google Search, Display & Performance Max Ads",
      "Targeted lead generation & enquiry funnels",
      "Dynamic retargeting & audience lookalikes",
      "Continuous A/B testing & campaign optimization",
      "Transparent cost-per-lead tracking & weekly reports",
    ],
  },
};

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "We deep-dive into your business model, target audience, competitive landscape, and primary growth goals.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Strategize",
    description: "We engineer a bespoke roadmap combining tailored messaging, creative angles, platform channels, and KPIs.",
    icon: "Compass",
  },
  {
    step: "03",
    title: "Create",
    description: "Our studio designs thumb-stopping creatives, video scripts, ad copy, and high-performance landing pages.",
    icon: "Sparkles",
  },
  {
    step: "04",
    title: "Publish",
    description: "We deploy planned content calendars and launch precision-targeted ad campaigns during peak audience activity.",
    icon: "Send",
  },
  {
    step: "05",
    title: "Analyze",
    description: "We track live performance metrics, enquiry quality, user engagement, and conversion efficiency.",
    icon: "BarChart3",
  },
  {
    step: "06",
    title: "Optimize",
    description: "We iterate on winning creative variations, scale top ad sets, and continuously compound your return on investment.",
    icon: "Zap",
  },
];

export const INDUSTRIES = [
  { name: "Restaurants & Cafés", icon: "UtensilsCrossed", desc: "Mouth-watering visual content & footfall campaigns" },
  { name: "Retail Businesses", icon: "ShoppingBag", desc: "Product highlights, festive sales & local reach" },
  { name: "Manufacturers", icon: "Factory", desc: "B2B lead generation & industrial brand positioning" },
  { name: "Real Estate", icon: "Building2", desc: "Property showcase video tours & high-intent buyer leads" },
  { name: "Healthcare", icon: "HeartPulse", desc: "Patient trust-building & clinic appointment campaigns" },
  { name: "Education", icon: "GraduationCap", desc: "Admissions generation & student engagement programs" },
  { name: "Professional Services", icon: "Briefcase", desc: "Authority branding for legal, finance & consultants" },
  { name: "Startups & SMEs", icon: "Rocket", desc: "Rapid brand launch, testing & scalable customer growth" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Business-focused strategy",
    description: "We don't chase vanity metrics. Every post, ad, and design is engineered to drive tangible business inquiries and growth.",
    icon: "Briefcase",
  },
  {
    title: "Creative content that fits your brand",
    description: "No generic templates. Everything is custom-designed to match your distinct brand tone, colors, and personality.",
    icon: "Palette",
  },
  {
    title: "Consistent brand presence",
    description: "We maintain disciplined publishing schedules and cohesive styling across all social and digital customer touchpoints.",
    icon: "CalendarCheck",
  },
  {
    title: "Transparent communication",
    description: "Zero marketing jargon or hidden surprises. You get straightforward updates, clear milestones, and honest reporting.",
    icon: "MessageSquareText",
  },
  {
    title: "Performance tracking & reporting",
    description: "Monthly analytics reports with actionable insights showing reach, clicks, leads generated, and return on spend.",
    icon: "LineChart",
  },
  {
    title: "Customized packages",
    description: "Flexible service tiers tailored specifically to your stage of business, budget, and ambitious growth targets.",
    icon: "Layers",
  },
  {
    title: "One agency for social, web & ads",
    description: "Enjoy complete alignment. Say goodbye to miscommunication between disconnected designers, web developers, and media buyers.",
    icon: "ShieldCheck",
  },
  {
    title: "Dedicated account management",
    description: "A single dedicated point of contact who understands your business inside out and responds promptly to your needs.",
    icon: "UserCheck",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Artisan Café Brand Elevation",
    category: "Social",
    label: "Concept / Demo Project",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80",
    description: "Cohesive aesthetic grid, appetite-inducing photography styling, and local engagement campaign.",
    stats: "+320% Organic Reach",
  },
  {
    id: 2,
    title: "Viral Lifestyle Brand Reel Series",
    category: "Reels",
    label: "Concept / Demo Project",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    description: "High-paced trending audio formats with kinetic typography and seamless product transitions.",
    stats: "1.4M+ Video Views",
  },
  {
    id: 3,
    title: "High-Intent Meta Lead Generation",
    category: "Ads",
    label: "Concept / Demo Project",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description: "Hyper-targeted lead form funnels capturing verified contact inquiries with automated CRM handoff.",
    stats: "4.8x Return on Ad Spend",
  },
  {
    id: 4,
    title: "Modern Corporate Web Platform",
    category: "Websites",
    label: "Concept / Demo Project",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    description: "Ultra-fast Next.js architecture featuring interactive service configurator and instant WhatsApp booking.",
    stats: "68% Conversion Uplift",
  },
  {
    id: 5,
    title: "Luxury Real Estate Identity & Collateral",
    category: "Branding",
    label: "Concept / Demo Project",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description: "Comprehensive corporate identity, gold-embossed brochure decks, and prestige social assets.",
    stats: "Complete Brand Suite",
  },
  {
    id: 6,
    title: "Fitness & Wellness Apparel Campaign",
    category: "Social",
    label: "Concept / Demo Project",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    description: "Dynamic carousel designs educating followers on functional performance fabrics.",
    stats: "28k+ Saves & Shares",
  },
];

export const PRICING_PACKAGES = [
  {
    name: "Starter",
    tagline: "Essential social presence for emerging businesses",
    popular: false,
    badge: "Essential",
    features: [
      { name: "Social Media Management", included: true },
      { name: "Static Posts", included: true },
      { name: "Content Strategy", included: true },
      { name: "Reels Production", included: false },
      { name: "Ads Management", included: false },
      { name: "Website", included: "Add-on" },
      { name: "Monthly Reporting", included: true },
    ],
    highlight: "Great for building a credible, active baseline",
  },
  {
    name: "Growth",
    tagline: "Full-throttle social & video reach for scaling brands",
    popular: true,
    badge: "Most Popular",
    features: [
      { name: "Social Media Management", included: true },
      { name: "Static Posts", included: true },
      { name: "Content Strategy", included: true },
      { name: "Reels Production", included: true },
      { name: "Ads Management", included: true },
      { name: "Website", included: "Add-on" },
      { name: "Monthly Reporting", included: true },
    ],
    highlight: "Our highest-converting complete growth stack",
  },
  {
    name: "Premium",
    tagline: "Comprehensive 360° digital dominance & website suite",
    popular: false,
    badge: "Full Suite",
    features: [
      { name: "Social Media Management", included: true },
      { name: "Static Posts", included: true },
      { name: "Content Strategy", included: true },
      { name: "Reels Production", included: true },
      { name: "Ads Management", included: true },
      { name: "Website", included: true },
      { name: "Monthly Reporting", included: true },
    ],
    highlight: "Dedicated omnichannel strategy and bespoke website",
  },
];
