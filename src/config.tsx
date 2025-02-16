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
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { IconType } from "react-icons";
import Button from "./components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import ButtonText from "./components/ui/button-text";
import ButtonScroll from "./components/ui/button-scroll";
import Label from "./components/ui/label";
import ToTop from "./components/ui/to-top";
import NavItem from "./components/ui/nav-item";

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

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  selected?: boolean;
  slug: string;
  meta: {
    title: string;
    content: { label: string; href?: string };
  }[];
  details: {
    headline: string;
    challenge: string;
    goal: string;
    result: string;
  };
};

export const PROJECTS: Project[] = [
  {
    title: "Space",
    description:
      "Modern and visually appealing website that reflected the client's brand.",
    image: space,
    slug: "space",
    selected: true,
    meta: [
      { title: "Client", content: { label: "Pawel Gola" } },
      { title: "Timeline", content: { label: "2 Weeks" } },
      { title: "Category", content: { label: "Web Design" } },
      {
        title: "Website",
        content: { label: "gola.io", href: "https://templates.gola.io" },
      },
    ],
    details: {
      headline: "Concept, Design, and Development. All-in-one.",
      challenge:
        "Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.",
      goal: "Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.",
      result:
        "Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.",
    },
  },
  {
    title: "Nova",
    description:
      "Modern and visually appealing website that reflected the client's brand.",
    image: nova,
    slug: "nova",
    selected: true,
    meta: [
      { title: "Client", content: { label: "Pawel Gola" } },
      { title: "Timeline", content: { label: "2 Weeks" } },
      { title: "Category", content: { label: "Web Design" } },
      {
        title: "Website",
        content: { label: "gola.io", href: "https://templates.gola.io" },
      },
    ],
    details: {
      headline: "Concept, Design, and Development. All-in-one.",
      challenge:
        "Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.",
      goal: "Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.",
      result:
        "Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.",
    },
  },
  {
    title: "Sonic",
    description:
      "Modern and visually appealing website that reflected the client's brand.",
    image: sonic,
    slug: "sonic",
    selected: true,
    meta: [
      { title: "Client", content: { label: "Pawel Gola" } },
      { title: "Timeline", content: { label: "2 Weeks" } },
      { title: "Category", content: { label: "Web Design" } },
      {
        title: "Website",
        content: { label: "gola.io", href: "https://templates.gola.io" },
      },
    ],
    details: {
      headline: "Concept, Design, and Development. All-in-one.",
      challenge:
        "Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.",
      goal: "Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.",
      result:
        "Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.",
    },
  },
  {
    title: "Solar",
    description:
      "Modern and visually appealing website that reflected the client's brand.",
    image: solar,
    slug: "solar",
    selected: true,
    meta: [
      { title: "Client", content: { label: "Pawel Gola" } },
      { title: "Timeline", content: { label: "2 Weeks" } },
      { title: "Category", content: { label: "Web Design" } },
      {
        title: "Website",
        content: { label: "gola.io", href: "https://templates.gola.io" },
      },
    ],
    details: {
      headline: "Concept, Design, and Development. All-in-one.",
      challenge:
        "Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.",
      goal: "Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.",
      result:
        "Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.",
    },
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

type StyleguideSection = {
  title: string;
  variants: {
    title: string;
    component: React.ReactNode;
  }[];
};

export const STYLEGUIDE_SECTIONS: StyleguideSection[] = [
  {
    title: "Button",
    variants: [
      {
        title: "Default",
        component: (
          <Button className="uppercase" variant="default">
            Button
          </Button>
        ),
      },
      {
        title: "Primary",
        component: (
          <Button className="uppercase" variant="primary">
            Button
          </Button>
        ),
      },
      {
        title: "Secondary",
        component: (
          <Button className="uppercase" variant="secondary">
            Button
          </Button>
        ),
      },
      {
        title: "With Icon",
        component: (
          <Button className="uppercase" variant="secondary">
            Button <ArrowUpRightIcon className="size-4" />
          </Button>
        ),
      },
    ],
  },
  {
    title: "Button Text",
    variants: [
      {
        title: "Default",
        component: (
          <ButtonText icon={<ArrowUpRightIcon className="size-4" />}>
            Button Text
          </ButtonText>
        ),
      },
      {
        title: "Primary",
        component: (
          <ButtonText
            icon={<ArrowUpRightIcon className="size-4" />}
            variant="primary"
          >
            Button Text
          </ButtonText>
        ),
      },
      {
        title: "Secondary",
        component: (
          <ButtonText
            icon={<ArrowUpRightIcon className="size-4" />}
            variant="secondary"
          >
            Button Text
          </ButtonText>
        ),
      },
    ],
  },
  {
    title: "Button Scroll",
    variants: [
      {
        title: "Default",
        component: <ButtonScroll>Text</ButtonScroll>,
      },
    ],
  },
  {
    title: "Label",
    variants: [
      {
        title: "Default",
        component: <Label>Label</Label>,
      },
      {
        title: "Primary",
        component: <Label variant="primary">Label</Label>,
      },
      {
        title: "Secondary",
        component: <Label variant="secondary">Label</Label>,
      },
    ],
  },
  {
    title: "Nav",
    variants: [
      {
        title: "Default",
        component: (
          <div className="flex flex-col gap-4 [&>a]:max-w-max">
            <NavItem href="#">Nav Item</NavItem>
            <NavItem href="#">Nav Item</NavItem>
            <NavItem href="#">Nav Item</NavItem>
          </div>
        ),
      },
    ],
  },
  {
    title: "To Top Scroll",
    variants: [
      {
        title: "Default",
        component: <ToTop href="#" />,
      },
    ],
  },
];

type Stat = {
  title: string;
  number: string;
};

export const STATS: Stat[] = [
  {
    title: "Clients",
    number: "150+",
  },
  {
    title: "Projects",
    number: "300+",
  },
  {
    title: "Happy Clients",
    number: "100%",
  },
  {
    title: "Followers",
    number: "100k",
  },
];

type Service = {
  id: string;
  category: string;
  title: string;
  image: StaticImageData;
  items: {
    title: string;
    description: string;
  }[];
};

export const SERVICES: Service[] = [
  {
    id: "webdesign",
    category: "Webdesign",
    title: "Transforming Your Ideas into Reality",
    image: space,
    items: [
      {
        title: "Concept",
        description:
          "I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality.",
      },
      {
        title: "UX / UI Design",
        description:
          "I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.",
      },
      {
        title: "Prototype",
        description:
          "With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.",
      },
    ],
  },
  {
    id: "development",
    category: "Development",
    title: "Developing High-Performance Websites and Web Applications",
    image: solar,
    items: [
      {
        title: "Next.js",
        description:
          "I specialize in developing web applications using Next.js. From custom animations to complex interactions, I bring your web app to life.",
      },
      {
        title: "CMS Integration",
        description:
          "I can help you streamline your content management process by integrating a CMS into your website. Say goodbye to manual updates and hello to efficiency.",
      },
      {
        title: "Web Design System",
        description:
          "I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.",
      },
    ],
  },
  {
    id: "seo",
    category: "SEO & Content",
    title: "Boosting Your Website's Organic Search Traffic",
    image: sonic,
    items: [
      {
        title: "Research",
        description:
          "I conduct thorough research to identify the best keywords and strategies to improve your website's search engine ranking.",
      },
      {
        title: "SEO Ranking",
        description:
          "My SEO services are designed to improve your website's visibility on search engines, increasing your organic traffic and driving more leads and sales.",
      },
      {
        title: "SEO Support",
        description:
          "With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO best practices, keeping you ahead of the competition.",
      },
    ],
  },
];

type PricingCard = {
  plan: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

export const PRICING_CARDS: PricingCard[] = [
  {
    plan: "Lite",
    price: "$3900",
    description:
      "Affordable web design package with a custom design, CMS integration, and responsive design for small businesses and startups.",
    features: ["Concept", "Strategy", "Webdesign", "Prototype"],
  },
  {
    plan: "Premium",
    price: "$6900",
    description:
      "Premium package with UX/UI design, interactive prototype, Framer development, and CMS integration for medium businesses.",
    features: ["Concept", "Strategy", "Webdesign", "Development"],
    isPopular: true,
  },
  {
    plan: "Gold",
    price: "$9900",
    description:
      "Elite web design package with SEO optimization, research, and SEO support for businesses looking to dominate their market.",
    features: ["Webdesign", "Development", "Content", "SEO"],
  },
];

type SocailCard = {
  title: string;
  icon: IconType;
  href: string;
};

export const SOCIAL_CARDS: SocailCard[] = [
  {
    title: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/gola.design",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    href: "https://twitter.com/gola99",
  },
  {
    title: "Facebook",
    icon: FaFacebook,
    href: "https://facebook.com/",
  },
  {
    title: "Behance",
    icon: FaBehance,
    href: "https://www.behance.net/pawelgola",
  },
  {
    title: "Dribbble",
    icon: FaDribbble,
    href: "https://dribbble.com/pawelgola",
  },
  {
    title: "Pinterest",
    icon: FaPinterest,
    href: "https://www.pinterest.de/gola_design/",
  },
];

type Award = {
  year: string;
  title: string;
};

export const AWARDS: Award[] = [
  { year: "2023", title: "Awwwards SOTD" },
  { year: "2023", title: "CSSDA SOTD" },
  { year: "2023", title: "Awwwards Website of the Month" },
  { year: "2022", title: "CSSDA SOTD" },
  { year: "2022", title: "Awwwards SOTD" },
  { year: "2021", title: "Awwwards Website of the Year" },
];
