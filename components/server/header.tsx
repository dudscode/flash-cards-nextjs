import { ModeToggle } from "../client/menu-toggle";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
        <div className="flex justify-center items-center pr-8 pt-4">
          <div className="flex-3/4 flex justify-center ">
            <Link href="/">
              <Image src="/minimind-cards-logo.svg" alt="Logo" width={300} height={90}/>
            </Link>
          </div>
            <ModeToggle />
        </div>
    </header>
  )
}