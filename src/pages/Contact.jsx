import React from "react";

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

const Contact = ({ searchTerm = "" }) => {
  const student = "Горох Каріна Олександрівна";
  const group = "КІ-223";
  const email = "gorohkarina37@gmail.com";
  const phone = "+380664389730";
  const university = "Національний університет «Чернігівська політехніка»";
  const specialty = "Комп’ютерна інженерія";
  const year = "3 курс";
  const profileLink = "https://eln.stu.cn.ua/user/profile.php";

  const purpose =
    "Цей вебсайт створено в рамках розрахунково-графічної роботи з дисципліни «Веб-програмування та дизайн»";

  const iconStyle = {
    width: "24px",
    height: "24px",
    marginRight: "8px",
    verticalAlign: "middle",
  };

  return (
    <div className="container py-5 text-white">
      <div className="bg-dark p-4 rounded shadow-lg mb-5">
        <h1 className="display-5 fw-bold text-center mb-4">Контакти розробника</h1>

        <div className="fs-5 text-center mb-4">
          <p className="mb-3">
            <img src="/icons/student.png" alt="student" style={iconStyle} />
            <strong>Студентка:</strong>{" "}
            <HighlightText text={student} highlight={searchTerm} />
          </p>
          <p className="mb-3">
            <img src="/icons/group.png" alt="group" style={iconStyle} />
            <strong>Група:</strong>{" "}
            <HighlightText text={group} highlight={searchTerm} />
          </p>
          <p className="mb-3">
            <img src="/icons/university.png" alt="university" style={iconStyle} />
            <strong>Університет:</strong>{" "}
            <HighlightText text={university} highlight={searchTerm} />
          </p>
          <p className="mb-3">
            <img src="/icons/specialty.png" alt="specialty" style={iconStyle} />
            <strong>Спеціальність:</strong>{" "}
            <HighlightText text={specialty} highlight={searchTerm} />
          </p>
          <p className="mb-3">
            <img src="/icons/year.png" alt="year" style={iconStyle} />
            <strong>Курс:</strong>{" "}
            <HighlightText text={year} highlight={searchTerm} />
          </p>
          <p className="mb-3">
            <img src="/icons/email.png" alt="email" style={iconStyle} />
            <strong>Email:</strong>{" "}
            <HighlightText text={email} highlight={searchTerm} />
          </p>
          <p className="mb-3">
            <img src="/icons/phone.png" alt="phone" style={iconStyle} />
            <strong>Телефон:</strong>{" "}
            <HighlightText text={phone} highlight={searchTerm} />
          </p>
          <p className="mb-3 d-flex align-items-center justify-content-center flex-wrap text-center">
            <img src="/icons/profile.png" alt="profile" style={iconStyle} />
            <strong className="me-2">Профіль:</strong>
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-info"
              style={{ wordBreak: "break-word" }}
            >
              {profileLink}
            </a>
          </p>
        </div>

        <div className="border-top border-secondary pt-4">
          <p className="text-center text-light">
            <HighlightText text={purpose} highlight={searchTerm} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;


