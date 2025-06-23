import React from "react";
import CharacterPage from "./CharacterPage";
import { Link } from "react-router-dom";

export default function Chase({ searchTerm }) {
    const chaseImages = [
        { img: "/images/chase1.jfif" },
        { img: "/images/chase2.jfif" },
        { img: "/images/chase3.jfif" },
    ];

    const facts = [
        "Австралієць за походженням.",
        "Його батько — відомий лікар у Мельбурні.",
        "Спеціалізується на інтенсивній терапії та хірургії.",
        "Грав у шкільній рок-групі.",
        "Був у стосунках із Кемерон.",
        "Одружився з нею, але згодом розлучився.",
        "Виконує накази Хауса, навіть якщо не погоджується.",
        "Католик.",
        "Був звільнений Хаусом після подій третього сезону.",
        "Повернувся у шостому сезоні.",
    ];

    const description =
        "Роберт Чейз — член першої команди Хауса. Спершу здається несерйозним, але поступово розкривається як глибокий і складний персонаж.";

    const button = (
        <div className="text-center">
            <Link to="/characters" className="btn btn-outline-info">
                Повернутися до персонажів
            </Link>
        </div>
    );

    return (
        <CharacterPage
            name="Роберт Чейз"
            description={description}
            facts={facts}
            images={chaseImages}
            button={button}
            searchTerm={searchTerm}
        />
    );
}



