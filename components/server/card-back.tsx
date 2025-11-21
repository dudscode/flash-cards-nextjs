import { Card, CardDescription } from "../ui/card";

export interface CardBackProps {
  descricao: string;
}
export function CardBack({descricao}: CardBackProps) {
  return (
      <Card className="flex justify-center items-center p-4 h-80 w-100">
        <CardDescription>{descricao}</CardDescription>
      </Card>
  )
}