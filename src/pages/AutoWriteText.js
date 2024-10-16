import React from 'react'
import Typewriter from "typewriter-effect";

export default function AutoWriteText() {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Welcome To Goodneighborhoods")
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              " Empowering Communities, <br /> One Donation at a Time"
            )
            .start();
        }}
      />
    </>
  );
}
