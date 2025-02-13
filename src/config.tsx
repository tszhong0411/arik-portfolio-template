import nova from "~/images/nova.png";
import solar from "~/images/solar.png";
import sonic from "~/images/sonic.png";
import space from "~/images/space.png";
import matthew from "~/images/matthew-smith.png";
import andrea from "~/images/andrea-lee.png";
import catharine from "~/images/catharine-davis.png";
import josh from "~/images/josh-kim.png";
import andreas from "~/images/andreas-thompson.png";
import liam from "~/images/liam-chen.png";

import { StaticImageData } from "next/image";
import {
  ClientLogo1,
  ClientLogo2,
  ClientLogo3,
  ClientLogo4,
  ClientLogo6,
  ClientLogo7,
} from "./components/home/logos";
import { FaBehance, FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons";

type BaseLink = {
  href: string;
  label: string;
};

type NavLink = {
  mobileOnly?: boolean;
} & BaseLink;

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing", mobileOnly: true },
  { label: "Styleguide", href: "/styleguide", mobileOnly: true },
];

export type ServiceCard = {
  number: string;
  title: string;
  description: string;
  link: BaseLink;
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.",
    link: { label: "About web design", href: "/services#webdesign" },
  },
  {
    number: "02",
    title: "Development",
    description:
      "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.",
    link: { label: "About development", href: "/services#development" },
  },
  {
    number: "03",
    title: "Content & SEO",
    description:
      "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.",
    link: { label: "About SEO", href: "/services#seo" },
  },
];

export type SelectedWorkCard = {
  link: BaseLink;
  image: StaticImageData;
  category: string;
};

export const SELECTED_WORK_CARDS: SelectedWorkCard[] = [
  {
    link: { label: "Space", href: "/work/space" },
    image: space,
    category: "Web Design",
  },
  {
    link: { label: "Nova", href: "/work/nova" },
    image: nova,
    category: "Web Design",
  },
  {
    link: { label: "Sonic", href: "/work/sonic" },
    image: sonic,
    category: "Web Design",
  },
  {
    link: { label: "Solar", href: "/work/solar" },
    image: solar,
    category: "Web Design",
  },
];

export type ProcessStep = {
  number: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    label: "2 hours",
    title: "Discovery Call",
    subtitle: "Do we Match?",
    description:
      "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    items: [
      "We get to know each other better",
      "Determine how I can best assist you",
      "Understand the goals you have for your website",
    ],
  },
  {
    number: "02",
    label: "2 weeks",
    title: "Concept & STrategy",
    subtitle: "We need a plan",
    description:
      "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
    items: ["UX Design", "Wireframes", "Interactive Prototype"],
  },
  {
    number: "03",
    label: "2 weeks",
    title: "Web Design",
    subtitle: "Some Magic",
    description:
      "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
    items: [
      "High-end web design tailored to your brand",
      "Interactive prototype of the design",
    ],
  },
  {
    number: "04",
    label: "2 weeks",
    title: "Development",
    subtitle: "More Magic",
    description:
      "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
    items: [
      "Custom framer website",
      "Modular web design systems",
      "CMS integration",
    ],
  },
  {
    number: "05",
    label: "2 hours",
    title: "Website onboarding",
    subtitle: "Ready to go",
    description:
      "In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that.",
    items: [
      "Personal workshop",
      "Personalized video tutorials",
      "Edit text and images directly on your website",
    ],
  },
];

export type Testimonial = {
  logo: React.ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
  name: string;
  company: string;
};

export const TESTIMONIALS: { list: Testimonial[] }[] = [
  {
    list: [
      {
        logo: <ClientLogo3 width={30} height={20} />,
        title: "Amazing Results with Arik's Premium Web Design Services.",
        description:
          "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services.",
        image: matthew,
        name: "Matthew Smith",
        company: "Sonic",
      },
      {
        logo: <ClientLogo1 width={117} height={25} />,
        title: "Professional, Collaborative Web Design Experience with Arik.",
        description:
          "I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs.",
        image: andrea,
        name: "Andrea Lee",
        company: "Stars",
      },
      {
        logo: <ClientLogo4 width={52} height={20} />,
        title: "Web Design and Content Solutions: Stand Out from the Crowd.",
        description:
          "Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs.",
        image: catharine,
        name: "Catharine Davis",
        company: "Supersonic",
      },
    ],
  },
  {
    list: [
      {
        logo: <ClientLogo6 width={24} height={20} />,
        title: "Expert Framer and SEO Services: Excellent Work, Great Results.",
        description:
          "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result.",
        image: josh,
        name: "Josh Kim",
        company: "Solar",
      },
      {
        logo: <ClientLogo7 width={114} height={30} />,
        title: "Expertise in Web Design: Second to None with Arik.",
        description:
          "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer.",
        image: andreas,
        name: "Andreas Thompson",
        company: "Design Inc.",
      },
      {
        logo: <ClientLogo2 width={80} height={20} />,
        title:
          "High-Quality Web Design: Exceptional Attention to Detail with Arik.",
        description:
          "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs.",
        image: liam,
        name: "Liam Chen",
        company: "Design Solutions",
      },
    ],
  },
];

type SocialLink = {
  icon: IconType;
  href: string;
  name: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/gola.design/",
    name: "Instagram",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/gola99",
    name: "Twitter",
  },
  {
    icon: FaDribbble,
    href: "https://dribbble.com/pawelgola",
    name: "Dribbble",
  },
  {
    icon: FaBehance,
    href: "https://www.behance.net/pawelgola",
    name: "Behance",
  },
];

export const PAGE_LINKS: BaseLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const CMS_LINKS: BaseLink[] = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Work single",
    href: "/work/sonic",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Blog single",
    href: "/blog/the-importance-of-content-in-driving-website-traffic",
  },
];

export const UTILITY_PAGE_LINKS: BaseLink[] = [
  {
    label: "Styleguide",
    href: "/styleguide",
  },
  {
    label: "404 Error Page",
    href: "/404",
  },
  {
    label: "Licensing",
    href: "/licensing",
  },
];
