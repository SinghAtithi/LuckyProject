"use client"
import React, { useState } from 'react';
import Circle from '@/components/Circle';

function Page() {
  const hexColors = ["FF5733", "6C5B7B", "3498DB", "2E4053", "F4D03F", "E74C3C", "27AE60", "9B59B6", "1ABC9C", "E67E22"];
  const [currColor, setCurrColor] = useState("FFFF");

  return (
    <div>
      {hexColors.map((hexColor, index) => (
        <Circle key={index} clr={hexColor} setCurrColorFunction={setCurrColor} />
      ))}
      <br />
      <br />
      <br />
      <Circle clr={currColor} />
    </div>
  );
}

export default Page;
