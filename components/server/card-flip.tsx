
import { CardBack } from "./card-back"
import { CardFront } from "./card-front"

export interface CardFlipProps {
  titulo: string;
  descricao: string;
}
export function CardFlip({titulo, descricao}: CardFlipProps) {
  return (
    <section>
      <div className="mx-auto grid place-items-center">
        <div className="group" style={{ perspective: '1000px' }}>
          <div className="relative w-80 h-48 transition-transform duration-700 transform-gpu [transform-style:preserve-3d] group-hover:transform-[rotateY(180deg)]">
            <div className="absolute inset-0 backface-hidden">
              <CardFront titulo={titulo} />
            </div>

            <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)]">
              <CardBack descricao={descricao} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}