import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "Що ти зробиш, якщо щось піде не за планом?",
    options: {
      house: "Зневажатиму план і зроблю по-своєму",
      wilson: "Спробую підтримати всіх довкола",
      cuddy: "Візьму контроль у свої руки",
      chase: "Буду діяти тихо й професійно",
      cameron: "Проаналізую моральну сторону питання",
      foreman: "Зроблю логічний вибір, базуючись на досвіді",
    },
  },
  {
    question: "Що для тебе важливіше у роботі?",
    options: {
      house: "Свобода мислення",
      wilson: "Дружба та співчуття",
      cuddy: "Порядок і відповідальність",
      chase: "Визнання та стабільність",
      cameron: "Мораль та етика",
      foreman: "Кар'єрний ріст та чіткість",
    },
  },
  {
    question: "Як ти поводишся в конфліктах?",
    options: {
      house: "Провокую, але завжди маю рацію",
      wilson: "Стараюся примирити",
      cuddy: "Прагну контролю",
      chase: "Залишаюсь осторонь, якщо можу",
      cameron: "Хвилююсь за всіх",
      foreman: "Дію твердо та розважливо",
    },
  },
  {
    question: "Як ти ставишся до командної роботи?",
    options: {
      house: "Вона заважає моєму темпу",
      wilson: "Командна робота - основа успіху",
      cuddy: "Я завжди відповідаю за всіх",
      chase: "Якщо треба - працюю в команді",
      cameron: "Люблю співпрацювати з іншими",
      foreman: "Тільки якщо я лідер",
    },
  },
  {
    question: "Як ти ставишся до авторитетів?",
    options: {
      house: "Взагалі їх не визнаю",
      cameron: "Поважаю, якщо вони справедливі",
      chase: "Мені не важливо — я сам собі авторитет",
      foreman: "Визнаю лише тих, хто дійсно компетентний",
      wilson: "Часто підкоряюсь, але маю власну думку",
      cuddy: "Я і є авторитет",
    },
  },
  {
    question: "Як ти ставишся до емоцій?",
    options: {
      house: "Ігнорую їх — вони заважають логіці",
      cameron: "Це найважливіша частина людини",
      foreman: "Не люблю показувати свої почуття",
      chase: "Приховую, але іноді прориває",
      wilson: "Часто емоційний, але стримуюсь",
      cuddy: "Контролюю і використовую, якщо потрібно",
    },
  },
  {
    question: "Що для тебе важливіше у житті?",
    options: {
      house: "Істина",
      wilson: "Дружба",
      cuddy: "Гармонія",
      chase: "Влада",
      cameron: "Кохання",
      foreman: "Повага",
    },
  },
  {
    question: "Як ти відпочиваєш після важкого дня?",
    options: {
      house: "Сам на сам з музикою або алкоголем",
      cameron: "Зустрічаюсь із близькими людьми",
      foreman: "Займаюсь спортом або активним дозвіллям",
      chase: "Сиджу в тиші, читаю або дивлюсь серіал",
      wilson: "Спілкуюсь з другом про життя",
      cuddy: "Планую новий день або шукаю баланс",
    },
  },
  {
    question: "Що ти зробиш, якщо твій колега зробить фатальну помилку?",
    options: {
      house: "Обсиплю сарказмом, але виправлю",
      cameron: "Вислухаю і підтримую",
      foreman: "Повідомлю керівництво",
      chase: "Спочатку розберусь сам, потім вирішу",
      wilson: "Виправлю і прикрию",
      cuddy: "Проведу офіційну розмову",
    },
  },
  {
    question: "Як ти ставишся до брехні?",
    options: {
      house: "Усі брешуть",
      cameron: "Намагаюсь завжди бути чесним",
      chase: "Якщо потрібно — збрешу",
      foreman: "Все залежить від ситуації",
      wilson: "Брешу лише для добра",
      cuddy: "Брехня — це інструмент",
    },
  },
];

