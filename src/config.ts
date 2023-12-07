import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://aatmmr.github.io/",
  author: "Maik Müller",
  desc: "Tutorials, Snippets and Ideas",
  title: "aatmmr.dev",
  ogImage: "aatmmr-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/aatmmr",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aatmmr",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Sessionize",
    href: "https://sessionize.com/maik-mueller/",
    linkTitle: `${SITE.title} on Sessionize`,
    active: true,
  },
  {
    name: "OpenSauced",
    href: "https://app.opensauced.pizza/user/aatmmr?tab=contributions",
    linkTitle: `${SITE.title} on OpenSauced`,
    active: true,
  },
];
