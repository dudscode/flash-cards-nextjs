"use client";

import { getAllFlashcards } from "@/firebase/flashCardRepository";
import { CardFlip, CardFlipProps } from "../server/card-flip";
import { useEffect, useState } from "react";

export function CardsClient({type}: {type: 'frontend' | 'backend' | 'devops'}) {
    const [cards, setCards] = useState<CardFlipProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        getAllFlashcards()
            .then((cards) => {
                if (!mounted) return;
                setCards(cards.filter((card) => card.type === type));
            })
            .catch((err) => {
                console.error(err);
                if (!mounted) return;
                setError("Falha ao carregar os cards.");
            })
            .finally(() => {
                if (!mounted) return;
                setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="flex gap-40 m-20 justify-center flex-wrap">
            {cards.length === 0 ? (
                <p>Nenhum card encontrado.</p>
            ) : (
                cards.map((card, index) => (
                    <CardFlip
                        key={index}
                        titulo={card.titulo}
                        descricao={card.descricao}
                    />
                ))
            )}
        </section>
    );
}