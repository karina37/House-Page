import React from "react";
import CharacterSlider from "./CharacterSlider";

const HighlightText = ({ text, highlight }) => {
  if (!highlight) return <>{text}</>;

  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
};

export default function CharacterPage({
  name,
  description,
  facts,
  images,
  button,
  searchTerm = "",
}) {
  return (
    <div className="container py-5 text-white">
      <div className="bg-dark p-4 rounded shadow-lg mb-5">
        <h1 className="display-5 fw-bold text-center mb-4">
          <HighlightText text={name} highlight={searchTerm} />
        </h1>
        <CharacterSlider characters={images} />

        <p className="fs-5 mt-4 text-center">
          <HighlightText text={description} highlight={searchTerm} />
        </p>

        <h4 className="fw-bold mt-5 mb-3 text-center">Цікаві факти</h4>
        <ul className="fs-5">
          {facts.map((fact, index) => (
            <li key={index}>
              <HighlightText text={fact} highlight={searchTerm} />
            </li>
          ))}
        </ul>
        {button}
      </div>
    </div>
  );
}


