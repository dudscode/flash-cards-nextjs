import db from './config';
import { collection, getDocs,addDoc } from 'firebase/firestore';

export type FlashCard = {
	id?: string;
	type: 'frontend' | 'backend' | 'devops';
	titulo: string;
    descricao: string;
};

const COLLECTION_NAME = 'flash-cards';


export async function getAllFlashcards(): Promise<FlashCard[]> {
	try {
		const colRef = collection(db, COLLECTION_NAME);
		const snapshot = await getDocs(colRef);
		const cards: FlashCard[] = snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
		return cards;
	} catch (error) {
		console.error('Erro ao buscar flashcards:', error);
		return [];
	}
}
export async function createdFlashcard(card: Omit<FlashCard, 'id'>): Promise<string | null> {
    try {
        const colRef = collection(db, COLLECTION_NAME);
        const docRef = await addDoc(colRef, card);
        return docRef.id;
    } catch (error) {
        console.error('Erro ao adicionar flashcard:', error);
        return null;
    }
}



export default {
	getAllFlashcards,
    createdFlashcard
};

