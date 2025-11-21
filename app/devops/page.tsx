import { CardFlip, CardFlipProps } from "@/components/server/card-flip";
import { CARDS_DEVOPS } from "@/helpers/cards-devops";

export default function DevOpsPage() {
  const cardsDevOps : CardFlipProps[] = CARDS_DEVOPS;
  return (
    <main className="mb-3 min-h-screen">
          <h1 className="text-5xl	px-8 mt-5">Devops Cards</h1>
          <section className="flex gap-40 m-20 justify-center flex-wrap">
          {
            cardsDevOps.map((card, index) => (
              <CardFlip key={index} titulo={card.titulo} descricao={card.descricao} />
            ))
          }
          </section>
        </main>
  );
}