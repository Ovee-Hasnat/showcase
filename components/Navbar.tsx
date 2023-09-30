import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";

import logo from "/public/logo.png";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav>
      <div className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
          <Link href="/">
            <Image src={logo} width={140} height={60} alt="logo" />
            {/* <h2 className="font-mono text-2xl tracking-tight">Showcase</h2> */}
          </Link>

          <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flexCenter gap-4">
          {session?.user ? (
            <>
              <ProfileMenu session={session} />
              <Link href={"/create-project"}>Share Work</Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
