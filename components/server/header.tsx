import { ModeToggle } from "../client/menu-toggle";
import Image from "next/image";

export function Header() {
  return (
    <header>
        <div className="flex  justify-end items-center pr-8 pt-3">
            <Image src="/minimind-cards-logo.svg" alt="Logo" width={300} height={90} />
            <ModeToggle />
        </div>
    </header>
  )
}