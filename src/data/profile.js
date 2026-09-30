// Everything the site says about you lives here, so copy edits never mean
// hunting through components.

export const profile = {
  name: "Jason Gundayao",
  initials: "JG",
  // Professional title — shown small next to the name in the hero, navbar
  // and footer. The sales message is `headline`.
  role: "Senior Full-Stack Product Engineer",
  headline: "I build scalable SaaS products, APIs & AI-powered solutions",
  tagline:
    "I help teams turn complex business requirements into production-ready web applications, backend systems, cloud infrastructure and practical AI features.",
  summary:
    "Fifteen years designing, building and delivering production software — from requirements and architecture through deployment and continuous improvement — for real estate, generative-AI marketing, e-commerce, luxury retail and rental platforms.",
  location: "Angeles City, Pampanga, Philippines — remote worldwide",
  email: "seniordev02002@gmail.com",
  phone: "+63 955 257 9193",
  availability: "Available for freelance & contract projects",
  // Optional photo behind the hero copy (put it in public/images). Leave
  // empty and the hero uses a dark gradient instead.
  heroImage: "",
  // The PDF lives in public/. `resumeFileName` is what the download saves as.
  resume: "/Jason-Gundayao-CV.pdf",
  resumeFileName: "Jason-Gundayao-CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/goldmicky1210", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jason-gundayao-ab00ab3a7/",
      icon: "linkedin",
    },
  ],
};

// Stats row under the hero CTAs, and the About intro grid. Only claims
// that are true on their face — no percentages unless there is a case
// study that shows exactly how the number was measured.
export const credentials = [
  { value: "15+", label: "Years engineering" },
  { value: "Full-stack", label: "End-to-end delivery" },
  { value: "AI & APIs", label: "Integration experience" },
  { value: "Remote", label: "International clients" },
];

export const highlights = [
  "API design and third-party integrations that hold up under real load",
  "Performance optimization and production troubleshooting across every layer",
  "React, Next.js and TypeScript front-ends the next engineer can maintain",
  "CI/CD, code review and technical leadership for distributed remote teams",
];

// Technical expertise, as four capabilities rather than a wall of logos.
// `tags` are the handful of technologies a client will ask about; a tag
// with a brand mark in techIcons gets its logo, the rest render as text.
// `icon` keys map to capabilityIcons in Skills.jsx.
export const capabilities = [
  {
    icon: "fullstack",
    title: "Full-Stack Development",
    description:
      "Build production web applications from responsive interfaces through backend services and business logic.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Shopify",
      "WordPress",
    ],
  },
  {
    icon: "backend",
    title: "Backend & API Engineering",
    description:
      "Design scalable services, APIs and integrations with clear data flows, validation and maintainable architecture.",
    tags: ["Node.js", "NestJS", "Python", "Django", "PHP", "REST APIs", "Microservices"],
  },
  {
    icon: "data",
    title: "Data & Cloud",
    description:
      "Work with relational and document databases, cloud infrastructure and deployment pipelines for reliable production systems.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "AWS", "Docker", "CI/CD", "Linux"],
  },
  {
    icon: "leadership",
    title: "Engineering Leadership",
    description:
      "Lead technical decisions, improve performance, review code and help engineering teams deliver maintainable software.",
    tags: [
      "Architecture",
      "Performance",
      "Testing",
      "Agile",
      "Mentoring",
    ],
  },
];

// What clients can actually hire you for — three, so the offer is clear.
// `icon` keys map to serviceIcons in About.jsx.
export const services = [
  {
    icon: "rocket",
    title: "Full-stack SaaS development",
    description:
      "React / Next.js applications backed by scalable Node.js or Python services and relational databases.",
  },
  {
    icon: "storage",
    title: "Backend & API engineering",
    description:
      "REST APIs, microservices, third-party integrations, data workflows and performance optimization.",
  },
  {
    icon: "psychology",
    title: "AI-powered product features",
    description:
      "Practical AI capabilities integrated into existing web applications and business workflows.",
  },
];

// One sentence under the "Work that shipped" heading.
export const projectsSummary =
  "Production web platforms I've contributed to as a Senior Software Engineer — spanning real estate, generative-AI marketing, e-commerce, luxury retail and rental marketplaces, across client-facing and backend layers.";