const characters = {
  house: {
    img: "/images/house.jpg",
    description:
      "Ви схожі на доктора Хауса — геніального, саркастичного, прямолінійного лікаря з безкомпромісним характером. Ви не любите обмежень і прагнете бути незалежним у своїх думках і діях. ",
  },
  wilson: {
    img: "/images/wilson.jpg",
    description:
      "Ви — доктор Вілсон, добрий, чуйний і вірний друг. Ви завжди готові вислухати, допомогти та зрозуміти інших. У конфліктах намагаєтесь примирити сторони і зберегти мир, часто ставлячи інтереси інших вище власних.",
  },
  cuddy: {
    img: "/images/cuddy.jpg",
    description:
      "Ви як Ліза Каді — впевнена, рішуча, відповідальна. Ви керуєте ситуацією, не боїтесь викликів і вмієте тримати баланс. Ваша рішучість і впевненість допомагають тримати баланс між роботою і особистим життям.",
  },
  chase: {
    img: "/images/chase.jpg",
    description:
      "Ви схожі на Роберта Чейза — ввічливого, обережного і гнучкого. Ви вмієте адаптуватися до різних ситуацій. В конфліктах намагаєтеся залишатися нейтральним і дипломатичним, але при цьому здатні діяти рішуче, коли цього вимагає ситуація.",
  },
  cameron: {
    img: "/images/cameron.jpg",
    description:
      "Ви як Еллісон Кемерон — чутлива, принципова і гуманна. Ви вірите в добро і прагнете допомагати. Вам важливо співпрацювати і підтримувати гармонійні стосунки.",
  },
  foreman: {
    img: "/images/foreman.jpg",
    description:
      "Ви — Ерік Форман. Впевнений, цілеспрямований і логічний. Ви дотримуєтесь правил, але здатні мислити незалежно. Ваша твердість і розважливість допомагають приймати зважені рішення навіть у складних ситуаціях.",
  },
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    house: 0,
    wilson: 0,
    cuddy: 0,
    chase: 0,
    cameron: 0,
    foreman: 0,
  });
  const [result, setResult] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (img) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = img;
        image.onload = () => resolve(img);
        image.onerror = (error) => reject(error);
      });
    };

    Promise.all(Object.values(characters).map((char) => loadImage(char.img)))
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error("Error loading images", error));
  }, []);

  const handleAnswer = (charKey) => {
    const newScores = { ...scores };
    newScores[charKey]++;
    setScores(newScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const final = Object.entries(newScores).reduce((a, b) => (a[1] > b[1] ? a : b));
      setResult(characters[final[0]]);
    }
  };

  if (result) {
    return (
      <div className="container py-5 text-white">
        <div className="bg-dark p-4 rounded shadow-lg text-center">
          <h2 className="display-5 fw-bold mb-3">Твій персонаж: {result.name}</h2>
          <img
            src={result.img}
            alt={result.name}
            className="img-fluid rounded mb-3"
            style={{ maxHeight: "300px" }}
          />
          <p className="fs-5">{result.description}</p>

          {/* Кнопки */}
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <div className="text-center">
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScores({
                    house: 0,
                    wilson: 0,
                    cuddy: 0,
                    chase: 0,
                    cameron: 0,
                    foreman: 0,
                  });
                  setResult(null);
                }}
                className="btn btn-outline-info"
              >
                Спробувати ще раз
              </button>
            </div>

            <div className="text-center">
              <Link to="/" className="btn btn-outline-info">
                Повернутися на головну
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="container py-5 text-white">
      <div className="bg-dark p-4 rounded shadow-lg" style={{ minHeight: "400px" }}>
        {" "}
        {/* Фіксована висота */}
        <h1 className="display-5 fw-bold text-center mb-4">Тест: Хто ти з Доктора Хауса?</h1>
        <h2 className="h4 fw-bold mb-3">
          Питання {currentQuestion + 1} з {questions.length}
        </h2>
        <p className="mb-4 fs-5 text-light">{q.question}</p>
        <div className="d-grid gap-3">
          {Object.entries(q.options).map(([char, answer]) => (
            <button
              key={char}
              className="btn btn-outline-info btn-lg text-start"
              onClick={() => handleAnswer(char)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
 