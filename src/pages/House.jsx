import React from "react";
import CharacterPage from "./CharacterPage";
import { Link } from "react-router-dom";

export default function House({ searchTerm }) {
    const houseImages = [
        { img: "/images/house1.jfif" },
        { img: "/images/house2.jfif" },
        { img: "/images/house3.jfif" },
    ];

    const facts = [
        "Автомобіль Хауса – Dodge Dynasty 1990 року.",
        "Носить з собою вилку в лівій кишені піджака.",
        "Його зубні пломби, зроблені на Філіппінах, ідеальні навіть у 50 років.",
        "Улюблені телесеріали: «Самотні серця», «Головний госпіталь».",
        "Його пацюк названий на честь Стіва МакКуїна.",
        "Мобільний телефон — Motorola iDen 850 з рінгтоном гурту Hanson.",
        "Носить кросівки Nike Shox.",
        "Група крові — IV (серія 4x08).",
        "Писав у таблоїд 'Universal Report'.",
        "Слухає платівки Mindtrikz, стилізовані під «Матрицю».",
        "Грає на роялі YAMAHA у себе вдома.",
        "Іноді зʼявляється у серіалі поголеним.",
        "Жінка-мрія — Ангела Меркель.",
        "Фанат Monster Jam та Grave Digger.",
        "Має тростину з набалдашником-черепом.",
        "Володіє кількома іноземними мовами.",
        "Його фіктивний номер телефону — 609-555-02-00.",
        "Був поранений наприкінці 2 сезону.",
        "Має собаку Гектора (від Вілсона).",
        "Мотоцикл — Honda CBR1000RR Repsol Replica.",
        "Ненавидить чай та мʼюзикли.",
        "Читає мангу.",
        "Живе у будинку з номером 221B, пізніше — 221.",
        "Добре розбирається у жіночому взутті (використовує для діагностики).",
        "Любить створювати «ефекти доміно» зі звичних предметів.",
    ];

    const description =
        "Грегорі Хаус — завідувач відділення діагностичної медицини госпіталю Прінстон-Плейнсборо. Один із головних героїв серіалу «Доктор Хаус». У нього подвійна спеціалізація: інфекціоніст та невролог.";

    const button = (
        <div className="text-center">
            <Link to="/characters" className="btn btn-outline-info">
                Повернутися до персонажів
            </Link>
        </div>
    );

    return (
        <CharacterPage
            name="Грегорі Хаус"
            description={description}
            facts={facts}
            images={houseImages}
            button={button}
            searchTerm={searchTerm}
        />
    );
}