// Each project is a case study: overview → what I implemented → deployment
// → challenges → outcome. The card shows the overview; the rest opens under
// "Read case study". Keep numbers out until a case study can show exactly
// how they were measured.
//
// `image` is a homepage screenshot in public/images/projects. Leave it empty
// and the card falls back to a branded placeholder — see README for how to
// capture new ones. `url` is optional: without one the title is not a link.
// `challenges` items take an optional `title`.
export const projects = [
  {
    title: "Trulia",
    client: "Sayeef Digital Agency",
    context: "Real estate marketplace · Maintenance",
    role: "Senior Software Engineer",
    url: "https://www.trulia.com/",
    image: "",
    stack: ["React", "TypeScript", "PHP", "WordPress"],
    overview:
      "An online real estate platform connecting people with homes for sale and rental listings. Users discover properties, review detailed listing information, explore location context and use tools that support home-buying and renting decisions.",
    built: [
      "Built and shipped React and TypeScript components for property search, listing detail views and location-based browsing. Implemented responsive layouts across desktop and mobile, and optimised frontend performance for image-heavy listing pages.",
      "Implemented server-side features in PHP and WordPress for property data delivery, content structures and listing workflows, using structured data and validation to keep the frontend and backend consistent.",
    ],
    deployment:
      "Deployed application updates to production through the existing CI/CD pipelines for safe releases, and supported production stability through monitoring, log analysis and hands-on debugging.",
    challenges: [
      {
        text: "Media-heavy, high-traffic listing pages needed to load fast. I improved data hydration, supported lazy-loading patterns and made APIs return only the data needed for the initial render, reducing time-to-first-load.",
      },
    ],
    outcome:
      "Reliable high-traffic property discovery, with non-technical teams able to update listings and content without developer help. Lead capture and property inquiry flows became more stable and predictable.",
  },
  {
    title: "Averi AI",
    client: "Sayeef Digital Agency",
    context: "Generative-AI marketing · Maintenance",
    role: "Senior Software Engineer",
    url: "https://www.averi.ai/",
    image: "/images/projects/averi.jpg",
    stack: ["React", "TypeScript", "Python", "Docker"],
    overview:
      "An end-to-end generative-AI copilot for modern marketing teams — one environment for ideation, content creation, refinement and optimisation across channels, with output kept aligned to brand context.",
    built: [
      "Built React and TypeScript interfaces for AI-assisted content creation, campaign workflows and brand-aware copy generation, with flexible UI patterns for evolving workflows and optimised rendering for reviewing AI-generated content.",
      "Contributed to Python services for AI-powered content generation, metadata handling and workflow automation, and implemented the API integrations connecting the frontend to AI capabilities and business logic.",
    ],
    deployment:
      "Deployed backend services with Docker for consistency across environments, structured for scalability, observability and future AI expansion.",
    challenges: [
      {
        title: "AI output consistency",
        text: "Model responses varied in structure and tone. I contributed backend normalisation rules and validation layers so output was consistent and on-brand before it reached the frontend.",
      },
      {
        title: "AI-readiness without overengineering",
        text: "Helped design extensible schemas and async processing hooks so AI support could grow without locking into premature architecture or heavy early dependencies.",
      },
    ],
    outcome:
      "A production-ready experience for brand-aware content workflows, campaign iteration and AI-assisted marketing, where new AI features can be added without refactoring core systems.",
  },
  {
    title: "Furniture.com",
    client: "ScienceSoft",
    context: "E-commerce · Maintenance",
    role: "Senior Software Engineer",
    url: "https://www.furniture.com/",
    image: "/images/projects/furniture.jpg",
    stack: ["Next.js", "TypeScript", "Node.js", "NestJS", "AWS", "Docker"],
    overview:
      "A U.S. online furniture retailer helping consumers browse, compare and purchase home furnishings through a digital-first e-commerce experience.",
    built: [
      "Built Next.js and TypeScript features for product discovery, browsing and comparison — responsive, data-driven interfaces connected to backend services through authentication, routing and reusable API contracts.",
      "Implemented Node.js and NestJS services for product catalogues, user management and order workflows, optimising database queries, improving caching and building scalable APIs for e-commerce operations.",
    ],
    deployment:
      "Deployed to AWS alongside the team, integrating frontend and backend services in production, with Docker and CI/CD pipelines for consistent builds, automated testing and safe releases.",
    challenges: [
      {
        text: "Product discovery had to stay fast under high traffic, especially during promotions. I optimised API endpoints and database queries, added caching and improved load balancing to cut latency at peak times.",
      },
    ],
    outcome:
      "Faster page loads and less downtime during high-traffic events, freeing the team to expand features and scale the platform without worrying about stability.",
  },
  {
    title: "Fenton",
    client: "ScienceSoft",
    context: "Luxury jewellery e-commerce · Ground-up build",
    role: "Senior Software Engineer",
    url: "https://fentonand.co/",
    image: "",
    stack: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    overview:
      "A fine-jewellery e-commerce site presenting premium collections, where customers browse jewellery and engagement rings, review product details, customise selections and check out securely.",
    built: [
      "Built the platform from the ground up on Shopify and Liquid: collection and product browsing, navigation by style, gemstone and collection, detailed product pages, customisation flows and secure checkout — plus educational content, appointment booking and customer-support touchpoints.",
      "Used HTML, CSS and JavaScript to create a premium, conversion-focused journey through discovery, selection, customisation and checkout.",
    ],
    deployment:
      "Deployed to production and maintained the Shopify environment, keeping performance smooth and checkout flows reliable.",
    challenges: [
      {
        title: "Premium presentation with performance",
        text: "High-resolution jewellery imagery had to load quickly without losing quality. I implemented optimised image handling and caching to keep interactions smooth.",
      },
      {
        title: "Customisation complexity",
        text: "Customisation had to handle many combinations of styles, gemstones and settings. I built flexible UI patterns that support these variations without breaking checkout.",
      },
    ],
    outcome:
      "A premium, conversion-focused customer journey with smooth browsing, reliable customisation and secure checkout, supporting the brand's luxury positioning without sacrificing performance.",
  },
  {
    title: "Rentberry",
    client: "ScienceSoft",
    context: "Rental marketplace · Maintenance",
    role: "Senior Software Engineer",
    url: "https://rentberry.com/",
    image: "",
    stack: ["React", "TypeScript", "Python", "Django", "AWS", "Docker"],
    overview:
      "An end-to-end digital home-rental platform for tenants, landlords and property managers, bringing discovery, applications, negotiation, documentation and communication into one online workflow.",
    built: [
      "Built React and TypeScript features for rental search and filtering, listing views, tenant applications and application tracking, with role-based routing, tenant-aware UI and careful loading and error states.",
      "Implemented Python and Django services for listings, application workflows, document management and in-platform messaging — business logic, validation and state transitions across controllers, service classes and models.",
    ],
    deployment:
      "Deployed to AWS alongside the team, with Docker and CI/CD pipelines for consistent builds and safe releases, and supported production stability through monitoring, logging and debugging.",
    challenges: [
      {
        text: "Complex rental filter combinations caused slow queries and unstable API performance. I refactored Django query logic, normalised filter inputs and introduced cursor-based pagination and indexing, stabilising response times on data-heavy endpoints.",
      },
    ],
    outcome:
      "Stable, responsive search and application workflows under real-world load, with duplicate submissions and inconsistent state eliminated — so the team could focus on features instead of production fixes.",
  },
];

