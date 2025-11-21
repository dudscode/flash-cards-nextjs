import Image from "next/image"
export default function constructionPage() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <Image
                src="/construction.png"
                alt="Under Construction"
                width={600}
                height={600}
            />
            <h1 className="text-center mt-4 text-lg">
                Faltou tempo para terminar essa seção! perdoe-me 🙏
            </h1>
        </main>
    )
}