import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

import logo from "/public/logo.png";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src={logo} width={130} height={60} alt="logo" />
          {/* <h2 className="font-mono tracking-tight text-xl">Showcase</h2> */}
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Share your best projects with fellow devs. Help the community grow.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p className="text-neutral-400">Developed by Ovee @2023</p>
      </div>
    </footer>
  );
};

export default Footer;
