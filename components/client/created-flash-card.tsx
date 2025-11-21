"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FlashCard, createdFlashcard } from "@/firebase/flashCardRepository";


export function CreatedFlashCard() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [topico, setTopico] = useState("")
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const payload: FlashCard = {
            titulo,
            descricao,
            type: topico as 'frontend' | 'backend' | 'devops',
        }
        setIsSubmitting(true);
        try {
            await createdFlashcard(payload);
            resetForm();
        } catch (error) {
            console.error('Erro ao cadastrar flashcard:', error);
        } finally {
            setIsSubmitting(false);
        }
    }
    const resetForm = () => {
        setTitulo("");
        setDescricao("");
        setTopico("");
    }
    return (
        <section className="flex flex-col items-center justify-center gap-4 my-8">
            <h1>Created Flash Card Component</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                <Input type="text" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)}/>
                <Textarea placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
                <Select onValueChange={(value) => setTopico(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o topico" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="frontend">Frontend</SelectItem>
                            <SelectItem value="backend">Backend</SelectItem>
                            <SelectItem value="devops">DevOps</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                </Button>
            </form>
        </section>
    )

}