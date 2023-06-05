import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    options={{
        strings:[
            "Student",
            "Freelancer",
            "Mern Stack Developer",
            "Open Source Contributor",
        ],
        autoStart:true,
        loop:true,
    }}
    />
  );
}

export default Type