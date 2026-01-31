
import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

interface CardInfo {
    title: string;
    description: string;
    href: string;
    disabled?: boolean;
}

export function CardsIntro() {
    const cards: CardInfo[] = [
        {
            title: "Frontend",
            description: "React, Next.js, TypeScript, Angular...",
            href: "/frontend",
        },
        {
            title: "Backend",
            description: "Node.js, Express, Django, Ruby on Rails...",
            href: "/backend",
            disabled: true,
        },
        {
            title: "DevOps",
            description: "Docker, Kubernetes, CI/CD, AWS...",
            href: "/devops",
        },
    ]

    return (
        <section className="flex flex-row justify-center items-center gap-4 px-4 text-center my-15 max-w-3xl mx-auto flex-wrap">
            {
                cards.map((card) => (
                    <Link href={card.disabled ? "/construction" : card.href} key={card.title}>
                        <Card className="flex justify-center items-center p-4 h-40 w-64" >
                            <CardTitle className="font-sans text-4xl text-green-700" >{card.title}</CardTitle>
                            <CardDescription>{card.description}</CardDescription>
                        </Card>
                    </Link>
                ))
            }


        </section>
    )
}