import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { CandiCardProps } from "@/app/lib/types";
import Image from "next/image";
import React from "react";


const CandidateCard = ({
  firstName,
  lastName,
  parish,
  imageUrl,
  score,
}: CandiCardProps) => {
  return (
    <Card className="w-full max-w-sm mx-auto bg-card shadow-lg rounded-2xl overflow-hidden transition hover:shadow-2xl cursor-pointer">
      <CardHeader className="flex flex-col items-center gap-4 p-4">
        <Image
          src={imageUrl??'#'}
          alt={`${firstName} ${lastName}`}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          width={150}
          height={150}
        />
        <CardTitle className="text-center text-xl font-semibold text-secondary-foreground">
          <p>
            {firstName} {lastName}
          </p>
          {score && <span>Score : {score}</span>}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center px-4 pb-4">
        <CardDescription className="text-sm text-card-foreground">
          {parish}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
