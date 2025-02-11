type NavLink = {
  label: string;
  href: string;
  mobileOnly?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing", mobileOnly: true },
  { label: "Styleguide", href: "/styleguide", mobileOnly: true },
];

export type Card = {
  number: string;
  title: string;
  description: string;
  link: NavLink;
};

export const CARDS: Card[] = [
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
