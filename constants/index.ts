import { Webinar } from "@/types/webinar.types"

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Webinars", href: "/webinar" },
  { label: "Latest Updates", href: "/updates" },
  { label: "Contact", href: "/contact" },
]

export const authItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
]

export const slides = [
  {
    src: "/carousel/image-1.jpg",
    alt: "Dare to Dream community",
    title: "Dream Bigger",
    description:
      "Creating opportunities for people to imagine what is possible.",
  },
  {
    src: "/carousel/image-2.jpg",
    alt: "Dare to Dream program",
    title: "Create Possibilities",
    description:
      "Turning ideas, ambition, and potential into meaningful action.",
  },
  {
    src: "/carousel/image-3.jpg",
    alt: "Dare to Dream event",
    title: "Make an Impact",
    description:
      "Building stronger communities through connection and purpose.",
  },
  {
    src: "/carousel/image-4.jpg",
    alt: "Dare to Dream participants",
    title: "Become Extraordinary",
    description: "Helping people move confidently toward their dreams.",
  },
]

export const journeyItems = [
  {
    number: "01",
    title: "Build your foundation.",
    description:
      "Create fulfilling work, take ownership of your future, and develop the foundation you need to turn your ideas into opportunity.",
    className: "bg-[#e9dcc7] text-primary",
  },
  {
    number: "02",
    title: "Learn through experience.",
    description:
      "Entrepreneurship goes beyond textbooks. Learn through authentic experiences, mentorship, tangible spaces, and meaningful community involvement.",
    className: "bg-[#dce6d4] text-primary",
  },
  {
    number: "03",
    title: "Advance together.",
    description:
      "Join a growing ecosystem where people connect, reinvest in one another, and create opportunities that move communities forward.",
    className: "bg-primary text-white",
  },
]

export const webinars: Webinar[] = [
  {
    id: "1",
    title: "Building a Purpose-Driven Life",
    description:
      "Discover practical principles for living with purpose, embracing your calling, and making a lasting impact through faith and leadership.",
    speaker: "Pastor John Carter",
    duration: "58 min",
    thumbnail:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  },
  {
    id: "2",
    title: "Leading with Integrity",
    description:
      "Learn how integrity builds trust, strengthens relationships, and creates a foundation for effective leadership.",
    speaker: "Sarah Williams",
    duration: "42 min",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
  },
  {
    id: "3",
    title: "Faith in Entrepreneurship",
    description:
      "Explore how purpose and faith can shape meaningful businesses and inspire positive change.",
    speaker: "David Smith",
    duration: "1 hr 10 min",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    id: "4",
    title: "The Power of Community",
    description:
      "Learn why authentic relationships and supportive communities are essential for long-term growth.",
    speaker: "Michael Brown",
    duration: "39 min",
    thumbnail:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
  },
  {
    id: "5",
    title: "Dream Bigger Than Fear",
    description:
      "Discover practical ways to overcome fear, build confidence, and pursue your biggest dreams.",
    speaker: "Jessica Adams",
    duration: "52 min",
    thumbnail:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=1200&q=80",
  },
  {
    id: "6",
    title: "Finding Your Calling",
    description:
      "Gain clarity on your purpose, identify your strengths, and take the next step in your journey.",
    speaker: "Chris Martin",
    duration: "47 min",
    thumbnail:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
  },
]

export const featuredWebinar: Webinar = {
  id: "1",
  title: "Building a Purpose-Driven Life",
  speaker: "Pastor John Carter",
  duration: "58 min",
  description:
    "Watch inspiring conversations on leadership, purpose,entrepreneurship, and personal growth.",
  thumbnail:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
}

export const featuredUpdate = {
  id: 1,
  title: "Annual Leadership Summit 2026 Announced",
  excerpt:
    "Join leaders, entrepreneurs, and changemakers for an inspiring day of learning, networking, and purpose-driven conversations.",
  image:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  category: "Announcement",
  publishedAt: "August 5, 2026",
}

export const updates = [
  {
    id: 1,
    title: "Annual Leadership Summit 2026 Announced",
    excerpt:
      "Registration is now open for our biggest leadership gathering of the year. Join inspiring speakers, transformational sessions, and meaningful networking opportunities with the Dare to Dream community.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    category: "Announcement",
    publishedAt: "August 5, 2026",
  },
  {
    id: 2,
    title: "New Webinar: Building a Purpose-Driven Life",
    excerpt:
      "Our latest webinar explores practical ways to discover purpose, overcome challenges, and lead with confidence in every season of life.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    category: "Webinar",
    publishedAt: "August 2, 2026",
  },
  {
    id: 3,
    title: "Community Networking Evening Highlights",
    excerpt:
      "Members from across the region gathered for an evening of meaningful conversations, collaboration, and relationship building.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    category: "Community",
    publishedAt: "July 29, 2026",
  },
  {
    id: 4,
    title: "Applications Open for the Leadership Mentorship Program",
    excerpt:
      "Emerging leaders are invited to apply for our six-month mentorship initiative designed to equip and empower the next generation.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    category: "Leadership",
    publishedAt: "July 25, 2026",
  },
  {
    id: 5,
    title: "Dare to Dream Partners with Local Organizations",
    excerpt:
      "Through new partnerships, we are expanding opportunities for community outreach, leadership development, and collaborative events.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    category: "Partnership",
    publishedAt: "July 20, 2026",
  },
  {
    id: 6,
    title: "Volunteer Appreciation Celebration",
    excerpt:
      "We celebrated the incredible volunteers who continue to serve with dedication and make every Dare to Dream event possible.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    category: "Community",
    publishedAt: "July 15, 2026",
  },
]
