import { CardFlip, CardFlipProps } from "@/components/server/card-flip";
import { CARDS_FRONT } from "@/helpers/cards-front";


export default function FrontendPage() {
  const CardsFront: CardFlipProps[] = CARDS_FRONT;
  return (
    <main className="mb-3 min-h-screen">
      <h1 className="text-5xl	px-8 mt-5">Frontend Cards</h1>
      <section className="flex gap-40 m-20 justify-center flex-wrap">
      {
        CardsFront.map((card, index) => (
          <CardFlip key={index} titulo={card.titulo} descricao={card.descricao} />
        ))
      }
      </section>
    </main>
  )
}