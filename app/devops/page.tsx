import { CardsClient } from "@/components/client/cards-cliente";


export default function DevOpsPage() {
  return (
    <main className="mb-3 min-h-screen">
          <h1 className="text-5xl	px-8 mt-5">Devops Cards</h1>
         <CardsClient type="devops" />
        </main>
  );
}