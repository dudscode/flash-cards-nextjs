
import { Card, CardTitle } from "../ui/card";
export interface CardFrontProps {
  titulo: string;
}

export function CardFront({titulo}: CardFrontProps) {
  return (
     <Card className="flex justify-center items-center p-4 h-80 w-100">
        <CardTitle className="font-sans text-4xl text-color-primary text-center" >{titulo}</CardTitle>
      </Card>
  )};