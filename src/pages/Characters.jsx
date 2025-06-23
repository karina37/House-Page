import React from "react";
import { Link } from "react-router-dom";

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

export default function Characters({ searchTerm }) {
  const characters = [
    {
      name: "Грегорі Хаус",
      role: "Діагност, керівник команди",
      img: "/images/houseImg.jpg",
      link: "/house",
    },
    {
      name: "Джеймс Вілсон",
      role: "Онколог, найкращий друг Хауса",
      img: "/images/wilsonImg.jpg",
      link: "/wilson",
    },
    {
      name: "Ліза Кадді",
      role: "Директорка лікарні",
      img: "/images/cuddyImg.jpg",
      link: "/cuddy",
    },
    {
      name: "Роберт Чейз",
      role: "Інтенсивіст, хірург",
      img: "/images/chaseImg.jpg",
      link: "/chase",
    },
    {
      name: "Ерік Форман",
      role: "Невролог, член команди Хауса",
      img: "/images/foremanImg.jpg",
      link: "/foreman",
    },
    {
      name: "Еллісон Кемерон",
      role: "Імунолог, член команди Хауса",
      img: "/images/cameronImg.jpg",
      link: "/cameron",
    },
  ];

  return (
    <div className="container py-5 text-white">
      <div className="bg-dark p-4 rounded shadow-lg mb-5">
        <h1 className="display-5 fw-bold mb-4 text-center">Персонажі серіалу</h1>

        <div className="row text-center">
          {characters.map((char, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <div className="card bg-transparent border-0 text-center w-100 d-flex flex-column align-items-center p-3">
                <img
                  src={char.img}
                  alt={char.name}
                  className="rounded-circle shadow mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="text-white fw-bold mt-2">
                  <HighlightText text={char.name} highlight={searchTerm} />
                </h5>
                <p className="text-white">
                  <HighlightText text={char.role} highlight={searchTerm} />
                </p>
                <div className="mt-auto">
                  <Link to={char.link} className="btn btn-outline-info">
                    Детальніше →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Нові кнопки внизу */}
        <div className="mt-4 d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
          <Link to="/" className="btn btn-outline-info">
            Повернутися на головну
          </Link>
          <Link to="/quiz" className="btn btn-outline-info">
            Дізнатися, на кого ти схожий
          </Link>
        </div>
      </div>
    </div>
  );
}
