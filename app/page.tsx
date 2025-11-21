// import { CreatedFlashCard } from "@/components/client/created-flash-card";
import { CardsIntro } from "@/components/server/cards-intro";
import { Intro } from "@/components/server/intro";

export default function Home() {
  return (
    <main>   
      <Intro />
      {/* <CreatedFlashCard /> */}
      <CardsIntro />
    </main>
  );
}
