import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

type Props = {
  name: string;
  gender: string;
  age: number;
  personality: string;
  image: string;
};

const OurPhotos = ({ name, gender, age, personality, image }: Props) => {
  return (
    <>
      <Card>
        <CardMedia component="img" height="200px" image={image} />
        <CardContent>
          {name}
          {gender}
          {age}
          {personality}
        </CardContent>
      </Card>
    </>
  );
};

export default OurPhotos;
