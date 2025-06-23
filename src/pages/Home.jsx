import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ searchTerm }) {
  const description1 =
    "Серіал «Доктор Хаус» розповідає про геніального діагноста Грегорі Хауса, який не вірить людям і намагається всіляко уникати їх: як показує практика, вони говорять неправду, через що лікарям стає складно поставити правильний діагноз. Лікар мало контактує з людьми і живе явно не за правилами та нормами. Він страждає від сильного болю в нозі і приймає знеболювальне.";
  const description2 =
    "У нього немає дружини або другої половинки, тому Грегорі замовляє повій. Лікарю подобаються мильні опери, їзда на мотоциклі. Його єдиним другом є онколог Джеймс Вілсон.";
  const description3 =
    "Протягом довгих років Грегорі працює у шпиталі Прінстон-Плейнсборо, де йому дозволено практично все. Головному лікарю Лізі Кадді доводилося заплющувати очі на багато, але одного разу вона вирішила перестати терпіти витівки свого колеги. Ліза відчитала Хауса за всі прогули та закликала приступити до роботи. Герой зібрав гарну команду з першокласних лікарів, яким дуже складно працювати з Грегорі, однак саме з ним вони можуть стати професіоналами у своїй справі.";
  const description4 =
    "Хаус не вірить пацієнтам, тому під час збору анамнезу він використовує нестандартні рішення. Наприклад, лікар і члени його команди можуть незаконно потрапити до будинків хворих, щоб знайти «докази» та визначити справжню причину хвороби. Кожна справа призводить до справжнього розслідування, в якому Грегорі доведеться дізнатися правду.";

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  const HighlightText = ({ text, highlight }) => {
    if (!highlight) {
      return <span>{text}</span>;
    }

    const regex = new RegExp(`(${escapeRegExp(highlight)})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div className="container py-5 text-white">
      <div className="bg-dark p-4 rounded shadow-lg mb-5">
        <h1 className="display-5 fw-bold mb-3 text-center">Доктор Хаус</h1>
        <div className="text-center mb-4">
          <img
            src="/images/logo.jfif"
            alt="Everybody Lies"
            className="img-fluid rounded mx-auto d-block"
            style={{
              objectFit: "contain",
              width: "100%",
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)"
            }}
          />
        </div>
        <p className="fs-5 text-center mb-4">
          <HighlightText text={description1} highlight={searchTerm} />
        </p>
        <p className="fs-5 text-center mb-4">
          <HighlightText text={description2} highlight={searchTerm} />
        </p>
        <p className="fs-5 text-center mb-4">
          <HighlightText text={description3} highlight={searchTerm} />
        </p>
        <p className="fs-5 text-center mb-4">
          <HighlightText text={description4} highlight={searchTerm} />
        </p>
        <div className="text-center">
          <Link
            to="/characters"
            className="btn btn-outline-info mt-2 w-auto px-4 py-2"
          >
            Переглянути персонажів серіалу
          </Link>
        </div>
      </div>
      <div className="bg-dark p-4 rounded shadow-lg">
        <h2 className="h4 fw-bold mb-4 text-center">Інформація про сезони</h2>
        <div className="table-responsive">
          <table className="table table-dark table-hover text-center align-middle border border-secondary small">
            <thead className="table-light text-dark">
              <tr>
                <th>Сезон</th>
                <th>Кількість епізодів</th>
                <th>Премʼєра першого епізоду</th>
                <th>Премʼєра останнього епізоду</th>
                <th>Рейтинг у США</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>22</td>
                <td>16 листопада 2004</td>
                <td>24 травня 2005</td>
                <td>13,3 млн (24 місце)</td>
              </tr>
              <tr>
                <td>2</td>
                <td>24</td>
                <td>13 вересня 2005</td>
                <td>23 травня 2006</td>
                <td>17,3 млн (10 місце)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>24</td>
                <td>5 вересня 2006</td>
                <td>29 травня 2007</td>
                <td>19,4 млн (7 місце)</td>
              </tr>
              <tr>
                <td>4</td>
                <td>16</td>
                <td>25 вересня 2007</td>
                <td>19 травня 2008</td>
                <td>17,6 млн (7 місце)</td>
              </tr>
              <tr>
                <td>5</td>
                <td>24</td>
                <td>16 вересня 2008</td>
                <td>11 травня 2009</td>
                <td>13,45 млн (16 місце)</td>
              </tr>
              <tr>
                <td>6</td>
                <td>22</td>
                <td>21 вересня 2009</td>
                <td>17 травня 2010</td>
                <td>12,67 млн (21 місце)</td>
              </tr>
              <tr>
                <td>7</td>
                <td>23</td>
                <td>20 вересня 2010</td>
                <td>23 травня 2011</td>
                <td>10,3 млн (42 місце)</td>
              </tr>
              <tr>
                <td>8</td>
                <td>22</td>
                <td>3 жовтня 2011</td>
                <td>21 травня 2012</td>
                <td>8,69 млн (58 місце)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
