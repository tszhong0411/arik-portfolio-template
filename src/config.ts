import nova from "~/images/nova.png";
import solar from "~/images/solar.png";
import sonic from "~/images/sonic.png";
import space from "~/images/space.png";

import { StaticImageData } from "next/image";

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
