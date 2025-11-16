
import { CardBack } from "./card-back"
import { CardFront } from "./card-front"

export function CardFlip() {
  return (
    <section className="py-16 mx-auto sm:py-20">

      <div className="mx-auto grid place-items-center">
        <div className="group" style={{ perspective: '1000px' }}>
          <div className="relative w-80 h-48 transition-transform duration-700 transform-gpu [transform-style:preserve-3d] group-hover:transform-[rotateY(180deg)]">
            <div className="absolute inset-0 backface-hidden">
              <CardFront />
            </div>

            <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)]">
              <CardBack />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}