import Card from "./Card";
import "../styles/DisplayArea.css";
import { useEffect, useState } from "react";
import { CatAPI } from "../code/CatAPI";

export default function DisplayArea({ catArray, handleClick }) {
  return (
    <main>
      {catArray.map((arr) => (
        <Card imageUrl={arr.imageUrl} text={arr.text} key={arr.id} id={arr.id} handleClick={handleClick}></Card>
      ))}
    </main>
  );
}