// Straight from the CV. `location` shows next to the company.
export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Sayeef Digital Agency UK",
    location: "United Kingdom · Remote",
    period: "Aug 2023 — Present",
    description:
      "Design and deliver production-grade web applications with React, Next.js, Node.js and TypeScript — including client platforms Trulia and Averi AI — owning architecture decisions, features and improvements across the application lifecycle. Architect backend services and REST APIs on Node.js and PostgreSQL, build cloud infrastructure with AWS, Docker and CI/CD, and take features from requirements through implementation, testing, deployment and production improvements alongside clients, designers and engineers.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Senior Software Engineer",
    company: "ScienceSoft",
    location: "United States · Remote",
    period: "May 2020 — Jul 2023",
    description:
      "Developed enterprise applications with Node.js, React, Python and modern web technologies — including Furniture.com, Rentberry and a ground-up Shopify build for Fenton. Designed scalable backend services with REST APIs, MongoDB, PostgreSQL and microservices, integrated third-party platforms and external APIs, and contributed to architecture decisions, code reviews and technical improvements with product teams in Agile environments.",
    tags: ["React", "Node.js", "NestJS", "Python", "Django", "Microservices"],
  },
  {
    role: "Technical Lead",
    company: "Digital Thing",
    location: "Australia · Remote",
    period: "Jul 2017 — Apr 2020",
    description:
      "Led development of web products, combining technical architecture with business requirements. Designed cloud-based solutions on AWS, built responsive frontends in React and JavaScript, developed backend services and APIs for business workflows, and guided engineering decisions with stakeholders.",
    tags: ["React", "JavaScript", "AWS", "APIs", "Leadership"],
  },
  {
    role: "Full Stack Engineer",
    company: "Thoughtworks",
    location: "Singapore · Onsite",
    period: "Mar 2013 — Jun 2017",
    description:
      "Built full-stack applications with JavaScript, Python, React, Node.js and REST APIs, designed database solutions in PostgreSQL and MySQL, supported modernisation of legacy systems and delivered improvements in Agile Scrum teams.",
    tags: ["React", "Node.js", "Python", "PostgreSQL", "MySQL"],
  },
  {
    role: "Software Engineer Intern",
    company: "IBM",
    location: "United States · Remote",
    period: "Jul 2011 — Feb 2013",
    description:
      "Developed applications in JavaScript and Python, assisted with REST API development and backend engineering, and took part in testing, debugging and quality improvement using Git for collaboration.",
    tags: ["JavaScript", "Python", "REST APIs", "Git"],
  },
];

// `location`, `description` and `tags` are optional — leave them out and the
// card just gets shorter.
export const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "National University of Singapore",
    period: "Aug 2007 — May 2011",
    location: "Singapore",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
