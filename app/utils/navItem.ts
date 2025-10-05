import { JSX } from "react";

export type NavItem = {
    id: number;
    label: string;
    href: string;
    dropdown?: DropdownItem[];
    className?: string;
    icon?: JSX.Element;
  };
  
  export type DropdownItem = {
    id: number;
    label: string;
    href: string;
  };

const navItems: NavItem[] = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services.html" },
    {
      id: 4,
      label: "Pages",
      href: "#",
      dropdown: [
        { id: 41, label: "Service Single", href: "/services-single.html" },
        { id: 42, label: "Blog", href: "/blog.html" },
        { id: 43, label: "Blog Single", href: "/blog-single.html" },
        { id: 44, label: "Our Team", href: "/team.html" },
        { id: 45, label: "Team Details", href: "/team-single.html" },
        { id: 46, label: "FAQs", href: "/faqs.html" },
        { id: 47, label: "404", href: "/404.html" },
      ],
    },
    { id: 5, label: "Contact Us", href: "/contact.html" },
    {
      id: 6,
      label: "Book Appointment",
      href: "/appointment.html",
      className: "highlighted-menu",

    },
  ];

  export default navItems;