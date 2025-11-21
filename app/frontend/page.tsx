import { CardsClient } from "@/components/client/cards-cliente";


export default function FrontendPage() {
  return (
    <main className="mb-3 min-h-screen">
      <h1 className="text-5xl	px-8 mt-5">Frontend Cards</h1>
     <CardsClient type="frontend" />
    </main>
  )
}