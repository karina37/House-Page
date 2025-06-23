import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CharacterSlider({ characters }) {
    return (
        <Carousel
            fade
            interval={3000}
            pause={false}
            controls
            indicators={false}
            className="my-4"
        >
            {characters.map((char, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex flex-column align-items-center bg-dark p-4 rounded shadow">
                        {char.name && (
                            <h3 className="text-white text-center mb-3">{char.name}</h3>
                        )}
                        <img
                            src={char.img}
                            className="d-block rounded"
                            alt={char.name || "Character"}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "640px",
                                aspectRatio: "16/9",
                                objectFit: "cover",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
                              }}                              
                        />
                        {char.description && (
                            <p className="text-white text-center mt-3">{char.description}</p>
                        )}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
