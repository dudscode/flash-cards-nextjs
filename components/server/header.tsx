import { ModeToggle } from "../client/menu-toggle";
import Image from "next/image";

export function Header() {
  return (
    <header>
        <div className="flex justify-center items-center pr-8 pt-4">
          <div className="flex-3/4 flex justify-center ">
            <Image src="/minimind-cards-logo.svg" alt="Logo" width={300} height={90} />
          </div>
            <ModeToggle />
        </div>
    </header>
  )
}