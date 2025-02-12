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
