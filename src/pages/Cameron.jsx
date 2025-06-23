import React from "react";
import CharacterPage from "./CharacterPage";
import { Link } from "react-router-dom";

export default function Cameron({ searchTerm }) {
    const cameronImages = [
        { img: "/images/cameron1.jfif" },
        { img: "/images/cameron2.jfif" },
        { img: "/images/cameron3.jfif" },
    ];

    const facts = [
        "Єдина жінка у першій команді Хауса.",
        "Була закохана в Хауса та Чейза.",
        "Має медичний ступінь з імунології.",
        "Зберігає сперму померлого чоловіка.",
        "Ненавидить спортивні метафори.",
        "Любить бути чесною навіть у складних ситуаціях.",
        "Носить скромний, професійний одяг.",
        "Прагне змінити світ на краще.",
        "Робить усе, аби уникнути конфліктів.",
        "Після розлучення залишає госпіталь.",
    ];

    const description =
        "Еллісон Кемерон — імунолог у першій команді Хауса. Вона чутлива, емпатична, але не менш розумна та вперта.";

    const button = (
        <div className="text-center">
            <Link to="/characters" className="btn btn-outline-info">
                Повернутися до персонажів
            </Link>
        </div>
    );

    return (
        <CharacterPage
            name="Еллісон Кемерон"
            description={description}
            facts={facts}
            images={cameronImages}
            button={button}
            searchTerm={searchTerm}
        />
    );
}
