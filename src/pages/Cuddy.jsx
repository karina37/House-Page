import React from "react";
import CharacterPage from "./CharacterPage";
import { Link } from "react-router-dom";

export default function Cuddy({ searchTerm }) {
    const images = [
        { img: "/images/cuddy1.jfif" },
        { img: "/images/cuddy2.jfif" },
        { img: "/images/cuddy3.jfif" },
    ];

    const facts = [
        "Є директоркою лікарні.",
        "Закінчила медичний факультет Мічиганського університету.",
        "Стала деканом у 32 роки.",
        "Має доньку на ім'я Рейчел.",
        "Іноді вдається до обману для досягнення цілей.",
        "Має складні стосунки з Хаусом.",
        "Носить переважно діловий одяг з глибоким декольте.",
        "Любить класичну музику.",
        "У вільний час займається йогою.",
        "Використовувала власні яйцеклітини для штучного запліднення.",
    ];

    const description =
        "Ліза Кадді — головна адміністраторка лікарні, одна з небагатьох, хто здатен впливати на Хауса.";

    const button = (
        <div className="text-center">
            <Link to="/characters" className="btn btn-outline-info">
                Повернутися до персонажів
            </Link>
        </div>
    );

    return (
        <CharacterPage
            name="Ліза Кадді"
            description={description}
            facts={facts}
            images={images}
            button={button}
            searchTerm={searchTerm}
        />
    );
}


