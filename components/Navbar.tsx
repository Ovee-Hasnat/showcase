import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;
  return (
    <nav>
      <div className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
          <Link href="/">
            <h2 className="font-mono text-2xl tracking-tight">Showcase</h2>
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
          {session ? (
            <>
              UserPhoto
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
