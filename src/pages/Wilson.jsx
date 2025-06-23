import React from "react";
import CharacterPage from "./CharacterPage";
import { Link } from "react-router-dom";

export default function Wilson({ searchTerm }) {
    const wilsonImages = [
        { img: "/images/wilson1.jfif" },
        { img: "/images/wilson2.jfif" },
        { img: "/images/wilson3.jfif" },
    ];

    const facts = [
        "У кабінеті Вілсона висять постери до фільмів «Vertigo», «Touch of Evil» та «Ordinary People».",
        "Вілсон — шульга.",
        "Група крові — I.",
        "Має алергію на амброзію та кульбаби.",
        "Перші слова Хауса до Вілсона: «Я все залагодив» (після звільнення з в'язниці).",
        "В епізоді «Frozen» Хаус називає Вілсона «Боб» — справжнє ім'я актора.",
        "Поділяв час між Хаусом і Ембер, через що виникали конфлікти.",
        "Телефон Вілсона — Apple iPhone.",
        "Усі компʼютери в серіалі — Apple.",
        "У юності знявся в аматорському порнофільмі (не знаючи про це).",
        "Пожертвував частину печінки другу Такеру.",
        "Не любить, коли молоко стоїть на дверцятах холодильника.",
        "Має дар повідомляти погані новини так, що пацієнти дякують.",
        "Ненавидить оперу.",
        "Не любить мармеладних ведмедиків.",
    ];

    const description =
        "Джеймс Вілсон — завідувач відділення онкології, один з головних героїв серіалу «Доктор Хаус».";

    const button = (
        <div className="text-center">
            <Link to="/characters" className="btn btn-outline-info">
                Повернутися до персонажів
            </Link>
        </div>
    );

    return (
        <CharacterPage
            name="Джеймс Вілсон"
            description={description}
            facts={facts}
            images={wilsonImages}
            button={button}
            searchTerm={searchTerm}
        />
    );
}

