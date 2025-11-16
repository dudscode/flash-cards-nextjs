import { Card, CardTitle, CardDescription } from "../ui/card";

export function CardBack() {
  return (
      <Card className="flex justify-center items-center p-4 h-40 w-64">
        <CardTitle className="font-sans text-4xl text-color-primary" >Back</CardTitle>
        <CardDescription>OI OI</CardDescription>
      </Card>
  )
}