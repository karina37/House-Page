import React from "react";
import CharacterPage from "./CharacterPage";
import { Link } from "react-router-dom";

export default function Foreman({ searchTerm }) {
    const foremanImages = [
        { img: "/images/foreman1.jfif" },
        { img: "/images/foreman2.jfif" },
        { img: "/images/foreman3.jfif" },
    ];

    const facts = [
        "Спеціалізується на неврології.",
        "Раніше мав кримінальне минуле.",
        "Закінчив Колумбійський університет.",
        "Був найвідповідальнішим членом команди.",
        "Підтримує сувору дисципліну.",
        "Нерідко критикує підхід Хауса.",
        "Став головою відділу після відходу Хауса.",
        "Захоплюється дослідженнями мозку.",
        "Іноді потрапляє у конфлікти з іншими членами команди.",
        "Прагне довести, що кращий за Хауса.",
    ];

    const description =
        "Ерік Форман — невролог і важлива частина команди Хауса. Часто виконує роль 'совісті' у команді.";

    const button = (
        <div className="text-center">
            <Link to="/characters" className="btn btn-outline-info">
                Повернутися до персонажів
            </Link>
        </div>
    );

    return (
        <CharacterPage
            name="Ерік Форман"
            description={description}
            facts={facts}
            images={foremanImages}
            button={button}
            searchTerm={searchTerm}
        />
    );
}
