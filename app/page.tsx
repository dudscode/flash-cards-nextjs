import { CardsIntro } from "@/components/server/cards-intro";
import { Header } from "@/components/server/header";
import { Intro } from "@/components/server/intro";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <CardsIntro />

    </main>
  );
}
