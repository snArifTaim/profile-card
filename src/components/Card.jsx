import React from "react";
import { CardWrapper, ProfileImage, Name, Bio, ToggleButton } from "./styles";

const Card = ({ size, toggleSize }) => {
  return (
    <CardWrapper size={size}>
      <ProfileImage src="https://lh3.googleusercontent.com/a/ACg8ocLlmub88OkRJqiwdW6Js16eMgc11wu_kvKzJ5T8unqKi-VbJ-U=s432-c-no" alt="Profile" />
      <Name>Md Arif ISlam</Name>
      <Bio>Frontend Developer | Loves React & Styled-components!</Bio>
      <ToggleButton onClick={toggleSize}>Toggle Size</ToggleButton>
    </CardWrapper>
  );
};

export default Card;
